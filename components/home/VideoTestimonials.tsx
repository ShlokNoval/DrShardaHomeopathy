"use client";

// TODO: Replace MP4s with compressed WebM versions for 60% smaller file size

import { useRef, useState, useEffect, useCallback } from "react";
import { Play, X, ChevronLeft, ChevronRight, Star } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────── */
const VIDEO_DATA = [
  { id: 1, src: "/testimonials/video6.mp4", poster: "/testimonials/poster6.jpg", name: "Patient Story #1", condition: "Skin Disorder",    stars: 5 },
  { id: 2, src: "/testimonials/video2.mp4", poster: "/testimonials/poster2.jpg", name: "Patient Story #2", condition: "Joint Pain",       stars: 5 },
  { id: 3, src: "/testimonials/video3.mp4", poster: "/testimonials/poster3.jpg", name: "Patient Story #3", condition: "Digestive Issues", stars: 5 },
  { id: 4, src: "/testimonials/video4.mp4", poster: "/testimonials/poster4.jpg", name: "Patient Story #4", condition: "Respiratory",      stars: 5 },
  { id: 5, src: "/testimonials/video5.mp4", poster: "/testimonials/poster5.jpg", name: "Patient Story #5", condition: "Thyroid",          stars: 5 },
  { id: 6, src: "/testimonials/video1.mp4", poster: "/testimonials/poster1.jpg", name: "Patient Story #6", condition: "Hair Fall",        stars: 5 },
] as const;

type VideoItem = typeof VIDEO_DATA[number];

