"use client";

import { motion } from "framer-motion";

export default function BlakeschildHome() {
  const services = [
    "Engineering & Construction",
    "Procurement & Supply Chain",
    "QAQC & Third-Party Inspection",
    "Project Management & Consultancy",
    "Facilities Maintenance",
    "Manpower Development",
  ];

  const sectors = [
    "Oil & Gas",
    "Power",
    "Telecoms",
    "Real Estate",
    "Manufacturing",
    "Maritime",
  ];

  const leadership = [
    {
      name: "Chuku Ndukwe",
      role: "Managing Director — Procurement / Strategy",
      details: "MSc Transport & Logistics | 14+ years procurement experience (NLNG, Total, ExxonMobil)",
    },
    {
      name: "Kelechi Chuku",
      role: "Director — Capital Markets / Investor Relations",
      details: "PhD Project Management | 21+ years in finance & project consultancy",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-gray-900 text-white py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Engineering Value. Delivering Excellence.
        </motion.h1>
        <p className="text-lg mb-8">Blakeschild & Dukes Ltd — Engineering, Procurement & Project Management</p>
        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
            About Us
          </button>
          <button className="text-white border border-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-2 rounded-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed">
          Blakeschild & Dukes Ltd is a Nigerian engineering and procurement company delivering integrated construction, project management, and consultancy solutions to public and private sector clients. We combine technical expertise, reliable delivery, and cost-effective procurement to maximize client value.
        </p>
        <div className="mt-8 text-center">
          <p><strong>Mission:</strong> Deliver professional engineering, procurement, and project management services at competitive cost.</p>
          <p><strong>Vision:</strong> To be a trusted leader in delivering sustainable engineering and procurement solutions across Africa.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service} className="border rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">Professional, ISO-aligned delivery ensuring cost efficiency and excellence.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Market Sectors</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          {sectors.map((sector) => (
            <span key={sector} className="px-6 py-3 border border-gray-300 rounded-full shadow-sm hover:shadow-md transition">{sector}</span>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600">Geography: Nigeria & West Africa • Global sourcing for equipment</p>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {leadership.map((leader) => (
            <div key={leader.name} className="border rounded-2xl shadow-md p-8 text-center">
              <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-blue-700 font-medium mb-2">{leader.role}</p>
              <p className="text-gray-600 text-sm">{leader.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-2">6 Adejoke Sokoya Street, Unity Estate, Ojodu, Lagos, Nigeria</p>
        <p className="mb-6">Email: <a href="mailto:info@blakeschild.com" className="text-blue-600">info@blakeschild.com</a></p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg">
          Send a Message
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <p>© 2025 Blakeschild & Dukes Ltd | Engineering Value. Delivering Excellence.</p>
        <p><a href="http://www.blakeschild.com" className="underline">www.blakeschild.com</a></p>
      </footer>
    </div>
  );
}
