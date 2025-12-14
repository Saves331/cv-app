"use client"
import { title } from "process";
import { useEffect, useState } from "react";
import About from "./components/About";

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
    return <div>Loading...</div>;
  }

  const mappedCvData = cvData.data.slice(1).map((row: any[]) => ({
    type: row[0],
    title: row[1] || '',
    description: row[2] || '',
    year: row[3] || '',
  }))

  const about = mappedCvData.find((item: any) => item.type === 'about');
  const experience = mappedCvData.filter((item: any) => item.type === 'experience');
  const project = mappedCvData.filter((item: any) => item.type === 'project');
  const skill = mappedCvData.filter((item: any) => item.type === 'skill');
  
  return (
    <>
      <div>
        <h1>
          Moje CV
        </h1>

        <pre>{JSON.stringify(mappedCvData, null, 2)}</pre>

        <h2>About</h2>
        {about && (<About name={about.title} role={about.description} year={about.year} />)}

        <h2>Experience</h2>
        <pre>{JSON.stringify(experience, null, 2)}</pre>

        <h2>Project</h2>
        <pre>{JSON.stringify(project, null, 2)}</pre>

        <h2>Skill</h2>
        <pre>{JSON.stringify(skill, null, 2)}</pre>
      </div>
    </>
  );
}
