export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__tape" aria-hidden="true" />
        <p className="eyebrow">Contact</p>
        <h2 className="contact__title">On construit quelque chose ensemble ?</h2>
        <p className="contact__text">
          Stage, petit projet, ou juste une idée à discuter je réponds toujours.
        </p>

        <div className="contact__actions">
          <a href="mailto:michelsiatou22@gmail.com" className="btn btn-primary">
            michelsiatou22@gmail.com
          </a>
          <a href="tel:+237695753054" className="btn btn-outline">
            +237 695 75 30 54
          </a>
        </div>
      </div>

      <style>{`
        .contact {
          padding: 110px 0 90px;
        }
        .contact__inner {
          background: var(--encre);
          color: var(--sable);
          border-radius: 10px;
          padding: 72px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .contact__tape {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%) rotate(-2deg);
          width: 110px;
          height: 30px;
          background: rgba(200, 85, 61, 0.6);
          border-radius: 2px;
        }
        .contact .eyebrow {
          color: var(--terracotta-soft);
        }
        .contact__title {
          color: var(--sable);
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          margin: 16px 0 14px;
        }
        .contact__text {
          color: rgba(247, 243, 236, 0.78);
          font-size: 1.05rem;
          margin-bottom: 36px;
        }
        .contact__actions {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        .contact .btn-outline {
          border-color: var(--sable);
          color: var(--sable);
        }
        .contact .btn-outline:hover {
          box-shadow: 4px 4px 0 var(--terracotta);
        }

        @media (max-width: 640px) {
          .contact__inner {
            padding: 56px 28px;
          }
        }
      `}</style>
    </section>
  );
}
