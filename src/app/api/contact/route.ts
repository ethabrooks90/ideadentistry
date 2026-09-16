import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.phone || !body.email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // NOTE for deployment: this accepts and validates submissions but does not yet deliver them
  // anywhere. Wire this up to Idea Dental's email/CRM provider (e.g. Resend, SendGrid, or their
  // existing front-desk inbox) before relying on it in production.
  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
}
