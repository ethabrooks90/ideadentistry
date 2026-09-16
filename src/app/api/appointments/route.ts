import { NextResponse } from "next/server";

type AppointmentPayload = {
  name?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  preferredTime?: string;
  reason?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as AppointmentPayload;

  if (!body.phone || !body.email || !body.preferredDate) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // NOTE for deployment: this accepts and validates requests but does not yet deliver them
  // anywhere. Wire this up to Idea Dental's scheduling/CRM system before relying on it in
  // production — the original site confirms appointments by phone.
  console.log("Appointment request:", body);

  return NextResponse.json({ ok: true });
}
