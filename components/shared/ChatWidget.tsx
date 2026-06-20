"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────── */
interface Chip {
  label: string;
  value: string;
}

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
  chips?: Chip[];
  links?: { label: string; href: string }[];
}

/* ─────────────────────────────────────────────────────────────────────────
   INTENT ENGINE  (pure keyword matching - zero API calls)
───────────────────────────────────────────────────────────────────────── */
interface Intent {
  keywords: string[];
  response: Omit<Message, "id" | "from">;
}

const INTENTS: Intent[] = [
  {
    keywords: ["book", "appointment", "consult", "schedule", "visit"],
    response: {
      text: "I'd love to help you book a consultation with Dr. Sharda! 📅",
      chips: [{ label: "👉 Open Booking Form", value: "go:/appointment" }],
      links: [{ label: "Book Appointment →", href: "/appointment" }],
    },
  },
  {
    keywords: ["treatment", "condition", "disease", "problem", "cure", "heal", "medicine"],
    response: {
      text: "Dr. Sharda treats 50+ conditions naturally. Which area concerns you?",
      chips: [
        { label: "🌸 Skin", value: "go:/treatments?cat=skin" },
        { label: "🫁 Respiratory", value: "go:/treatments?cat=respiratory" },
        { label: "🍃 Digestive", value: "go:/treatments?cat=digestive" },
        { label: "🦴 Joint & Bone", value: "go:/treatments?cat=joint" },
        { label: "👶 Children", value: "go:/treatments?cat=children" },
        { label: "💐 Women's Health", value: "go:/treatments?cat=womens" },
        { label: "🏃 Lifestyle", value: "go:/treatments?cat=lifestyle" },
      ],
    },
  },
  {
    keywords: ["skin", "psoriasis", "eczema", "acne", "rash", "dermat", "vitiligo"],
    response: {
      text: "Dr. Sharda has excellent results with skin conditions like psoriasis, eczema, and acne. ✨",
      links: [{ label: "View Skin Treatments →", href: "/treatments?cat=skin" }],
      chips: [{ label: "📅 Book Skin Consultation", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["pcod", "pcos", "women", "hormonal", "period", "menstrual", "fertility"],
    response: {
      text: "Homeopathy offers gentle, effective care for women's health concerns like PCOD, hormonal imbalance, and more. 💐",
      links: [{ label: "Women's Health Treatments →", href: "/treatments?cat=womens" }],
      chips: [{ label: "📅 Book Consultation", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["asthma", "respiratory", "breathing", "bronchitis", "cough", "lung", "allergy"],
    response: {
      text: "Homeopathy can significantly help with respiratory issues like asthma, chronic cough, and allergies. 🫁",
      links: [{ label: "Respiratory Treatments →", href: "/treatments?cat=respiratory" }],
      chips: [{ label: "📅 Book Consultation", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["joint", "arthritis", "bone", "knee", "back", "pain", "spine"],
    response: {
      text: "Joint and bone conditions respond well to constitutional homeopathic treatment. 🦴",
      links: [{ label: "Joint & Bone Treatments →", href: "/treatments?cat=joint" }],
      chips: [{ label: "📅 Book Consultation", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["child", "kid", "baby", "pediatric", "infant", "toddler"],
    response: {
      text: "Homeopathy is 100% safe and gentle for children - no side effects, no chemicals. 👶",
      links: [{ label: "Children's Treatments →", href: "/treatments?cat=children" }],
      chips: [{ label: "📅 Book Consultation", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["contact", "address", "location", "where", "clinic", "find"],
    response: {
      text: "📍 You can reach us at:\n\n**Sharda Homeopathy Clinic**\nPune, Maharashtra\n\n📞 Contact via our page for the exact address.",
      links: [{ label: "Visit Contact Page →", href: "/contact" }],
      chips: [{ label: "🗺️ Get Directions", value: "go:/contact" }],
    },
  },
  {
    keywords: ["phone", "call", "number", "whatsapp", "message"],
    response: {
      text: "You can reach Dr. Sharda via phone or WhatsApp! 📞",
      links: [{ label: "Contact Page →", href: "/contact" }],
      chips: [
        { label: "💬 WhatsApp Us", value: "whatsapp" },
        { label: "📞 Contact Page", value: "go:/contact" },
      ],
    },
  },
  {
    keywords: ["time", "timing", "hour", "open", "available", "when"],
    response: {
      text: "🕙 Clinic Hours:\n\n**Mon – Sat**\n• Morning: 10:30 AM – 12:30 PM\n• Evening: 5:00 PM – 7:30 PM\n\nSunday: Closed",
      chips: [{ label: "📅 Book Appointment", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["fee", "fees", "cost", "price", "charge", "rate", "how much"],
    response: {
      text: "💰 Consultation fees are very affordable and transparent. Dr. Sharda believes healing should be accessible to all.\n\nFor exact details, please visit the clinic or contact us.",
      links: [{ label: "Contact for Details →", href: "/contact" }],
      chips: [{ label: "📅 Book Consultation", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["doctor", "sharda", "about", "experience", "background", "qualification", "who"],
    response: {
      text: "👩‍⚕️ Dr. Sharda Tawale is a highly experienced homeopathic physician with **25+ years** of practice in Pune (since 2001). She has successfully treated **10,000+ patients** across 50+ conditions.",
      links: [{ label: "Read About Dr. Sharda →", href: "/about" }],
      chips: [{ label: "📅 Book with Her", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["review", "testimonial", "patient", "feedback", "rating", "success", "result"],
    response: {
      text: "⭐ Dr. Sharda holds a **4.9/5 rating** from thousands of happy patients. Read their stories!",
      links: [{ label: "Read Testimonials →", href: "/testimonials" }],
      chips: [{ label: "📅 Join Them - Book Now", value: "go:/appointment" }],
    },
  },
  {
    keywords: ["blog", "article", "read", "post", "knowledge", "information", "learn"],
    response: {
      text: "📚 Explore our health blog for expert articles on homeopathy, lifestyle tips, and condition guides.",
      links: [{ label: "Visit Blog →", href: "/blog" }],
    },
  },
  {
    keywords: ["gallery", "photo", "image", "look"],
    response: {
      text: "🖼️ Take a peek at our clinic and patient moments in the gallery!",
      links: [{ label: "View Gallery →", href: "/gallery" }],
    },
  },
  {
    keywords: ["safe", "side effect", "natural", "chemical", "harmless", "gentle"],
    response: {
      text: "✅ Homeopathy is 100% natural, gentle, and free from side effects. It works with your body's own healing intelligence - suitable for all ages, including infants and pregnant women.",
      chips: [
        { label: "📋 Browse Treatments", value: "go:/treatments" },
        { label: "📅 Book Consultation", value: "go:/appointment" },
      ],
    },
  },
  {
    keywords: ["hello", "hi", "hey", "helo", "namaste", "good morning", "good evening"],
    response: {
      text: "Namaste! 🙏 Welcome to Dr. Sharda Homeopathy. I'm here to help you navigate our services. What can I assist you with?",
      chips: MAIN_MENU_CHIPS(),
    },
  },
];

function MAIN_MENU_CHIPS(): Chip[] {
  return [
    { label: "📅 Book Appointment", value: "book appointment" },
    { label: "💊 Treatments", value: "treatment" },
    { label: "⏰ Clinic Timings", value: "timing" },
    { label: "📞 Contact Us", value: "contact" },
    { label: "👩‍⚕️ About Doctor", value: "about doctor" },
    { label: "⭐ Testimonials", value: "testimonials" },
  ];
}

function WELCOME_MESSAGE(): Omit<Message, "id" | "from"> {
  return {
    text: "Namaste! 🙏 I'm Shuddh, your clinic assistant.\n\nI can help you **book appointments**, find **treatments**, check **clinic timings**, and more.\n\nHow can I help you today?",
    chips: MAIN_MENU_CHIPS(),
  };
}

function FALLBACK_RESPONSE(): Omit<Message, "id" | "from"> {
  return {
    text: "I'm not sure about that, but I'd love to connect you with the right resource! 😊 Here's what I can help with:",
    chips: MAIN_MENU_CHIPS(),
  };
}

function matchIntent(input: string): Omit<Message, "id" | "from"> {
  const lower = input.toLowerCase().trim();
  for (const intent of INTENTS) {
    if (intent.keywords.some((kw) => lower.includes(kw))) {
      return intent.response;
    }
  }
  return FALLBACK_RESPONSE();
}

/* ─────────────────────────────────────────────────────────────────────────
   PROACTIVE GREETING BUBBLE
───────────────────────────────────────────────────────────────────────── */
const GREETING_LS_KEY = "shuddh_greeted_v1";

interface GreetingBubbleProps {
  onOpen: () => void;
  onDismiss: () => void;
  isGoldPulsing: boolean;
}

function GreetingBubble({ onOpen, onDismiss, isGoldPulsing }: GreetingBubbleProps) {
  const [phase, setPhase] = useState<"typing" | "message" | "gone">("typing");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // fade in
    const t1 = setTimeout(() => setVisible(true), 50);
    // after 1.5s typing → show message
    const t2 = setTimeout(() => setPhase("message"), 1500);
    // auto dismiss after 8s total (1.5 typing + 6.5 reading)
    const t3 = setTimeout(() => handleDismiss(), 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDismiss = () => {
    setPhase("gone");
    setVisible(false);
    setTimeout(onDismiss, 300);
  };

  const handleClick = () => {
    handleDismiss();
    setTimeout(onOpen, 300);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 160,
        right: 24,
        zIndex: 56,
        width: 240,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: phase === "gone" ? "none" : "auto",
      }}
    >
      {/* Card */}
      <div
        onClick={handleClick}
        style={{
          background: "white",
          borderRadius: "16px 16px 4px 16px",
          boxShadow: "0 8px 32px rgba(27,94,53,0.18), 0 2px 8px rgba(0,0,0,0.08)",
          padding: "12px 14px",
          cursor: "pointer",
          border: "1px solid rgba(201,150,58,0.15)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={(e) => { e.stopPropagation(); handleDismiss(); }}
          aria-label="Dismiss greeting"
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "rgba(0,0,0,0.06)",
            border: "none",
            borderRadius: "50%",
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#666",
            padding: 0,
          }}
        >
          <X size={11} />
        </button>

        {phase === "typing" ? (
          /* ── Typing indicator ── */
          <div style={{ display: "flex", alignItems: "center", gap: 10, paddingRight: 20 }}>
            {/* Avatar */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid rgba(27,94,53,0.2)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
                alt="Shuddh"
                width={28}
                height={28}
                style={{ objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#1B5E35",
                    display: "inline-block",
                    animation: "greetDot 1.2s ease-in-out infinite",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── Message ── */
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              animation: "greetFadeIn 0.35s ease forwards",
              paddingRight: 16,
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid rgba(27,94,53,0.2)",
                marginTop: 2,
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
                alt="Shuddh"
                width={28}
                height={28}
                style={{ objectFit: "cover", display: "block" }}
              />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#1B5E35", marginBottom: 3 }}>
                Shuddh 🌿
              </p>
              <p style={{ margin: 0, fontSize: 12.5, color: "#2c2c2c", lineHeight: 1.5 }}>
                👋 Hi! Not sure which treatment you need?{" "}
                <strong>Ask me!</strong>
              </p>
              <p style={{ margin: "6px 0 0", fontSize: 11, color: "#1B5E35", fontWeight: 600 }}>
                Tap to chat →
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Triangle tail pointing right-down toward the button */}
      <div
        style={{
          position: "absolute",
          bottom: -8,
          right: 20,
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "8px solid white",
          filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.06))",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   MAIN CHAT WIDGET
───────────────────────────────────────────────────────────────────────── */
let _id = 0;
const nextId = () => ++_id;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const [showGreeting, setShowGreeting] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Init welcome message */
  useEffect(() => {
    const welcome = WELCOME_MESSAGE();
    setMessages([{ id: nextId(), from: "bot", ...welcome }]);
  }, []);

  /* Show proactive greeting after 3s, only once per session */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(GREETING_LS_KEY)) return;
    const t = setTimeout(() => setShowGreeting(true), 3000);
    return () => clearTimeout(t);
  }, []);

  /* Scroll to bottom on new message */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* Focus input when opened */
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const dismissGreeting = useCallback(() => {
    setShowGreeting(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(GREETING_LS_KEY, "1");
    }
  }, []);

  const openChat = useCallback(() => {
    setOpen(true);
    dismissGreeting();
  }, [dismissGreeting]);

  const addBotMessage = useCallback((payload: Omit<Message, "id" | "from">) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), from: "bot", ...payload }]);
    }, 650);
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      if (text.startsWith("go:")) { window.location.href = text.slice(3); return; }
      if (text === "whatsapp") { window.open("https://wa.me/919881255055", "_blank"); return; }
      setMessages((prev) => [...prev, { id: nextId(), from: "user", text }]);
      setInput("");
      addBotMessage(matchIntent(text));
    },
    [addBotMessage]
  );

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); sendMessage(input); };

  /* ── Render ── */
  return (
    <>
      {/* ── All keyframes ── */}
      <style>{`
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30%            { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes greetDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30%            { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes greetFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.18); }
        }
        @keyframes chatPulseRing {
          0%   { transform: scale(1);    opacity: 0.55; }
          70%  { transform: scale(1.65); opacity: 0; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        @keyframes goldPulseRing {
          0%   { transform: scale(1);    opacity: 0.7; }
          70%  { transform: scale(1.7);  opacity: 0; }
          100% { transform: scale(1.7);  opacity: 0; }
        }
      `}</style>

      {/* ── Proactive greeting bubble ── */}
      {showGreeting && !open && (
        <GreetingBubble
          onOpen={openChat}
          onDismiss={dismissGreeting}
          isGoldPulsing={showGreeting}
        />
      )}

      {/* ── Chat Panel ── */}
      <div
        style={{
          position: "fixed",
          bottom: 152,
          right: 24,
          zIndex: 55,
          transition: "opacity 0.25s ease, transform 0.25s ease",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
          pointerEvents: open ? "auto" : "none",
          transformOrigin: "bottom right",
          width: "min(380px, calc(100vw - 32px))",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            height: "480px",
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid rgba(201,150,58,0.2)",
            boxShadow: "0 24px 60px rgba(27,94,53,0.18), 0 4px 16px rgba(201,150,58,0.1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #1B5E35 0%, #2E7D50 100%)",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
                alt="Shuddh"
                width={38}
                height={38}
                style={{ objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: 14, margin: 0, lineHeight: 1.2 }}>
                Shuddh 🌿
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, margin: 0, marginTop: 2 }}>
                Dr. Sharda Clinic Assistant · Always here
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: "50%",
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "white",
                flexShrink: 0,
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 12px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              background: "#FAFAF8",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.from === "bot" ? "flex-start" : "flex-end",
                  gap: 6,
                }}
              >
                {/* Bubble */}
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "10px 14px",
                    borderRadius: msg.from === "bot" ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
                    background: msg.from === "bot" ? "#1B5E35" : "linear-gradient(135deg,#C9963A,#E8C96D)",
                    color: "white",
                    fontSize: 13,
                    lineHeight: 1.55,
                    whiteSpace: "pre-line",
                    fontWeight: 400,
                    boxShadow: msg.from === "bot"
                      ? "0 2px 8px rgba(27,94,53,0.2)"
                      : "0 2px 8px rgba(201,150,58,0.25)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: msg.text
                      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br/>"),
                  }}
                />

                {/* Link buttons */}
                {msg.links && msg.links.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, maxWidth: "82%" }}>
                    {msg.links.map((lnk) => (
                      <Link
                        key={lnk.href}
                        href={lnk.href}
                        onClick={() => setOpen(false)}
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#1B5E35",
                          background: "rgba(27,94,53,0.08)",
                          border: "1px solid rgba(27,94,53,0.25)",
                          borderRadius: 999,
                          padding: "4px 12px",
                          textDecoration: "none",
                          display: "inline-block",
                        }}
                      >
                        {lnk.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Quick-reply chips */}
                {msg.chips && msg.chips.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, maxWidth: "100%" }}>
                    {msg.chips.map((chip) => (
                      <button
                        key={chip.value}
                        onClick={() => sendMessage(chip.value)}
                        style={{
                          fontSize: 11,
                          fontWeight: 500,
                          color: "#C9963A",
                          background: "rgba(201,150,58,0.07)",
                          border: "1px solid rgba(201,150,58,0.35)",
                          borderRadius: 999,
                          padding: "4px 11px",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          transition: "background 0.15s, transform 0.1s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,150,58,0.15)";
                          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,150,58,0.07)";
                          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                        }}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: "flex", alignItems: "center", gap: 4, paddingLeft: 4 }}>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#1B5E35",
                      opacity: 0.5,
                      display: "inline-block",
                      animation: "typingDot 1.2s ease-in-out infinite",
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: 8,
              padding: "10px 12px",
              background: "white",
              borderTop: "1px solid rgba(201,150,58,0.12)",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              style={{
                flex: 1,
                border: "1px solid rgba(201,150,58,0.3)",
                borderRadius: 999,
                padding: "8px 14px",
                fontSize: 13,
                outline: "none",
                color: "#1a1a1a",
                background: "#FAFAF8",
              }}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              style={{
                background: input.trim()
                  ? "linear-gradient(135deg,#C9963A,#E8C96D)"
                  : "rgba(201,150,58,0.25)",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: input.trim() ? "pointer" : "default",
                flexShrink: 0,
                transition: "background 0.15s",
              }}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ── Toggle Bubble + "Ask Shuddh" label ── */}
      <div
        style={{
          position: "fixed",
          bottom: 88,
          right: 24,
          zIndex: 55,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
        className="group"
      >
        {/* "Ask Shuddh 🌿" always-visible pill label - hidden on mobile */}
        {!open && (
          <div
            onClick={openChat}
            className="hidden sm:flex"
            style={{
              alignItems: "center",
              background: "white",
              color: "#1B5E35",
              fontSize: 12.5,
              fontWeight: 700,
              padding: "7px 14px",
              borderRadius: 999,
              boxShadow: "0 4px 16px rgba(27,94,53,0.15), 0 1px 4px rgba(0,0,0,0.08)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              border: "1px solid rgba(27,94,53,0.12)",
              userSelect: "none",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(27,94,53,0.22), 0 2px 6px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(27,94,53,0.15), 0 1px 4px rgba(0,0,0,0.08)";
            }}
          >
            Ask Shuddh 🌿
            {/* CSS tail pointing right */}
            <span
              style={{
                position: "absolute",
                right: -7,
                top: "50%",
                transform: "translateY(-50%)",
                width: 0,
                height: 0,
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderLeft: "7px solid white",
              }}
            />
          </div>
        )}

        {/* Pulse ring */}
        {!open && (
          <span
            style={{
              position: "absolute",
              right: 0,
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: showGreeting ? "#C9963A" : "#2E7D52",
              animation: showGreeting
                ? "goldPulseRing 2s ease-out infinite"
                : "chatPulseRing 2.5s ease-out infinite",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Button */}
        <button
          onClick={() => { if (!open) { openChat(); } else { setOpen(false); } }}
          aria-label={open ? "Close Shuddh chat" : "Open Shuddh clinic assistant"}
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#2E7D52",
            border: "2px solid rgba(201,150,58,0.45)",
            boxShadow: "0 4px 18px rgba(46,125,82,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
            flexShrink: 0,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(46,125,82,0.6)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 18px rgba(46,125,82,0.45)";
          }}
        >
          {/* Chat icon */}
          <span
            style={{
              position: "absolute",
              display: "flex",
              transition: "opacity 0.2s",
              opacity: open ? 0 : 1,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                fill="white"
                fillOpacity="0.95"
              />
              <circle cx="8.5" cy="11" r="1.2" fill="#2E7D52" />
              <circle cx="12" cy="11" r="1.2" fill="#2E7D52" />
              <circle cx="15.5" cy="11" r="1.2" fill="#2E7D52" />
            </svg>
          </span>

          {/* X icon */}
          <span
            style={{
              position: "absolute",
              display: "flex",
              transition: "opacity 0.2s",
              opacity: open ? 1 : 0,
              color: "white",
            }}
          >
            <X size={22} />
          </span>

          {/* Gold unread badge */}
          {unread > 0 && !open && (
            <span
              style={{
                position: "absolute",
                top: -4,
                right: -4,
                background: "#C9963A",
                color: "white",
                borderRadius: "50%",
                width: 18,
                height: 18,
                fontSize: 10,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                animation: "badgePulse 2s ease-in-out infinite",
              }}
            >
              {unread}
            </span>
          )}
        </button>
      </div>
    </>
  );
}
