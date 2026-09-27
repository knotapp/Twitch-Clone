import Link from "next/link";
import { type Stream, formatViewers } from "@/lib/data";

export default function StreamCard({ stream }: { stream: Stream }) {
  return (
    <Link href={`/channel/${stream.slug}`} className="card" style={{ display: "block" }}>
      <div
        className="thumb"
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          borderRadius: 6,
          border: "2px solid transparent",
          background: stream.accent,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 34, fontWeight: 800, color: "rgba(255,255,255,0.85)" }}>
          {stream.streamer}
        </span>
        <span
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            background: "var(--live)",
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            padding: "2px 5px",
            borderRadius: 3,
          }}
        >
          Live
        </span>
        <span
          style={{
            position: "absolute",
            bottom: 8,
            left: 8,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            fontSize: 12,
            padding: "2px 5px",
            borderRadius: 3,
          }}
        >
          {formatViewers(stream.viewers)} viewers
        </span>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <span
          aria-hidden="true"
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: stream.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {stream.streamer.charAt(0)}
        </span>
        <span style={{ minWidth: 0 }}>
          <span
            className="card-title"
            style={{
              display: "block",
              fontSize: 14,
              fontWeight: 600,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {stream.title}
          </span>
          <span style={{ display: "block", fontSize: 13, color: "var(--text-muted)" }}>
            {stream.streamer}
          </span>
          <span style={{ display: "block", fontSize: 13, color: "var(--text-muted)" }}>
            {stream.category}
          </span>
          <span style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
            {stream.tags.map((t) => (
              <span
                key={t}
                style={{
                  background: "var(--bg-hover)",
                  color: "var(--text-muted)",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: 10,
                }}
              >
                {t}
              </span>
            ))}
          </span>
        </span>
      </div>
    </Link>
  );
}
