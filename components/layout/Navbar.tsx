"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Clock, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Treatments",
    href: "/treatments",
    dropdown: [
      { label: "Skin Conditions", href: "/treatments?cat=skin" },
      { label: "Respiratory", href: "/treatments?cat=respiratory" },
      { label: "Digestive", href: "/treatments?cat=digestive" },
      { label: "Joint & Bone", href: "/treatments?cat=joint" },
      { label: "Children", href: "/treatments?cat=children" },
      { label: "Women's Health", href: "/treatments?cat=womens" },
      { label: "Lifestyle", href: "/treatments?cat=lifestyle" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={`bg-primary text-white text-xs transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={`tel:${(process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91-XXXXXXXXXX").replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-1.5 hover:text-secondary-light transition-colors"
          >
            <Phone size={12} />
            <span>{process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91-XXXXXXXXXX"}</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>Pune, Maharashtra</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            <span>Mon–Sat: 10:30 AM – 12:30 PM, 5:00 PM – 7:30 PM</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white shadow-md"
            : "bg-white/80 backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Sharda Homeopathy Logo"
              width={38}
              height={38}
              className="object-contain"
              priority
            />
            <span className="font-playfair text-xl font-bold text-primary group-hover:text-primary-light transition-colors">
              Dr. Sharda Homeopathy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`nav-link px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${isActive(link.href)
                      ? "text-primary"
                      : "text-charcoal hover:text-primary"
                    }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>

                {/* Active indicator dot */}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary" />
                )}

                {/* Dropdown */}
                {link.dropdown && dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/appointment"
              className="hidden sm:inline-flex btn-primary text-sm"
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-cream transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary-dark"
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-2xl font-playfair py-3 px-6 transition-colors ${isActive(link.href)
                          ? "text-secondary"
                          : "text-white hover:text-secondary-light"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * navLinks.length }}
                  className="mt-6"
                >
                  <Link
                    href="/appointment"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    📅 Book Appointment
                  </Link>
                </motion.div>
              </div>

              {/* Bottom Info */}
              <div className="p-6 text-center text-white/60 text-sm">
                <p>Pune, Maharashtra</p>
                <p>Mon–Sat: 10:30 AM – 12:30 PM, 5:00 PM – 7:30 PM</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
