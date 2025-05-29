'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const services = [
    { name: 'HR Services', submenu: ['Recruitment', 'Payroll', 'Training'] },
    { name: 'Innovative Business Solutions', submenu: ['Consulting', 'Process Automation', 'Growth Hacking'] },
    { name: 'Smart Enterprise Solutions', submenu: ['ERP', 'CRM', 'Analytics'] },
    { name: 'Academic Excellence Program', submenu: ['Workshops', 'Certifications', 'Courses'] },
    { name: 'Facilities Management', submenu: ['Cleaning', 'Maintenance', 'Security'] }
  ]

  const newsletterItems = ['Newsletter 1', 'Newsletter 2', 'Newsletter 3']

  return (
    <>
      <header className="bg-[#666] w-full sticky top-0 z-50 shadow-md">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 h-[80px] md:h-[100px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center w-[160px] md:w-[185px]">
            <Image
              src="/logix-logo.png"
              alt="Logix Solutions Logo"
              width={185}
              height={70}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center text-[15px] font-medium">
            <Link href="/" className={`font-semibold ${pathname === '/' ? 'text-[#FF6630]' : 'text-white'}`}>Home</Link>

            <div className="relative group">
              <button className="font-semibold  text-white hover:text-[#ff6630] ">About Us <span className="text-orange-400">▾</span></button>
              <div className="absolute left-0 mt-1 w-60 bg-black py-2 shadow-lg hidden group-hover:block">
                <Link href="/about" className="block px-4 py-2  text-white hover:text-[#ff6630]  text-sm">About Us</Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => {
                setOpenMenu(false)
                setActiveSubmenu(null)
              }}
            >
              <button className="font-semibold flex items-center  text-white hover:text-[#ff6630] ">Services <span className="text-orange-400">▾</span></button>
              {openMenu && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-black py-2 shadow-lg z-50">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <div className="flex justify-between items-center px-4 py-2 text-white hover:text-[#ff6630] text-sm cursor-pointer">
                        {item.name}
                        <ChevronRight size={14} />
                      </div>
                      {activeSubmenu === item.name && (
                        <div className="absolute top-0 left-full w-52 bg-black  py-2 shadow-lg z-50">
                          {item.submenu.map((sub, i) => (
                            <Link key={i} href="#" className="block px-4 py-2  text-white hover:text-[#ff6630]  text-sm">
                              {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/certification" className=" text-white hover:text-[#ff6630] ">Certification in HR Profession</Link>
            <Link href="/career" className=" text-white hover:text-[#ff6630] ">Career</Link>

            {/* Newsletter Dropdown */}
            <div className="relative group">
              <button className="font-semibold  text-white hover:text-[#ff6630] ">Newsletter <span className="text-orange-400">▾</span></button>
              <div className="absolute top-full left-0 mt-1 w-60 bg-black py-2 shadow-lg hidden group-hover:block">
                {newsletterItems.map((item, index) => (
                  <Link key={index} href="#" className="block px-4 py-2  text-white hover:text-[#ff6630]  text-sm">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="text-white hover:text-orange-400">Contact Us</Link>
          </nav>

          {/* CTA Button */}
          <div className='hidden md:flex h-full items-center'>
          <Link
            href='/'
            className='flex flex-col justify-center items-center text-center bg-[#FF6630] hover:bg-orange-600 text-white text-[14px] font-semibold w-[170px] h-[60px] rounded-lg'
          >
            <span className='leading-tight'>Free Consultation</span>
            <span className='leading-tight'>1:1</span>
          </Link>
        </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}>
              {mobileSidebarOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileSidebarOpen && (
        <div className="fixed md:hidden top-0 left-0 w-64 h-full bg-[#333] text-white z-[9999] p-4 space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About Us</Link>

          <div className='text-white'>
            <span className="font-semibold block">Services</span>
            {services.map((item, index) => (
              <details key={index} className="ml-2">
                <summary className="cursor-pointer">{item.name}</summary>
                <ul className="ml-4 list-disc">
                  {item.submenu.map((sub, i) => (
                    <li key={i} className="text-sm">{sub}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <Link href="/certification" className="block">Certification in HR Profession</Link>
          <Link href="/career" className="block">Career</Link>

          <div>
            <span className="font-semibold block">Newsletter</span>
            <ul className="ml-4 list-disc">
              {newsletterItems.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <Link href="/contact" className="block">Contact Us</Link>
        </div>
      )}
    </>
  )
}
