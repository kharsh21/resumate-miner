import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("@/components/modules/HeroScene"), {
  ssr: false,
});

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

interface BoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

class CanvasErrorBoundary extends React.Component<
  BoundaryProps,
  { failed: boolean }
> {
  constructor(props: BoundaryProps) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function Fallback() {
  return (
    <div className="hero3d-fallback" aria-hidden="true">
      <span className="blob blob--1" />
      <span className="blob blob--2" />
      <span className="blob blob--3" />
      <style jsx>{`
        .hero3d-fallback {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.55;
          animation: drift 14s ease-in-out infinite;
        }
        .blob--1 {
          width: 420px;
          height: 420px;
          background: var(--primary);
          top: 8%;
          left: 12%;
        }
        .blob--2 {
          width: 360px;
          height: 360px;
          background: var(--accent);
          bottom: 6%;
          right: 14%;
          animation-delay: -4s;
        }
        .blob--3 {
          width: 300px;
          height: 300px;
          background: var(--accent-2);
          top: 38%;
          left: 50%;
          animation-delay: -8s;
        }
        @keyframes drift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 24px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}

export default function Hero3D() {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setSupported(detectWebGL());
  }, []);

  if (supported !== true) {
    return <Fallback />;
  }

  return (
    <CanvasErrorBoundary fallback={<Fallback />}>
      <HeroScene />
    </CanvasErrorBoundary>
  );
}
