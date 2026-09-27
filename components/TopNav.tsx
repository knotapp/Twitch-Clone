import Link from "next/link";

export default function TopNav() {
  return (
    <header
      style={{
        height: 50,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 16px",
        background: "var(--bg-elevated)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="var(--brand)"
            d="M4 2 2 6.5V20h5v3l3.5-3H15l6-5.5V2H4Zm15 11.5L16 17h-5l-3 2.5V17H5V4h14v9.5ZM11 7h2v6h-2V7Zm5 0h2v6h-2V7Z"
          />
        </svg>
        <span>Twitch Clone</span>
      </Link>

      <nav style={{ display: "flex", gap: 4 }}>
        <Link
          className="nav-link"
          href="/"
          style={{ padding: "6px 10px", borderRadius: 4, fontSize: 14, fontWeight: 600 }}
        >
          Following
        </Link>
        <Link
          className="nav-link"
          href="/browse"
          style={{ padding: "6px 10px", borderRadius: 4, fontSize: 14, fontWeight: 600 }}
        >
          Browse
        </Link>
      </nav>

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <input
          aria-label="Search channels"
          placeholder="Search"
          style={{
            width: "100%",
            maxWidth: 400,
            height: 30,
            padding: "0 10px",
            borderRadius: 4,
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "var(--text)",
            fontSize: 14,
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          className="btn-ghost"
          style={{
            height: 30,
            padding: "0 10px",
            borderRadius: 4,
            border: "none",
            background: "var(--bg-hover)",
            color: "var(--text)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Log In
        </button>
        <button
          className="btn-brand"
          style={{
            height: 30,
            padding: "0 10px",
            borderRadius: 4,
            border: "none",
            background: "var(--brand)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
