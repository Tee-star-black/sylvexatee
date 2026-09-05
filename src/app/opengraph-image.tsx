import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt =
  "Sylvexa — business systems, automation and digital products. Soon to be trading as Bohlal-itech.";

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
          padding: "64px 70px",
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
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 58,
                height: 58,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                color: "#ffffff",
                background: "#111412",
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              S
              <div
                style={{
                  position: "absolute",
                  right: -9,
                  bottom: -9,
                  width: 24,
                  height: 24,
                  background: "#087f68",
                  transform: "rotate(45deg)",
                }}
              />
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
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              color: "#087f68",
              background: "#ffffff",
              border: "1px solid #cfd4d1",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Soon to be trading as Bohlal-itech
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: 940,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 70,
              fontWeight: 700,
              letterSpacing: "-0.055em",
              lineHeight: 0.97,
            }}
          >
            <span>Better systems.</span>

            <span
              style={{
                color: "#087f68",
              }}
            >
              Less friction.
            </span>
          </div>

          <div
            style={{
              width: 820,
              display: "flex",
              color: "#606a66",
              fontSize: 23,
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
            paddingTop: 22,
            color: "#56605c",
            fontSize: 18,
          }}
        >
          <span>Digital products · Business systems · Automation</span>

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
