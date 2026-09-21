import type { ReactNode } from "react";

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "Matplotlib",
  "Git / GitHub",
  "Jupyter Notebook",
];

const projects = [
  {
    title: "Hybrid LSTM–Transformer Model for Weather Forecasting",
    description:
      "A machine learning project focused on weather forecasting using a hybrid LSTM–Transformer architecture. The project includes data preprocessing, feature engineering, time-series analysis, and model evaluation.",
    technologies: [
      "Python",
      "TensorFlow / PyTorch",
      "Pandas",
      "Scikit-learn",
    ],
    icon: "🌦️",
  },
  {
    title: "FIFA World Cup Match Prediction",
    description:
      "A machine learning project designed to predict FIFA World Cup match outcomes using historical data, feature engineering, classification algorithms, and model comparison.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    icon: "⚽",
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "A classification project for predicting heart disease using exploratory data analysis, feature selection, preprocessing, and multiple machine learning models.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    icon: "❤️",
  },
];

const certificates = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    image: "/clude 101 certificate.png",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    image: "/clude 101 intermediate.png",
  },
  {
    title: "AI Fluency for Builders",
    issuer: "CodePath & Anthropic",
    image: "/ai fluency builders.png",
  },
  {
    title: "AI Capabilities & Limitations",
    issuer: "Anthropic",
    image: "/ai fluency and capability limitations.png",
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    image: "/ai fluency for students.png",
  },
  {
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    image: "/ai fluency for educators.png",
  },
  {
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    image: "/teaching the ai fluency.png",
  },
  {
    title: "AI Fluency for Small Businesses",
    issuer: "PayPal & Anthropic",
    image: "/small business course.png",
  },
  {
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic",
    image: "/ai fluency non profits.png",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#home"
            className="text-2xl font-black tracking-tight transition hover:text-cyan-300"
          >
            Md Forhad<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#certifications">
              Certificates
            </a>
            <a className="nav-link" href="#education">
              Education
            </a>
            <a className="nav-link" href="#posts">
              Posts
            </a>

            <a
              href="#contact"
              className="rounded-full border border-cyan-400/40 px-5 py-2 text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-slate-950"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-24"
      >
        {/* Animated Background */}
        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="glow-orb glow-orb-one" />
        <div className="glow-orb glow-orb-two" />
        <div className="glow-orb glow-orb-three" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 lg:px-8">
          {/* HERO TEXT */}
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              <span className="status-dot h-2 w-2 rounded-full bg-cyan-400" />
              Machine Learning Intern @ FlyRank
            </div>

            <p className="mb-3 text-lg font-medium text-cyan-400">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Md Forhad
              <span className="gradient-text block">Mia</span>
            </h1>

            <h2 className="animate-fade-up-delay mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
              Machine Learning Engineer
            </h2>

            <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Computer Science & Engineering student focused on Artificial
              Intelligence, Machine Learning, Deep Learning and data-driven
              problem solving. I enjoy building practical ML projects and
              continuously improving my skills.
            </p>

            <div className="animate-fade-up-delay-3 mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="primary-button rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-bold text-slate-950"
              >
                View Projects
              </a>

<a
  href="/Md-Forhad-Mia-CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-button rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 font-semibold text-cyan-200"
>
  View CV ↗
</a>

              <a
                href="https://www.linkedin.com/in/md-forhad-mia-076183262/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/forhadmia231"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold"
              >
                GitHub ↗
              </a>
            </div>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>● Python</span>
              <span>● Machine Learning</span>
              <span>● Deep Learning</span>
              <span>● AI</span>
            </div>
          </div>

          {/* PROFILE */}
          <div className="animate-profile relative mx-auto">
            <div className="profile-glow absolute inset-0 -z-10 rounded-full bg-cyan-400/20 blur-[80px]" />

            <div className="profile-float relative">
              <div className="profile-border rounded-[2.5rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[2px]">
                <div className="rounded-[2.4rem] bg-[#080d1d] p-3">
                  <img
                    src="/forhad.jpg"
                    alt="Md Forhad Mia"
                    className="h-[420px] w-[330px] rounded-[2rem] object-cover object-top sm:h-[480px] sm:w-[380px]"
                  />
                </div>
              </div>

              <div className="floating-role absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-[#080d1d]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-left-10">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Current Role
                </p>
                <p className="mt-1 font-semibold text-cyan-300">
                  ML Intern @ FlyRank
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="scroll-indicator absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <span />
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/5 bg-white/[0.02] py-24"
      >
        <Container>
          <SectionTitle
            label="ABOUT ME"
            title="Learning, Building & Growing in AI"
          />

          <div className="glass-card mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <p className="text-lg leading-9 text-slate-300">
              I am a Computer Science & Engineering student and aspiring
              Machine Learning Engineer with a strong interest in Artificial
              Intelligence, Machine Learning and Deep Learning.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-400">
              I am currently completing a Machine Learning internship at
              FlyRank, where I am developing practical technical skills and
              gaining hands-on experience. I enjoy turning data into useful
              machine learning solutions and exploring new AI technologies.
            </p>
          </div>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24">
        <Container>
          <SectionTitle
            label="TECHNICAL SKILLS"
            title="Tools & Technologies"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="animated-card group rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-4 text-sm font-bold text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-bold text-slate-200 transition group-hover:text-cyan-300">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-y border-white/5 bg-white/[0.02] py-24"
      >
        <Container>
          <SectionTitle label="EXPERIENCE" title="Professional Journey" />

          <div className="glass-card mx-auto mt-12 max-w-4xl rounded-3xl border border-cyan-400/20 bg-[#080d1d] p-9">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  Current
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  Machine Learning Intern
                </h3>

                <p className="mt-2 text-xl text-slate-400">FlyRank</p>
              </div>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                Machine Learning
              </span>
            </div>

            <div className="my-7 h-px bg-white/10" />

            <p className="leading-8 text-slate-400">
              Developing practical skills in machine learning, AI-assisted
              workflows, data-driven problem solving and modern development
              tools while completing hands-on internship projects.
            </p>
          </div>
        </Container>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <Container>
          <SectionTitle
            label="PROJECTS"
            title="Featured Machine Learning Work"
          />

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="animated-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d1d] p-8"
              >
                <div className="card-shine" />

                <div className="relative z-10">
                  <div className="project-icon text-5xl">{project.icon}</div>

                  <h3 className="mt-6 text-2xl font-bold transition group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

{/* CERTIFICATES */}
<section
  id="certifications"
  className="border-y border-white/5 bg-white/[0.02] py-24"
>
  <Container>
    <SectionTitle
      label="CERTIFICATIONS"
      title="AI Learning & Certifications"
    />

    <p className="mx-auto mt-6 max-w-2xl text-center leading-7 text-slate-400">
      Certificates from my continuous learning journey in Artificial
      Intelligence, AI fluency, Claude and AI development.
    </p>

    <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {certificates.map((certificate, index) => (
        <article
          key={certificate.title}
          className="animated-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d1d]"
        >
          {/* Certificate Image */}
          <div className="relative overflow-hidden bg-white">
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              loading="lazy"
              className="aspect-[4/3] w-full object-contain p-2 transition duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Image Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Certificate Number */}
            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#050816]/80 px-3 py-1 text-xs font-bold text-cyan-300 backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Certificate Details */}
          <div className="relative p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                Certificate of Completion
              </p>
            </div>

            <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
              {certificate.title}
            </h3>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-400">
                {certificate.issuer}
              </p>

              <span className="text-sm text-cyan-400 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                View ↗
              </span>
            </div>
          </div>

          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
        </article>
      ))}
    </div>
  </Container>
</section>

      {/* EDUCATION */}
<section id="education" className="py-24">
  <Container>
    <SectionTitle label="EDUCATION" title="Academic Background" />

    <div className="mx-auto mt-12 grid max-w-4xl gap-6">

      {/* BACHELOR */}
      <div className="glass-card rounded-3xl border border-cyan-400/20 bg-[#080d1d] p-8 md:p-9">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Bachelor&apos;s Degree
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              B.Sc. in Computer Science & Engineering
            </h3>

            <p className="mt-3 text-lg text-slate-400">
              Presidency University
            </p>

            <p className="mt-3 text-slate-500">
              CGPA: 3.60 / 4.00
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Expected Graduation
            </p>

            <p className="mt-1 text-2xl font-black text-cyan-300">
              2026
            </p>
          </div>
        </div>
      </div>

      {/* HSC */}
      <div className="glass-card rounded-3xl border border-white/10 bg-[#080d1d] p-8 md:p-9">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Higher Secondary Certificate (HSC)
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Juranpur Adarsha Degree College
            </h3>

            <p className="mt-3 text-lg text-slate-400">
              Science
            </p>

            <p className="mt-3 text-slate-500">
              GPA: 5.00 / 5.00
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Completed
            </p>

            <p className="mt-1 text-2xl font-black text-cyan-300">
              2021
            </p>
          </div>
        </div>
      </div>

      {/* SSC */}
      <div className="glass-card rounded-3xl border border-white/10 bg-[#080d1d] p-8 md:p-9">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Secondary School Certificate (SSC)
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Adhara High School
            </h3>

            <p className="mt-3 text-lg text-slate-400">
              Science
            </p>

            <p className="mt-3 text-slate-500">
              GPA: 4.89 / 5.00
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Completed
            </p>

            <p className="mt-1 text-2xl font-black text-cyan-300">
              2019
            </p>
          </div>
        </div>
      </div>

    </div>
  </Container>
</section>

      {/* POSTS + CAPSTONE */}
      <section
        id="posts"
        className="border-y border-white/5 bg-white/[0.02] py-24"
      >
        <Container>
          <SectionTitle label="LEARNING" title="Posts & Capstone" />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="animated-card rounded-3xl border border-white/10 bg-[#080d1d] p-8">
              <span className="project-icon inline-block text-4xl">📝</span>

              <h3 className="mt-5 text-2xl font-bold">
                AI & ML Learning Notes
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                I will share notes, experiments and lessons from my journey in
                machine learning and artificial intelligence here.
              </p>

              <p className="mt-6 text-sm font-semibold text-cyan-400">
                Coming Soon
              </p>
            </div>

            <div className="animated-card rounded-3xl border border-cyan-400/20 bg-[#080d1d] p-8">
              <span className="project-icon inline-block text-4xl">🚀</span>

              <h3 className="mt-5 text-2xl font-bold">
                FlyRank Capstone Project
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                My final FlyRank internship capstone project will be featured
                here after completion and approval.
              </p>

              <p className="mt-6 text-sm font-semibold text-cyan-400">
                In Progress
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-28">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        <Container>
          <div className="relative text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              CONTACT
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Let&apos;s Connect
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
              I&apos;m interested in machine learning, artificial intelligence,
              research, collaboration and opportunities to build useful
              data-driven solutions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:forhadhossain1595@gmail.com"
                className="primary-button rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-bold text-slate-950"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/md-forhad-mia-076183262/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button rounded-xl border border-white/15 px-6 py-3"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/forhadmia231"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button rounded-xl border border-white/15 px-6 py-3"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.kaggle.com/mdforhadmia"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button rounded-xl border border-white/15 px-6 py-3"
              >
                Kaggle ↗
              </a>

              <a
                href="/Md-Forhad-Mia-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 text-cyan-200"
              >
                Download CV ↗
              </a>

              {/*
                Add your booking link here when you create one.

                Example:

                <a
                  href="YOUR_BOOKING_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button rounded-xl border border-white/15 px-6 py-3"
                >
                  Book a Meeting ↗
                </a>
              */}
            </div>

            <p className="mt-8 text-sm text-slate-500">
              forhadhossain1595@gmail.com
            </p>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>© 2026 Md Forhad Mia. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="https://github.com/forhadmia231"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="https://www.kaggle.com/mdforhadmia"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              Kaggle
            </a>

            <a
              href="https://www.linkedin.com/in/md-forhad-mia-076183262/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8">{children}</div>
  );
}

function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
        {label}
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>

      <div className="section-line mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
    </div>
  );
}