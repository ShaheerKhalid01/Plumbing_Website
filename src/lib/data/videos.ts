export interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  youtubeId: string | null;
}

// Set NEXT_PUBLIC_YOUTUBE_VIDEO_IDS as comma-separated IDs to enable video links
function parseYoutubeIds(): (string | null)[] {
  const raw = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_IDS;
  if (!raw) return [null, null, null];
  const ids = raw.split(',').map((s) => s.trim()).filter(Boolean);
  return [ids[0] ?? null, ids[1] ?? null, ids[2] ?? null];
}

const youtubeIds = parseYoutubeIds();

export const videos: VideoItem[] = [
  {
    id: 1,
    title: 'How We Clear Clogged Drains — Hydro Jetting Demo',
    description:
      'Watch our team use professional hydro-jetting equipment to blast through the toughest drain clogs.',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80',
    duration: '3:24',
    youtubeId: youtubeIds[0],
  },
  {
    id: 2,
    title: 'Water Heater Installation — Step by Step',
    description:
      'Our licensed plumber walks through a complete tankless water heater installation in McKinney, TX.',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=640&q=80',
    duration: '5:12',
    youtubeId: youtubeIds[1],
  },
  {
    id: 3,
    title: 'Slab Leak Detection — What to Look For',
    description:
      'Learn how to identify the warning signs of a slab leak before it causes serious damage to your home.',
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=640&q=80',
    duration: '4:08',
    youtubeId: youtubeIds[2],
  },
];
