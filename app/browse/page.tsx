import StreamCard from "@/components/StreamCard";
import { streams, categories, formatViewers } from "@/lib/data";

export const metadata = { title: "Browse · Twitch Clone" };

export default function BrowsePage() {
  return (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 32 }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>Browse</h1>

      <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Top categories</h2>
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

      <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Live channels</h2>
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
    </div>
  );
}
