export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Développeur frontend — Yaoundé, Cameroun</p>
          <h1 className="hero__title">
            Je construis des sites web qui font vendre les marques d'ici.
          </h1>
          <p className="hero__lede">
            Étudiant en développement d'applications, j'apprends en construisant de vrais
            projets — pas des exercices. Aujourd'hui je conçois des sites React rapides,
            soignés, et pensés pour convertir des visiteurs en clients.
          </p>
          <div className="hero__actions">
            <a href="#projets" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-outline">Discutons de votre projet</a>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__card-tape" aria-hidden="true" />
          <p className="hero__card-label">FICHE DE CHANTIER</p>
          <h3 className="hero__card-project">Mayé Cameroun</h3>
          <p className="hero__card-status">Projet en cours — React + Vite</p>
          <ul className="hero__card-list">
            <li>Catalogue de 50+ produits cosmétiques</li>
            <li>Questionnaire de recommandation personnalisée</li>
            <li>Commande directe via WhatsApp</li>
          </ul>
          <span className="hero__card-marker marker-note">en construction →</span>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 168px 0 96px;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(200, 85, 61, 0.14), transparent 70%);
          pointer-events: none;
        }
        .hero__inner {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
          position: relative;
        }
        .hero__title {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          margin: 16px 0 22px;
        }
        .hero__lede {
          font-size: 1.08rem;
          line-height: 1.65;
          color: var(--encre-soft);
          max-width: 540px;
          margin-bottom: 34px;
        }
        .hero__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero__card {
          background: var(--blanc);
          border: 1px solid var(--ligne);
          border-radius: 6px;
          padding: 32px 30px;
          position: relative;
          box-shadow: 0 24px 48px -24px rgba(22, 33, 62, 0.25);
          transform: rotate(1.2deg);
        }
        .hero__card-tape {
          position: absolute;
          top: -14px;
          left: 36px;
          width: 90px;
          height: 28px;
          background: rgba(200, 85, 61, 0.55);
          transform: rotate(-3deg);
          border-radius: 2px;
        }
        .hero__card-label {
          font-family: var(--font-body);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: var(--sauge);
          margin-bottom: 10px;
        }
        .hero__card-project {
          font-size: 1.6rem;
          margin-bottom: 4px;
        }
        .hero__card-status {
          font-size: 0.88rem;
          color: var(--encre-soft);
          margin-bottom: 18px;
        }
        .hero__card-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--graphite);
        }
        .hero__card-list li {
          padding-left: 18px;
          position: relative;
        }
        .hero__card-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--terracotta);
        }
        .hero__card-marker {
          position: absolute;
          bottom: 18px;
          right: 26px;
          font-size: 1.2rem;
        }

        @media (max-width: 900px) {
          .hero__inner {
            grid-template-columns: 1fr;
          }
          .hero {
            padding: 140px 0 64px;
          }
          .hero__card {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
