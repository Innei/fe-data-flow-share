import { Fragment } from 'react'
import { CONFIG } from '../../config'
import { isPDFExport } from '../../reveal/reaveal'

export default function Footer() {
  return (
    <div
      className={`h-[4rem] px-4 flex gap-2 items-center justify-between text-sm w-full transition-none"`}
    >
      <div className=" justify-center flex flex-col w-fit text-left transition-none">
        <span className="block font-semibold">{CONFIG.presentationTitle}</span>
        <div className="flex w-full justify-between items-end">
          <div className="flex gap-1 items-start">
            <span>
              {CONFIG.authors.map((author, i) => (
                <Fragment key={i}>
                  <a
                    href={CONFIG.homepage}
                    className="text-inherit"
                    target="_blank"
                  >
                    <span
                      className={
                        author.presenting
                          ? 'underline decoration-slate-400'
                          : ''
                      }
                    >
                      {author.name}
                    </span>
                  </a>
                  {i < CONFIG.authors.length - 1 && ', '}
                </Fragment>
              ))}
            </span>
            <span>|</span>
            <span>
              <a className="text-inherit" href={`mailto:${CONFIG.email}`}>
                {CONFIG.email}
              </a>
            </span>
            <span>|</span>
            <span>{CONFIG.date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
