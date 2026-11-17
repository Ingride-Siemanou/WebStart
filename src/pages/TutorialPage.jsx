
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { tutorials } from "../tutorials";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  Lightbulb,
  Play,
  Smartphone,
  Monitor,
  Palette,
  MousePointerClick,
  Download,
} from "lucide-react";
import "./TutorialPage.css";

const lessons = {
  "premiere-page-html": {
    objectives: [
      "Comprendre le rôle du HTML.",
      "Reconnaître les principales balises.",
      "Créer un titre et un paragraphe.",
      "Construire une première page web.",
    ],
    video: "https://www.youtube.com/embed/UB1O30fR-EE",
    steps: [
      {
        title: "Créer ton fichier",
        text: "Crée un dossier pour ton projet et ajoute un fichier nommé index.html.",
      },
      {
        title: "Écrire la structure",
        text: "Ajoute les balises HTML qui organisent ta page.",
      },
      {
        title: "Ajouter du contenu",
        text: "Insère un titre, des paragraphes et une section de présentation.",
      },
      {
        title: "Afficher ta page",
        text: "Ouvre ton fichier dans un navigateur pour découvrir le résultat.",
      },
    ],
    code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ma première page</title>
</head>
<body>
  <h1>Bonjour, je m'appelle Amina !</h1>
  <p>Je découvre le développement web.</p>
  <h2>Mes objectifs</h2>
  <p>Apprendre à créer mon premier site.</p>
</body>
</html>`,
    exercise: [
      "Remplace Amina par ton prénom.",
      "Ajoute un titre qui te présente.",
      "Écris un paragraphe sur tes passions.",
      "Ajoute une section sur tes objectifs.",
    ],
  },

  "html-css-javascript": {
    objectives: [
      "Comprendre le rôle du HTML.",
      "Découvrir le fonctionnement du CSS.",
      "Comprendre le rôle de JavaScript.",
      "Savoir comment les trois technologies travaillent ensemble.",
    ],
    parts: [
      {
        number: "01",
        title: "HTML — La structure",
        text: "HTML organise le contenu d'une page : titres, paragraphes, images et boutons.",
        icon: "html",
      },
      {
        number: "02",
        title: "CSS — Le design",
        text: "CSS transforme l'apparence de la page avec les couleurs, les polices, les espacements et les animations.",
        icon: "css",
      },
      {
        number: "03",
        title: "JavaScript — L'interaction",
        text: "JavaScript permet de réagir aux clics, de modifier les contenus et de rendre la page dynamique.",
        icon: "javascript",
      },
    ],
    code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Les trois technologies</title>
  <style>
    .carte {
      padding: 24px;
      background: #eff6ff;
      border-radius: 16px;
    }

    button {
      background: #2563eb;
      color: white;
      padding: 12px;
      border: none;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="carte">
    <h1>Bonjour !</h1>
    <p id="message">Je découvre le web.</p>
    <button onclick="changerTexte()">
      Clique ici
    </button>
  </div>

  <script>
    function changerTexte() {
      document.getElementById("message").textContent =
        "Bravo, ça fonctionne !";
    }
  </script>
</body>
</html>`,
  },

  "bases-css": {
    objectives: [
      "Comprendre le rôle du CSS.",
      "Modifier les couleurs et les polices.",
      "Utiliser les marges et les espacements.",
      "Arrondir les coins et styliser un bouton.",
    ],
    code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Carte stylisée</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f1f5f9;
      padding: 24px;
    }

    .carte {
      max-width: 320px;
      padding: 24px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 16px #00000012;
    }

    h1 {
      color: #1d4ed8;
    }

    button {
      padding: 10px 16px;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="carte">
    <h1>Mon profil</h1>
    <p>J'apprends à créer des sites web.</p>
    <button>Me découvrir</button>
  </div>
</body>
</html>`,
    properties: [
      {
        name: "color",
        text: "Change la couleur du texte.",
      },
      {
        name: "padding",
        text: "Ajoute de l'espace à l'intérieur d'un élément.",
      },
      {
        name: "border-radius",
        text: "Arrondit les coins d'un élément.",
      },
      {
        name: "box-shadow",
        text: "Ajoute une ombre autour de la carte.",
      },
    ],
    exercise: [
      "Choisis une nouvelle couleur pour le titre.",
      "Modifie la couleur de fond de la page.",
      "Augmente l'arrondi des coins de la carte.",
      "Ajoute une ombre ou modifie les espacements.",
    ],
  },

  "interactions-javascript": {
    objectives: [
      "Comprendre le rôle de JavaScript.",
      "Découvrir les variables et les fonctions.",
      "Comprendre les événements déclenchés par un clic.",
      "Modifier le contenu d'une page.",
    ],
    code: `const bouton = document.getElementById("mon-bouton");
const message = document.getElementById("message");

bouton.addEventListener("click", function () {
  message.textContent = "Bravo ! Tu as créé une interaction !";
});`,
    exercise: [
      "Modifie le message affiché avant le clic.",
      "Change le message qui apparaît après le clic.",
      "Personnalise le texte du bouton.",
      "Teste ton interaction dans le navigateur.",
    ],
  },

  "site-responsive": {
    objectives: [
      "Comprendre le responsive design.",
      "Découvrir les media queries.",
      "Adapter une grille aux petits écrans.",
      "Améliorer l'expérience mobile.",
    ],
    code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1">
  <title>Grille responsive</title>
  <style>
    .grille {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .carte {
      padding: 24px;
      background: #dbeafe;
      border-radius: 12px;
    }

    @media (max-width: 600px) {
      .grille {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <h1>Mes cartes</h1>
  <div class="grille">
    <div class="carte">HTML</div>
    <div class="carte">CSS</div>
    <div class="carte">JavaScript</div>
  </div>
</body>
</html>`,
    exercise: [
      "Ajoute une quatrième carte.",
      "Modifie la couleur des cartes.",
      "Teste la page en réduisant la largeur du navigateur.",
      "Essaie de modifier la valeur de la media query.",
    ],
  },
};

