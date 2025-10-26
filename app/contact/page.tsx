"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:malharipawar001@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back button */}
        <Link
          href="/"
          className="text-gray-400 hover:text-green-500 mb-12 inline-flex items-center gap-2 transition-colors"
        >
          <span>←</span> Back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Get in touch
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. Fill
            out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info and Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Email</p>
                  <a
                    href="mailto:malharipawar001@gmail.com"
                    className="text-gray-300 hover:text-green-500 transition-colors break-all"
                  >
                    malharipawar001@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Phone</p>
                  <a
                    href="tel:+919209511555"
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    +91 92095 11555
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Location</p>
                  <p className="text-gray-300">Pune, Maharashtra, India</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-3">Social Links</p>
                  <div className="flex gap-6">
                    <a
                      href="https://github.com/Malharii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-500 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/malhari-pawar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-500 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {submitted ? "Message sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
