import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Hero3D from "@/components/modules/Hero3D";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const features = [
  {
    icon: "⚡",
    title: "Automated Parsing",
    desc: "Extract skills, education and experience from any PDF resume in seconds with NLP.",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    desc: "Rank and score candidates with rich, recruiter-friendly insights and dashboards.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "Resumes are processed securely with JWT-protected access end to end.",
  },
  {
    icon: "🎯",
    title: "Best-Fit Matching",
    desc: "Surface the strongest candidates instantly with skill-match ranking.",
  },
];

const steps = [
  { n: "01", title: "Upload", desc: "Candidates upload their resume in a click." },
  { n: "02", title: "Analyze", desc: "ResuMate parses and scores every profile automatically." },
  { n: "03", title: "Hire", desc: "Recruiters review ranked candidates and decide faster." },
];

const stats = [
  { value: "10x", label: "Faster screening" },
  { value: "95%", label: "Parse accuracy" },
  { value: "1-click", label: "Resume upload" },
  { value: "24/7", label: "Always on" },
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <DefaultLayout title="ResuMate | Smarter Resume Screening" fullBleed>
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero__canvas">
          <Hero3D />
        </div>
        <div className="hero__overlay" />
        <div className="container hero__content">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="rm-chip"
          >
            ✨ AI-powered resume screening
          </motion.div>

          <motion.h1
            className="hero__title"
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
          >
            Hire smarter with
            <br />
            <span className="rm-gradient-text">ResuMate</span>
          </motion.h1>

          <motion.p
            className="hero__sub rm-muted"
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
          >
            Streamline your hiring with automated resume parsing, candidate
            scoring and analytics — all in one sleek platform.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
          >
            <Link href="/login" className="rm-btn rm-btn-primary">
              Upload Resume →
            </Link>
            <Link href="/adminlogin" className="rm-btn rm-btn-ghost">
              I&apos;m a Recruiter
            </Link>
          </motion.div>
        </div>
        <div className="hero__scroll">Scroll to explore ↓</div>
      </section>

      {/* ===== Stats ===== */}
      <section className="container">
        <div className="stats rm-glass">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              variants={fadeUp}
            >
              <div className="stat__value rm-gradient-text">{s.value}</div>
              <div className="stat__label rm-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="rm-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="section-head"
          >
            <div className="rm-eyebrow">Why ResuMate</div>
            <h2 className="rm-h2">Everything you need to screen faster</h2>
            <p className="rm-muted section-head__sub">
              Powerful tools that turn a pile of resumes into ranked, actionable
              shortlists.
            </p>
          </motion.div>

          <div className="features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="feature rm-glass"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={fadeUp}
              >
                <div className="feature__icon">{f.icon}</div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="rm-muted">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="rm-section how">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="section-head"
          >
            <div className="rm-eyebrow">How it works</div>
            <h2 className="rm-h2">From resume to hire in three steps</h2>
          </motion.div>

          <div className="steps">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                className="step rm-glass"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={fadeUp}
              >
                <div className="step__n rm-gradient-text">{s.n}</div>
                <h3 className="feature__title">{s.title}</h3>
                <p className="rm-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="rm-section">
        <div className="container">
          <motion.div
            className="cta rm-glass"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="rm-h2">Ready to find your next great hire?</h2>
            <p className="rm-muted">
              Join ResuMate and turn screening from hours into minutes.
            </p>
            <div className="hero__cta">
              <Link href="/register" className="rm-btn rm-btn-primary">
                Get Started Free
              </Link>
              <Link href="/login" className="rm-btn rm-btn-ghost">
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero__canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: radial-gradient(
            60% 60% at 50% 40%,
            transparent 0%,
            var(--bg) 120%
          );
          pointer-events: none;
        }
        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          text-align: center;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .hero__title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(2.6rem, 7vw, 4.6rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .hero__sub {
          font-size: clamp(1rem, 2.2vw, 1.25rem);
          max-width: 560px;
        }
        .hero__cta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }
        .hero__scroll {
          position: absolute;
          bottom: 22px;
          left: 0;
          right: 0;
          z-index: 2;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
          animation: bob 2.4s ease-in-out infinite;
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding: 28px;
          margin-top: -56px;
          position: relative;
          z-index: 3;
        }
        .stat {
          text-align: center;
          padding: 8px;
        }
        .stat__value {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700;
        }
        .stat__label {
          font-size: 0.9rem;
        }

        .section-head {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 48px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .section-head__sub {
          font-size: 1.05rem;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .feature {
          padding: 28px 24px;
          transition: transform var(--transition), border-color var(--transition);
        }
        .feature:hover {
          transform: translateY(-6px);
          border-color: var(--primary);
        }
        .feature__icon {
          font-size: 1.8rem;
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          margin-bottom: 16px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .feature__title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .how {
          padding-top: 24px;
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .step {
          padding: 32px 28px;
        }
        .step__n {
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .cta {
          text-align: center;
          padding: 56px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        @media (max-width: 980px) {
          .features {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 720px) {
          .steps {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 520px) {
          .features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </DefaultLayout>
  );
}
