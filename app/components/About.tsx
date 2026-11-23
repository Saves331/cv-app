import profilePhoto from '../../public/images/profile.jpg';
import { Github, Linkedin, Download } from "lucide-react";

type AboutProps = {
    name: string;
    role: string;
    year: string;
}

function About({ name, role, year }: AboutProps) {
  return (
    <section className='mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-24 min-h-[calc(100vh-72px)] py-16'>

      {/* Photo in a retro "sun" frame */}
      <div className='relative shrink-0 isolate'>
        <div className='absolute -inset-4 rounded-full bg-mustard border-2 border-ink' />
        <div className='absolute -inset-4 rounded-full translate-x-3 translate-y-3 border-2 border-ink -z-10 bg-accent' />
        <img
          src={profilePhoto.src}
          alt={name}
          className='relative rounded-full w-64 h-64 md:w-72 md:h-72 object-cover border-2 border-ink grayscale-[25%] sepia-[15%]'
          draggable={false}
        />
      </div>

      <div className='text-center md:text-left max-w-xl'>
        <h3>Hello, I&apos;m</h3>
        <h1>{name}</h1>
        <h2 className='font-display italic font-normal text-2xl md:text-3xl text-ink-soft mt-2'>
          {role}
        </h2>
        {year && <span className='retro-tag mt-5'>{year}</span>}

        <div className='flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8'>
          <a href="/CV_luterancik_AJ.pdf" download className='retro-btn relative z-60 antiBackDrop'>
            <Download size={16} /> Download CV
          </a>
          <a href="https://github.com/Saves331" aria-label="GitHub" className='retro-icon antiBackDrop'><Github size={20}/></a>
          <a href="https://www.linkedin.com/in/martin-luteran%C4%8D%C3%ADk-604774326/" aria-label="LinkedIn" className='retro-icon antiBackDrop'><Linkedin size={20}/></a>
        </div>
      </div>

    </section>
  )
}

export default About
