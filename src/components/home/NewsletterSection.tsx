'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You can integrate your newsletter logic here (API call, validation, etc.)
    console.log('Subscribed:', email)
  }

  return (
    <section className="w-full flex justify-center bg-white py-16 px-4">
      <div className="w-full max-w-[1075px] text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
          Subscribe To Our NewsLetter
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-8">
          Don&apos;t miss our future updates! Get Subscribed Today!
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
          <input
            type="email"
            required
            placeholder="Your Email Address"
            className="px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
