type ExperienceProps = {
    jobTitle: string;
    company: string;
    year: string;
}

function Experience({ jobTitle, company, year }: ExperienceProps) {
  return (
    <section className="h-screen">
        <p>Job Title: {jobTitle}</p>
        <p>Company: {company}</p>
        <p>Year: {year}</p>
    </section>
  )
}

export default Experience