function SectionTitle({ number, children }) {
  return (
    <>
      <span className="lesson-section-label">{number}</span>
      <h2>{children}</h2>
    </>
  );
}

function CodeExample({ code, filename = "index.html" }) {
  return (
    <div className="lesson-code">
      <div className="lesson-code-header">
        <div className="lesson-code-dots">
          <span />
          <span />
          <span />
        </div>
        <span>{filename}</span>
        <Code2 size={17} />
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Objectives({ items }) {
  return (
    <div className="lesson-objectives">
      {items.map((item) => (
        <div className="lesson-objective" key={item}>
          <CheckCircle2 size={20} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function Exercise({ items, intro }) {
  return (
    <section className="lesson-section lesson-exercise">
      <SectionTitle number="À TON TOUR">
        Mets tes connaissances en pratique
      </SectionTitle>

      <p>{intro}</p>

      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <div className="lesson-tip">
        <span className="lesson-tip-icon">
          <Lightbulb size={22} />
        </span>
        <div>
          <strong>Petit conseil</strong>
          <p>
            Modifie une chose à la fois, enregistre ton fichier et
            actualise le navigateur pour observer le résultat.
          </p>
        </div>
      </div>
    </section>
  );
}

function HtmlLesson({ lesson }) {
  return (
    <>
      <section className="lesson-section">
        <SectionTitle number="01 — LES OBJECTIFS">
          À la fin de cette leçon, tu sauras…
        </SectionTitle>
        <Objectives items={lesson.objectives} />
      </section>

      <section className="lesson-section">
        <SectionTitle number="02 — DÉCOUVRIR">
          Qu'est-ce que le HTML ?
        </SectionTitle>
        <p>
          HTML signifie HyperText Markup Language. Il permet
          d'organiser le contenu d'une page web avec des titres,
          des paragraphes, des images et des liens.
        </p>
        <div className="lesson-tip">
          <Lightbulb size={22} />
          <p>
            Le HTML constitue la structure de ta page web.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <SectionTitle number="03 — LE TUTORIEL VIDÉO">
          Suis les étapes de création
        </SectionTitle>
        <p>
          Regarde la vidéo et reproduis les manipulations dans ton éditeur.
        </p>

        <div className="lesson-video">
          <iframe
            src={lesson.video}
            title="Tutoriel vidéo HTML"
            width="100%"
            height="420"
            allowFullScreen
          />
        </div>
      </section>

      <section className="lesson-section">
        <SectionTitle number="04 — LES ÉTAPES">
          Construis ta première page
        </SectionTitle>

        {lesson.steps.map((step) => (
          <div className="lesson-explanation" key={step.number || step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </section>

      <section className="lesson-section">
        <SectionTitle number="05 — EXEMPLE DE CODE">
          La structure de ta page
        </SectionTitle>
        <CodeExample code={lesson.code} />
      </section>

      <Exercise
        items={lesson.exercise}
        intro="Crée une page de présentation qui te ressemble."
      />
    </>
  );
}

function MotionLesson({ lesson }) {
  return (
    <>
      <section className="lesson-section">
        <SectionTitle number="01 — LES OBJECTIFS">
          Comprendre les trois technologies
        </SectionTitle>
        <Objectives items={lesson.objectives} />
      </section>

      <section className="lesson-section">
        <SectionTitle number="02 — LE MOTION DESIGN">
          Trois technologies, un seul site web
        </SectionTitle>

        <p>
          Découvre comment HTML, CSS et JavaScript travaillent ensemble
          pour construire une expérience web.
        </p>

        <div className="motion-grid">
          {lesson.parts.map((part) => (
            <div className="lesson-sidebar-card" key={part.number}>
              <span className="lesson-section-label">{part.number}</span>
              <h3>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <SectionTitle number="03 — EXEMPLE">
          Les trois technologies réunies
        </SectionTitle>
        <CodeExample code={lesson.code} />
      </section>

      <section className="lesson-section">
        <SectionTitle number="04 — RÉCAPITULATIF">
          Ce qu'il faut retenir
        </SectionTitle>
        <div className="lesson-explanation">
          <h3>HTML</h3>
          <p>Il construit la structure de la page.</p>
          <h3>CSS</h3>
          <p>Il donne son apparence à la page.</p>
          <h3>JavaScript</h3>
          <p>Il ajoute les interactions et le comportement.</p>
        </div>
      </section>
    </>
  );
}

function CssLesson({ lesson }) {
  return (
    <>
      <section className="lesson-section">
        <SectionTitle number="01 — LES OBJECTIFS">
          À la fin de cette leçon, tu sauras…
        </SectionTitle>
        <Objectives items={lesson.objectives} />
      </section>

      <section className="lesson-section">
        <SectionTitle number="02 — COMPRENDRE">
          Comment fonctionne le CSS ?
        </SectionTitle>

        <p>
          CSS signifie Cascading Style Sheets. Il permet de contrôler
          l'apparence des éléments HTML : couleurs, dimensions,
          typographie, espacements et disposition.
        </p>

        <div className="lesson-tip">
          <span className="lesson-tip-icon">
            <Lightbulb size={22} />
          </span>
          <div>
            <strong>À retenir</strong>
            <p>
              Une règle CSS associe un sélecteur à des propriétés.
              Exemple : h1 {"{"} color: blue; {"}"}.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <SectionTitle number="03 — PASSER À LA PRATIQUE">
          Donne du style à une carte
        </SectionTitle>

        <p>
          Le HTML crée la carte et le CSS la transforme visuellement.
          Voici un exemple à tester.
        </p>

        <CodeExample code={lesson.code} />

        <div className="lesson-explanation">
          <h3>Comprendre les éléments importants</h3>
          {lesson.properties.map((property) => (
            <div key={property.name}>
              <code>{property.name}</code>
              <p>{property.text}</p>
            </div>
          ))}
        </div>

        <div className="lesson-preview">
          <span className="lesson-preview-label">
            <Palette size={16} />
            APERÇU DU RÉSULTAT
          </span>
          <div className="lesson-preview-window">
            <div className="demo-card">
              <h2>Mon profil</h2>
              <p>J'apprends à créer des sites web.</p>
              <span className="demo-button">Me découvrir</span>
            </div>
          </div>
        </div>
      </section>

      <Exercise
        items={lesson.exercise}
        intro="Reprends la carte et modifie son apparence pour la personnaliser."
      />

      <section className="lesson-section">
        <SectionTitle number="05 — MODULE ILLUSTRÉ">
          Découvre le module complet sur CSS
        </SectionTitle>

        <p>
          Retrouve les 10 pages de notre module illustré pour
          approfondir les bases du CSS.
        </p>

        <div className="lesson-tip">
          <BookOpen size={22} />
          <p>
            Consulte le document ou télécharge-le pour le lire plus tard.
          </p>
        </div>

        <div className="pdf-actions">
          <a
            href="/documents/module-css.pdf"
            target="_blank"
            rel="noreferrer"
            className="lesson-button"
          >
            <BookOpen size={17} />
            Consulter le module CSS
          </a>

          <a
            href="/documents/module-css.pdf"
            download="module-css.pdf"
            className="lesson-button"
          >
            <Download size={17} />
            Télécharger le PDF
          </a>
        </div>

        <iframe
          src="/documents/module-css.pdf"
          title="Module illustré CSS"
          width="100%"
          height="600"
          style={{
            marginTop: "24px",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
          }}
        />
      </section>
    </>
  );
}

function JavascriptLesson() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showCorrection, setShowCorrection] = useState(false);

  const checkAnswer = () => {
    setShowCorrection(true);
  };

  return (
    <div className="lesson-content">

      {/* INTRODUCTION */}
      <section className="lesson-section">
        <span className="lesson-tag">MODULE 04 · JAVASCRIPT</span>
        <h2>Rendre une page web interactive avec JavaScript</h2>

        <p>
          Une page web ne doit pas seulement être agréable à regarder.
          Elle doit également pouvoir réagir aux actions de ses visiteurs.
          C'est précisément le rôle de JavaScript.
        </p>

        <p>
          Dans ce module, tu vas apprendre à utiliser les variables,
          les conditions, les fonctions et les événements pour créer
          des interactions concrètes.
        </p>

        <div className="lesson-tip">
          <strong>Projet du module :</strong>
          Créer une petite interface interactive capable d'afficher
          un message personnalisé et de réagir aux clics.
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="lesson-section">
        <h2>Les objectifs pédagogiques</h2>
        <p>À la fin de ce tutoriel, tu seras capable de :</p>

        <ul>
          <li>Expliquer le rôle de JavaScript dans un site web.</li>
          <li>Déclarer et utiliser des variables.</li>
          <li>Créer des conditions et des fonctions.</li>
          <li>Manipuler certains éléments HTML.</li>
          <li>Détecter les actions réalisées par un visiteur.</li>
          <li>Créer une interaction simple et fonctionnelle.</li>
        </ul>
      </section>

      {/* PARTIE 1 */}
      <section className="lesson-section">
        <h2>1. Comprendre le rôle de JavaScript</h2>

        <p>
          Un site web repose généralement sur trois technologies
          complémentaires :
        </p>

        <div className="motion-grid">
          <div className="lesson-card">
            <h3>HTML</h3>
            <p>
              Définit la structure et le contenu de la page :
              titres, paragraphes, images et boutons.
            </p>
          </div>

          <div className="lesson-card">
            <h3>CSS</h3>
            <p>
              Définit l'apparence : couleurs, typographies,
              espacements et mise en page.
            </p>
          </div>

          <div className="lesson-card">
            <h3>JavaScript</h3>
            <p>
              Ajoute le comportement : clics, calculs,
              messages et modifications du contenu.
            </p>
          </div>
        </div>

        <p>
          Par exemple, lorsqu'un visiteur clique sur un bouton
          « En savoir plus », JavaScript peut afficher des informations
          supplémentaires sans recharger toute la page.
        </p>
      </section>

      {/* PARTIE 2 */}
      <section className="lesson-section">
        <h2>2. Découvrir les variables</h2>

        <p>
          Une variable est un espace dans lequel on stocke une donnée.
          Elle peut contenir un texte, un nombre ou une valeur logique.
        </p>

        <h3>Exemple de code</h3>

        <pre><code>{`let prenom = "Camille";
let age = 22;
const pays = "France";

console.log(prenom);
console.log(age);
console.log(pays);`}</code></pre>

        <p>
          Les mots-clés les plus courants sont :
        </p>

        <ul>
          <li><strong>let :</strong> déclare une variable dont la valeur peut changer.</li>
          <li><strong>const :</strong> déclare une variable qui ne peut pas être réaffectée.</li>
        </ul>

        <div className="lesson-tip">
          <strong>À retenir :</strong> donne toujours des noms clairs
          à tes variables. Cela rend ton code plus facile à comprendre.
        </div>
      </section>

      {/* PARTIE 3 */}
      <section className="lesson-section">
        <h2>3. Utiliser les conditions</h2>

        <p>
          Les conditions permettent à JavaScript de prendre des décisions.
          Le programme peut ainsi effectuer une action si une situation
          est vraie, et une autre si elle est fausse.
        </p>

        <pre><code>{`let age = 20;

if (age >= 18) {
  console.log("Accès autorisé");
} else {
  console.log("Accès refusé");
}`}</code></pre>

        <p>
          Dans cet exemple, le programme vérifie si l'âge est supérieur
          ou égal à 18. Le résultat détermine le message affiché.
        </p>

        <h3>Les principaux opérateurs</h3>

        <ul>
          <li><code>===</code> : vérifie une égalité stricte.</li>
          <li><code>!==</code> : vérifie une différence.</li>
          <li><code>&gt;</code> : vérifie si une valeur est supérieure.</li>
          <li><code>&lt;</code> : vérifie si une valeur est inférieure.</li>
          <li><code>&amp;&amp;</code> : signifie « et ».</li>
          <li><code>||</code> : signifie « ou ».</li>
        </ul>
      </section>

      {/* PARTIE 4 */}
      <section className="lesson-section">
        <h2>4. Créer des fonctions</h2>

        <p>
          Une fonction est un bloc de code que l'on peut exécuter
          lorsqu'on en a besoin. Elle permet d'organiser son programme
          et d'éviter de répéter les mêmes instructions.
        </p>

        <pre><code>{`function direBonjour() {
  console.log("Bonjour et bienvenue !");
}

direBonjour();`}</code></pre>

        <p>
          Une fonction peut également recevoir des informations
          appelées paramètres.
        </p>

        <pre><code>{`function saluer(prenom) {
  return "Bonjour " + prenom;
}

console.log(saluer("Camille"));`}</code></pre>
      </section>

      {/* PARTIE 5 */}
      <section className="lesson-section">
        <h2>5. Manipuler une page HTML</h2>

        <p>
          JavaScript peut accéder aux éléments HTML pour modifier
          leur contenu, leur apparence ou leur comportement.
          Cette manipulation passe notamment par le DOM
          (Document Object Model).
        </p>

        <p>
          Par exemple, <code>document.querySelector()</code> permet
          de sélectionner un élément de la page.
        </p>

        <pre><code>{`const titre = document.querySelector("h1");

titre.textContent = "Bienvenue sur mon site !";`}</code></pre>

        <p>
          Ici, JavaScript sélectionne le premier titre H1 et remplace
          son texte.
        </p>
      </section>

      {/* PARTIE 6 */}
      <section className="lesson-section">
        <h2>6. Détecter les événements</h2>

        <p>
          Un événement correspond à une action réalisée par le visiteur
          ou par le navigateur. Il peut s'agir d'un clic, d'une saisie
          au clavier ou du déplacement de la souris.
        </p>

        <p>
          Pour détecter ces actions, on utilise notamment
          <code> addEventListener()</code>.
        </p>

        <pre><code>{`const bouton = document.querySelector("#monBouton");

bouton.addEventListener("click", function() {
  alert("Tu as cliqué sur le bouton !");
});`}</code></pre>

        <p>
          Dans cet exemple, le message apparaît uniquement lorsque
          le visiteur clique sur le bouton.
        </p>
      </section>

      {/* ATELIER PRATIQUE */}
      <section className="lesson-section">
        <h2>7. Atelier pratique : créer une interaction</h2>

        <p>
          Passons maintenant à la pratique. Tu vas tester deux
          interactions directement dans cette page.
        </p>

        <div className="lesson-card">
          <h3>Exercice 1 – Afficher un message personnalisé</h3>

          <p>
            Saisis ton prénom dans le champ ci-dessous, puis clique
            sur le bouton.
          </p>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Entre ton prénom"
          />

          <button
            type="button"
            onClick={() => {
              if (name.trim() === "") {
                alert("Veuillez saisir votre prénom.");
              } else {
                alert("Bonjour " + name + " ! Bienvenue dans JavaScript.");
              }
            }}
          >
            Afficher mon message
          </button>

          <p>
            <strong>Ce que tu viens d'utiliser :</strong> une variable,
            un champ de saisie, une condition et un événement de clic.
          </p>
        </div>

        <div className="lesson-card">
          <h3>Exercice 2 – Créer un compteur interactif</h3>

          <p>
            Chaque clic sur le bouton augmente le compteur d'une unité.
          </p>

          <div className="javascript-counter">
            <h2>{count}</h2>

            <button
              type="button"
              onClick={() => setCount(count + 1)}
            >
              Ajouter 1
            </button>

            <button
              type="button"
              onClick={() => setCount(0)}
            >
              Réinitialiser
            </button>
          </div>

          <p>
            Cette démonstration montre comment une action peut
            modifier une valeur affichée à l'écran.
          </p>
        </div>
      </section>

      {/* EXERCICE FINAL */}
      <section className="lesson-section">
        <h2>8. Évaluation des connaissances</h2>

        <p>
          Vérifie que tu as compris les notions essentielles
          de ce module.
        </p>

        <div className="lesson-card">
          <h3>Question : à quoi sert JavaScript ?</h3>

          <label>
            <input
              type="radio"
              name="javascript-answer"
              value="a"
              checked={answer === "a"}
              onChange={(event) => {
                setAnswer(event.target.value);
                setShowCorrection(false);
              }}
            />
            À définir uniquement les couleurs d'une page.
          </label>

          <label>
            <input
              type="radio"
              name="javascript-answer"
              value="b"
              checked={answer === "b"}
              onChange={(event) => {
                setAnswer(event.target.value);
                setShowCorrection(false);
              }}
            />
            À rendre une page web interactive.
          </label>

          <label>
            <input
              type="radio"
              name="javascript-answer"
              value="c"
              checked={answer === "c"}
              onChange={(event) => {
                setAnswer(event.target.value);
                setShowCorrection(false);
              }}
            />
            À structurer uniquement les titres et paragraphes.
          </label>

          <button
            type="button"
            onClick={checkAnswer}
            disabled={!answer}
          >
            Vérifier ma réponse
          </button>

          {showCorrection && (
            <p className="demo-message">
              {answer === "b"
                ? "Bonne réponse ! JavaScript permet de rendre les pages web interactives."
                : "Ce n'est pas la bonne réponse. Relis la première partie du tutoriel et réessaie."}
            </p>
          )}
        </div>
      </section>

      <section className="lesson-section">
        <h2>9. Bilan du module</h2>

        <p>
          Tu as découvert les principales bases de JavaScript :
          les variables, les conditions, les fonctions, le DOM
          et les événements.
        </p>

        <p>
          Tu as également testé des interactions concrètes
          grâce au message personnalisé et au compteur.
        </p>

        <div className="lesson-tip">
          <strong>Pour aller plus loin :</strong>
          entraîne-toi à créer un menu déroulant, un formulaire
          avec validation ou une fenêtre qui s'ouvre au clic.
          Ces petits projets te permettront de progresser.
        </div>
      </section>

    </div>
  );
}


function ResponsiveLesson({ lesson }) {
  return (
    <>
      <section className="lesson-section">
        <SectionTitle number="01 — LES OBJECTIFS">
          À la fin de cette leçon, tu sauras…
        </SectionTitle>
        <Objectives items={lesson.objectives} />
      </section>

      <section className="lesson-section">
        <SectionTitle number="02 — COMPRENDRE">
          Pourquoi adapter un site aux mobiles ?
        </SectionTitle>

        <p>
          Le responsive design permet à un site de s'adapter à la
          largeur de l'écran. Un site doit rester lisible et facile
          à utiliser sur ordinateur, tablette et téléphone.
        </p>

        <div className="responsive-devices">
          <div>
            <Monitor size={38} />
            <span>Ordinateur</span>
          </div>
          <div>
            <Smartphone size={38} />
            <span>Mobile</span>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <SectionTitle number="03 — EXEMPLE PRATIQUE">
          Construire une grille responsive
        </SectionTitle>

        <p>
          Sur grand écran, les cartes sont côte à côte.
          Sur mobile, elles se placent les unes sous les autres.
        </p>

        <CodeExample code={lesson.code} />
      </section>

      <section className="lesson-section">
        <SectionTitle number="04 — À RETENIR">
          La règle des media queries
        </SectionTitle>

        <div className="lesson-tip">
          <Lightbulb size={22} />
          <p>
            La règle <code>@media</code> permet de modifier le CSS
            selon la largeur de l'écran.
          </p>
        </div>
      </section>

      <Exercise
        items={lesson.exercise}
        intro="Teste ton site sur plusieurs tailles d'écran."
      />
    </>
  );
}

function TutorialPage() {
  const { slug } = useParams();
  const tutorial = tutorials.find((item) => item.slug === slug);
  const lesson = lessons[slug];

  const currentIndex = tutorials.findIndex(
    (item) => item.slug === slug
  );

  const previousTutorial = tutorials[currentIndex - 1];
  const nextTutorial = tutorials[currentIndex + 1];

  if (!tutorial || !lesson) {
    return (
      <main className="lesson-page">
        <div className="lesson-not-found">
          <BookOpen size={42} />
          <h1>Tutoriel introuvable</h1>
          <p>Ce tutoriel n'existe pas ou n'est pas disponible.</p>
          <Link to="/" className="lesson-button">
            <ArrowLeft size={18} />
            Retour à l'accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="lesson-page">
      <header className="lesson-header">
        <Link to="/" className="lesson-brand">
          <span className="lesson-brand-icon">
            <Code2 size={23} />
          </span>
          <span>
            Web<span>Start</span>
          </span>
        </Link>

        <Link to="/#tutoriels" className="lesson-back">
          <ArrowLeft size={17} />
          Tous les tutoriels
        </Link>
      </header>

      <section className="lesson-hero">
        <div className="lesson-hero-content">
          <div className="lesson-breadcrumb">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>{tutorial.technology}</span>
          </div>

          <span className="lesson-kicker">
            <GraduationCap size={16} />
            TON PARCOURS D'APPRENTISSAGE
          </span>

          <h1>{tutorial.title}</h1>
          <p className="lesson-intro">{tutorial.description}</p>

          <div className="lesson-meta">
            <span>
              <BookOpen size={17} />
              {tutorial.format}
            </span>
            <span>{tutorial.duration}</span>
            <span>{tutorial.level}</span>
          </div>
        </div>

        {tutorial.cover && (
          <div className="lesson-cover-wrapper">
            <img
              src={tutorial.cover}
              alt={`Illustration de ${tutorial.title}`}
              className="lesson-cover"
            />
            <span className="lesson-cover-badge">
              <Code2 size={17} />
              Apprendre en pratiquant
            </span>
          </div>
        )}
      </section>

      <div className="lesson-layout">
        <article className="lesson-content">
          {slug === "premiere-page-html" && (
            <HtmlLesson lesson={lesson} />
          )}

          {slug === "html-css-javascript" && (
            <MotionLesson lesson={lesson} />
          )}

          {slug === "bases-css" && (
            <CssLesson lesson={lesson} />
          )}

          {slug === "interactions-javascript" && (
            <JavascriptLesson lesson={lesson} />
          )}

          {slug === "site-responsive" && (
            <ResponsiveLesson lesson={lesson} />
          )}

          <div className="lesson-finish">
            <span className="lesson-finish-icon">
              <GraduationCap size={25} />
            </span>
            <div>
              <h2>Bravo, tu progresses !</h2>
              <p>
                La meilleure façon d'apprendre le développement web
                est de pratiquer et d'expérimenter.
              </p>
            </div>
          </div>

          <nav
            className="lesson-navigation"
            aria-label="Navigation entre les tutoriels"
          >
            {previousTutorial ? (
              <Link
                to={`/tutoriels/${previousTutorial.slug}`}
                className="lesson-nav-button lesson-nav-previous"
              >
                <ArrowLeft size={18} />
                <span>
                  <small>Tutoriel précédent</small>
                  {previousTutorial.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {nextTutorial && (
              <Link
                to={`/tutoriels/${nextTutorial.slug}`}
                className="lesson-nav-button lesson-nav-next"
              >
                <span>
                  <small>Tutoriel suivant</small>
                  {nextTutorial.title}
                </span>
                <ArrowRight size={18} />
              </Link>
            )}
          </nav>
        </article>

        <aside className="lesson-sidebar">
          <div className="lesson-sidebar-card">
            <span className="lesson-sidebar-icon">
              <BookOpen size={22} />
            </span>

            <h3>Ta progression</h3>
            <p>Prends ton temps et avance à ton rythme.</p>

            <div className="lesson-progress-track">
              <span
                style={{
                  width: `${((currentIndex + 1) / tutorials.length) * 100}%`,
                }}
              />
            </div>

            <span className="lesson-progress-label">
              Leçon {currentIndex + 1} sur {tutorials.length}
            </span>
          </div>

          <div className="lesson-sidebar-card lesson-sidebar-list">
            <h3>Les tutoriels WebStart</h3>

            {tutorials.map((item) => (
              <Link
                key={item.id}
                to={`/tutoriels/${item.slug}`}
                className={`lesson-sidebar-link ${
                  item.slug === slug ? "active" : ""
                }`}
              >
                <span>{String(item.id).padStart(2, "0")}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <footer className="lesson-footer">
        <Link to="/" className="lesson-brand">
          Web<span>Start</span>
        </Link>
        <p>Les premiers pas vers le développement web.</p>
      </footer>
    </main>
  );
}

export default TutorialPage;
