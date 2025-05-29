'use client'

import { Briefcase, Users, Star, CheckCircle, Network } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className=" bg-white py-12 px-4 ">
      <div className=" grid grid-cols-1 md:grid-cols-[50%_50%] items-start">
        {/* Left Content */}
        <div className="md:mt-[100px] md:ml-[140px]">
  <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
    Why Choose Logix Solutions
  </h2>

  <p className="text-black text-sm md:text-[18px] leading-[28px] mb-6">
    <span className="inline md:inline">While recruitment is a core focus at Logix Solutions, we go above</span>
    <span className="inline md:inline"> and beyond to offer a range of services. In addition to </span>
    <span className="inline md:inline"> recruitment, we provide training, and complete HRMS solutions, </span>
    <span className="inline md:inline">
      ensuring that the transition of new hires into your company is as
    </span>
    <span className="inline md:inline"> seamless as possible. Our recruiters also support job seekers in </span>
    <span className="inline md:inline"> refining their resumes and interview skills, helping them secure </span>
    <span className="inline md:inline">
      positions that best match their abilities.
    </span>
  </p>

  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-xl shadow-md text-[18px]">
    Learn more
  </button>
</div>


        {/* Right Features List */}
        <div className="grid grid-cols-1 gap-6 md:ml-[80px] md:mt-0 mt-6 ">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 py-2">
              <div className=" w-10 h-10 min-w-[60px] min-h-[60px] rounded-md border-4 border-green-500 flex items-center justify-center">
                <feature.icon className="text-green-600 w-5 h-5" />
              </div>
              <p className="text-sm md:text-[20px] w-[400px] text-black font-black mt-4 ">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Icons and Text List
const features = [
  {
    icon: Briefcase,
    text: 'Led by passionate and successful business leaders',
  },
  {
    icon: Users,
    text: 'A team of highly skilled recruiters and consultants with deep industry expertise',
  },
  {
    icon: Star,
    text: 'Over a long-term of experience in the HR and recruitment sector',
  },
  {
    icon: CheckCircle,
    text: 'Thoroughly research your hiring needs to provide tailored solutions',
  },
  {
    icon: Network,
    text: 'Offer comprehensive HR services that extend beyond recruitment',
  },
]
