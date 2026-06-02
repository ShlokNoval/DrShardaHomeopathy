import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { getResend } from "@/lib/resend";
import {
  generateAdminAppointmentEmail,
  generatePatientConfirmationEmail,
} from "@/lib/emailTemplates";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      name, phone, email, age, gender, city, condition,
      preferred_date, preferred_time, consultation_mode,
      message, referral_source,
    } = data;

    if (!name || !phone || !condition || !consultation_mode) {
      return NextResponse.json(
        { error: "Name, phone, condition, and consultation mode are required." },
        { status: 400 }
      );
    }

    // 1. Store in Supabase (if configured)
    const supabase = getSupabaseAdmin();
    if (supabase) {
      await supabase.from("appointments").insert([
        {
          name, phone, email,
          age: age ? parseInt(age) : null,
          gender, city, condition,
          preferred_date, preferred_time,
          consultation_mode, message,
          referral_source, status: "pending",
        },
      ]);
    }

    // 2. Send admin notification email (if Resend configured)
    const resend = getResend();
    if (resend) {
      const adminEmail = process.env.ADMIN_EMAIL || "drshardatawale@gmail.com";

      await resend.emails.send({
        from: "Sharda Homeopathy <onboarding@resend.dev>",
        to: adminEmail,
        subject: `🌿 New Appointment: ${name} - ${condition}`,
        html: generateAdminAppointmentEmail(data),
      });

      // 3. Send patient confirmation email (if email provided)
      if (email) {
        await resend.emails.send({
          from: "Sharda Homeopathy <onboarding@resend.dev>",
          to: email,
          subject: "✅ Appointment Request Received - Sharda Homeopathy",
          html: generatePatientConfirmationEmail(data),
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment booking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
