"use client";

import { useState } from "react";
import { type Locale } from "@/lib/i18n";
import { productNavTranslations, contactFormTranslations } from "@/data/translations";

interface ContactFormProps {
  locale: Locale;
  compact?: boolean;
}

export default function ContactForm({ locale, compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productCategory: "",
    message: "",
  });

  const productNav = productNavTranslations[locale];
  const ft = contactFormTranslations[locale];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to send. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">{ft.success}</h3>
        <p className="text-gray-600">{ft.successMessage}</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", company: "", productCategory: "", message: "" });
          }}
          className="mt-4 text-sm font-medium text-[#1a3a5c] underline hover:text-[#c9a84c]"
        >
          {ft.sendAnother}
        </button>
      </div>
    );
  }

  const inputClass =
    "block w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors focus:border-[#1a3a5c] focus:outline-none focus:ring-1 focus:ring-[#1a3a5c]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid gap-5 ${compact ? "sm:grid-cols-1" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            {ft.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            placeholder={ft.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            {ft.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            placeholder={ft.emailPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
            {ft.phone}
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
            placeholder={ft.phonePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">
            {ft.company}
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={inputClass}
            placeholder={ft.companyPlaceholder}
          />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="productCategory" className="mb-1 block text-sm font-medium text-gray-700">
            {ft.productCategory}
          </label>
          <select
            id="productCategory"
            value={formData.productCategory}
            onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
            className={inputClass}
          >
            <option value="">{ft.selectCategory}</option>
            {productNav.map((p) => (
              <option key={p.slug} value={p.name}>{p.name}</option>
            ))}
            <option value="Other">{ft.otherCategory}</option>
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
            {ft.message} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClass}
            placeholder={ft.messagePlaceholder}
          />
        </div>
      </div>
      {error && (
        <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-[#c9a84c] px-6 py-3 text-base font-semibold text-white shadow transition-all hover:bg-[#b8993f] hover:shadow-md disabled:opacity-50 sm:w-auto"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          ft.submit
        )}
      </button>
    </form>
  );
}
