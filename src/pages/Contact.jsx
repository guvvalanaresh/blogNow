import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../App.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire real backend; for now just show a success state
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold mb-3">Contact Us</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">Have a question or want to partner? Send us a message and we'll get back within a few business days.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="border border-gray-200 rounded-md p-2" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="border border-gray-200 rounded-md p-2" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="border border-gray-200 rounded-md p-2 min-h-[120px]" />
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Send Message</button>
              </div>
            </form>
          ) : (
            <div className="p-6 bg-green-50 rounded-md text-green-700">Thanks! Your message has been received.</div>
          )}
        </section>
      </main>
    </div>
  )
}
