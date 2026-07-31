import { CheckCircle2 } from 'lucide-react'

const outcomes = [
  'Build a Student Registration Form & Digital Student ID App live',
  'Master screen navigation, data passing & state management in Flutter',
  'Design custom app icons & beautiful splash screens for Android & iOS',
  'Generate release APKs and install your live app on your own Android phone',
  'Introduction to Google Play Store app deployment & publishing process',
  'Understand Dart fundamentals, functions, and Object-Oriented principles',
  'Master Google Material UI widgets to design sleek, modern app user interfaces',
  'Get full access to downloadable project source code, cheat sheets & starter templates',
]

function TechStack() {
  return (
    <section id="learn" className="py-16">
      <div className="page-shell">
        <div className="card card-shadow p-7 sm:p-9">
          <h2 className="section-heading">What You Will Build & Learn in 2 Days (4 Hours Live)</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                <p className="text-sm leading-relaxed text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
