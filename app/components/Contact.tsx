import { Mail, Linkedin, Github } from "lucide-react";

type ContactProps = {
    email: string;
}

function Contact({email} : ContactProps) {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center min-h-[60vh] px-6"
    >
      {/* Heading */}
      <div className="text-center tracking-wider mb-10">
        <h3>Get in touch</h3>
        <h2 className="section-text">Contact Me</h2>
      </div>

      {/* Contact cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Email */}
        <div className="border rounded-xl px-6 py-4 flex items-center gap-3 hover:shadow-lg transition-all duration-300">
          <Mail size={22} />
          <a
            href={`mailto:${email}`}
            className="hover:text-gray-400 transition"
          >
            {email}
          </a>
        </div>

        {/* LinkedIn */}
        <div className="border rounded-xl px-6 py-4 flex items-center gap-3 hover:shadow-lg transition-all duration-300">
          <Linkedin size={22} />
          <a
            href="https://www.linkedin.com/in/martin-luteran%C4%8D%C3%ADk-604774326/"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* GitHub */}
        <div className="border rounded-xl px-6 py-4 flex items-center gap-3 hover:shadow-lg transition-all duration-300">
          <Github size={22} />
          <a
            href="https://github.com/Saves331"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
