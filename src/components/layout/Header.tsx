'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function WhyChooseUs() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const services = [
    {
      name: 'HR Services',
      submenu: ['Recruitment', 'Payroll', 'Training'],
    },
    {
      name: 'Innovative Business Solutions',
      submenu: ['Consulting', 'Process Automation', 'Growth Hacking'],
    },
    {
      name: 'Smart Enterprise Solutions',
      submenu: ['ERP', 'CRM', 'Analytics'],
    },
    {
      name: 'Academic Excellence Program',
      submenu: ['Workshops', 'Certifications', 'Courses'],
    },
    {
      name: 'Facilities Management',
      submenu: ['Cleaning', 'Maintenance', 'Security'],
    },
  ]

  const newsletterItems = ['Newsletter 1', 'Newsletter 2', 'Newsletter 3']

  return (
    <>
      {/* Header */}
      <div className='bg-[#666] mx-auto px-4 text-white w-full h-[100px] grid grid-cols-[23%,57%,20%] sticky top-0 z-50'>
       <div className='flex justify-center items-center w-[185px] h-[70px] md:ml-[140px] mt-4'>
  <Link href='/' className='flex items-center'>
    <Image
      src='/logix-logo.png'
      alt='Logix Solutions Logo'
      width={185}
      height={70}
      className='object-contain'
      priority
    />
  </Link>
</div>


        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center justify-start'>
          <nav className='flex gap-6 text-[16px] font-medium relative'>
            <Link href='/' className={`font-semibold ${pathname === '/' ? 'text-[#FF6630]' : 'text-white'}`}>Home</Link>
            <div className='relative group'>
              <button className='font-semibold'>About Us <span className='text-orange-400'>▾</span></button>
              <div className='absolute top-full left-0 mt-1 w-[260px] bg-black py-2 shadow-lg z-50 hidden group-hover:block'>
                <Link href='/about' className='block px-4 py-2 hover:bg-[#222] text-[13.5px]'>About Us</Link>
              </div>
            </div>

            <div
              className='relative group'
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => {
                setOpenMenu(false)
                setActiveSubmenu(null)
              }}
            >
              <button className='flex items-center gap-1'>Services <span className='text-orange-400'>▾</span></button>
              {openMenu && (
                <div className='absolute top-full left-0 mt-1 w-[260px] bg-black py-2 shadow-lg z-50'>
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className='relative'
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <div className='flex justify-between items-center px-4 py-2 hover:bg-[#222] text-[13.5px] cursor-pointer'>
                        {item.name}
                        <ChevronRight size={14} />
                      </div>
                      {activeSubmenu === item.name && (
                        <div className='absolute top-0 left-full w-[220px] bg-black py-2 shadow-lg z-50'>
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href='#'
                              className='block px-4 py-2 hover:bg-[#222] text-[13px]'
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href='/certification'>Certification in HR Profession</Link>
            <Link href='/career'>Career</Link>

            <div className='relative group'>
              <button className='font-semibold'>Newsletter <span className='text-orange-400'>▾</span></button>
              <div className='absolute top-full left-0 mt-1 w-[260px] bg-black py-2 shadow-lg z-50 hidden group-hover:block'>
                {newsletterItems.map((item, index) => (
                  <Link key={index} href='#' className='block px-4 py-2 hover:bg-[#222] text-[13px]'>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link href='/contact'>Contact Us</Link>
          </nav>
        </div>

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

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center justify-end'>
          <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}>
            {mobileSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {mobileSidebarOpen && (
        <div className='md:hidden fixed top-0 left-0 w-64 h-full bg-[#333] text-white z-[9999] p-4 space-y-4'>
          <Link href='/' className='block'>Home</Link>
          <Link href='/about' className='block'>About Us</Link>
          <div>
            <span className='font-semibold block'>Services</span>
            {services.map((item, index) => (
              <details key={index} className='ml-2'>
                <summary className='cursor-pointer'>{item.name}</summary>
                <ul className='ml-4 list-disc'>
                  {item.submenu.map((sub, i) => (
                    <li key={i} className='text-sm'>{sub}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <Link href='/certification' className='block'>Certification in HR Profession</Link>
          <Link href='/career' className='block'>Career</Link>
          <div>
            <span className='font-semibold block'>Newsletter</span>
            <ul className='ml-4 list-disc'>
              {newsletterItems.map((item, index) => (
                <li key={index} className='text-sm'>{item}</li>
              ))}
            </ul>
          </div>
          <Link href='/contact' className='block'>Contact Us</Link>
        </div>
      )}
    </>
  )
}