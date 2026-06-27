import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, email, note } = await req.json();

  if (!name || !email || !note) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  const html = `
    <p><strong>Name:</strong> ${name}</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Note:</strong><br/>${note.replace(/\n/g, "<br/>")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "marie@mkhcollective.com",
      reply_to: email,
      subject: `New message from ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
