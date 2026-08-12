const projects = [
  {
    title: 'Steph Shop & Skin',
    tag: 'E-commerce — Client livré',
    desc: "Site e-commerce complet pour une marque camerounaise de cosmétiques présente sur 3 points de vente. Catalogue filtrable, commande par WhatsApp produit par produit, sélecteur de boutique par ville.",
    stack: ['React', 'Vite', 'WhatsApp API'],
    status: 'done',
    link: null,
  },
  {
    title: 'Mayé Cameroun',
    tag: 'Template e-commerce — Terminé',
    desc: "Template premium pour marques de cosmétiques : questionnaire de recommandation par type de peau et carnation, catalogue de produits, commande directe via WhatsApp.",
    stack: ['React', 'Vite', 'Git'],
    status: 'done',
    link: 'maye-cameroun-template.vercel.app',
  },
  {
    title: 'MindFlow',
    tag: 'App IA — En cours',
    desc: "Application de journaling émotionnel avec IA conversationnelle, pensée pour les jeunes francophones. Authentification, historique des échanges, backend serverless.",
    stack: ['React', 'Supabase', 'IA'],
    status: 'progress',
    link: 'https://mindflow-rosy.vercel.app',
  },
];

export default function Projects() {
  return (
    <section id="projets" className="projects">
      <div className="container">
        <p className="eyebrow">Travaux</p>
        <h2 className="projects__title">Ce que je construis</h2>
        <p className="projects__intro">
          Trois manières de travailler avec moi : sites sur mesure pour des clients réels,
          templates réutilisables prêts à personnaliser, et applications plus complexes
          quand le projet le demande.
        </p>

        <div className="projects__grid">
          {projects.map((p, i) => {
            const Wrapper = p.link ? 'a' : 'article';
            const wrapperProps = p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <Wrapper key={i} className={`project-card project-card--${p.status}`} {...wrapperProps}>
                <div className="project-card__top">
                  <span className="project-card__tag">{p.tag}</span>
                  {p.status === 'progress' && <span className="project-card__pulse" aria-hidden="true" />}
                  {p.status === 'done' && <span className="project-card__check" aria-hidden="true">✓</span>}
                </div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__stack">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                {p.link && <span className="project-card__link">Voir le site →</span>}
              </Wrapper>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects {
          padding: 96px 0;
        }
        .projects__title {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          margin: 14px 0 16px;
        }
        .projects__intro {
          max-width: 560px;
          color: var(--encre-soft);
          font-size: 1.02rem;
          line-height: 1.6;
          margin-bottom: 48px;
        }
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .project-card {
          background: var(--blanc);
          border: 1px solid var(--ligne);
          border-radius: 6px;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -16px rgba(22, 33, 62, 0.2);
        }
        .project-card--soon {
          opacity: 0.72;
          border-style: dashed;
        }
        .project-card--done {
          border-color: var(--sauge);
        }
        .project-card--progress {
          border-color: var(--terracotta);
        }
        .project-card__check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--sauge);
          color: var(--blanc);
          font-size: 0.72rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .project-card__link {
          margin-top: 14px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--terracotta);
        }
        .project-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .project-card__tag {
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--sauge);
        }
        .project-card__pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--terracotta);
          box-shadow: 0 0 0 0 rgba(200, 85, 61, 0.5);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(200, 85, 61, 0.45); }
          70% { box-shadow: 0 0 0 8px rgba(200, 85, 61, 0); }
          100% { box-shadow: 0 0 0 0 rgba(200, 85, 61, 0); }
        }
        .project-card__title {
          font-size: 1.32rem;
          margin-bottom: 10px;
        }
        .project-card__desc {
          font-size: 0.94rem;
          line-height: 1.55;
          color: var(--graphite);
          flex-grow: 1;
          margin-bottom: 18px;
        }
        .project-card__stack {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .project-card__stack span {
          font-size: 0.74rem;
          font-weight: 600;
          padding: 4px 10px;
          background: var(--sable-deep);
          color: var(--encre);
          border-radius: 20px;
        }

        @media (max-width: 900px) {
          .projects__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}