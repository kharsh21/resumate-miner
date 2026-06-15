import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__mark">R</span>
          <div>
            <div className="footer__name">
              Resu<span className="rm-gradient-text">Mate</span>
            </div>
            <p className="rm-muted footer__tag">
              AI-powered resume screening &amp; candidate analytics.
            </p>
          </div>
        </div>

        <div className="footer__links">
          <Link href="/" className="footer__link">Home</Link>
          <Link href="/login" className="footer__link">Login</Link>
          <Link href="/register" className="footer__link">Register</Link>
          <Link href="/adminlogin" className="footer__link">Recruiter</Link>
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="rm-muted">
          © {new Date().getFullYear()} ResuMate. All rights reserved.
        </span>
        <span className="rm-muted">Built for smarter hiring.</span>
      </div>

      <style jsx>{`
        .footer {
          margin-top: auto;
          border-top: 1px solid var(--border);
          background: var(--surface);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          padding: 48px 0 24px;
        }
        .footer__inner {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          justify-content: space-between;
          align-items: flex-start;
        }
        .footer__brand {
          display: flex;
          gap: 14px;
          align-items: center;
          max-width: 360px;
        }
        .brand__mark {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          color: #fff;
          font-family: var(--font-display);
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          box-shadow: 0 8px 22px rgba(109, 94, 252, 0.4);
        }
        .footer__name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.2rem;
        }
        .footer__tag {
          font-size: 0.9rem;
          margin-top: 2px;
        }
        .footer__links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }
        .footer__link {
          color: var(--text-muted);
          font-weight: 500;
          transition: color var(--transition);
        }
        .footer__link:hover {
          color: var(--text);
        }
        .footer__bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: space-between;
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
          font-size: 0.85rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
