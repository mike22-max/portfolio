export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>Siatou Mbiakop Holande Michel  Yaoundé, Cameroun</p>
        <p>© {new Date().getFullYear()}</p>
      </div>

      <style>{`
        .footer {
          padding: 28px 0 40px;
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          font-size: 0.84rem;
          color: var(--encre-soft);
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
    </footer>
  );
}
