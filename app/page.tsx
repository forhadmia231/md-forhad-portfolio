export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-bold">
            Forhad<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-24 md:flex-row"
      >
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-lg font-medium text-cyan-400">
            Hello, I&apos;m
          </p>

          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            Md Forhad Mia
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            Aspiring Machine Learning Engineer
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-8 text-slate-400 md:mx-0">
            I am passionate about Artificial Intelligence and Machine Learning.
            I am currently doing a Machine Learning internship at Flyrank,
            where I am developing my practical skills and learning how to build
            data-driven solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View My Project
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
            <img
              src="/forhad.jpg"
              alt="Md Forhad Mia"
              className="h-72 w-72 rounded-full object-cover md:h-96 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-900/60 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-2 text-center font-medium text-cyan-400">
            Get To Know More
          </p>

          <h2 className="mb-10 text-center text-4xl font-bold">About Me</h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <p className="text-center text-lg leading-8 text-slate-300">
              I am an aspiring Machine Learning Engineer with a strong interest
              in Artificial Intelligence and data-driven solutions. I am
              currently doing a Machine Learning internship at Flyrank, where I
              am developing my practical skills and gaining hands-on
              experience. I work with Python and SQL and enjoy learning how
              machine learning can be used to solve real-world problems. My
              goal is to continue improving my skills and build useful AI and
              machine learning applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-2 text-center font-medium text-cyan-400">
            What I Work With
          </p>

          <h2 className="mb-12 text-center text-4xl font-bold">My Skills</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-1 hover:border-cyan-500">
              <div className="mb-4 text-4xl">🐍</div>
              <h3 className="text-xl font-bold">Python</h3>
              <p className="mt-2 text-slate-400">
                Programming and Machine Learning
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-1 hover:border-cyan-500">
              <div className="mb-4 text-4xl">🗄️</div>
              <h3 className="text-xl font-bold">SQL</h3>
              <p className="mt-2 text-slate-400">
                Working with data and databases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-900/60 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-2 text-center font-medium text-cyan-400">
            What I&apos;ve Built
          </p>

          <h2 className="mb-12 text-center text-4xl font-bold">
            Featured Project
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
            <div className="mb-5 inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Machine Learning
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Weather Forecasting Using Machine Learning
            </h3>

            <p className="mb-6 max-w-3xl leading-7 text-slate-400">
              A machine learning project focused on using weather data to make
              weather-related predictions. This project helped me practice
              working with data, Python, and machine learning concepts.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
                Python
              </span>

              <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
                Machine Learning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 font-medium text-cyan-400">Get In Touch</p>

          <h2 className="mb-5 text-4xl font-bold">Contact Me</h2>

          <p className="mx-auto mb-10 max-w-2xl text-slate-400">
            I&apos;m interested in learning, building machine learning projects,
            and exploring opportunities in AI and Machine Learning.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:forhadhossain1595@gmail.com"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Email Me
            </a>

            <a
              href="https://github.com/forhadmia231"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Md Forhad Mia. All rights reserved.</p>
      </footer>
    </main>
  );
}