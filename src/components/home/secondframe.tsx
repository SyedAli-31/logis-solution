'use client';

import Image from 'next/image';

const Secframe = () => {
  return (
    <section className="bg-white w-full py-10 px-4 lg:px-40 mt-10 mb-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        
        {/* Left Image */}
        <div className="w-full max-w-[620px] lg:mr-0 mb-6 lg:mb-0">
          <Image
            src="/logix-3.png"
            alt="Team Collaboration"
            width={620}
            height={520}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full max-w-[520px]">
          <p className="text-[#18B34A] text-[14px] lg:text-[16px] font-semibold mb-2 leading-tight">
            Unleash Your Company&apos;s Full Potential
          </p>

          <h2 className="text-[#F24E1E] text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold leading-tight mb-4">
            <span>Recruit Exceptional Talent To</span><br />
            <span>Enhance Your Company&apos;s</span><br />
            <span>Successere</span>
          </h2>

         <p className="text-[#1E1E1E] text-[14px] sm:text-[15px] lg:text-[17px] leading-[1.7]">
  <span className="inline md:inline">
    At Logix Solutions, we collaborate with top global and
  </span>
  <span className="inline md:inline">
    &nbsp;local startups, along with major industry players, to
  </span>
  <span className="inline md:inline">
    &nbsp;secure top talent in real-time. Our capabilities go beyond
  </span>
  <span className="inline md:inline">
    &nbsp;recruitment — we offer complete product and technical
  </span>
  <span className="inline md:inline">
    &nbsp;hiring solutions that optimize operations, boost
  </span>
  <span className="inline md:inline">
    &nbsp;efficiency, and let you concentrate on what truly counts:
  </span>
  <span className="inline md:inline">
    &nbsp;fostering growth expectations.
  </span>
</p>

        </div>
      </div>
    </section>
  );
};

export default Secframe;
