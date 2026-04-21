import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, service, message } = body;

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 }
    );
  }

  const serviceMap: Record<string, string> = {
    lockout: "Emergency Lockout",
    rekey: "Lock Rekey",
    install: "Lock Installation",
    repair: "Lock Repair",
    automotive: "Automotive Locksmith",
    commercial: "Commercial Services",
    other: "Other",
  };
  const serviceLabel = service ? serviceMap[service] || service : "Not specified";

  const smsBody = [
    `New lead from otwlocksmith.net`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Service: ${serviceLabel}`,
    message ? `Message: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  console.log("[Contact Form]", smsBody);

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_PHONE_NUMBER;
  const notifyTo = process.env.NOTIFY_PHONE_NUMBER;

  if (accountSid && authToken && twilioFrom && notifyTo) {
    try {
      const client = twilio(accountSid, authToken);
      await client.messages.create({
        body: smsBody,
        from: twilioFrom,
        to: notifyTo,
      });
    } catch (err) {
      console.error("[SMS Error]", err);
    }
  }

  return NextResponse.json({ success: true });
}
