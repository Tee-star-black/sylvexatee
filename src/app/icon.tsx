import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111412",
          color: "#ffffff",
          fontSize: 19,
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
          letterSpacing: "-0.08em",
          border: "2px solid #087f68",
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    },
  );
}