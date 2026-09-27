"use client";

import { useEffect, useRef, useState } from "react";
import { chatMessages } from "@/lib/data";

export default function Chat() {
  const [visible, setVisible] = useState(() => chatMessages.slice(0, 4));
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 4;
    const timer = setInterval(() => {
      const next = chatMessages[i % chatMessages.length];
      i += 1;
      setVisible((prev) => [...prev.slice(-30), next]);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [visible]);

  return (
    <section
      aria-label="Stream chat"
      style={{
        width: 320,
        flexShrink: 0,
        borderLeft: "1px solid var(--border)",
        background: "var(--bg-elevated)",
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 50px)",
        position: "sticky",
        top: 50,
      }}
    >
      <header
        style={{
          padding: "10px 14px",
          borderBottom: "1px solid var(--border)",
          fontSize: 13,
          fontWeight: 700,
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          color: "var(--text-muted)",
        }}
      >
        Stream Chat
      </header>

      <div
        ref={listRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {visible.map((m, idx) => (
          <p key={`${m.user}-${idx}`} style={{ margin: 0, fontSize: 14, lineHeight: 1.4 }}>
            <span style={{ color: m.color, fontWeight: 700 }}>{m.user}</span>
            <span style={{ color: "var(--text-muted)" }}>: </span>
            <span>{m.text}</span>
          </p>
        ))}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          padding: 12,
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <input
          aria-label="Send a message"
          placeholder="Send a message"
          style={{
            height: 36,
            padding: "0 10px",
            borderRadius: 4,
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "var(--text)",
            fontSize: 14,
          }}
        />
        <button
          type="submit"
          className="btn-brand"
          style={{
            alignSelf: "flex-end",
            height: 32,
            padding: "0 14px",
            borderRadius: 4,
            border: "none",
            background: "var(--brand)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Chat
        </button>
      </form>
    </section>
  );
}
