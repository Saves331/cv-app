"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import "./globals.css";
import Dummy from "./components/Dummy";


type CvRow = {
  type: string;
  title: string;
  description: string;
  year: string;
  image: string;
  url: string;
  email: string;
};

export default function Home() {
  const [cvData, setCvData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const scrollToHashWithRetry = () => {
    const hash = window.location.hash.slice(1); // bez #
    if (!hash) return;

    let tries = 0;
    const maxTries = 30; // ~30 * 50ms = 1.5s

    const tick = () => {
      const el = document.getElementById(hash);

      // DEBUG (ak chceš): uvidíš či existuje
      // console.log("hash:", hash, "found:", !!el, "try:", tries);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      tries++;
      if (tries < maxTries) setTimeout(tick, 50);
    };

    tick();
  };

  // pri priamom otvorení / refresh (napr. .../#skills)
  scrollToHashWithRetry();

  // pri kliknutí na odkazy v appke
  window.addEventListener("hashchange", scrollToHashWithRetry);
  return () => window.removeEventListener("hashchange", scrollToHashWithRetry);
}, [loading]);


  useEffect(() => {
    fetch("/api/cv")
      .then((res) => res.json())
      .then((data) => {
        setCvData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching CV data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!cvData?.data || !Array.isArray(cvData.data)) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Error loading data
      </div>
    );
  }

  const mappedCvData: CvRow[] = cvData.data.slice(1).map((row: any[]) => ({
    type: row?.[0] ?? "",
    title: row?.[1] ?? "",
    description: row?.[2] ?? "",
    year: row?.[3] ?? "",
    image: row?.[4] ?? "",
    url: row?.[5] ?? "",
    email: row?.[6] ?? "",
  }));

  const about = mappedCvData.find((item) => item.type === "about");

  const projects = mappedCvData
    .filter((item) => item.type === "project")
    .map((item) => ({
      title: item.title,
      description: item.description,
      year: item.year,
      image: item.image,
      url: item.url,
    }));

  const skills = mappedCvData
    .filter((item) => item.type === "skill")
    .map((item) => ({
      name: item.title,
      level: item.description,
    }));

  const webLinks = mappedCvData.filter((item) => item.type === "weblink");

  return (
    <>
      <Navbar name={about?.title ?? ""} webLink={webLinks} />

      <div>
        {about && (
          <About
            name={about.title}
            role={about.description}
            year={about.year}
          />
        )}

        
          
          <Skill skills={skills} />
          <Dummy></Dummy>
    
        

        <Project projects={projects} />

        {about?.email && <Contact email={about.email} />}
      </div>
    </>
  );
}
