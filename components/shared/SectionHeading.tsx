interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${
            light ? "text-secondary-light" : "text-secondary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-playfair ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 mx-auto h-1 w-16 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
        style={{ backgroundColor: "#C9A84C" }}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
