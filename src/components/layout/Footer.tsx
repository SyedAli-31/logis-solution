"use client";
import Link from "next/link";
import Image from "next/image";

import {
  
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
 
} from "lucide-react";
import  { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";



const Footer = () => {
  


  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear()); // hydration issue fix

  
  // To ensure hydration consistency, update the year on client-side once mounted
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);  // This will run only once after the component is mounted

  return (
    <>
      <Toaster position="top-right" />
      <footer className="bg-[#dfdcdc]  py-12">
        <div className="container mx-auto px-4 md:px-[220px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div>
              <div className="flex items-start">
                <Image
                  src="/logo.png"
                  alt="Stratix Labs Logo"
                  width={146}
                  height={88}
                  className="w-[146px] h-[88px] object-contain"
                />
              </div>
              <p className="text-black mb-4 mt-2 text-[14px] ">
               <span className="inline md:inline">Logix Solutions delivers tailored HR</span> 
               <span className="inline md:inline">services that align with business needs,</span>
               <span className="inline md:inline">ensuring customer satisfaction for both </span>
               <span className="inline md:inline">individuals and organizations.</span>
              </p>
              <div className="flex space-x-4 text-black">
                <Link href="/" className=" hover:text-gold transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61575081911392&mibextid=ZbWKwL"
                  className="hover:text-gold transition-colors "
                  target="_blank"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/106972398/admin/dashboard/"
                  className=" hover:text-gold transition-colors"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/stratixlabs_27/"
                  className=" hover:text-gold transition-colors"
                  target="_blank"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="ml-8">
              <h3 className="font-bold text-[22px] mb-4  text-[#ff6630]">Quick Links</h3>
              <ul className="space-y-2 text-black">
                <li><Link href="/" className=" hover:text-gold transition-colors">About Us</Link></li>
                <li><Link href="/about" className=" hover:text-gold transition-colors">Services</Link></li>
                <li><Link href="/services" className=" hover:text-gold transition-colors">Resources</Link></li>
                <li><Link href="/testimonials" className="hover:text-gold transition-colors">Blog</Link></li>
                <li><Link href="/contact" className=" hover:text-gold transition-colors">Career</Link></li>
                
              </ul>
            </div>

            {/* Other Services */}
            <div>
              <h3 className="font-bold text-[22px] mb-4  text-[#ff6630]">Help Center</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className=" hover:text-gold transition-colors">Events</Link></li>
                <li><Link href="/services" className=" hover:text-gold transition-colors">Portfolio</Link></li>
                <li><Link href="/services" className=" hover:text-gold transition-colors">Contact Us</Link></li>
                <li><Link href="/services" className=" hover:text-gold transition-colors">Privacy Policy</Link></li>
                <li><Link href="/services" className=" hover:text-gold transition-colors">Site Map</Link></li>
              
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-[22px] mb-4 text-[#ff6630]">Get In Touch</h3>
              <p className="text-black mb-4">
                Suite No. 612, Park Avenue, Main Shahrah-e-Faisal, Block-6, PECHS, Karachi
              </p>
             <p>info@logix-solutions.net</p> 
<p>(+92) 213-4370336</p>
            </div>
          </div>

          <div className=" mt-12 pt-8 flex text-center justify-center">
            <p className="text-black text-sm mb-4 md:mb-0  ">
              &copy; {currentYear} Logix Solutions • All Rights Reserved
            </p>
            
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
