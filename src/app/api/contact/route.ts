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

    // Send notification email via Resend if API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;

    if (resendApiKey && notifyEmail) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ESGIO <noreply@esgio.com>",
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
      });
    } else {
      // Fallback: log to server console when no email service is configured
      console.log("=== NOUVELLE DEMANDE DE DEMO ===");
      console.log(JSON.stringify(body, null, 2));
      console.log("================================");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
