"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser' 


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<null | "success" | "error" | "loading">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  setFormStatus("loading")

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
  }

  try {
    const result = await emailjs.send(
      'service_3bx6iwh',     // 🔧 Your EmailJS service ID
      'template_7qf3xju',    // 🔧 Your EmailJS template ID
      templateParams,
      'd80kN2o9oNPlexb17'      // 🔧 Your EmailJS public key
    )

    console.log('Email sent:', result.text)

    setFormStatus("success")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    setTimeout(() => setFormStatus(null), 5000)
  } catch (error) {
    console.error('EmailJS error:', error)
    setFormStatus("error")
  }
}

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Contact Us</div>
              <h1 className="text-3xl font-bold tracking-tighter text-blue-800 sm:text-4xl md:text-5xl">
                Get in Touch
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Have questions or need a quote? We're here to help. Reach out to our team and we'll get back to you
                shortly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your project or inquiry..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800"
                      disabled={formStatus === "success"}
                    >
                      {formStatus === "success" ? "Message Sent" : "Send Message"}
                    </Button>
                    {formStatus === "success" && (
                      <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
                        Your message has been sent successfully. We'll get back to you soon!
                      </div>
                    )}
                    {formStatus === "error" && (
                      <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
                        There was an error sending your message. Please try again later.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-gray-600">
                  Feel free to reach out through any of these channels. We're available Monday through Friday, 9:00 AM
                  to 5:00 PM.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-700" />
                      <div>
                        <h3 className="font-bold">Our Address</h3>
                        <p className="text-sm text-gray-600">
                         
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-blue-700" />
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-sm text-gray-600">
                          Main: (060) 660-3409
                          <br />
                          Support: (060) 660-3409
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-blue-700" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-sm text-gray-600">
                          info@geekysolutions.co.za
                          <br />
                          support@geekysolutions.co.za
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-700" />
                      <div>
                        <h3 className="font-bold">Business Hours</h3>
                        <p className="text-sm text-gray-600">
                          Monday - Friday: 9AM - 5PM
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-amber-50">
                <CardContent className="p-6">
                  <h3 className="font-bold">Need Urgent Support?</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    For existing clients with service contracts, we offer priority support options.
                  </p>
                  <Button className="mt-4 bg-amber-600 hover:bg-amber-700">Client Support Portal Coming Soon</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Find Us</h2>
            <p className="mt-2 text-gray-600">Visit our office or send us mail at this address</p>
          </div>
          <div className="mt-8 aspect-video overflow-hidden rounded-lg shadow-lg">
            {/* Placeholder for map */}
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
