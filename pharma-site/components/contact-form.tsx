"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error('Error sending message:', error)
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false)
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>

      {submitSuccess ? (
        <div className="p-6 rounded-xl mb-6 text-center" style={{ backgroundColor: 'var(--handson-green)', color: 'white' }}>
          <div className="text-2xl mb-2">✅</div>
          <p className="font-semibold">Message sent successfully!</p>
          <p className="text-sm mt-1">We will respond as soon as possible.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-gray-700 font-medium">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
            placeholder="Subject of your message"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-700 font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
            placeholder="Describe your request in detail..."
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl hover:opacity-90"
          style={{ backgroundColor: 'var(--handson-green)' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
