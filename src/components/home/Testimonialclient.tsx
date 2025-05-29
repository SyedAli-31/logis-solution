// Refined TestimonialSlider.tsx component
import React, { useState, } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Saqib Iftikhar",
    title: "The Meat Co.",
    company: "Chief Executive Officer",
    quote: "The Logix Solutions team showed an excellent comprehension of our needs. The production centre was run professionally. We were quite happy with their work and only kept searching for sound HR guidance."
  },
  {
    id: 2,
    name: "Junaid Fattani",
    title: "UAE Assist LLC",
    company: "Vice President",
    quote: "Our needs might be accommodated by Logix Solutions, which could deliver high-quality results on schedule. After implementing the Human Resources procedures, we can now assess how motivated our staff are by the change."
  },
  {
    id: 3,
    name: "Farzan Rajput",
    title: "Pacific Auto Spare Dealers",
    company: "Chief Executive Officer",
    quote: "Logix Solutions created a plan that met our specific objectives and expectations with great thoroughness and flexibility. Our special needs were assessed using flexible procedures, and all of the job objectives and expectations were fully satisfied."
  },
  {
    id: 4,
    name: "John Smith",
    title: "Tech Innovate",
    company: "CEO",
    quote: "Working with Logix Solutions transformed our HR operations completely. Their team's expertise and dedication helped us streamline processes and boost employee satisfaction."
  },
  {
    id: 5,
    name: "Sarah Johnson",
    title: "Global Retail Inc.",
    company: "HR Director",
    quote: "The comprehensive HR audit conducted by Logix Solutions revealed crucial insights that helped us reshape our human resource strategy. Their recommendations were practical and effective."
  },
  {
    id: 6,
    name: "Michael Chen",
    title: "FutureTech Systems",
    company: "Operations Manager",
    quote: "Logix Solutions delivered exactly what we needed - a customized HR framework that addressed our unique challenges. Their team was responsive, knowledgeable, and a pleasure to work with."
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg p-6 shadow-sm relative min-h-[200px]"
            >
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 leading-tight">{testimonial.title}</p>
                <p className="text-sm text-gray-600 leading-tight">{testimonial.company}</p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 right-0 text-pink-200 text-6xl font-serif opacity-30">
                 &quot;
                </div>
                <p className="text-sm text-gray-800 relative z-10 pr-6 leading-relaxed">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-end mt-8 space-x-4 mr-4">
          <button 
            onClick={prevPage} 
            className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === 0 ? 'bg-green-500' : 'bg-white'} text-${currentPage === 0 ? 'white' : 'gray-800'} focus:outline-none transition-colors duration-300 shadow-sm`}
            aria-label="Previous testimonials"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={nextPage} 
            className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === 0 ? 'bg-white' : 'bg-green-500'} text-${currentPage === 0 ? 'gray-800' : 'white'} focus:outline-none transition-colors duration-300 shadow-sm`}
            aria-label="Next testimonials"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
