import profilePhoto from '../../public/images/profile.jpg';
import { Github, Linkedin } from "lucide-react";

type AboutProps = {
    name: string;
    role: string;
    year: string;
}

function About({ name, role, year }: AboutProps) {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center gap-20 h-[60vh]'>

      <div>
          <img src={profilePhoto.src} alt={name}  className='rounded-full w-75 h-75 object-cover'/>
      </div>

      <div className='text-center tracking-wider'>
        <h3>Hello, I'm</h3>
        <h1>{name}</h1>
        <h2>{role}</h2>

        <button className='border p-3 cursor-pointer hover:bg-gray-200 hover:text-black  transition-all duration-300'>Download CV</button>

      <div className='flex justify-center gap-3 mt-4'>
       <a href="" className='hover:text-gray-400'><Github size={24}/></a> 
       <a href="" className='hover:text-gray-400'><Linkedin size={24}/></a> 
      </div>
        
      </div>

    </section>
  )
}

export default About