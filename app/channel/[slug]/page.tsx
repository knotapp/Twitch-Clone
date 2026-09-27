import { notFound } from "next/navigation";
import Chat from "@/components/Chat";
import { getStream, streams, formatViewers } from "@/lib/data";

export function generateStaticParams() {
  return streams.map((s) => ({ slug: s.slug }));
}

export default async function ChannelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stream = getStream(slug);
  if (!stream) notFound();

  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <div style={{ flex: 1, minWidth: 0, padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 9",
            borderRadius: 8,
            background: `linear-gradient(160deg, ${stream.accent}, #0e0e10)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 44, fontWeight: 800, opacity: 0.9 }}>
            {stream.streamer}
          </span>
          <span
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              background: "var(--live)",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              padding: "3px 6px",
              borderRadius: 3,
            }}
          >
            Live
          </span>
          <span
            style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              background: "rgba(0,0,0,0.7)",
              fontSize: 13,
              padding: "3px 7px",
              borderRadius: 3,
            }}
          >
            {formatViewers(stream.viewers)} watching
          </span>
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span
            aria-hidden="true"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: stream.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            {stream.streamer.charAt(0)}
          </span>
          <div style={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            <h1 style={{ margin: 0, fontSize: 20 }}>{stream.streamer}</h1>
            <p style={{ margin: 0, fontSize: 15 }}>{stream.title}</p>
            <p style={{ margin: 0, fontSize: 14, color: "var(--brand)" }}>{stream.category}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
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
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              className="btn-brand"
              style={{
                height: 34,
                padding: "0 14px",
                borderRadius: 4,
                border: "none",
                background: "var(--brand)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Follow
            </button>
            <button
              className="btn-ghost"
              style={{
                height: 34,
                padding: "0 14px",
                borderRadius: 4,
                border: "none",
                background: "var(--bg-hover)",
                color: "var(--text)",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div
          style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <h2 style={{ margin: "0 0 8px", fontSize: 15 }}>About {stream.streamer}</h2>
          <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>
            {stream.streamer} streams {stream.category} most days of the week. Expect a relaxed
            vibe, plenty of chat interaction, and the occasional community game night.
          </p>
        </div>
      </div>

      <Chat />
    </div>
  );
}
