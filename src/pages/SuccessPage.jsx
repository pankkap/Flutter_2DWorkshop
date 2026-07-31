import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../lib/firebaseClient'

const PENDING_PAYMENT_UPDATE_KEY = 'pending_payment_update'
const PENDING_REGISTRATION_KEY = 'pending_registration_id'

function SuccessPage() {
  const location = useLocation()
  const paymentUpdated = location.state?.paymentUpdated === true || Boolean(location.state?.transactionId)
  const [synced, setSynced] = useState(location.state?.paymentSynced !== false)
  const [syncing, setSyncing] = useState(false)

  useEffect(() => {
    if (synced) return

    const pending = localStorage.getItem(PENDING_PAYMENT_UPDATE_KEY)
    if (!pending) return

    let parsed
    try { parsed = JSON.parse(pending) } catch { return }

    const { registrationId, updateData } = parsed
    if (!registrationId || !updateData) return

    setSyncing(true)

    const tryUpdate = async () => {
      for (let attempt = 1; attempt <= 5; attempt++) {
        try {
          await updateDoc(doc(db, 'registrations', registrationId), {
            ...updateData,
            updated_at: serverTimestamp(),
          })
          localStorage.removeItem(PENDING_PAYMENT_UPDATE_KEY)
          localStorage.removeItem(PENDING_REGISTRATION_KEY)
          setSynced(true)
          setSyncing(false)
          return
        } catch { /* retry */ }
        await new Promise((r) => setTimeout(r, 1500 * attempt))
      }
      setSyncing(false)
    }

    tryUpdate()
  }, [synced])

  if (!paymentUpdated) {
    return <Navigate to="/" replace state={{ openPaymentUpdate: true }} />
  }

  return (
    <main className="grid min-h-screen place-items-center bg-indigo-50 px-4">
      <section className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <span className="text-2xl">🎉</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Seat Reserved!</h1>
        <p className="mt-3 text-sm text-gray-600">
          Thank you for registering for the <strong>2-Days Flutter Mobile App Development</strong>.<br />
          Your workshop seat & Zoom joining details will be sent to your email/whatsapp shortly.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Questions? Email us at{' '}
          <a href="mailto:info@beta-labs.in" className="text-indigo-600 underline">
            info@beta-labs.in
          </a>
        </p>
        {!synced && (
          <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
            {syncing ? 'Syncing payment to database...' : 'Payment recorded. Dashboard will update shortly.'}
          </p>
        )}
        {synced && location.state?.paymentSynced === false && (
          <p className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-xs text-green-700">
            Payment synced successfully.
          </p>
        )}
        <a
          href="https://chat.whatsapp.com/Kk54q9qR52DGvhMcyrKFoN?s=sh&p=i&ilr=0&amv=1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          Join WhatsApp Community
        </a>
      </section>
    </main>
  )
}

export default SuccessPage
