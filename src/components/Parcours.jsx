const steps = [
  {
    period: '2025',
    title: 'Baccalauréat scientifique',
    desc: 'Bases solides en logique et mathématiques — le socle pour aborder la programmation sérieusement.',
  },
  {
    period: '2025 — aujourd\'hui',
    title: 'Licence 1 — CDAEN',
    desc: "Conception et Développement d'Applications pour l'Économie Numérique. Algorithmique, structures de données, langage C et Java.",
  },
  {
    period: 'En continu',
    title: 'Apprentissage autodidacte',
    desc: 'Wix, WordPress, et actuellement React JS — appris en dehors des cours, en construisant de vrais projets comme Mayé Cameroun.',
  },
];

export default function Parcours() {
  return (
    <section id="parcours" className="parcours">
      <div className="container parcours__inner">
        <div className="parcours__intro">
          <p className="eyebrow">Parcours</p>
          <h2 className="parcours__title">Comment j'en suis arrivé là</h2>
          <p className="parcours__text">
            Je n'attends pas qu'un cours m'autorise à apprendre quelque chose. Si un outil
            me permet de livrer un meilleur projet, je l'apprends — par moi-même, en le
            testant sur un vrai cas concret.
          </p>
        </div>

        <div className="parcours__timeline">
          {steps.map((s, i) => (
            <div key={i} className="parcours__step">
              <div className="parcours__marker">
                <span>{i + 1}</span>
              </div>
              <div className="parcours__content">
                <p className="parcours__period">{s.period}</p>
                <h3 className="parcours__step-title">{s.title}</h3>
                <p className="parcours__step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .parcours {
          padding: 96px 0;
          background: var(--sable-deep);
        }
        .parcours__inner {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
        }
        .parcours__title {
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          margin: 14px 0 18px;
        }
        .parcours__text {
          color: var(--encre-soft);
          line-height: 1.65;
          font-size: 1.02rem;
        }
        .parcours__timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }
        .parcours__step {
          display: flex;
          gap: 22px;
          padding-bottom: 40px;
          position: relative;
        }
        .parcours__step:not(:last-child)::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 40px;
          bottom: 0;
          width: 1px;
          background: var(--ligne);
        }
        .parcours__marker {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--encre);
          color: var(--sable);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
        }
        .parcours__period {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--terracotta);
          margin-bottom: 6px;
        }
        .parcours__step-title {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        .parcours__step-desc {
          font-size: 0.94rem;
          line-height: 1.6;
          color: var(--graphite);
        }

        @media (max-width: 900px) {
          .parcours__inner {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>
    </section>
  );
}
