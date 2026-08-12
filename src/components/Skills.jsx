const groups = [
  {
    label: "Développement",
    items: [
      { name: "HTML / CSS", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "React JS", level: 2 },
      { name: "Node.js / API REST", level: 2 },
      { name: "C", level: 3 },
      { name: "Java", level: 3 },
      { name: "Flutter", level: 1},
    ],
  },
  {
    label: "Création web",
    items: [
      { name: "Wix", level: 4 },
      { name: "WordPress", level: 3 },
    ],
  },
  {
    label: "Outils & backend",
    items: [
      { name: "Git", level: 3 },
      { name: "VS Code", level: 4 },
      { name: "Supabase", level: 3 },
      { name: "Pack Office", level: 4 },
    ],
  },
];

function Bar({ level }) {
  return (
    <span className="bar" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < level ? "bar__dot bar__dot--on" : "bar__dot"}
        />
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="competences" className="skills">
      <div className="container">
        <p className="eyebrow">Compétences</p>
        <h2 className="skills__title">Ce que je sais déjà manier</h2>

        <div className="skills__grid">
          {groups.map((g) => (
            <div key={g.label} className="skills__group">
              <h3 className="skills__group-title">{g.label}</h3>
              <ul className="skills__list">
                {g.items.map((it) => (
                  <li key={it.name}>
                    <span className="skills__name">{it.name}</span>
                    <Bar level={it.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="skills__note">
          <span className="marker-note">actuellement approfondi →</span> React
          JS et les bonnes pratiques d'architecture front, pour livrer des
          projets plus complexes avec la même rigueur qu'aujourd'hui.
        </p>
      </div>

      <style>{`
        .skills {
          padding: 96px 0;
        }
        .skills__title {
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          margin: 14px 0 48px;
        }
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .skills__group-title {
          font-size: 1.05rem;
          font-family: var(--font-body);
          font-weight: 700;
          color: var(--sauge);
          margin-bottom: 18px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .skills__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .skills__list li {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .skills__name {
          font-size: 0.96rem;
          font-weight: 500;
          color: var(--graphite);
        }
        .bar {
          display: flex;
          gap: 4px;
        }
        .bar__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--sable-deep);
        }
        .bar__dot--on {
          background: var(--terracotta);
        }
        .skills__note {
          margin-top: 56px;
          font-size: 1rem;
          color: var(--encre-soft);
        }

        @media (max-width: 900px) {
          .skills__grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
