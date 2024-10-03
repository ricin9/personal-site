<svelte:head>
  <title>Mohamed Miloudi - Développeur Full-Stack</title>
  <meta
    name="description"
    content="Mohamed Miloudi - Développeur Full Stack | Résolveur de problèmes | Passionné de technologie"
  />
  <meta
    name="keywords"
    content="Développeur Full-Stack, Développeur web, Svelte, SvelteKit, React, NestJs, Golang, TailwindCSS, HTMX, Cloudflare Workers, Vercel"
  />
  <meta
    property="og:title"
    content="Mohamed Miloudi - Développeur Full-Stack"
  />
  <meta
    property="og:description"
    content="Mohamed Miloudi - Développeur Full Stack | Résolveur de problèmes | Passionné de technologie"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://miloudi.dev/fr" />
  <meta property="og:image" content="https://miloudi.dev/me.jpg" />
  <meta property="og:site_name" content="Mohamed Miloudi" />
  <meta property="og:locale" content="fr_FR" />
</svelte:head>

<div class="container">
  <header>
    <h1>Mohamed Miloudi</h1>
    <p>
      Développeur Full Stack | Résolveur de problèmes | Passionné de technologie
    </p>
    <nav>
      <a href="#info">À propos</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
      <a href="#books">Livres</a>
      <a href="#contact">Contact</a>
      <a href="/en" lang="en" hreflang="en">English Version</a>
    </nav>
  </header>

  <main>
    <section id="info">
      <h2>À propos de moi</h2>
      <p>
        Bonjour, je suis Mohamed Miloudi, un étudiant algérien de 22 ans en
        dernière année d'informatique. En tant que développeur web full-stack,
        je suis passionné par la création de systèmes backend efficaces et
        évolutifs, ainsi que par la réalisation de solutions full-stack sans
        faille. Mon portfolio présente une gamme de projets et de démonstrations
        qui reflètent mes compétences et mon enthousiasme pour le développement.
      </p>
      <br />
      <p>
        J'explore continuellement de nouvelles technologies et travaille sur des
        projets qui me poussent à grandir. Mon objectif est de contribuer à des
        projets innovants qui repoussent les limites du développement web.
      </p>
    </section>

    <section id="skills">
      <h2>Compétences & Expertise</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3>Langages</h3>
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
          <h3>Bases de données</h3>
          <ul class="skill-list">
            <li class="skill-item">PostgreSQL</li>
            <li class="skill-item">SQLite</li>
            <li class="skill-item">Redis</li>
            <li class="skill-item">MongoDB</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Outils & Autres</h3>
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
      <h2>Projets</h2>
      <div class="project">
        <h3>Application de chat en temps réel</h3>
        <div class="project-content">
          <div class="project-details">
            <p>
              <strong>Description :</strong> Développement d'une application de messagerie
              en temps réel évolutive, performante et moderne qui prend en charge
              les salons avec rôle d'administrateur, l'historique des messages et
              l'authentification des utilisateurs.
            </p>
            <p>
              <strong>Fonctionnalités clés :</strong>
              Messagerie en temps réel basée sur des salons avec rôle d'administrateur,
              historique de chat persistant, compteur persistant de messages non
              lus pour chaque salon, l'administrateur peut ajouter, expulser, promouvoir,
              rétrograder un membre, statut en ligne pour les utilisateurs, design
              responsive, et plus encore...
            </p>
            <p>
              <strong>Stack technique :</strong> Golang, Fiber, Redis, Websockets,
              HTMX, TailwindCSS, Docker.
            </p>

            <div class="project-links">
              <a
                href="https://chat.miloudi.dev/"
                target="_blank"
                class="project-button"
              >
                <span class="button-icon">🚀</span>
                <span class="button-text">Démo en direct</span>
              </a>
              <a
                href="https://github.com/ricin9/chat-redis-pubsub"
                target="_blank"
                class="project-button"
              >
                <span class="button-icon">💻</span>
                <span class="button-text">Code source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="project">
        <h3>Plateforme SaaS multi-locataires</h3>
        <div class="project-content">
          <div class="project-details">
            <p>
              <strong>Description :</strong> Développement d'une solution multi-locataires
              robuste pour les applications SaaS destinées aux clients entreprises.
            </p>
            <p>
              <strong>Fonctionnalités clés :</strong> Bases de données isolées par
              locataire avec prise en charge des sauvegardes locales, sous-domaine
              unique par locataire, prise en charge de domaine personnalisé avec
              SSL automatique.
            </p>
            <p>
              <strong>Stack technique :</strong> SvelteKit, Turso, Cloudflare Workers,
              Cloudflare For SaaS
            </p>

            <div class="project-links">
              <a
                href="https://miloudi-mutli-tenancy.software/"
                target="_blank"
                class="project-button"
              >
                <span class="button-icon">🚀</span>
                <span class="button-text">Démo en direct</span>
              </a>
              <a
                href="https://github.com/ricin9/sveltekit-multi-tenancy"
                target="_blank"
                class="project-button"
              >
                <span class="button-icon">💻</span>
                <span class="button-text">Code source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="project">
        <h3>API REST Northwind</h3>
        <div class="project-content">
          <div class="project-details">
            <p>
              <strong>Description :</strong> Création d'une API REST complète et
              entièrement documentée pour la base de données Northwind en utilisant
              les meilleures pratiques.
            </p>
            <p>
              <strong>Fonctionnalités clés :</strong> Opérations CRUD, filtrage par
              n'importe quelle colonne en utilisant n'importe quelle opération de
              comparaison, y compris (not) in array, is (not) null. Pagination par
              décalage et tri multi-colonnes sur toutes les ressources. Toutes les
              entrées (json, query, params) et sorties sont validées.
            </p>
            <p>
              <strong>Stack technique :</strong> Hono.js, Drizzle ORM, Turso DB,
              Zod
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
            <span class="button-text">Démo en direct</span>
          </a>
          <a
            href="https://github.com/ricin9/northwind-hono-api"
            target="_blank"
            class="project-button"
          >
            <span class="button-icon">💻</span>
            <span class="button-text">Code source</span>
          </a>
        </div>
      </div>
      <div class="project">
        <h3>Intégration du stockage d'objets Cloudflare R2</h3>
        <div class="project-content">
          <div class="project-details">
            <p>
              <strong>Description :</strong> Utilisation du stockage d'objets compatible
              S3 pour télécharger des fichiers utilisateurs vers le cloud.
            </p>
            <p>
              <strong>Fonctionnalités clés :</strong> Téléchargements simples et
              en plusieurs parties à l'aide de clés pré-signées, aucun coût de bande
              passante sur le serveur et téléchargements directs vers le cloud. Application
              de la taille maximale des fichiers sans traitement coûteux des fichiers.
            </p>
            <p>
              <strong>Stack technique :</strong> SvelteKit, Cloudflare R2, AWS S3
              SDK
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
            <span class="button-text">Démo en direct</span>
          </a>
          <a
            href="https://github.com/ricin9/sveltekit-r2-storage"
            target="_blank"
            class="project-button"
          >
            <span class="button-icon">💻</span>
            <span class="button-text">Code source</span>
          </a>
        </div>
      </div>
    </section>

    <section id="books">
      <h2>Livres recommandés & Points clés</h2>
      <div class="book">
        <h3>SQL Antipatterns</h3>
        <p>
          Le livre le plus utile de cette liste, il traite de divers
          antipatterns SQL et explique pourquoi nous devrions les éviter.
          L'auteur ne rejette pas immédiatement les antipatterns présentés, mais
          montre des situations où ils pourraient être applicables car les
          projets du monde réel peuvent avoir des nuances, et présente plusieurs
          solutions et alternatives avec des explications claires et
          perspicaces.
        </p>
      </div>
      <div class="book">
        <h3>Database Design for Mere Mortals</h3>
        <p>
          L'approche structurée de la conception de bases de données et la
          méthodologie présentée dans ce livre ont grandement influencé ma façon
          de planifier et de mettre en œuvre des modèles de données.
        </p>
      </div>
      <div class="book">
        <h3>The Pragmatic Programmer</h3>
        <p>
          Lecture essentielle pour toute personne impliquée dans l'ingénierie
          logicielle.
        </p>
      </div>
      <div class="book">
        <h3>Clean Code</h3>
        <p>
          Bien que je ne suive pas chaque règle de manière dogmatique, les
          concepts d'écriture de code lisible et maintenable ont
          considérablement amélioré la qualité de mon travail.
        </p>
      </div>
      <div class="book">
        <h3>Clean Architecture</h3>
        <p>
          Les idées sur la séparation des préoccupations et la gestion des
          dépendances ont été particulièrement utiles pour concevoir la
          structure de mes projets plus importants, comme la plateforme SaaS
          multi-locataires.
        </p>
      </div>
    </section>

    <section id="contact">
      <h2>Contactez-moi</h2>
      <p>
        Je suis toujours ouvert à la discussion de nouveaux projets, d'idées
        créatives ou d'opportunités de faire partie de vos visions. N'hésitez
        pas à me contacter !
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
