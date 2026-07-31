import { CheckCircle2 } from 'lucide-react'
import CTAButton from './CTAButton'

const perks = [
  '2 Days Live Masterclass on Zoom (4 Hours Total)',
  'Build a complete cross-platform Flutter app live',
  'Full workshop recordings provided with lifetime access',
  'Downloadable App Source Code & Starter Templates',
  'Live interactive Q&A & doubt resolution',
  'Official Beta-Labs Workshop Certificate',
]

function Pricing({ onReserve }) {
  return (
    <section id="pricing" className="bg-gray-50 py-16">
      <div className="page-shell">
        <div className="mx-auto max-w-xl overflow-hidden card card-shadow">
          {/* header */}
          <div className="bg-indigo-600 px-7 py-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200">2-Days Live Masterclass</p>
            <h2 className="mt-1 text-2xl font-extrabold text-white">Flutter Hybrid Mobile App Development</h2>
          </div>

          <div className="space-y-5 p-7">
            {/* price */}
            <div className="flex items-end gap-3">
              <p className="text-4xl font-extrabold text-gray-900">₹50</p>
              <p className="mb-1 text-lg font-medium text-gray-400 line-through">₹2500</p>
              <span className="mb-1 rounded bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">
                Ad Offer — First 100 Seats Only
              </span>
            </div>

            {/* checklist */}
            <div className="space-y-2">
              {perks.map((p) => (
                <div key={p} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500" />
                  <p className="text-sm text-gray-700">{p}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-amber-400/30 bg-amber-50 px-4 py-3">
              <p className="text-center text-sm leading-relaxed text-amber-800">
                <span className="font-bold">Register now at ₹50</span> for first 100 attendees.
                <span className="block mt-1 text-xs font-semibold text-amber-900">(Previous Workshop Value: ₹2500</span>
              </p>
            </div>

            <CTAButton label="Book Workshop Seat — ₹50" onClick={onReserve} className="w-full py-4 text-base" />
            <p className="text-center text-xs text-gray-500">
              Limited Seats Available • 100% Satisfaction Guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
