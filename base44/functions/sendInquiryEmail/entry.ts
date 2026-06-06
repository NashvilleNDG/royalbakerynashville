import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, phone, eventType, guestCount, eventDate, message } = await req.json();

    const body = `
New Catering Inquiry from RoyalCateringNashville.com

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Event Type: ${eventType || "Not specified"}
Guest Count: ${guestCount || "Not specified"}
Event Date: ${eventDate || "Not specified"}

Message:
${message || "No message provided"}
    `.trim();

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: "royalcateringnashville@gmail.com",
      subject: `New Catering Inquiry from ${name}`,
      body: body,
      from_name: "Royal Catering Nashville Website"
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
});