"use client";

import { sendContactForm } from "@/app/actions/contact";
import { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [practiceArea, setPracticeArea] = useState("Business Law");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContactForm({
        fullName,
        email,
        practiceArea,
        message,
      });
      if (result.success) {
        setSubmitStatus("success");
        // Reset form
        setFullName("");
        setEmail("");
        setPracticeArea("Business Law");
        setMessage("");
      } else {
        console.error("Send error:", result.error);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-[#2d564b] bg-white p-6 text-[#163a2e] shadow-[0_24px_50px_rgba(0,0,0,0.12)] dark:border-[#2d564b] dark:bg-[#1a3d35] dark:text-[#dfe8e5]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-[#163a2e] dark:text-[#dfe8e5]">
          Full name
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Amina Yusuf"
            required
            className="mt-2 w-full rounded-xl border border-[#d8d9d3] bg-[#f8f7f5] px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#d8ba60] focus:ring-offset-0 dark:border-[#3d6a5e] dark:bg-[#0d1117] dark:text-[#dfe8e5] dark:placeholder-[#5a7068]"
          />
        </label>
        <label className="text-sm font-medium text-[#163a2e] dark:text-[#dfe8e5]">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.co.ke"
            required
            className="mt-2 w-full rounded-xl border border-[#d8d9d3] bg-[#f8f7f5] px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#d8ba60] focus:ring-offset-0 dark:border-[#3d6a5e] dark:bg-[#0d1117] dark:text-[#dfe8e5] dark:placeholder-[#5a7068]"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-[#163a2e] dark:text-[#dfe8e5]">
        Practice area
        <select
          value={practiceArea}
          onChange={(e) => setPracticeArea(e.target.value)}
          className="mt-2 w-full rounded-xl border border-[#d8d9d3] bg-[#f8f7f5] px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#d8ba60] focus:ring-offset-0 dark:border-[#3d6a5e] dark:bg-[#0d1117] dark:text-[#dfe8e5]"
        >
          <option>Business Law</option>
          <option>Family Law</option>
          <option>Estate Planning</option>
          <option>Real Estate</option>
          <option>Employment Law</option>
          <option>Litigation</option>
        </select>
      </label>

      <label className="mt-5 block text-sm font-medium text-[#163a2e] dark:text-[#dfe8e5]">
        How can we help?
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your legal matter in Nairobi, Mombasa, or elsewhere in Kenya"
          required
          className="mt-2 w-full rounded-xl border border-[#d8d9d3] bg-[#f8f7f5] px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#d8ba60] focus:ring-offset-0 dark:border-[#3d6a5e] dark:bg-[#0d1117] dark:text-[#dfe8e5] dark:placeholder-[#5a7068]"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-[#d8ba60] px-5 py-3 text-sm font-semibold text-[#163a2e] transition hover:bg-[#e4c975] disabled:opacity-50 dark:bg-[#d8ba60] dark:text-[#163a2e] dark:hover:bg-[#e6cd76]"
      >
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </button>

      {submitStatus === "success" && (
        <p className="mt-4 text-sm text-green-600 dark:text-green-400">
          Email client opened! Your inquiry will be sent to
          matthewsrickypro@gmail.com
        </p>
      )}
      {submitStatus === "error" && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">
          Error submitting form. Please try again.
        </p>
      )}
    </form>
  );
}
