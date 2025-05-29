"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p>
            We collect information that you provide to us when you use our services, register an account, or make purchases. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, billing address, payment information.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website, including pages viewed, time spent on the site, and actions taken.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To process transactions and provide services.</li>
            <li>To improve our website and offer a personalized user experience.</li>
            <li>To send updates, promotions, or other marketing materials.</li>
            <li>To respond to your inquiries or provide customer support.</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Data Security",
      content: (
        <p>
          We take appropriate security measures to protect your personal data from unauthorized access, alteration, or destruction. These include encryption, secure servers, and regular audits.
        </p>
      ),
    },
    {
      title: "4. Cookies and Tracking Technologies",
      content: (
        <>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us remember your preferences and improve site functionality.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Necessary Cookies:</strong> Required for website functionality.</li>
            <li><strong>Performance Cookies:</strong> Used to analyze how visitors use the site.</li>
            <li><strong>Advertising Cookies:</strong> Help us deliver targeted ads.</li>
          </ul>
          <p className="mt-2">You can control cookie preferences in your browser settings.</p>
        </>
      ),
    },
    {
      title: "5. Sharing Your Information",
      content: (
        <p>
          We do not sell, rent, or trade your personal information. However, we may share it with trusted partners who assist in our operations or service delivery, subject to confidentiality agreements.
        </p>
      ),
    },
    {
      title: "6. Your Rights",
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the information we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, contact us at{" "}
            <a href="mailto:contact@stratixlabs.com" className="text-blue-400 underline hover:text-blue-300">
              contact@stratixlabs.com
            </a>.
          </p>
        </>
      ),
    },
    {
      title: "7. Changes to This Privacy Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date at the top will be updated.
        </p>
      ),
    },
    {
      title: "8. Contact Us",
      content: (
        <>
          <p>If you have any questions about this Privacy Policy or your data, please contact us at:</p>
          <div className="mt-2 space-y-1">
            <p><strong>Stratix Labs</strong></p>
            <p>
              Email:{" "}
              <a href="mailto:contact@stratixlabs.com" className="text-blue-400 underline hover:text-blue-300">
                contact@stratixlabs.com
              </a>
            </p>
            <p>Phone: <strong>+123 456 7890</strong></p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen text-blue-50">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-center text-blue-400 pt-12 px-4"
      >
        Privacy Policy of Stratix Labs
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-4xl mx-auto mt-12 px-6 md:px-10 pb-20"
      >
        <div className="bg-blue-100/10 backdrop-blur-xl rounded-2xl shadow-[0_0_80px_-10px_rgba(0,195,255,0.3)] p-8 md:p-12 border border-blue-800 space-y-12">
          <p className="text-lg md:text-xl text-center text-blue-100 leading-relaxed">
            At Stratix Labs, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect your privacy.
          </p>

          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400">{section.title}</h2>
              <div className="text-base md:text-lg text-blue-100 leading-relaxed">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
