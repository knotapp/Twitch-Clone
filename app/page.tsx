import Link from "next/link";
import StreamCard from "@/components/StreamCard";
import { streams, categories, formatViewers } from "@/lib/data";

export default function HomePage() {
  const featured = streams[0];

  return (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 32 }}>
      <section
        style={{
          display: "flex",
          gap: 24,
          alignItems: "center",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: 24,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 280,
            aspectRatio: "16 / 9",
            borderRadius: 6,
            background: featured.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          {featured.streamer}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
          <span
            style={{
              alignSelf: "flex-start",
              background: "var(--live)",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              padding: "3px 6px",
              borderRadius: 3,
            }}
          >
            Live now
          </span>
          <h1 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>{featured.title}</h1>
          <p style={{ margin: 0, color: "var(--text-muted)", fontSize: 15 }}>
            {featured.streamer} · {featured.category} ·{" "}
            {formatViewers(featured.viewers)} watching
          </p>
          <Link
            href={`/channel/${featured.slug}`}
            className="btn-brand"
            style={{
              alignSelf: "flex-start",
              background: "var(--brand)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              padding: "8px 16px",
              borderRadius: 4,
            }}
          >
            Watch stream
          </Link>
        </div>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Live channels we think you&apos;ll like</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {streams.map((s) => (
            <StreamCard key={s.slug} stream={s} />
          ))}
        </div>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Categories</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {categories.map((c) => (
            <div
              key={c.name}
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span
                aria-hidden="true"
                style={{ height: 4, width: 48, borderRadius: 2, background: c.accent }}
              />
              <span style={{ fontSize: 15, fontWeight: 600 }}>{c.name}</span>
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                {formatViewers(c.viewers)} viewers
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
