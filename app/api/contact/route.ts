import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { getResend } from "@/lib/resend";
import { generateAdminContactEmail } from "@/lib/emailTemplates";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 1. Store in Supabase (if configured)
    const supabase = getSupabaseAdmin();
    if (supabase) {
      await supabase.from("contacts").insert([{ name, email, phone, message }]);
    }

    // 2. Send notification email (if Resend configured)
    const resend = getResend();
    if (resend) {
      const adminEmail = process.env.ADMIN_EMAIL || "info@shardahomeopathy.com";
      await resend.emails.send({
        from: "Sharda Homeopathy <onboarding@resend.dev>",
        to: adminEmail,
        subject: `New Contact Message from ${name}`,
        html: generateAdminContactEmail({ name, email, phone, message }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
