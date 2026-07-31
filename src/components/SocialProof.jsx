import { CalendarDays, Users, Star, Clock, PlayCircle } from 'lucide-react'

function SocialProof() {
  const stats = [
    { icon: CalendarDays, value: '2 Days Live', label: 'Interactive Masterclass' },
    { icon: Clock, value: '4 Hours', label: 'Total Live Training' },
    { icon: Star, value: '4.9 / 5', label: 'Workshop Rating' },
    { icon: Users, value: 'Live Building', label: 'iOS & Android App' },
    { icon: PlayCircle, value: 'Bonus Included', label: 'Source Code & Certificate' },
  ]

  return (
    <section className="border-b border-gray-200 bg-gray-50">
      <div className="page-shell">
        <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 px-6 py-5">
              <stat.icon className="h-5 w-5 shrink-0 text-indigo-500" />
              <div>
                <p className="text-lg font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-xs font-medium text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
