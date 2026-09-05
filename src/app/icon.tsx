import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: "-0.09em",
        }}
      >
        <span style={{ transform: "translateX(-1px)" }}>S</span>
        <div
          style={{
            position: "absolute",
            right: -10,
            bottom: -10,
            width: 28,
            height: 28,
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
