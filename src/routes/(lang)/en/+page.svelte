<svelte:head>
  <title>Mohamed Miloudi - Full Stack Developer</title>
  <meta
    name="description"
    content="Mohamed Miloudi - Full Stack Developer | Problem Solver | Tech Enthusiast"
  />
  <meta
    name="keywords"
    content="Full Stack Developer, Web Developer, Svelte, SvelteKit, React, NestJs, Golang, TailwindCSS, HTMX, Cloudflare Workers, Vercel"
  />

  <meta property="og:title" content="Mohamed Miloudi - Full Stack Developer" />
  <meta
    property="og:description"
    content="Mohamed Miloudi - Full Stack Developer | Problem Solver | Tech Enthusiast"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://miloudi.dev/en" />
  <meta property="og:image" content="https://miloudi.dev/me.jpg" />
  <meta property="og:site_name" content="Mohamed Miloudi" />
  <meta property="og:locale" content="en_US" />
</svelte:head>

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
      <a href="/fr" lang="fr" hreflang="fr">Version Français</a>
    </nav>
  </header>

  <main>
    <section id="info">
      <h2>About Me</h2>
      <p>
        Hi, I'm Mohamed Miloudi, a 22-year-old final-year Computer Science
        student from Algeria. As a full-stack web developer, I have a passion
        for building efficient, scalable backend systems and creating seamless
        full-stack solutions. My portfolio showcases a range of projects and
        demos that reflect my skills and enthusiasm for development.
      </p>
      <br />
      <p>
        I'm continuously exploring new technologies and working on projects that
        challenge me to grow. My goal is to contribute to innovative projects
        that push the boundaries of web development.
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
              <strong>Description:</strong> Developed a scalable, performant and
              modern real-time messaging app that supports rooms with admin role,
              message history, and user authentication.
            </p>
            <p>
              <strong>Key Features:</strong>
              Real-time room-based with admin role messaging, Persistent chat history,
              Persistant unread message count for each room, Admin can add, kick,
              promote, demote a member, Online status for users, Responsive design,
              and more ...
            </p>
            <p>
              <strong>Tech Stack:</strong> Golang, Fiber, Redis, Websockets, HTMX,
              TailwindCSS, Docker.
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
              <strong>Description:</strong> Developed a robust multi-tenancy solution
              for SaaS applications targeted at enterprise clients.
            </p>
            <p>
              <strong>Key Features:</strong> Isolated databases per tenant with support
              of local backups, unique subdomain per tenant, custom vanity domain
              support with automatic SSL.
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
              using any comparison operation including (not) in array, is (not) null.
              Offset pagination, and multi-column sorting on all resources. All input
              (json, query, params) and output is validated.
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
              <strong>Description:</strong> Using S3-compatiable object storage to
              upload user files to cloud.
            </p>
            <p>
              <strong>Key Features:</strong> Simple and multipart uploads using presigned
              keys, no bandwidth costs on the server, and direct uploads to the cloud.
              Max file size enforcement without expensive file processing.
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
          Most helpful book on this list, discusses various SQL anti-patterns
          and why we should avoid them, the author does not immediately discard
          the anti-patterns presented but shows situations where they might be
          applicable because real-world projects can have nuance, and presents
          multiple solutions and alternatives with straightforward explanation
          and insight.
        </p>
      </div>
      <div class="book">
        <h3>Database Design for Mere Mortals</h3>
        <p>
          The structured approach to database design and the methodology
          presented in this book has greatly influenced how I plan and implement
          data models.
        </p>
      </div>
      <div class="book">
        <h3>The Pragmatic Programmer</h3>
        <p>Essentiel read for anyone involved in software engineering.</p>
      </div>
      <div class="book">
        <h3>Clean Code</h3>
        <p>
          While I don't follow every rule dogmatically, the concepts of writing
          readable and maintainable code have significantly improved the quality
          of my work.
        </p>
      </div>
      <div class="book">
        <h3>Clean Architecture</h3>
        <p>
          The ideas about separation of concerns and dependency management have
          been particularly useful in designing the structure of my larger
          projects, like the multi-tenant SaaS platform.
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
        <a href="https://www.linkedin.com/in/miloudi-mohamed" target="_blank"
          >LinkedIn</a
        >
        <a href="https://github.com/ricin9" target="_blank">GitHub</a>
      </div>
    </section>
  </main>
</div>
