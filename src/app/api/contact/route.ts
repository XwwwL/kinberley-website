import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, productCategory, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.163.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER || "13968975857@163.com";
    const smtpPass = process.env.SMTP_PASS || "";
    const recipient = process.env.RECIPIENT_EMAIL || "13968975857@163.com";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailHtml = `
      <h2>New Inquiry from Jinbolli Hardware Website</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;width:150px;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${company || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">Product Category</td><td style="padding:8px;border:1px solid #ddd;">${productCategory || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>
      </table>
      <p style="color:#999;font-size:12px;margin-top:20px;">Sent from Jinbolli Hardware website inquiry form.</p>
    `;

    await transporter.sendMail({
      from: `"Jinbolli Website" <${smtpUser}>`,
      to: recipient,
      subject: `New Inquiry: ${productCategory || "General"} — from ${name}`,
      html: mailHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
