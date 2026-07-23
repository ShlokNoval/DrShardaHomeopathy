// lib/whatsapp.ts

export async function sendWhatsAppNotification(type: 'appointment' | 'contact', data: any) {
  const phone = process.env.CALLMEBOT_PHONE;
  const apikey = process.env.CALLMEBOT_API_KEY;

  if (!phone || !apikey) {
    console.warn("WhatsApp notifications skipped: CALLMEBOT_PHONE or CALLMEBOT_API_KEY not set in environment.");
    return;
  }

  // 1. Format the message text
  let messageText = "";
  if (type === 'appointment') {
    messageText = `🌿 *New Appointment Request*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Condition:* ${data.condition}\n` +
      `*Mode:* ${data.consultation_mode}\n` +
      (data.preferred_date ? `*Date:* ${data.preferred_date}\n` : '') +
      (data.preferred_time ? `*Time:* ${data.preferred_time}\n` : '');
  } else {
    messageText = `✉️ *New Enquiry*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Disease:* ${data.disease || 'N/A'}\n` +
      `*Message:* ${data.message}`;
  }

  // URL encode the message
  const encodedMessage = encodeURIComponent(messageText);
  
  // CallMeBot Free API URL
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apikey}`;

  // 2. Send the message
  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      console.error("Failed to send WhatsApp message via CallMeBot", await response.text());
    }
  } catch (error) {
    console.error("WhatsApp API error:", error);
  }
}
