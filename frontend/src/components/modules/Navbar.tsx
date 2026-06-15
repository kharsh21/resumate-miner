import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/adminlogin", label: "Recruiter" },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <Link href="/" className="brand" aria-label="ResuMate home">
          <span className="brand__mark">R</span>
          <span className="brand__text">
            Resu<span className="rm-gradient-text">Mate</span>
          </span>
        </Link>

        <nav className={`links ${open ? "links--open" : ""}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link ${router.pathname === l.href ? "link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/login" className="rm-btn rm-btn-primary link__cta" onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </nav>

        <div className="actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className="icon-btn burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`burger__bars ${open ? "burger__bars--x" : ""}`} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          transition: background var(--transition), border-color var(--transition),
            box-shadow var(--transition);
          border-bottom: 1px solid transparent;
        }
        .nav--scrolled {
          background: var(--nav-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.25rem;
        }
        .brand__mark {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          color: #fff;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          box-shadow: 0 8px 22px rgba(109, 94, 252, 0.4);
        }
        .links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .link {
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 500;
          color: var(--text-muted);
          transition: color var(--transition), background var(--transition);
        }
        .link:hover {
          color: var(--text);
          background: var(--surface);
        }
        .link--active {
          color: var(--text);
          background: var(--surface);
        }
        .link__cta {
          margin-left: 8px;
          padding: 10px 20px;
        }
        .actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .icon-btn {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          font-size: 1.1rem;
          cursor: pointer;
          color: var(--text);
          background: var(--surface);
          border: 1px solid var(--border);
          backdrop-filter: var(--glass-blur);
          transition: transform var(--transition), border-color var(--transition);
        }
        .icon-btn:hover {
          transform: translateY(-2px);
          border-color: var(--primary);
        }
        .burger {
          display: none;
        }
        .burger__bars,
        .burger__bars::before,
        .burger__bars::after {
          content: "";
          display: block;
          width: 18px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: transform var(--transition), opacity var(--transition);
        }
        .burger__bars::before {
          transform: translateY(-6px);
        }
        .burger__bars::after {
          transform: translateY(4px);
        }
        .burger__bars--x {
          background: transparent;
        }
        .burger__bars--x::before {
          transform: translateY(0) rotate(45deg);
        }
        .burger__bars--x::after {
          transform: translateY(-2px) rotate(-45deg);
        }

        @media (max-width: 860px) {
          .burger {
            display: grid;
          }
          .links {
            position: absolute;
            top: 72px;
            left: 16px;
            right: 16px;
            flex-direction: column;
            align-items: stretch;
            gap: 6px;
            padding: 16px;
            border-radius: var(--radius);
            background: var(--nav-bg);
            backdrop-filter: var(--glass-blur);
            -webkit-backdrop-filter: var(--glass-blur);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-md);
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
            transition: opacity var(--transition), transform var(--transition);
          }
          .links--open {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
          .link,
          .link__cta {
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
