import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebaseClient'

const NAMESPACE = 'betalabs_flutter_workshop_2026'
const KEY = 'visitors'
const BASE_OFFSET = 9

export default function VisitorCounter() {
  const [count, setCount] = useState(() => {
    const cached = localStorage.getItem('cached_global_visitor_count')
    return cached ? parseInt(cached, 10) : 1
  })

  useEffect(() => {
    let isMounted = true

    async function syncVisitorCount() {
      const SESSION_KEY = 'beta_labs_visited_session'
      const hasVisited = sessionStorage.getItem(SESSION_KEY)

      const timestamp = Date.now()
      const baseUrl = !hasVisited
        ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`
        : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`

      const targetUrl = `${baseUrl}?t=${timestamp}`

      // Proactively log visit to Firestore registrations collection (publicly writable)
      if (!hasVisited) {
        addDoc(collection(db, 'registrations'), {
          type: 'site_visitor_log',
          user_agent: navigator.userAgent,
          created_at: serverTimestamp(),
        }).catch((err) => console.warn('[VisitorCounter] Firestore log note:', err))
      }

      try {
        const response = await fetch(targetUrl, { cache: 'no-store' })
        if (response.ok) {
          const data = await response.json()
          if (typeof data?.count === 'number' && isMounted) {
            setCount(data.count)
            if (!hasVisited) {
              sessionStorage.setItem(SESSION_KEY, 'true')
            }
            localStorage.setItem('cached_global_visitor_count', String(data.count))
            return
          }
        }
      } catch (err) {
        console.warn('[VisitorCounter] Counter API error:', err)
      }

      // Fallback if API is blocked by local adblockers
      if (isMounted && !hasVisited) {
        sessionStorage.setItem(SESSION_KEY, 'true')
        setCount((prev) => {
          const next = (prev || 1) + 1
          localStorage.setItem('cached_global_visitor_count', String(next))
          return next
        })
      }
    }

    syncVisitorCount()

    return () => {
      isMounted = false
    }
  }, [])

  const displayCount = (count !== null ? count : 1) + BASE_OFFSET

  return (
    <div className="mt-4 flex items-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-950/30 px-3 py-1.5 text-xs text-sky-200 shadow-sm backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <Eye className="h-3.5 w-3.5 text-sky-400" />
        <span className="font-medium text-gray-300">
          Website Visitors:{' '}
          <span className="font-bold text-white">
            {displayCount.toLocaleString()}
          </span>
        </span>
      </div>
    </div>
  )
}
