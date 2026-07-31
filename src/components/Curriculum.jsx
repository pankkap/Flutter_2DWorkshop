import { useState } from 'react'
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react'

const sections = [
  {
    title: 'DAY 1: Flutter & Dart Foundations — Environment Setup & Live Mobile UI Building',
    lectures: 5,
    duration: '2 Hours Live',
    items: [
      'Introduction to Flutter SDK & Cross-Platform Architecture',
      'Fast-Track Dart Basics: Variables, Functions, Loops & OOP Principles',
      'Flutter Development Setup: VS Code, DartPad & Emulator Configuration',
      'Building Screen Layouts with Core UI Widgets: Containers, Rows, Columns, Cards & Text',
      'Live Hands-On Project: Designing an Interactive Profile & Dashboard App UI',
    ],
  },
  {
    title: 'DAY 2: Build, Customize & Deploy — Live Student ID App, Release APK & Play Store Launch',
    lectures: 8,
    duration: '2 Hours Live',
    items: [
      'Build a Student Registration Form with Input Validation',
      'Create a Digital Student ID Mobile App',
      'Navigation Between Screens (Push/Pop & Data Passing)',
      'Add Custom App Icon & Custom App Branding',
      'Create a Beautiful Animated Splash Screen',
      'Generate Production Release APK',
      'Install & Test the APK Live on Your Android Phone',
      'Introduction to Google Play Store Deployment & App Publishing Process',
    ],
  },
  {
    title: 'BONUS SESSION: Code Repositories, Career Roadmap & Q&A',
    lectures: 3,
    duration: 'Live Q&A',
    items: [
      'Downloadable GitHub Source Code Templates for 5 Real-World Mobile Apps',
      'Mobile Developer Career Roadmap & Freelancing Opportunities',
      'Live Interactive Q&A Session with Mentor Pankaj Kapoor',
      'Issuance of Official Workshop Certificate of Participation from Beta-Labs',
    ],
  },
]

function Curriculum() {
  const [open, setOpen] = useState(0)

  return (
    <section id="curriculum" className="py-16">
      <div className="page-shell">
        <h2 className="section-heading">2-Day Live Workshop Schedule & Project Breakdown</h2>
        <p className="mt-2 text-sm text-gray-500">
          2 Live Interactive Sessions &bull; 4 Hours Total Live Training &bull; Complete App Building
        </p>

        <div className="mt-6 overflow-hidden card card-shadow">
          {sections.map((sec, index) => {
            const isOpen = open === index
            return (
              <div key={sec.title} className="border-b border-gray-200 last:border-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between bg-gray-50 px-5 py-4 text-left transition hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    {isOpen ? (
                      <ChevronUp size={17} className="shrink-0 text-gray-500" />
                    ) : (
                      <ChevronDown size={17} className="shrink-0 text-gray-500" />
                    )}
                    <span className="text-sm font-semibold text-gray-900">{sec.title}</span>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">
                    {sec.duration}
                  </span>
                </button>
                {isOpen && (
                  <div className="divide-y divide-gray-100">
                    {sec.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 py-3 pl-12 pr-5">
                        <PlayCircle size={13} className="shrink-0 text-indigo-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Curriculum