/* ─── Stars ─────────────────────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-[#C9963A] fill-[#C9963A]" />
      ))}
    </div>
  );
}

/* ─── Condition pill ─────────────────────────────────────────────────── */
function ConditionPill({ label }: { label: string }) {
  return (
    <span
      style={{
        background: "rgba(201,150,58,0.18)",
        border: "1px solid rgba(201,150,58,0.45)",
        borderRadius: 999,
        color: "#E8C96D",
        fontSize: 11,
        fontWeight: 600,
        padding: "2px 10px",
        letterSpacing: "0.04em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

/* ─── Lightbox ───────────────────────────────────────────────────────── */
function Lightbox({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Close video"
      >
        <X size={20} />
      </button>
      <div
        className="relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={ref}
          src={video.src}
          controls
          playsInline
          className="w-full rounded-xl"
          style={{ maxHeight: "85vh" }}
        />
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-white font-semibold text-sm">{video.name}</p>
            <ConditionPill label={video.condition} />
          </div>
          <Stars count={video.stars} />
        </div>
      </div>
    </div>
  );
}

/* ─── Single video card ──────────────────────────────────────────────── */
function VideoCard({
  video,
  allRefs,
  isHero = false,
  isMobile = false,
  onLightboxOpen,
}: {
  video: VideoItem;
  allRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  isHero?: boolean;
  isMobile?: boolean;
  onLightboxOpen: (v: VideoItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [srcLoaded, setSrcLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Register this video in the shared allRefs array
  useEffect(() => {
    const idx = video.id - 1;
    allRefs.current[idx] = videoRef.current;
  });

  // IntersectionObserver — lazy-load the video src when card enters viewport
  // Poster image always shows immediately (no src needed for that)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSrcLoaded(true); },
      { threshold: 0.1, rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handlePlay = useCallback(() => {
    if (isMobile) {
      onLightboxOpen(video);
      return;
    }
    // Pause all other videos
    allRefs.current.forEach((v, i) => {
      if (i !== video.id - 1 && v) { v.pause(); }
    });
    videoRef.current?.play();
    setPlaying(true);
  }, [isMobile, video, allRefs, onLightboxOpen]);

  const handlePause = useCallback(() => setPlaying(false), []);
  const handleEnded = useCallback(() => setPlaying(false), []);

  const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    border: hovered
      ? "2px solid rgba(201,150,58,0.6)"
      : "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(4px)",
    boxShadow: hovered
      ? "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,150,58,0.2)"
      : "0 8px 32px rgba(0,0,0,0.3)",
    borderRadius: 16,
    overflow: "hidden",
    transition: "border 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <div ref={containerRef} style={cardStyle}>
      {/* Video wrapper */}
      <div
        className="relative group cursor-pointer"
        style={{ aspectRatio: isHero ? "16/9" : "9/16" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={!playing ? handlePlay : undefined}
      >
        {/* Video always rendered so poster shows; src only set once in viewport */}
        <video
          ref={videoRef}
          src={srcLoaded ? video.src : undefined}
          poster={video.poster}
          playsInline
          preload="none"
          controls={playing && !isMobile}
          onPause={handlePause}
          onEnded={handleEnded}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Play button overlay — hidden when playing */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center rounded-full transition-transform duration-200"
              style={{
                width: isHero ? 72 : 56,
                height: isHero ? 72 : 56,
                background: "rgba(201,150,58,0.90)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                transform: hovered ? "scale(1.12)" : "scale(1)",
              }}
              onClick={handlePlay}
            >
              <Play
                size={isHero ? 28 : 22}
                className="text-white ml-1"
                fill="white"
              />
            </div>
          </div>
        )}
      </div>

      {/* Card footer */}
      <div
        style={{
          padding: isHero ? "10px 16px" : "8px 12px",
          background: "rgba(15,40,25,0.7)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: isHero ? 14 : 12, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {video.name}
          </p>
          <div className="mt-1">
            <ConditionPill label={video.condition} />
          </div>
        </div>
        <Stars count={video.stars} />
      </div>
    </div>
  );
}

/* ─── Mobile Carousel ───────────────────────────────────────────────── */
function MobileCarousel({
  videos,
  allRefs,
  onLightboxOpen,
}: {
  videos: typeof VIDEO_DATA;
  allRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  onLightboxOpen: (v: VideoItem) => void;
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(videos.length - 1, c + 1));

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {videos.map((v) => (
            <div key={v.id} className="min-w-full px-2">
              <VideoCard
                video={v}
                allRefs={allRefs}
                isMobile
                onLightboxOpen={onLightboxOpen}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-9 h-9 rounded-full bg-[#C9963A]/90 flex items-center justify-center text-white disabled:opacity-30 shadow-lg"
        aria-label="Previous video"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        disabled={current === videos.length - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-9 h-9 rounded-full bg-[#C9963A]/90 flex items-center justify-center text-white disabled:opacity-30 shadow-lg"
        aria-label="Next video"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to video ${i + 1}`}
            style={{
              width: i === current ? 20 : 8,
              height: 8,
              borderRadius: 999,
              background: i === current ? "#C9963A" : "rgba(255,255,255,0.3)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 0.25s ease, background 0.25s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Export ────────────────────────────────────────────────────── */
export default function VideoTestimonials() {
  const allVideoRefs = useRef<(HTMLVideoElement | null)[]>(Array(6).fill(null));
  const [lightboxVideo, setLightboxVideo] = useState<VideoItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openLightbox = useCallback((v: VideoItem) => setLightboxVideo(v), []);
  const closeLightbox = useCallback(() => setLightboxVideo(null), []);

  const [heroVideo, ...restVideos] = VIDEO_DATA;

  return (
    <>
      {/* Section label */}
      <div className="flex items-center justify-center mb-2">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(201,150,58,0.12)",
            border: "1px solid rgba(201,150,58,0.35)",
            borderRadius: 999,
            padding: "6px 18px",
          }}
        >
          <span style={{ fontSize: 16 }}>📹</span>
          <span style={{ color: "#E8C96D", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Watch Real Patient Stories
          </span>
        </div>
      </div>

      {/* ── Hero Video — full width ── */}
      <div className="mb-5">
        <VideoCard
          video={heroVideo}
          allRefs={allVideoRefs}
          isHero
          isMobile={isMobile}
          onLightboxOpen={openLightbox}
        />
      </div>

      {/* ── Remaining 5 videos — horizontal peek carousel ── */}
      {isMobile ? (
        <MobileCarousel
          videos={restVideos as unknown as typeof VIDEO_DATA}
          allRefs={allVideoRefs}
          onLightboxOpen={openLightbox}
        />
      ) : (
        <div
          style={{
            overflowX: "auto",
            display: "flex",
            gap: 12,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            paddingBottom: 8,
            /* Show 3.5 cards — 4th card peeks to signal scroll */
            scrollPaddingLeft: 0,
          }}
          className="hide-scrollbar"
        >
          {restVideos.map((v) => (
            <div
              key={v.id}
              style={{
                flex: "0 0 calc((100% - 3 * 12px) / 3.5)",
                scrollSnapAlign: "start",
              }}
            >
              <VideoCard
                video={v}
                allRefs={allVideoRefs}
                onLightboxOpen={openLightbox}
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxVideo && (
        <Lightbox video={lightboxVideo} onClose={closeLightbox} />
      )}
    </>
  );
}
