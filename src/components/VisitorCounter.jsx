import { useEffect, useState } from 'react'
import { doc, increment, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { Eye } from 'lucide-react'
import { db } from '../lib/firebaseClient'

export default function VisitorCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const SESSION_KEY = 'beta_labs_visited_session'
    const hasCounted = sessionStorage.getItem(SESSION_KEY)
    const docRef = doc(db, 'stats', 'visitors')

    // Increment count if visitor hasn't visited in this session
    if (!hasCounted) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setDoc(docRef, { count: increment(1), lastVisited: serverTimestamp() }, { merge: true })
        .catch((err) => {
          console.warn('[VisitorCounter] Failed to increment visitor counter in Firestore:', err)
        })
    }

    // Subscribe to live total count update
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data()
          if (typeof data?.count === 'number') {
            setCount(data.count)
          } else {
            setCount(1)
          }
        } else {
          // If doc doesn't exist yet, initialize it
          setDoc(docRef, { count: 1, lastVisited: serverTimestamp() }, { merge: true })
            .then(() => setCount(1))
            .catch((err) => console.warn('[VisitorCounter] Failed to create visitors doc:', err))
        }
      },
      (err) => {
        console.warn('[VisitorCounter] Firestore snapshot error:', err)
        // Graceful fallback to local counter if Firestore rules/connection prevent access
        const stored = localStorage.getItem('local_visitor_count')
        const currentCount = stored ? parseInt(stored, 10) + 1 : 1
        localStorage.setItem('local_visitor_count', String(currentCount))
        setCount(currentCount)
      }
    )

    return () => unsubscribe()
  }, [])

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
            {count !== null ? count.toLocaleString() : '...'}
          </span>
        </span>
      </div>
    </div>
  )
}
