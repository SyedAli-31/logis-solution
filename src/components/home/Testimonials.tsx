import React from 'react'

const Testimonials = () => {
  return (
   <div>
  {/* Top Green Line */}
  <div className="flex items-center justify-center mt-3">
    <div className="h-[40px] w-1 bg-green-500 rounded-3xl" />
  </div>

  {/* Responsive Heading */}
  <div className="flex items-center justify-center mt-3 text-[24px] sm:text-[30px] md:text-[40px] text-[#FF6630] font-semibold text-center leading-tight">
    <h2 className="leading-tight">
      <span className="sm:inline block">What Our Clients Say</span>
      <span className="sm:inline block"> About Logix Solutions</span>
    </h2>
  </div>

  {/* Bottom Green Line */}
  <div className="flex items-center justify-center mt-3 mb-8">
    <div className="h-[40px] w-1 bg-green-500 rounded-3xl" />
  </div>
</div>

  )
}

export default Testimonials
