import profilePhoto from '../../public/images/profile.jpg';
import { Github, Linkedin } from "lucide-react";

type AboutProps = {
    name: string;
    role: string;
    year: string;
}

function About({ name, role, year }: AboutProps) {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center gap-20 h-[85vh]'>

      <div>
          <img src={profilePhoto.src} alt={name}  className='rounded-full w-75 h-75 object-cover ' draggable={false}/>
      </div>

      <div className='text-center tracking-wider'>
        <h3>Hello, I'm</h3>
        <h1>{name}</h1>
        <h2>{role}</h2>

        <a href="/Životopis-Luterančík.pdf" download className='relative z-60'>
          <button className=' antiBackDrop border p-3 cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300'>
            Download CV
          </button>
        </a>


      <div className='flex justify-center gap-3 mt-4'>
       <a href="https://github.com/Saves331" className='hover:text-gray-400 antiBackDrop'><Github size={24}/></a> 
       <a href="https://www.linkedin.com/in/martin-luteran%C4%8D%C3%ADk-604774326/" className='hover:text-gray-400 antiBackDrop'><Linkedin size={24}/></a> 
      </div>
        
      </div>

    </section>
  )
}

export default About