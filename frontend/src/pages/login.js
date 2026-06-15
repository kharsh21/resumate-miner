import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { motion } from "framer-motion";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post("/api/account/login", {
        username,
        password,
      });
      Cookies.set("access_token", response.data.access);
      Cookies.set("refresh_token", response.data.refresh);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err?.response?.data?.detail || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <DefaultLayout title="Login | ResuMate" content="">
      <div className="auth">
        <motion.div
          className="auth__card rm-glass"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="auth__head">
            <span className="rm-chip">Welcome back</span>
            <h1 className="auth__title">
              Sign in to <span className="rm-gradient-text">ResuMate</span>
            </h1>
            <p className="rm-muted">Access your dashboard and candidates.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth__form">
            <label className="auth__label">
              Username
              <input
                type="text"
                className="rm-input"
                placeholder="Your username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label className="auth__label">
              Password
              <input
                type="password"
                className="rm-input"
                placeholder="••••••••"
                value={password}
                minLength={8}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            {error && <div className="auth__error">{error}</div>}

            <button
              className="rm-btn rm-btn-primary auth__submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in…" : "Sign In →"}
            </button>
          </form>

          <p className="auth__foot rm-muted">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="auth__link">
              Create one
            </Link>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .auth {
          min-height: 70vh;
          display: grid;
          place-items: center;
          padding: 32px 0;
        }
        .auth__card {
          width: 100%;
          max-width: 440px;
          padding: 40px;
        }
        .auth__head {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }
        .auth__title {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 700;
        }
        .auth__form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .auth__label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .auth__error {
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.4);
          color: #fb7185;
          font-size: 0.9rem;
        }
        .auth__submit {
          margin-top: 6px;
          width: 100%;
        }
        .auth__submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .auth__foot {
          text-align: center;
          margin-top: 22px;
          font-size: 0.95rem;
        }
        .auth__link {
          color: var(--primary);
          font-weight: 600;
        }
        .auth__link:hover {
          text-decoration: underline;
        }
      `}</style>
    </DefaultLayout>
  );
}
