// lib/whatsapp.ts

export async function sendWhatsAppNotification(type: 'appointment' | 'contact', data: any) {
  const idInstance = process.env.GREEN_API_ID;
  const apiTokenInstance = process.env.GREEN_API_TOKEN;
  // The phone number to receive the messages (e.g., 919881255055)
  const phone = process.env.GREEN_API_PHONE;

  if (!idInstance || !apiTokenInstance || !phone) {
    console.warn("WhatsApp notifications skipped: Green-API credentials not set in environment.");
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

  // Green-API expects the phone number with @c.us at the end for regular chats
  const chatId = `${phone.replace(/[^0-9]/g, '')}@c.us`;

  const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

  // 2. Send the message via Green-API
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId: chatId,
        message: messageText
      })
    });

    if (!response.ok) {
      console.error("Failed to send WhatsApp message via Green-API", await response.text());
    }
  } catch (error) {
    console.error("WhatsApp API error:", error);
  }
}
