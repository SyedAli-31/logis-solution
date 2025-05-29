'use client'

import Image from 'next/image'

const clients = [
  { src: '/ibex.png', alt: 'ibex' },
  { src: '/sajid.png', alt: 'Sajid Textile' },
  { src: '/sogo.png', alt: 'Sogo Home Store' },
  { src: '/sako.png', alt: 'SAKO' },
  { src: '/continental.png', alt: 'Continental' },
  { src: '/transways.png', alt: 'Transways' },
  { src: '/saf.png', alt: 'SAF International' },
  { src: '/solutions.png', alt: 'Solutions Enterprises' },
]

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-[1075px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          Our Valued Clients
        </h2>
        <p className="text-sm md:text-base text-black max-w-3xl mx-auto mb-12">
          As a leading HR consultancy in Pakistan and the Middle and GCC, we proudly serve over 50 clients across various industries, including healthcare, construction, shipping, retail, logistics, travel and tourism, media, e-commerce, and more.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md border border-orange-200 rounded-sm p-4 flex items-center justify-center h-[150px] hover:shadow-lg transition"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={80}
                className="object-contain max-h-[100px] max-w-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
