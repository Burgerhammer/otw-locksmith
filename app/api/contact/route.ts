import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, service, message } = body;

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 }
    );
  }

  // Log to server for now — can add email/SMS notification later
  console.log("[Contact Form]", {
    name,
    phone,
    email: email || "not provided",
    service: service || "not specified",
    message: message || "none",
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
