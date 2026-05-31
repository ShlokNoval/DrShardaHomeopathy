import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getWhatsAppUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
  const text = message || "Hello, I found your website and would like to enquire about treatment.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getPhoneUrl(): string {
  const phone = process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91-XXXXXXXXXX";
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}
