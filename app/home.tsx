"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  ChevronRight,
  Heart,
  Shield,
  Users,
  Star,
  Globe,
  Quote,
  GraduationCap,
  Plane,
  Package,
  Brain,
  Mail,
  ArrowRight,
  CheckCircle,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

const SabitriSZX = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "education",
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
      title: "Tours and Travel",
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

  const testimonials = [
    {
      name: "Dr. Dewakar Chauhan",
      role: "Medical Student - China",
      service: "SabitriEdu",
      text: "SabitriEdu made my dream of studying medicine in China a reality. The scholarship guidance and visa support were exceptional.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      service: "SabitriTrade",
      text: "Outstanding logistics support for our import business. Their tracking systems and reliability have transformed our operations.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1594824704818-0b3265d40fcc?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Rahul Kumar",
      role: "Travel Enthusiast",
      service: "SabitriTours",
      text: "Amazing travel experience! The Europe tour was perfectly organized with luxury accommodations and breathtaking sights.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Tech Startup CEO",
      role: "Technology Leader",
      service: "SabitriAI",
      text: "SabitriAI's transcription and translation services have streamlined our global communications significantly.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Clients", icon: Users },
    { number: "100+", label: "Global Partners", icon: Globe },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "100%", label: "Success Rate", icon: Star },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 via-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 opacity-10">
          {[GraduationCap, Plane, Package, Brain, Heart, Globe].map(
            (Icon, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <Icon className="w-8 h-8 text-blue-500" />
              </div>
            )
          )}
        </div>

        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div className="text-center lg:text-left space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Trusted by 50,000+ Clients Worldwide
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900">Your Global</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Partner
                  </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Education • Travel • Trade • AI
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  From studying abroad to exploring the world, from
                  international trade to cutting-edge AI solutions - we&apos;re your
                  trusted partner for all global services.
                </p>

                {/* Service Highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-white/40 backdrop-blur-sm p-3 rounded-xl"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {service.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/services" passHref>
                  <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>Explore Services</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                  <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Call Us
                      </p>
                      <p className="font-bold text-lg">+86 188 2001 4418</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Email Us
                      </p>
                      <p className="font-bold text-lg">info@sabitri.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Dynamic Service Showcase */}
              <div className="relative">
                <div className="relative">
                  {/* Active Service Card */}
                  <div
                    className={`relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br ${services[activeService].bgGradient}`}
                  >
                    <div className="p-8 lg:p-12">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {services[activeService].title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        {services[activeService].desc}
                      </p>
                      <div className="space-y-3">
                        {services[activeService].features.map(
                          (feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          )
                        )}
                      <Link href="/services">
                        <button className="mt-6 bg-white/80 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300 flex items-center space-x-2">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Service Navigation Dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeService
                            ? "bg-purple-600 w-8"
                            : "bg-purple-200 hover:bg-purple-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Global
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Service Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From education to healthcare, we provide comprehensive solutions
              for all your global needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 mb-6">{service.desc}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                  <Link href="/services" passHref>
                <button className="w-full bg-white/80 backdrop-blur-sm text-gray-900 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 transform group-hover:translate-x-1"
                    >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                    </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories from
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Global Community
              </span>
            </h2>
          </div>
          <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
                &quot;{testimonials[activeTestimonial].text}&quot;
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    {testimonials[activeTestimonial].service}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-purple-600 w-8"
                      : "bg-purple-200 hover:bg-purple-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SabitriSZX;