import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#111412",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          fontSize: 94,
          fontWeight: 800,
          letterSpacing: "-0.09em",
        }}
      >
        <span style={{ transform: "translateX(-3px)" }}>S</span>
        <div
          style={{
            position: "absolute",
            right: -24,
            bottom: -24,
            width: 76,
            height: 76,
            background: "#087f68",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
