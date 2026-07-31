import { Video, FileText, Download, Smartphone, Trophy, RefreshCcw, Clock } from 'lucide-react'

const includes = [
  { icon: Video, text: '2 Days Live Masterclass (4 Hours Total Training)' },
  { icon: Clock, text: 'Live Hands-On Mobile App Creation & Mentorship' },
  { icon: Download, text: 'Downloadable App Source Code & Starter Templates' },
  { icon: Smartphone, text: 'Lifetime Access to Recorded Workshop Sessions' },
  { icon: RefreshCcw, text: 'Live Q&A & Instant Doubt Resolution' },
  { icon: Trophy, text: 'Beta-Labs Workshop Certificate of Participation' },
]

function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50 py-16">
      <div className="page-shell">
        <h2 className="section-heading">What You Get With Your ₹50 Workshop Ticket</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item) => (
            <div key={item.text} className="flex items-center gap-3 card card-shadow px-5 py-4">
              <item.icon className="h-5 w-5 shrink-0 text-indigo-500" />
              <p className="text-sm font-medium text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
