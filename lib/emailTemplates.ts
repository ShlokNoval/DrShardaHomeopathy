interface AppointmentData {
  name: string;
  phone: string;
  email?: string;
  age?: number;
  gender?: string;
  city?: string;
  condition: string;
  preferred_date?: string;
  preferred_time?: string;
  consultation_mode: string;
  message?: string;
  referral_source?: string;
}

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  disease?: string;
  message: string;
}

export function generateAdminAppointmentEmail(data: AppointmentData): string {
  const modeColor = data.consultation_mode === "online" ? "#C9A84C" : "#1B5E35";
  const modeLabel = data.consultation_mode === "online" ? "Online" : "In-Person";

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;">
        <div style="background:#0F3D22;padding:24px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:22px;">🌿 Sharda Homeopathy</h1>
          <p style="color:#C9A84C;margin:8px 0 0;font-size:14px;">New Appointment Request</p>
        </div>
        <div style="padding:24px;">
          <div style="display:inline-block;padding:6px 16px;background:${modeColor};color:#fff;border-radius:20px;font-size:13px;font-weight:600;margin-bottom:16px;">
            ${modeLabel} Consultation
          </div>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;">
            <tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;width:140px;">Patient Name</td><td style="padding:10px;border-bottom:1px solid #eee;font-weight:600;">${data.name}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Phone</td><td style="padding:10px;border-bottom:1px solid #eee;font-weight:600;">${data.phone}</td></tr>
            ${data.email ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Email</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.email}</td></tr>` : ""}
            ${data.age ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Age</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.age}</td></tr>` : ""}
            ${data.gender ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Gender</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.gender}</td></tr>` : ""}
            ${data.city ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">City</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.city}</td></tr>` : ""}
            <tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Condition</td><td style="padding:10px;border-bottom:1px solid #eee;font-weight:600;color:#1B5E35;">${data.condition}</td></tr>
            ${data.preferred_date ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Preferred Date</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.preferred_date}</td></tr>` : ""}
            ${data.preferred_time ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Preferred Time</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.preferred_time}</td></tr>` : ""}
            ${data.message ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Message</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.message}</td></tr>` : ""}
            ${data.referral_source ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Referral</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.referral_source}</td></tr>` : ""}
          </table>
          <div style="margin-top:24px;text-align:center;">
            <a href="tel:${data.phone}" style="display:inline-block;padding:10px 24px;background:#1B5E35;color:#fff;text-decoration:none;border-radius:6px;margin:4px;font-size:14px;">📞 Call Patient</a>
            <a href="https://wa.me/91${data.phone}" style="display:inline-block;padding:10px 24px;background:#25D366;color:#fff;text-decoration:none;border-radius:6px;margin:4px;font-size:14px;">💬 WhatsApp</a>
          </div>
        </div>
        <div style="background:#f8f8f8;padding:16px;text-align:center;font-size:12px;color:#999;">
          Sharda Homeopathy Clinic, Pune, Maharashtra
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generatePatientConfirmationEmail(data: AppointmentData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;">
        <div style="background:#0F3D22;padding:24px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:22px;">🌿 Sharda Homeopathy</h1>
        </div>
        <div style="padding:24px;">
          <h2 style="color:#1B5E35;margin:0 0 16px;">✅ Appointment Request Received!</h2>
          <p style="color:#333;line-height:1.6;">Dear ${data.name},</p>
          <p style="color:#333;line-height:1.6;">Thank you for choosing Sharda Homeopathy Clinic. We have received your ${data.consultation_mode} consultation request for <strong>${data.condition}</strong>.</p>
          <div style="background:#FAF8F3;padding:16px;border-radius:8px;margin:16px 0;border-left:4px solid #C9A84C;">
            <p style="margin:0;color:#333;line-height:1.8;">
              <strong>What happens next?</strong><br>
              Our team will call you at <strong>${data.phone}</strong> within 24 working hours to confirm your appointment.
            </p>
          </div>
          <p style="color:#333;line-height:1.6;">If you have any urgent questions, feel free to reach us on WhatsApp.</p>
          <div style="text-align:center;margin-top:20px;">
            <a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX"}" style="display:inline-block;padding:10px 24px;background:#25D366;color:#fff;text-decoration:none;border-radius:6px;font-size:14px;">💬 Chat on WhatsApp</a>
          </div>
          <p style="color:#333;line-height:1.6;margin-top:20px;">Warm regards,<br><strong>Dr. Sharda Tawale</strong><br>Sharda Homeopathy Clinic, Pune</p>
        </div>
        <div style="background:#f8f8f8;padding:16px;text-align:center;font-size:12px;color:#999;">
          Sharda Homeopathy Clinic, Pune, Maharashtra
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateAdminContactEmail(data: ContactData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;">
        <div style="background:#0F3D22;padding:24px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:22px;">🌿 New Contact Message</h1>
        </div>
        <div style="padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;width:100px;">Name</td><td style="padding:10px;border-bottom:1px solid #eee;font-weight:600;">${data.name}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Email</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.email}</td></tr>
            ${data.phone ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Phone</td><td style="padding:10px;border-bottom:1px solid #eee;">${data.phone}</td></tr>` : ""}
            ${data.disease ? `<tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;">Condition</td><td style="padding:10px;border-bottom:1px solid #eee;font-weight:600;color:#1B5E35;">${data.disease}</td></tr>` : ""}
            <tr><td style="padding:10px;border-bottom:1px solid #eee;color:#666;vertical-align:top;">Message</td><td style="padding:10px;border-bottom:1px solid #eee;line-height:1.6;">${data.message}</td></tr>
          </table>
        </div>
        <div style="background:#f8f8f8;padding:16px;text-align:center;font-size:12px;color:#999;">
          Sharda Homeopathy Clinic, Pune, Maharashtra
        </div>
      </div>
    </body>
    </html>
  `;
}
