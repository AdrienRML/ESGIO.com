import { NextResponse } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone?: string;
  employees: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactForm = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.employees) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const notifications: Promise<unknown>[] = [];

    // Option 1: Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;

    if (resendApiKey && notifyEmail) {
      notifications.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ESGIO <onboarding@resend.dev>",
            to: [notifyEmail],
            subject: `Nouvelle demande de démo — ${body.company}`,
            html: `
              <h2>Nouvelle demande de démo</h2>
              <table style="border-collapse:collapse;width:100%;max-width:500px">
                <tr><td style="padding:8px;font-weight:bold">Nom</td><td style="padding:8px">${body.name}</td></tr>
                <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${body.email}</td></tr>
                <tr><td style="padding:8px;font-weight:bold">Entreprise</td><td style="padding:8px">${body.company}</td></tr>
                <tr><td style="padding:8px;font-weight:bold">Téléphone</td><td style="padding:8px">${body.phone || "Non renseigné"}</td></tr>
                <tr><td style="padding:8px;font-weight:bold">Salariés</td><td style="padding:8px">${body.employees}</td></tr>
              </table>
            `,
          }),
        })
      );
    }

    // Option 2: Send to Discord webhook
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhook) {
      notifications.push(
        fetch(discordWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                title: "🎯 Nouvelle demande de démo",
                color: 0x22c55e,
                fields: [
                  { name: "👤 Nom", value: body.name, inline: true },
                  { name: "📧 Email", value: body.email, inline: true },
                  { name: "🏢 Entreprise", value: body.company, inline: true },
                  { name: "📱 Téléphone", value: body.phone || "Non renseigné", inline: true },
                  { name: "👥 Salariés", value: body.employees, inline: true },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        })
      );
    }

    // Option 3: Send to Slack webhook
    const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhook) {
      notifications.push(
        fetch(slackWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blocks: [
              {
                type: "header",
                text: { type: "plain_text", text: "🎯 Nouvelle demande de démo" },
              },
              {
                type: "section",
                fields: [
                  { type: "mrkdwn", text: `*👤 Nom:*\n${body.name}` },
                  { type: "mrkdwn", text: `*📧 Email:*\n${body.email}` },
                  { type: "mrkdwn", text: `*🏢 Entreprise:*\n${body.company}` },
                  { type: "mrkdwn", text: `*📱 Téléphone:*\n${body.phone || "Non renseigné"}` },
                  { type: "mrkdwn", text: `*👥 Salariés:*\n${body.employees}` },
                ],
              },
            ],
          }),
        })
      );
    }

    // If no notification service configured, log to console
    if (notifications.length === 0) {
      console.log("=== NOUVELLE DEMANDE DE DEMO ===");
      console.log(JSON.stringify(body, null, 2));
      console.log("================================");
      console.log("⚠️  Configurez RESEND_API_KEY, DISCORD_WEBHOOK_URL ou SLACK_WEBHOOK_URL dans .env.local");
    } else {
      // Send all notifications in parallel
      await Promise.allSettled(notifications);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
