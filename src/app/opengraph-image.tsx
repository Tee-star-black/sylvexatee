import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt =
  "Sylvexa — The operating layer for modern business";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "70px",
          color: "#111412",
          background: "#f5f4ef",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#111412",
            opacity: 0.035,
            fontSize: 220,
            fontWeight: 800,
            letterSpacing: "-0.08em",
            whiteSpace: "nowrap",
          }}
        >
          SYLVEXA
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              background: "#111412",
              borderBottom: "8px solid #087f68",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            S
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 25,
              fontWeight: 800,
              letterSpacing: "0.22em",
            }}
          >
            SYLVEXA
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: 920,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.055em",
              lineHeight: 0.97,
            }}
          >
            <span>Run less manually.</span>

            <span
              style={{
                color: "#087f68",
              }}
            >
              Move more intelligently.
            </span>
          </div>

          <div
            style={{
              width: 780,
              display: "flex",
              color: "#606a66",
              fontSize: 24,
              lineHeight: 1.45,
            }}
          >
            {siteConfig.shortDescription}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #cfd4d1",
            paddingTop: 24,
            color: "#56605c",
            fontSize: 18,
          }}
        >
          <span>The operating layer for modern business</span>

          <span
            style={{
              color: "#087f68",
              fontWeight: 700,
            }}
          >
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}