import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Product With Andrew — Product Strategy & Launch Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "80px",
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, rgba(201,169,110,0.18), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            color: "#0a0a0a",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#C9A96E",
              marginRight: 16,
            }}
          />
          Product With Andrew
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            lineHeight: 1.05,
            fontWeight: 800,
            fontStyle: "italic",
            color: "#0a0a0a",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          <div>Ideas Into Scalable</div>
          <div style={{ color: "#C9A96E" }}>Products</div>
          <div style={{ color: "#0a0a0a" }}>From 0 To Launch.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#666",
            fontSize: 22,
          }}
        >
          <span>Product Strategy &middot; AI &middot; Marketplaces</span>
          <span>productwithandrew.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
