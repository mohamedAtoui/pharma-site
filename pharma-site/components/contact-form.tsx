"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function ContactForm() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitSuccess(false), 5000)
    }
  }

  const inputClasses =
    "h-12 border-gray-200 bg-white rounded-lg transition-all duration-200 focus:border-[var(--handson-green)] focus:ring-[var(--handson-green)] focus:ring-1 placeholder:text-gray-300"

  return (
    <div
      className="bg-white p-8 rounded-2xl border border-gray-100"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ letterSpacing: "-0.01em" }}>
        {t.form.heading}
      </h3>

      {submitSuccess ? (
        <div
          className="p-6 rounded-xl mb-6 text-center border"
          style={{
            background: "var(--handson-green-tint)",
            borderColor: "rgba(26, 159, 74, 0.2)",
          }}
        >
          <CheckCircle className="h-8 w-8 mx-auto mb-2" style={{ color: "var(--handson-green)" }} />
          <p className="font-semibold text-gray-900">{t.form.successTitle}</p>
          <p className="text-sm mt-1 text-gray-500">{t.form.successBody}</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-600 font-medium text-sm">
              {t.form.nameLabel}
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder={t.form.namePlaceholder}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-600 font-medium text-sm">
              {t.form.emailLabel}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder={t.form.emailPlaceholder}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-gray-600 font-medium text-sm">
            {t.form.subjectLabel}
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder={t.form.subjectPlaceholder}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-600 font-medium text-sm">
            {t.form.messageLabel}
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="border-gray-200 bg-white rounded-lg transition-all duration-200 focus:border-[var(--handson-green)] focus:ring-[var(--handson-green)] focus:ring-1 resize-none placeholder:text-gray-300"
            placeholder={t.form.messagePlaceholder}
          />
        </div>

        <button type="submit" className="btn-handson w-full h-12" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              {t.form.submitting}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t.form.submit}
            </>
          )}
        </button>
      </form>
    </div>
  )
}
