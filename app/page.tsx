"use client"
import { title } from "process";
import { useEffect, useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact"
import './globals.css';


export default function Home() {

  const [cvData, setCvData] = useState<any>(null);
  const [loading, setLoading] = useState(false);


  useEffect(() =>{
    fetch('/api/cv')
    .then((res) => res.json())
    .then((data) => {
      setCvData(data);
      setLoading(true);
    })

    .catch((error) => {
      console.log('Error fetching CV data:', error);
      setLoading(true);
    })
  }, [])

  if (!loading || !cvData) {
    return <div className="flex justify-center items-center h-screen text-3xl font-semibold">Loading...</div>;
  }

  const mappedCvData = cvData.data.slice(1).map((row: any[]) => ({
    type: row[0], 
    title: row[1] || '',
    description: row[2] || '',
    year: row[3] || '',
    image: row[4] || '',
    url: row[5] || '',
    email: row[6] || ''
  }))

  const about = mappedCvData.find((item: any) => item.type === 'about');
  /* const experience = mappedCvData.find((item: any) => item.type === 'experience'); */
  const project = mappedCvData.filter((item: any) => item.type === 'project').map((projectItem: any) => ({
    title: projectItem.title,
    description: projectItem.description,
    year: projectItem.year,
    image: projectItem.image,
    url: projectItem.url
  }));

  const skill = mappedCvData.filter((item: any) => item.type === 'skill').map((skillItem: any) => ({
    name: skillItem.title,
    level: skillItem.description,
  }));

  const webLink = mappedCvData.filter((item: any) => item.type === 'weblink');
  const contact = mappedCvData.filter((item: any) => item.type === 'about')
 

  console.log(webLink);
  
  return (
    <>

      <Navbar name={about.title} webLink={webLink} />

      <div>
      


        {about && (<About name={about.title} role={about.description} year={about.year} />)}

        {/* {experience && (<Experience jobTitle={experience.title} company={experience.description} year={experience.year} />)} */}

        <Skill skills={skill}></Skill>

        
        <Project projects={project}></Project>
       

        {contact && (<Contact email={about.email}></Contact>)}
        
      </div>
    </>
  );
}
