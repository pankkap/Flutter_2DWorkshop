import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What are the prerequisites for this Flutter course?',
    a: 'Participants should be familiar with basic programming concepts (functions, objects, arrays, classes), basic Object-Oriented Approach, HTML/CSS familiarity, ES6 basics, and basic knowledge of Android Studio and how to use an Emulator.',
  },
  {
    q: 'What tools and software are required?',
    a: 'You need Visual Studio Code or Atom editor, Android Studio (for emulator), and access to DartPad online environment. A computer with good configuration for coding is recommended.',
  },
  {
    q: 'What is the course delivery format and timing?',
    a: 'The course consists of 90 Hours of Online Live and Practical Classes on Zoom. Each session is 1.5 Hours (1 hour live delivery + 0.5 hour student daily doubt session). All sessions are recorded, with daily quizzes and assignments.',
  },
  {
    q: 'Is Rs 50/- the total registration amount?',
    a: 'Yes! Rs 50/- is the special limited registration fee for the first 100 students. The previous course fee for this program is Rs 2500/- (Regular Value: Rs 55,000/-).',
  },
  {
    q: 'Will I receive a certificate upon completion?',
    a: 'Yes. Upon successfully completing the course, daily assignments, and final capstone projects, you will receive an official Certificate of Completion from Beta-Labs (An Innovation with AI).',
  },
]

function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section id="faq" className="py-16">
      <div className="page-shell max-w-3xl">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-gray-200 card card-shadow">
          {faqs.map((item, idx) => {
            const isOpen = active === idx
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-gray-50"
                >
                  <span className="pr-4 text-sm font-semibold text-gray-900">{item.q}</span>
                  {isOpen
                    ? <ChevronUp size={17} className="shrink-0 text-indigo-500" />
                    : <ChevronDown size={17} className="shrink-0 text-gray-400" />
                  }
                </button>
                {isOpen && (
                  <p className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-gray-600">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
