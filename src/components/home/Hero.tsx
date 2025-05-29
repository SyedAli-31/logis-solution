import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full bg-[#e5e5e5] py-12 h-[750px]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-16">
        {/* Text content */}
        <div className="md:max-w-[550px]  space-y-8 ">
          <h1 className="text-5xl lg:text-[82px] font-extrabold text-black space-y-5 flex flex-col">
            <span>Best HR</span>
            <span className="text-orange-500">Comprehensive</span>
            <span className="text-orange-500">Consultancy</span>
          </h1>



         <div className="flex items-center gap-1 mt-3">
  <div className="h-2 w-3 bg-gradient-to-r  from-green-400  to-teal-600 rounded-3xl" />
  <div className="h-2 w-8 bg-gradient-to-r  from-green-400 via-green-700 to-teal-600 rounded-full" />
</div>


          <p className="text-base lg:text-[20px] text-gray-700 mt-4">
            Logix Solution provides the ultimate Human Resource Solutions for your business. We act accordingly and engage in the necessary work to create an HR department for your company and provide you the ideas for the best options based on your needs.
          </p>

          <div className="flex gap-4 mt-6 text-[20px]" >
            <Link href="/" className="bg-[#26BF55] hover:bg-green-600 text-white px-6 py-2 rounded-full shadow font-medium">
              Contact Us
            </Link>
            <Link href="/" className="bg-[#26BF55] hover:bg-green-600 text-white px-6 py-2 rounded-full shadow font-medium">
              Consult Now
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-[17px] ml-2  text-orange-500 font-medium">
            <Link href="/" className='mt-7'>Facebook</Link>
            <Link href="/" className='mt-7'>Instagram</Link>
            <Link href="/" className='mt-7'>LinkedIn</Link>
          </div>
        </div>

        {/* Image content */}
        <div className="hidden lg:block lg:mt-0">
          <Image
            src="/hero.png"
            alt="HR Illustration"
            width={950}
            height={500}
            className="w-[950px] h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
