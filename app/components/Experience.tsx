type ExperienceProps = {
    jobTitle: string;
    company: string;
    year: string;
}

function Experience({ jobTitle, company, year }: ExperienceProps) {
  return (
    <div>
        <p>Job Title: {jobTitle}</p>
        <p>Company: {company}</p>
        <p>Year: {year}</p>
    </div>
  )
}

export default Experience