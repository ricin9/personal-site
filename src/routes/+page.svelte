<head>
  <title>Mohamed Miloudi</title>
</head>
<body>
  <nav class="nav-bar">
    <div class="nav-container">
      <a href="/" class="nav-logo">Mohamed Miloudi</a>
      <div class="nav-links">
        <a href="#info" class="nav-link">Info</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#books" class="nav-link">Books</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
    </div>
  </nav>

  <div class="container">
    <span class="section-anchor" id="info"></span>
    <section>
      <h2 class="section-title">Info</h2>
      <div class="info-section">
        <p>
          I'm <strong>Mohamed Miloudi</strong>, a 22-year-old final-year
          Computer Science student from Algeria. My passion lies in developing
          efficient and scalable backend systems, with a strong interest in
          full-stack development. I'm always exploring new technologies and
          working on projects that challenge me to learn and grow as a
          developer.
        </p>
      </div>
    </section>

    <!-- <span class="section-anchor" id="projects"></span>
    <section>
      <h2 class="section-title">Projects</h2>
      <div class="project-item">
        <h3 class="project-title">Innovium (2023)</h3>
        <p class="project-description">
          A web app that digitalizes the startup or patent application process
          for end-of-study projects, following the recent Algerian Ministerial
          Order No. 1275.
        </p>
        <p><em>Details coming soon...</em></p>
      </div>
    </section> -->

    <span class="section-anchor" id="projects"></span>
    <section>
      <h2 class="section-title">Showcase Projects</h2>
      <div class="demo-item">
        <h3 class="demo-title">Multi-Tenant SaaS Platform</h3>
        <p class="demo-description">
          Developed a robust multi-tenancy solution for SaaS applications with
          isolated databases per tenant, custom domain support, and automatic
          SSL. Built with: Sveltekit, Turso, Cloudflare Workers, Cloudflare For
          SaaS. Features include unique subdomains, user management, and
          database portability, enhancing security and flexibility for
          enterprise clients.
        </p>
        <p>Documentation and tutorial coming soon.</p>
        <a
          href="https://miloudi-mutli-tenancy.software/"
          class="project-link"
          target="_blank">Demo</a
        >
        <a
          href="https://github.com/ricin9/sveltekit-multi-tenancy"
          class="source-link"
          target="_blank">Source Code</a
        >
      </div>
      <div class="demo-item">
        <h3 class="demo-title">Northwind REST Api</h3>
        <p class="demo-description">
          Implemented REST Api for Northwind sample db including create update
          delete operations with various constraints + filter pagination and
          sorting on all resources. Stack : Hono.js, Drizzle ORM, Turso DB. Deployed on
          Cloudflare Workers.
        </p>
        <a
          href="https://northwind-api.miloudi.dev/"
          class="project-link"
          target="_blank">Demo</a
        >
        <a
          href="https://github.com/ricin9/northwind-hono-api"
          class="source-link"
          target="_blank">Source Code</a
        >
      </div>
      <div class="demo-item">
        <h3 class="demo-title">Cloudflare R2 Object Storage</h3>
        <p class="demo-description">
          Using S3-compatible object storage with SvelteKit for simple and
          multipart uploads using presigned keys.
        </p>
        <a
          href="https://sveltekit-r2-storage.miloudi.dev/"
          class="project-link"
          target="_blank">Demo</a
        >
        <a
          href="https://github.com/ricin9/sveltekit-r2-storage"
          class="source-link"
          target="_blank">Source Code</a
        >
      </div>
      <div class="demo-item">
        <h3 class="demo-title">Passwordless Login</h3>
        <p class="demo-description">
          Implementing passwordless login through magic links sent by email,
          made with SvelteKit, Cloudflare Pages, and Turso DB (libsql).
        </p>
        <a
          href="https://passwordless-login.miloudi.dev/"
          class="project-link"
          target="_blank">Demo</a
        >
        <a
          href="https://github.com/ricin9/sveltekit-passwordless-login"
          class="source-link"
          target="_blank">Source Code</a
        >
      </div>
      <div class="demo-item">
        <h3 class="demo-title">TOTP Login Flow</h3>
        <p class="demo-description">
          Login flow using time-based one-time passwords (TOTP) instead of
          permanent passwords, made with SvelteKit and Turso DB.
        </p>
        <a
          href="https://totp-login.miloudi.dev"
          class="project-link"
          target="_blank">Demo</a
        >
        <a
          href="https://github.com/ricin9/sveltekit-totp-login"
          class="source-link"
          target="_blank">Source Code</a
        >
      </div>
    </section>

    <span class="section-anchor" id="books"></span>
    <section>
      <h2 class="section-title">Books</h2>
      <div class="book-list">
        <div class="book-item">
          <div class="book-title">SQL Antipatterns</div>
          <p>
            Very helpful in understanding common mistakes in database design.
          </p>
        </div>
        <div class="book-item">
          <div class="book-title">Database Design for Mere Mortals</div>
          <p>Beginner-friendly, helps you establish a robust methodology.</p>
        </div>
        <div class="book-item">
          <div class="book-title">The Pragmatic Programmer</div>
          <p>Essential lessons for practical programming.</p>
        </div>
        <div class="book-item">
          <div class="book-title">Clean Code</div>
          <p>
            Guidelines for writing maintainable, and clean code, <a
              href="https://www.youtube.com/watch?v=OtozASk68Os"
              target="_blank">but don't take every rule too literally</a
            >—adapt them to your project's needs.
          </p>
        </div>
        <div class="book-item">
          <div class="book-title">Clean Architecture</div>
          <p>
            Same as previous books but about building scalable and modular
            systems.
          </p>
        </div>
      </div>
    </section>

    <span class="section-anchor" id="contact"></span>
    <section>
      <h2 class="section-title">Contact</h2>
      <p>Feel free to reach out via email or connect on LinkedIn:</p>
      <div class="contact-links">
        <a href="mailto:m.miloudi1357@gmail.com" class="contact-link">Email</a>
        <a
          href="https://www.linkedin.com/in/miloudi-mohamed"
          target="_blank"
          class="contact-link">LinkedIn</a
        >
      </div>
    </section>
  </div>
</body>

<style>
  :root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --background-color: #f5f7fa;
    --text-color: #34495e;
    --accent-color: #e74c3c;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  h1,
  h2,
  h3 {
    font-family: "Montserrat", sans-serif;
    color: var(--secondary-color);
  }

  .nav-bar {
    background-color: var(--secondary-color);
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .nav-logo {
    color: var(--background-color);
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }

  .nav-link {
    color: var(--background-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: var(--primary-color);
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 20px;
    border-bottom: 3px solid var(--primary-color);
    padding-bottom: 10px;
  }

  .info-section {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 15px;
  }

  .project-item,
  .demo-item {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .project-title,
  .demo-title {
    font-size: 1.3rem;
    color: var(--primary-color);
    margin-bottom: 10px;
  }

  .project-description,
  .demo-description {
    margin-bottom: 15px;
  }

  .project-link,
  .source-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
    margin-right: 15px;
    transition: color 0.3s ease;
  }

  .project-link:hover,
  .source-link:hover {
    color: var(--accent-color);
  }

  .book-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .book-item {
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .book-title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .contact-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }

  .contact-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .contact-link:hover {
    background-color: var(--accent-color);
  }

  .section-anchor {
    display: block;
    position: relative;
    top: -80px;
    visibility: hidden;
  }

  @media (max-width: 600px) {
    .nav-container {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-links {
      margin-top: 10px;
    }

    .book-list {
      grid-template-columns: 1fr;
    }

    .section-anchor {
      top: -120px;
    }
  }
</style>
