<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mohamed Miloudi - Full Stack Developer</title>
    <style>
      :root {
        --bg-color: #0f172a;
        --text-color: #e2e8f0;
        --accent-color: #60a5fa;
        --secondary-color: #818cf8;
        --tertiary-color: #34d399;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: var(--bg-color);
        color: var(--text-color);
        line-height: 1.6;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      header {
        padding: 2rem 0;
        text-align: center;
      }

      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--accent-color);
      }

      nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 1rem;
      }

      nav a {
        color: var(--text-color);
        text-decoration: none;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        border-radius: 5px;
        transition: background-color 0.3s ease;
      }

      nav a:hover {
        background-color: var(--accent-color);
        color: var(--bg-color);
      }

      main {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2rem;
        padding: 2rem 0;
      }

      section {
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 2rem;
        transition: transform 0.3s ease;
      }

      section:hover {
        transform: translateY(-5px);
      }

      #info,
      #projects,
      #skills,
      #books,
      #contact {
        grid-column: span 12;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--secondary-color);
      }

      .project {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;
      }
      .project:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      .project h3 {
        color: var(--tertiary-color);
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .project-content {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
      }

      .project-details {
        flex: 1;
      }
      .project-details p {
        margin-bottom: 0.75rem;
      }

      .project-links {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
      }

      .project-button {
        display: inline-flex;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color: var(--accent-color);
        color: var(--bg-color);
        text-decoration: none;
        border-radius: 5px;
        transition:
          background-color 0.3s ease,
          transform 0.3s ease;
      }

      .project-button:hover {
        background-color: var(--secondary-color);
        transform: translateY(-2px);
      }

      .button-icon {
        font-size: 1.2rem;
        margin-right: 0.5rem;
      }

      .button-text {
        font-weight: bold;
      }

      #skills {
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 2rem;
        transition: transform 0.3s ease;
      }

      #skills:hover {
        transform: translateY(-5px);
      }

      .skills-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 2rem;
      }

      .skill-category {
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .skill-category h3 {
        color: var(--tertiary-color);
        margin-bottom: 1rem;
        font-size: 1.2rem;
        align-content: center;
      }

      .skill-list {
        list-style-type: none;
        padding: 0;
      }

      .skill-item {
        position: relative;
        padding: 0.3rem 0;
      }

      @media (max-width: 768px) {
        .skills-container {
          grid-template-columns: 1fr;
        }
      }
      .book {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        padding: 1rem;
        margin-bottom: 1rem;
      }

      .book h3 {
        color: var(--tertiary-color);
      }

      .contact-links {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
      }

      .contact-links a {
        color: var(--accent-color);
        text-decoration: none;
        margin: 0 1rem;
        font-size: 1.2rem;
      }

      @media (max-width: 768px) {
        .project-content {
          flex-direction: column;
        }

        .project-image {
          width: 100%;
          height: 200px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>Mohamed Miloudi</h1>
        <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <nav>
          <a href="#info">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#books">Books</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="info">
          <h2>About Me</h2>
          <p>
            Hi, I'm Mohamed Miloudi, a 22-year-old final-year Computer Science
            student from Algeria. As a full-stack web developer, I have a
            passion for building efficient, scalable backend systems and
            creating seamless full-stack solutions. My portfolio showcases a
            range of projects and demos that reflect my skills and enthusiasm
            for development.
          </p>
          <br />
          <p>
            I'm continuously exploring new technologies and working on projects
            that challenge me to grow. My goal is to contribute to innovative
            projects that push the boundaries of web development.
          </p>
        </section>

        <section id="skills">
          <h2>Skills & Expertise</h2>
          <div class="skills-container">
            <div class="skill-category">
              <h3>Languages</h3>
              <ul class="skill-list">
                <li class="skill-item">JavaScript</li>
                <li class="skill-item">TypeScript</li>
                <li class="skill-item">SQL</li>
                <li class="skill-item">Golang</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Frontend</h3>
              <ul class="skill-list">
                <li class="skill-item">Svelte & SvelteKit</li>
                <li class="skill-item">React</li>
                <li class="skill-item">Tailwind CSS</li>
                <li class="skill-item">&lt;/&gt; htmx</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Backend</h3>
              <ul class="skill-list">
                <li class="skill-item">NestJs</li>
                <li class="skill-item">Express.js</li>
                <li class="skill-item">Hono</li>
                <li class="skill-item">Golang Fiber</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Databases</h3>
              <ul class="skill-list">
                <li class="skill-item">PostgreSQL</li>
                <li class="skill-item">SQLite</li>
                <li class="skill-item">Redis</li>
                <li class="skill-item">MongoDB</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Tools & Other</h3>
              <ul class="skill-list">
                <li class="skill-item">Git & GitHub</li>
                <li class="skill-item">Docker</li>
                <li class="skill-item">Cloudflare Workers</li>
                <li class="skill-item">Vercel & Netlify</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Showcase Projects</h2>
          <div class="project">
            <h3>Real-time Chat App</h3>
            <div class="project-content">
              <div class="project-details">
                <p>
                  <strong>Description:</strong> Developed a scalable, performant
                  and modern real-time messaging app that supports rooms with admin
                  role, message history, and user authentication.
                </p>
                <p>
                  <strong>Key Features:</strong>
                  Real-time room-based with admin role messaging, Persistent chat
                  history, Persistant unread message count for each room, Admin can
                  add, kick, promote, demote a member, Online status for users, Responsive
                  design, and more ...
                </p>
                <p>
                  <strong>Tech Stack:</strong> Golang, Fiber, Redis, Websockets,
                  HTMX, TailwindCSS, Docker.
                </p>

                <div class="project-links">
                  <a
                    href="https://chat.miloudi.dev/"
                    target="_blank"
                    class="project-button"
                  >
                    <span class="button-icon">🚀</span>
                    <span class="button-text">Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/ricin9/chat-redis-pubsub"
                    target="_blank"
                    class="project-button"
                  >
                    <span class="button-icon">💻</span>
                    <span class="button-text">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project">
            <h3>Multi-Tenant SaaS Platform</h3>
            <div class="project-content">
              <div class="project-details">
                <p>
                  <strong>Description:</strong> Developed a robust multi-tenancy
                  solution for SaaS applications targeted at enterprise clients.
                </p>
                <p>
                  <strong>Key Features:</strong> Isolated databases per tenant with
                  support of local backups, unique subdomain per tenant, custom vanity
                  domain support with automatic SSL.
                </p>
                <p>
                  <strong>Tech Stack:</strong> SvelteKit, Turso, Cloudflare Workers,
                  Cloudflare For SaaS
                </p>

                <div class="project-links">
                  <a
                    href="https://miloudi-mutli-tenancy.software/"
                    target="_blank"
                    class="project-button"
                  >
                    <span class="button-icon">🚀</span>
                    <span class="button-text">Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/ricin9/sveltekit-multi-tenancy"
                    target="_blank"
                    class="project-button"
                  >
                    <span class="button-icon">💻</span>
                    <span class="button-text">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project">
            <h3>Northwind REST API</h3>
            <div class="project-content">
              <div class="project-details">
                <p>
                  <strong>Description:</strong> Created a fully documented comprehensive
                  REST API for the Northwind database using best practices.
                </p>
                <p>
                  <strong>Key Features:</strong> CRUD operations, filter by any column
                  using any comparison operation including (not) in array, is (not)
                  null. Offset pagination, and multi-column sorting on all resources.
                  All input (json, query, params) and output is validated.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Hono.js, Drizzle ORM, Turso DB, Zod
                </p>
              </div>
            </div>
            <div class="project-links">
              <a
                href="https://northwind-api.miloudi.dev/"
                target="_blank"
                class="project-button"
              >
                <span class="button-icon">🚀</span>
                <span class="button-text">Live Demo</span>
              </a>
              <a
                href="https://github.com/ricin9/northwind-hono-api"
                target="_blank"
                class="project-button"
              >
                <span class="button-icon">💻</span>
                <span class="button-text">Source Code</span>
              </a>
            </div>
          </div>
          <div class="project">
            <h3>Cloudflare R2 Object Storage Integration</h3>
            <div class="project-content">
              <div class="project-details">
                <p>
                  <strong>Description:</strong> Using S3-compatiable object storage
                  to upload user files to cloud.
                </p>
                <p>
                  <strong>Key Features:</strong> Simple and multipart uploads using
                  presigned keys, no bandwidth costs on the server, and direct uploads
                  to the cloud. Max file size enforcement without expensive file
                  processing.
                </p>
                <p>
                  <strong>Tech Stack:</strong> SvelteKit, Cloudflare R2, AWS S3 SDK
                </p>
              </div>
            </div>
            <div class="project-links">
              <a
                href="https://sveltekit-r2-storage.miloudi.dev/"
                target="_blank"
                class="project-button"
              >
                <span class="button-icon">🚀</span>
                <span class="button-text">Live Demo</span>
              </a>
              <a
                href="https://github.com/ricin9/sveltekit-r2-storage"
                target="_blank"
                class="project-button"
              >
                <span class="button-icon">💻</span>
                <span class="button-text">Source Code</span>
              </a>
            </div>
          </div>
        </section>

        <section id="books">
          <h2>Recommended Books & Key Takeaways</h2>
          <div class="book">
            <h3>SQL Antipatterns</h3>
            <p>
              Most helpful book on this list, discusses various SQL
              anti-patterns and why we should avoid them, the author does not
              immediately discard the anti-patterns presented but shows
              situations where they might be applicable because real-world
              projects can have nuance, and presents multiple solutions and
              alternatives with straightforward explanation and insight.
            </p>
          </div>
          <div class="book">
            <h3>Database Design for Mere Mortals</h3>
            <p>
              The structured approach to database design and the methodology
              presented in this book has greatly influenced how I plan and
              implement data models.
            </p>
          </div>
          <div class="book">
            <h3>The Pragmatic Programmer</h3>
            <p>Essentiel read for anyone involved in software engineering.</p>
          </div>
          <div class="book">
            <h3>Clean Code</h3>
            <p>
              While I don't follow every rule dogmatically, the concepts of
              writing readable and maintainable code have significantly improved
              the quality of my work.
            </p>
          </div>
          <div class="book">
            <h3>Clean Architecture</h3>
            <p>
              The ideas about separation of concerns and dependency management
              have been particularly useful in designing the structure of my
              larger projects, like the multi-tenant SaaS platform.
            </p>
          </div>
        </section>

        <section id="contact">
          <h2>Get in Touch</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
          <div class="contact-links">
            <a href="mailto:m.miloudi1357@gmail.com" target="_blank">Email</a>
            <a
              href="https://www.linkedin.com/in/miloudi-mohamed"
              target="_blank">LinkedIn</a
            >
            <a href="https://github.com/ricin9" target="_blank">GitHub</a>
          </div>
        </section>
      </main>
    </div>
  </body>
</html>
