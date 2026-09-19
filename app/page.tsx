const skills = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Git / GitHub",
  "Jupyter Notebook",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Md Forhad<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cyan-400" href="#home">
              Home
            </a>
            <a className="transition hover:text-cyan-400" href="#about">
              About
            </a>
            <a className="transition hover:text-cyan-400" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-cyan-400" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-cyan-400" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-cyan-400" href="#education">
              Education
            </a>
            <a
              className="rounded-full border border-cyan-400/40 px-5 py-2 text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
              href="#contact"
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
        {/* Background Glow */}
        <div className="absolute left-[-120px] top-[180px] h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-100px] top-[100px] h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Machine Learning Intern @ Flyrank
            </div>

            <p className="mb-3 text-lg font-medium text-cyan-400">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Md Forhad
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mia
              </span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
              Machine Learning Engineer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Building my skills in Artificial Intelligence, Machine Learning,
              and data-driven problem solving. I enjoy working with Python,
              data, and machine learning to turn ideas into useful solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1"
              >
                View My Project
              </a>

              <a
                href="https://github.com/forhadmia231"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300"
              >
                GitHub ↗
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>● Python</span>
              <span>● Machine Learning</span>
              <span>● Data</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto flex w-full max-w-md justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl" />

            <div className="relative">
              <div className="rounded-[2.5rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[2px] shadow-2xl shadow-cyan-500/10">
                <div className="rounded-[2.4rem] bg-[#080d1d] p-3">
                  <img
                    src="/forhad.jpg"
                    alt="Md Forhad Mia"
                    className="h-[420px] w-[330px] rounded-[2rem] object-cover object-top sm:h-[480px] sm:w-[380px]"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0b1120]/95 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Current Role
                </p>
                <p className="mt-1 font-semibold text-cyan-300">
                  ML Intern @ Flyrank
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionTitle
            label="ABOUT ME"
            title="Learning, Building & Growing in AI"
          />

          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl md:p-12">
            <p className="text-lg leading-9 text-slate-300">
              I am an aspiring Machine Learning Engineer with a strong interest
              in Artificial Intelligence and data-driven solutions. I am
              currently doing a Machine Learning internship at Flyrank, where I
              am developing my practical skills and gaining hands-on
              experience.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-400">
              I enjoy working with Python, SQL, and machine learning tools to
              understand data and solve real-world problems. My goal is to
              continuously improve my technical skills and build useful AI and
              machine learning applications.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionTitle
            label="TECHNICAL SKILLS"
            title="Tools & Technologies"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-bold text-slate-200 transition group-hover:text-cyan-300">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-y border-white/5 bg-white/[0.02] py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionTitle label="EXPERIENCE" title="My Professional Journey" />

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#080d1d] p-8 md:p-10">
            <div className="flex flex-col justify-between gap-5 md:flex-row">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Current
                </p>

                <h3 className="text-2xl font-bold">
                  Machine Learning Intern
                </h3>

                <p className="mt-2 text-lg text-slate-400">Flyrank</p>
              </div>

              <div className="h-fit rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                Machine Learning
              </div>
            </div>

            <div className="mt-8 h-px bg-white/10" />

            <p className="mt-8 max-w-3xl leading-8 text-slate-400">
              Developing practical machine learning skills and gaining
              hands-on experience while learning how AI and data-driven
              solutions can be applied to real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionTitle label="PROJECTS" title="Featured Work" />

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1224] to-[#070b15]">
            <div className="grid md:grid-cols-5">
              {/* Project Visual */}
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-10 md:col-span-2">
                <div className="absolute h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-5xl">
                    ☁
                  </div>

                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                    ML Project
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 md:col-span-3 md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Featured Project
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Weather Forecasting Using Machine Learning
                </h3>

                <p className="mt-6 leading-8 text-slate-400">
                  A machine learning project focused on using weather data to
                  make weather-related predictions. The project helped me
                  practice working with data, Python, and machine learning
                  concepts.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Python", "Machine Learning", "Data Analysis"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-y border-white/5 bg-white/[0.02] py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionTitle label="EDUCATION" title="Academic Background" />

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#080d1d] p-8 md:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Bachelor&apos;s Degree
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  B.Sc. in Computer Science & Engineering
                </h3>

                <p className="mt-3 text-lg text-slate-400">
                  Presidency University
                </p>
              </div>

              <div className="w-fit rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Graduation
                </p>
                <p className="mt-1 text-xl font-bold text-cyan-300">2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-28">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            CONTACT
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            I&apos;m interested in learning, building machine learning
            projects, and exploring opportunities in Artificial Intelligence
            and Machine Learning.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:forhadhossain1595@gmail.com"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1"
            >
              Email Me
            </a>

            <a
              href="https://github.com/forhadmia231"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              Visit GitHub ↗
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            forhadhossain1595@gmail.com
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>© 2026 Md Forhad Mia. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="https://github.com/forhadmia231"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="mailto:forhadhossain1595@gmail.com"
              className="transition hover:text-cyan-300"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* Reusable Section Heading */
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

      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
    </div>
  );
}