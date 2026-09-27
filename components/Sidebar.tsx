import Link from "next/link";
import { streams, formatViewers } from "@/lib/data";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        flexShrink: 0,
        background: "var(--bg-elevated)",
        borderRight: "1px solid var(--border)",
        padding: "12px 8px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <h2
        style={{
          margin: "4px 8px 0",
          fontSize: 13,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        Recommended Channels
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {streams.map((s) => (
          <Link
            key={s.slug}
            href={`/channel/${s.slug}`}
            className="sidebar-item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 8px",
              borderRadius: 4,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: s.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {s.streamer.charAt(0)}
            </span>
            <span style={{ minWidth: 0, flex: 1 }}>
              <span
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 600,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {s.streamer}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "var(--text-muted)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {s.category}
              </span>
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 12,
                color: "var(--text-muted)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--live)",
                }}
              />
              {formatViewers(s.viewers)}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
