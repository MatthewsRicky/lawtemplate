"use server";

export async function sendContactForm(formData: {
  fullName: string;
  email: string;
  practiceArea: string;
  message: string;
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_FROM_EMAIL =
    process.env.RESEND_FROM_EMAIL || "no-reply@example.com";
  const CONTACT_TO_EMAIL =
    process.env.CONTACT_TO_EMAIL || "matthewsrickypro@gmail.com";

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        subject: `Legal Inquiry - ${formData.practiceArea}`,
        text: `Name: ${formData.fullName}\nEmail: ${formData.email}\nPractice Area: ${formData.practiceArea}\n\nMessage:\n${formData.message}`,
        html: `<p><strong>Name:</strong> ${formData.fullName}</p><p><strong>Email:</strong> ${formData.email}</p><p><strong>Practice Area:</strong> ${formData.practiceArea}</p><p><strong>Message:</strong></p><p>${String(formData.message).replace(/\n/g, "<br>")}</p>`,
        headers: {
          "Reply-To": formData.email,
        },
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Resend API error:", resp.status, text);
      return { success: false, error: "Email service error" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return { success: false, error: "Failed to send email" };
  }
}
