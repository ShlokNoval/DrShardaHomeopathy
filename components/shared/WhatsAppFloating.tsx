"use client";

import { getWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppFloating() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
  const msgUrl = getWhatsAppUrl("Hello Dr. Sharda, I found your website and would like to enquire about treatment.");
  const callUrl = `https://wa.me/${phone}`;

  return (
    <div
      className="group"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 10,
      }}
    >
      {/* Expanded action panel — always visible on mobile, hover on desktop */}
      <div
        className="flex flex-col gap-2 group-hover:opacity-100 group-hover:translate-y-0 opacity-100 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0"
        style={{ transition: "opacity 0.25s ease, transform 0.25s ease" }}
      >
        {/* WhatsApp Message button */}
        <a
          href={msgUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#fff",
            border: "1.5px solid #25D366",
            borderRadius: 999,
            padding: "7px 16px 7px 10px",
            boxShadow: "0 3px 14px rgba(37,211,102,0.22)",
            textDecoration: "none",
            transition: "transform 0.18s ease, box-shadow 0.18s ease",
          }}
          className="hover:scale-105 hover:shadow-lg"
        >
          {/* Chat icon */}
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          </span>
          <div>
            <p style={{ margin: 0, fontSize: 11, color: "#888", fontWeight: 500, lineHeight: 1 }}>WhatsApp</p>
            <p style={{ margin: 0, fontSize: 13, color: "#1B5E35", fontWeight: 700, lineHeight: 1.3 }}>Send Message</p>
          </div>
        </a>

        {/* WhatsApp Call button */}
        <a
          href={callUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Call us on WhatsApp"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#fff",
            border: "1.5px solid #128C7E",
            borderRadius: 999,
            padding: "7px 16px 7px 10px",
            boxShadow: "0 3px 14px rgba(18,140,126,0.18)",
            textDecoration: "none",
            transition: "transform 0.18s ease, box-shadow 0.18s ease",
          }}
          className="hover:scale-105 hover:shadow-lg"
        >
          {/* Phone icon */}
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#128C7E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          <div>
            <p style={{ margin: 0, fontSize: 11, color: "#888", fontWeight: 500, lineHeight: 1 }}>WhatsApp</p>
            <p style={{ margin: 0, fontSize: 13, color: "#1B5E35", fontWeight: 700, lineHeight: 1.3 }}>Call Now</p>
          </div>
        </a>
      </div>

      {/* Main pulsing WhatsApp icon — label always visible */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Persistent label */}
        <div
          style={{
            background: "#1B5E35",
            color: "white",
            fontSize: 11,
            fontWeight: 600,
            padding: "5px 12px",
            borderRadius: 999,
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            letterSpacing: "0.02em",
          }}
        >
          Chat / Call on WhatsApp
        </div>

        {/* Pulse + icon */}
        <div style={{ position: "relative", width: 56, height: 56 }}>
          {/* Pulse ring */}
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "#25D366",
              animation: "waPulse 2.5s ease-out infinite",
            }}
          />
          {/* Button */}
          <div
            style={{
              position: "relative",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #25D366 60%, #128C7E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            className="group-hover:scale-110"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1); opacity: 0.6; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
