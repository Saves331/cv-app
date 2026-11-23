import { Mail, Linkedin, Github } from "lucide-react";

type ContactProps = {
    email: string;
}

function Contact({email} : ContactProps) {
  const links = [
    { icon: Mail, label: email, href: `mailto:${email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/martin-luteran%C4%8D%C3%ADk-604774326/", external: true },
    { icon: Github, label: "GitHub", href: "https://github.com/Saves331", external: true },
  ];

  return (
    <>
      <section
        id="contact"
        className="mx-auto max-w-6xl flex flex-col justify-center items-center min-h-[60vh] px-6 py-24 border-t-2 border-ink"
      >
        <div className="text-center mb-12">
          <h3>Get in touch</h3>
          <h2 className="section-text">Contact me</h2>
          <div className="retro-rule"><span /></div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {links.map(({ icon: Icon, label, href, external }) => (
            <a
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="retro-card retro-card-hover px-6 py-4 flex items-center gap-3 font-bold text-sm hover:text-accent antiBackDrop"
            >
              <Icon size={20} />
              {label}
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-ink bg-ink text-paper text-center text-xs tracking-[0.2em] uppercase py-5">
        © {new Date().getFullYear()} · Made with care
      </footer>
    </>
  );
}

export default Contact;
