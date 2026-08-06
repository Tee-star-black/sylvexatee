import Link from "next/link";
import { ArrowLeft, Layers3 } from "lucide-react";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px",
        display: "grid",
        placeItems: "center",
        color: "#111412",
        background: "#f5f4ef",
        textAlign: "center",
      }}
    >
      <section
        style={{
          maxWidth: "680px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <span
          style={{
            width: "64px",
            height: "64px",
            display: "grid",
            placeItems: "center",
            color: "#ffffff",
            background: "#087f68",
          }}
        >
          <Layers3 size={28} />
        </span>

        <p
          style={{
            margin: 0,
            color: "#087f68",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(52px, 9vw, 100px)",
            lineHeight: 0.95,
            letterSpacing: "-0.07em",
          }}
        >
          This layer does not exist.
        </h1>

        <p
          style={{
            maxWidth: "520px",
            margin: 0,
            color: "#6b736f",
            fontSize: "17px",
            lineHeight: 1.7,
          }}
        >
          The address may have changed, or the page has not entered the
          Sylvexa system yet.
        </p>

        <Link
          href="/"
          style={{
            minHeight: "52px",
            padding: "0 20px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            color: "#ffffff",
            background: "#111412",
            fontWeight: 700,
          }}
        >
          <ArrowLeft size={17} />
          Return home
        </Link>
      </section>
    </main>
  );
}