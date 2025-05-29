import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-[90px]  h-screen bg- relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Building Better Teams, Faster.
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Streamline your hiring with Logix Solutions — providing top-tier recruitment, HR outsourcing, and janitorial staffing services.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-purple-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-purple-700 transition">
              Get Started
            </button>
            <button className="border border-purple-600 text-purple-600 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-purple-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] md:h-[420px]">
          <Image
            src="/hero.png"
            alt="Hero Graphic"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
