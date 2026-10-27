import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { tutorials } from "./tutorials";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <a className="brand" href="#accueil" onClick={closeMenu}>
          <span className="brand-icon">
            <Code2 size={23} />
          </span>
          <span>
            Web<span className="brand-accent">Start</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`}>
          <a href="#accueil" onClick={closeMenu}>
            Accueil
          </a>
          <a href="#parcours" onClick={closeMenu}>
            Le parcours
          </a>
          <a href="#tutoriels" onClick={closeMenu}>
            Tutoriels
          </a>
          <a href="#apropos" onClick={closeMenu}>
            À propos
          </a>
          <a className="nav-cta" href="#tutoriels" onClick={closeMenu}>
            Commencer <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="accueil">
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={15} />
              <span>TON AVENTURE WEB COMMENCE ICI</span>
            </div>

            <h1>
              Le web, c'est plus simple
              <br />
              <span>que tu ne le penses.</span>
            </h1>

            <p className="hero-description">
              Apprends à créer tes premières pages web avec des tutoriels
              accessibles, des exemples concrets et des exercices pratiques.
              À ton rythme, étape par étape.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#tutoriels">
                Découvrir les tutoriels <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#parcours">
                <Play size={17} /> Explorer le parcours
              </a>
            </div>

            <div className="hero-note">
              <span className="avatar-stack">
                <span>H</span>
                <span>C</span>
                <span>J</span>
              </span>
              <p>
                <strong>3 technologies essentielles</strong>
                <br />
                HTML, CSS et JavaScript
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustration du code web">
            <div className="visual-glow" />

            <div className="floating-badge badge-top">
              <span className="badge-dot" />
              Apprentissage pratique
            </div>

            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="window-filename">index.html</span>
                <Code2 size={18} />
              </div>

              <div className="code-content">
                <div>
                  <span className="line-number">01</span>{" "}
                  <span className="code-purple">&lt;!DOCTYPE</span>{" "}
                  <span className="code-blue">html</span>
                  <span className="code-purple">&gt;</span>
                </div>
                <div>
                  <span className="line-number">02</span>{" "}
                  <span className="code-purple">&lt;html&gt;</span>
                </div>
                <div>
                  <span className="line-number">03</span>{" "}
                  &nbsp;&nbsp;
                  <span className="code-purple">&lt;body&gt;</span>
                </div>
                <div className="code-highlight">
                  <span className="line-number">04</span>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-purple">&lt;h1&gt;</span>
                </div>
                <div className="code-highlight">
                  <span className="line-number">05</span>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">Hello, world!</span>
                </div>
                <div className="code-highlight">
                  <span className="line-number">06</span>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-purple">&lt;/h1&gt;</span>
                </div>
                <div>
                  <span className="line-number">07</span>{" "}
                  &nbsp;&nbsp;
                  <span className="code-purple">&lt;/body&gt;</span>
                </div>
                <div>
                  <span className="line-number">08</span>{" "}
                  <span className="code-purple">&lt;/html&gt;</span>
                </div>
              </div>

              <div className="code-footer">
                <span className="live-dot" /> Ton premier code, bientôt le tien.
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <span className="badge-icon">
                <GraduationCap size={19} />
              </span>
              <span>
                <strong>Débutant bienvenu</strong>
                <br />
                Aucune expérience requise
              </span>
            </div>
          </div>
        </section>

        <section
          className="stats-strip section-container"
          aria-label="Présentation du parcours"
        >
          <div className="stat-item">
            <span className="stat-icon">
              <BookOpen size={21} />
            </span>
            <div>
              <strong>{tutorials.length}</strong>
              <span>tutoriels prévus</span>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon">
              <Code2 size={21} />
            </span>
            <div>
              <strong>3</strong>
              <span>technologies web</span>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon">
              <GraduationCap size={21} />
            </span>
            <div>
              <strong>100 %</strong>
              <span>accessible aux débutants</span>
            </div>
          </div>
        </section>

        <section className="learning-section section-container" id="parcours">
          <div className="section-heading">
            <div>
              <span className="section-kicker">UN PARCOURS GUIDÉ</span>
              <h2>Apprends en construisant.</h2>
              <p>
                Les bonnes bases, dans le bon ordre, sans te compliquer la vie.
              </p>
            </div>

            <a className="text-link" href="#tutoriels">
              Voir les tutoriels <ArrowRight size={17} />
            </a>
          </div>

          <div className="technology-grid">
            <article className="technology-card technology-html">
              <span className="technology-symbol">&lt;/&gt;</span>
              <span className="technology-label">ÉTAPE 01</span>
              <h3>HTML</h3>
              <p>
                Construis la structure de tes pages et organise ton contenu.
              </p>
              <a href="#tutoriels">
                Découvrir HTML <ArrowRight size={16} />
              </a>
            </article>

            <article className="technology-card technology-css">
              <span className="technology-symbol">✳</span>
              <span className="technology-label">ÉTAPE 02</span>
              <h3>CSS</h3>
              <p>
                Ajoute des couleurs, du style et une mise en page harmonieuse.
              </p>
              <a href="#tutoriels">
                Découvrir CSS <ArrowRight size={16} />
              </a>
            </article>

            <article className="technology-card technology-js">
              <span className="technology-symbol">JS</span>
              <span className="technology-label">ÉTAPE 03</span>
              <h3>JavaScript</h3>
              <p>
                Rends tes pages interactives et donne vie à tes idées.
              </p>
              <a href="#tutoriels">
                Découvrir JavaScript <ArrowRight size={16} />
              </a>
            </article>
          </div>
        </section>

        <section className="tutorial-section" id="tutoriels">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">LA BIBLIOTHÈQUE WEBSTART</span>
                <h2>Le prochain pas commence ici.</h2>
                <p>
                  De petites leçons pour progresser à ton propre rythme.
                </p>
              </div>

              <span className="catalog-count">
                {tutorials.length} contenus prévus
              </span>
            </div>

            <div className="tutorial-grid">
              {tutorials.map((tutorial) => {
                const category = tutorial.technology;
                const color = category.includes("HTML")
                  ? "blue"
                  : category.includes("CSS")
                    ? "pink"
                    : "purple";

                return (
                  <article className="tutorial-card" key={tutorial.id}>
                    <div className={`tutorial-art art-${color}`}>
                      <img
                        className="tutorial-cover"
                        src={tutorial.cover}
                        alt={`Couverture du tutoriel : ${tutorial.title}`}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />

                      <span className="tutorial-number">
                        {String(tutorial.id).padStart(2, "0")}
                      </span>

                      <span className="tutorial-status">{tutorial.status}</span>
                    </div>

                    <div className="tutorial-body">
                      <div className="tutorial-meta">
                        <span>{category}</span>
                        <span>{tutorial.duration}</span>
                      </div>

                      <h3>{tutorial.title}</h3>
                      <p>{tutorial.description}</p>

                      <div className="tutorial-bottom">
                        <span className="level-tag">{tutorial.level}</span>
                        <span className="coming-soon">
                          Bientôt disponible
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="catalog-note">
              Les tutoriels seront ajoutés au fur et à mesure de leur création.
            </p>
          </div>
        </section>

        <section className="about-section section-container" id="apropos">
          <div className="about-icon">
            <Sparkles size={27} />
          </div>

          <div>
            <span className="section-kicker">À PROPOS DE WEBSTART</span>
            <h2>Moins de théorie, plus de pratique.</h2>
            <p>
              WebStart est une plateforme pédagogique conçue pour découvrir
              le développement web à travers des formats variés : vidéos,
              animations, guides illustrés et exercices.
            </p>
          </div>

          <a className="button button-primary" href="#tutoriels">
            Faire mes premiers pas <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-container">
          <a className="brand footer-brand" href="#accueil">
            <span className="brand-icon">
              <Code2 size={22} />
            </span>
            <span>
              Web<span className="brand-accent">Start</span>
            </span>
          </a>

          <p>Les premiers pas vers le développement web.</p>
          <a href="#accueil" className="back-to-top">
            Retour en haut ↑
          </a>
        </div>

        <div className="footer-bottom section-container">
          <span>© 2026 WebStart · Projet pédagogique</span>
          <span>Conçu pour apprendre, pensé pour débuter.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;