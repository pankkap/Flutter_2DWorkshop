import { useState } from 'react'

const technologies = [
  { name: 'Flutter', src: 'https://cdn.simpleicons.org/flutter' },
  { name: 'Dart', src: 'https://cdn.simpleicons.org/dart' },
  { name: 'Android Studio', src: 'https://cdn.simpleicons.org/androidstudio' },
  { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Firebase', src: 'https://cdn.simpleicons.org/firebase' },
  { name: 'Android', src: 'https://cdn.simpleicons.org/android' },
  { name: 'Apple iOS', src: 'https://cdn.simpleicons.org/apple' },
  { name: 'Material UI', src: 'https://cdn.simpleicons.org/mui' },
  { name: 'REST API', src: 'https://cdn.simpleicons.org/postman' },
  { name: 'SQLite', src: 'https://cdn.simpleicons.org/sqlite' },
  { name: 'Git', src: 'https://cdn.simpleicons.org/git' },
  { name: 'GitHub', src: 'https://cdn.simpleicons.org/github' },
  { name: 'DartPad', src: 'https://cdn.simpleicons.org/dart' },
  { name: 'JSON', src: 'https://cdn.simpleicons.org/json' },
  { name: 'Postman', src: 'https://cdn.simpleicons.org/postman' },
  { name: 'Google Play', src: 'https://cdn.simpleicons.org/googleplay' },
]

const firstRow = technologies.slice(0, 10)
const secondRow = technologies.slice(10)

function TechnologyLogo({ item }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="tech-logo-chip" aria-label={item.name} title={item.name}>
      {failed ? (
        <span className="tech-logo-fallback">{item.name}</span>
      ) : (
        <img
          src={item.src}
          alt={`${item.name} logo`}
          className="tech-logo-image"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

function TechnologiesSection() {
  return (
    <section aria-labelledby="technologies-used" className="py-10 sm:py-12">
      <div className="page-shell">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.24)] sm:px-8 sm:py-10">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-400">Technologies Used</p>
            <h2 id="technologies-used" className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Learn with the tools used in real projects
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            <div className="tech-marquee">
              <div className="tech-marquee-track">
                {[...firstRow, ...firstRow].map((item, index) => (
                  <TechnologyLogo key={`${item.name}-${index}`} item={item} />
                ))}
              </div>
            </div>

            <div className="tech-marquee tech-marquee-reverse">
              <div className="tech-marquee-track">
                {[...secondRow, ...secondRow].map((item, index) => (
                  <TechnologyLogo key={`${item.name}-${index}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection