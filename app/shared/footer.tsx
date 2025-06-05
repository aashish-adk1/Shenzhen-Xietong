"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  GraduationCap,
  Plane,
  Package,
  Brain,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/szx logo.png";

export default function footer() {
  const services = [
    {
      id: "education",
      icon: GraduationCap,
      title: "Education",
      subtitle: "Global Education Services",
      desc: "Study in USA & China with scholarships and complete visa support",
      features: [
        "Scholarship Guidance",
        "University Matching",
        "Visa Counselling",
        "Application Support",
      ],
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      id: "travel",
      icon: Plane,
      title: "Tours and travels",
      subtitle: "Travel & Tourism",
      desc: "Explore stunning destinations with our comprehensive travel packages",
      features: [
        "Tour Packages",
        "Flight Booking",
        "Hotel Reservations",
        "Visa Services",
      ],
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      id: "trade",
      icon: Package,
      title: "Trade",
      subtitle: "Import & Export",
      desc: "Your gateway to seamless international trade and logistics",
      features: [
        "Import/Export Services",
        "Customs Clearance",
        "Logistics Solutions",
        "Product Sourcing",
      ],
      color: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
    },
    {
      id: "ai",
      icon: Brain,
      title: "AI",
      subtitle: "AI Solutions",
      desc: "Advanced AI-powered transcription, translation, and data solutions",
      features: [
        "Smart Recording",
        "AI Transcription",
        "Real-time Translation",
        "Data Analytics",
      ],
      color: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
    },
  ];
  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 flex justify-center items-center">
                <Link
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  <Image
                    src={Logo}
                    alt="Sabitri SZX"
                    width={120}
                    height={40}
                    className="h-30 w-auto"
                  />
                </Link>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted global partner for education, travel, trade, AI
                solutions, and healthcare services worldwide.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li
                    key={service.id}
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+86 198 5448 8204</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">info@sabitri.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">Global Offices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                © 2024 Sabitri Global Services. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
