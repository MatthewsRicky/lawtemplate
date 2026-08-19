"use server";

export async function sendContactForm(formData: {
  fullName: string;
  email: string;
  practiceArea: string;
  message: string;
}) {
  try {
    // Using mailto link approach - the form will construct a mailto URL
    // For production, you'd integrate with a service like SendGrid, Mailgun, or Resend
    const mailtoLink = `mailto:matthewsrickypro@gmail.com?subject=Legal Inquiry - ${encodeURIComponent(formData.practiceArea)}&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPractice Area: ${formData.practiceArea}\n\nMessage:\n${formData.message}`,
    )}`;

    return { success: true, mailtoLink };
  } catch (error) {
    console.error("Error preparing contact form:", error);
    return { success: false, error: "Failed to process form" };
  }
}
