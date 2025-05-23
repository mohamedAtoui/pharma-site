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
    <div className="bg-gray-50 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>

      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl mb-6 text-center">
          <div className="text-2xl mb-2">✅</div>
          <p className="font-semibold">Message envoyé avec succès !</p>
          <p className="text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Nom complet
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Votre nom"
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
              className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-gray-700 font-medium">
            Sujet
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Sujet de votre message"
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
            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            placeholder="Décrivez votre demande en détail..."
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Envoyer le message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
