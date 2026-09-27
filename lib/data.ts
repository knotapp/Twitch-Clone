export type Stream = {
  slug: string;
  title: string;
  streamer: string;
  category: string;
  viewers: number;
  tags: string[];
  accent: string;
  live: boolean;
};

export const streams: Stream[] = [
  {
    slug: "pixelforge",
    title: "Ranked grind to Masters — road to top 500",
    streamer: "PixelForge",
    category: "Valorant",
    viewers: 24831,
    tags: ["English", "FPS", "Ranked"],
    accent: "#9147ff",
    live: true,
  },
  {
    slug: "novaknits",
    title: "Cozy knitting + chill synthwave",
    streamer: "NovaKnits",
    category: "Just Chatting",
    viewers: 8420,
    tags: ["English", "Crafts", "Cozy"],
    accent: "#1f9bd1",
    live: true,
  },
  {
    slug: "byteburner",
    title: "Building a Rust game engine from scratch",
    streamer: "ByteBurner",
    category: "Software & Game Dev",
    viewers: 5127,
    tags: ["English", "Programming", "Rust"],
    accent: "#00b5ad",
    live: true,
  },
  {
    slug: "lumenlive",
    title: "Speedrunning every Zelda title back to back",
    streamer: "LumenLive",
    category: "Retro",
    viewers: 14203,
    tags: ["English", "Speedrun"],
    accent: "#e0629a",
    live: true,
  },
  {
    slug: "atlasarcade",
    title: "Community tournament finals — $500 prize pool",
    streamer: "AtlasArcade",
    category: "Rocket League",
    viewers: 31980,
    tags: ["English", "Esports"],
    accent: "#f0a30a",
    live: true,
  },
  {
    slug: "mirafm",
    title: "Lo-fi beats and late night Q&A",
    streamer: "MiraFM",
    category: "Music",
    viewers: 3611,
    tags: ["English", "Music", "Chill"],
    accent: "#7a5cff",
    live: true,
  },
];

export const categories = [
  { name: "Valorant", viewers: 182_400, accent: "#ff4655" },
  { name: "Just Chatting", viewers: 421_900, accent: "#9147ff" },
  { name: "League of Legends", viewers: 264_100, accent: "#1f9bd1" },
  { name: "Software & Game Dev", viewers: 41_250, accent: "#00b5ad" },
  { name: "Rocket League", viewers: 88_700, accent: "#f0a30a" },
  { name: "Music", viewers: 33_480, accent: "#e0629a" },
];

export const chatMessages = [
  { user: "streamSnipe42", color: "#f0a30a", text: "that flick was insane" },
  { user: "kettleOnFire", color: "#1f9bd1", text: "first time catching you live!" },
  { user: "mochi_dev", color: "#00b5ad", text: "what keyboard is that?" },
  { user: "vexed", color: "#e0629a", text: "GG cleanup" },
  { user: "long_bao", color: "#9147ff", text: "chat we are so back" },
  { user: "nullpointer", color: "#7a5cff", text: "the pathing here is really clean" },
  { user: "quietStorm", color: "#f0a30a", text: "subbed for 12 months 🎉" },
  { user: "aria_plays", color: "#1f9bd1", text: "who else is here from the clip" },
];

export function formatViewers(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return `${n}`;
}

export function getStream(slug: string): Stream | undefined {
  return streams.find((s) => s.slug === slug);
}
