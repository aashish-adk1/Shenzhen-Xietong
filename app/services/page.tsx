"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  GraduationCap,
  Plane,
  Package,
  Bot,
  CheckCircle,
  Globe,
  Users,
  Shield,
  Mic,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  FileText,
  Camera,
  Headphones,
  Languages,
  Truck,
  Database,
  Settings,
  Target,
  X,
  Send,
  MessageCircle,
  Building,
} from "lucide-react";

const SabitriServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [contactModal, setContactModal] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const services = [
    {
      id: "education",
      title: "Education",
      subtitle: "Global Education Services",
      tagline: "Your Gateway to World-Class Education",
      description:
        "Comprehensive educational consultancy services connecting students with premier institutions worldwide through personalized guidance and expert support.",
      icon: GraduationCap,
      bgGradient: "from-blue-100 via-indigo-50 to-purple-100",
      accentColor: "blue",
      stats: [
        { number: "5,000+", label: "Students Placed" },
        { number: "200+", label: "Partner Universities" },
        { number: "50+", label: "Countries" },
        { number: "98%", label: "Visa Success Rate" },
      ],
      features: [
        {
          icon: Globe,
          title: "University Selection",
          desc: "Expert guidance for choosing the right institution",
        },
        {
          icon: FileText,
          title: "Application Support",
          desc: "Complete assistance with application processes",
        },
        {
          icon: Shield,
          title: "Visa Assistance",
          desc: "Comprehensive visa application support",
        },
        {
          icon: Users,
          title: "Career Counseling",
          desc: "Professional career guidance and planning",
        },
      ],
      mainServices: [
        "University Application Assistance",
        "Visa Processing Support",
        "Scholarship Guidance",
        "Test Preparation (IELTS/TOEFL)",
        "Career Counseling",
        "Pre-departure Orientation",
      ],
      contact: {
        phone: "+86 198 5448 8204",
        email: "info@sabitriedu.com",
        address: "shenzhen city, guangdong pr china",
      },
    },
    {
      id: "travel",
      title: "Tours and travel",
      subtitle: "Travel & Tourism Excellence",
      tagline: "Discover the World with Premium Travel Experiences",
      description:
        "Curated travel experiences and premium tourism services designed to create unforgettable memories with personalized itineraries and exceptional service.",
      icon: Plane,
      bgGradient: "from-green-100 via-teal-50 to-blue-100",
      accentColor: "green",
      stats: [
        { number: "10,000+", label: "Happy Travelers" },
        { number: "100+", label: "Destinations" },
        { number: "15+", label: "Years Experience" },
        { number: "24/7", label: "Support" },
      ],
      features: [
        {
          icon: MapPin,
          title: "Custom Itineraries",
          desc: "Personalized travel plans for every journey",
        },
        {
          icon: Camera,
          title: "Premium Experiences",
          desc: "Exclusive access to unique destinations",
        },
        {
          icon: Shield,
          title: "Travel Insurance",
          desc: "Comprehensive coverage for peace of mind",
        },
        {
          icon: Headphones,
          title: "24/7 Support",
          desc: "Round-the-clock assistance during travel",
        },
      ],
      mainServices: [
        "Custom Travel Packages",
        "Group Tours",
        "Corporate Travel",
        "Hotel Bookings",
        "Flight Reservations",
        "Travel Insurance",
      ],
      contact: {
        phone: "+86 198 5448 8204",
        email: "travel@sabitritours.com",
        address: "shenzhen city, guangdong pr china",
      },
    },
    {
      id: "trade",
      title: "Trade",
      subtitle: "International Trade Solutions",
      tagline: "Connecting Global Markets with Smart Trade Solutions",
      description:
        "Comprehensive international trade services facilitating seamless global commerce through expert logistics, supply chain management, and market expertise.",
      icon: Package,
      bgGradient: "from-orange-100 via-red-50 to-pink-100",
      accentColor: "orange",
      stats: [
        { number: "$50M+", label: "Trade Volume" },
        { number: "500+", label: "Global Partners" },
        { number: "25+", label: "Countries" },
        { number: "99%", label: "On-time Delivery" },
      ],
      features: [
        {
          icon: Truck,
          title: "Global Logistics",
          desc: "Efficient worldwide shipping and delivery",
        },
        {
          icon: Database,
          title: "Supply Chain",
          desc: "Optimized supply chain management",
        },
        {
          icon: Target,
          title: "Market Analysis",
          desc: "In-depth market research and insights",
        },
        {
          icon: Settings,
          title: "Custom Solutions",
          desc: "Tailored trade solutions for your business",
        },
      ],
      mainServices: [
        "Export-Import Services",
        "Supply Chain Management",
        "Logistics Solutions",
        "Market Research",
        "Trade Finance",
        "Customs Clearance",
      ],
      contact: {
        phone: "+86 198 5448 8204",
        email: "trade@sabitritrade.com",
        address: "shenzhen city, guangdong pr china",
      },
    },
    {
      id: "ai",
      title: "AI",
      subtitle: "Translation, Transcription & Recording Services",
      tagline:
        "Breaking Language Barriers with AI-Powered Communication Solutions",
      description:
        "Professional translation, transcription, and recording services powered by advanced AI technology to help businesses communicate across languages and convert audio to text seamlessly.",
      icon: Bot,
      bgGradient: "from-purple-100 via-violet-50 to-indigo-100",
      accentColor: "purple",
      stats: [
        { number: "100+", label: "Languages Supported" },
        { number: "10M+", label: "Words Translated" },
        { number: "99.5%", label: "Accuracy Rate" },
        { number: "24/7", label: "Service Available" },
      ],
      features: [
        {
          icon: Languages,
          title: "AI Translation",
          desc: "Accurate translations across 100+ languages with context awareness",
        },
        {
          icon: FileText,
          title: "Smart Transcription",
          desc: "Convert audio and video to text with speaker identification",
        },
        {
          icon: Mic,
          title: "Professional Recording",
          desc: "High-quality audio recording and voice-over services",
        },
        {
          icon: Globe,
          title: "Real-time Translation",
          desc: "Live translation for meetings and conversations",
        },
      ],
      mainServices: [
        "Document Translation",
        "Audio Transcription",
        "Video Transcription",
        "Voice Recording",
        "Real-time Translation",
        "Multilingual Voice-overs",
      ],
      contact: {
        phone: "+86 198 5448 8204",
        email: "ai@sabitriaidata.com",
        address: "shenzhen city, guangdong pr china",
      },
    },
  ];

  const currentService = services[activeService];

  // Handle service click
  const handleServiceClick = (index: number) => {
    setActiveService(index);
  };

  // Handle contact modal
  const openContactModal = (serviceIndex: number) => {
    setContactModal(serviceIndex);
    setFormData({ ...formData, service: services[serviceIndex].title });
    document.body.style.overflow = "hidden";
  };

  const closeContactModal = () => {
    setContactModal(null);
    document.body.style.overflow = "unset";
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your inquiry! We will get back to you soon.");
    closeContactModal();
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeContactModal();
      }
    };

    if (contactModal !== null) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [contactModal]);

  return (
    <>
      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-green-400 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Complete Global Service Ecosystem
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Global Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From world-class education to premium travel experiences,
              cutting-edge AI solutions to seamless international trade -
              we&apos;re your trusted partner for all global services.
            </p>
          </div>

          {/* Featured Service Showcase */}
          <div className="mb-20">
            <div
              className={`bg-gradient-to-br ${currentService.bgGradient} rounded-3xl overflow-hidden shadow-2xl border border-white/50 transition-all duration-500`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Column - Service Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {currentService.title}
                      </h3>
                      <p className="text-lg text-gray-700 font-medium">
                        {currentService.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl mb-6">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      {currentService.tagline}
                    </p>
                    <p className="text-gray-700">
                      {currentService.description}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white/30 backdrop-blur-sm p-4 rounded-2xl mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Contact Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">
                          {currentService.contact.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">
                          {currentService.contact.email}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">
                          {currentService.contact.address}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {currentService.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/30 backdrop-blur-sm p-4 rounded-xl text-center"
                      >
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => openContactModal(activeService)}
                    className="w-full bg-white/80 backdrop-blur-sm text-gray-900 py-4 rounded-2xl font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Explore {currentService.title}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Right Column - Features */}
                <div className="p-8 lg:p-12 bg-white/20 backdrop-blur-sm">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentService.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white/40 backdrop-blur-sm p-4 rounded-xl"
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div
                            className={`w-8 h-8 bg-${currentService.accentColor}-500 rounded-lg flex items-center justify-center`}
                          >
                            <feature.icon className="w-4 h-4 text-white" />
                          </div>
                          <h5 className="font-semibold text-gray-900">
                            {feature.title}
                          </h5>
                        </div>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Navigation */}
            <div className="flex justify-center space-x-3 mt-8">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    index === activeService
                      ? "bg-white shadow-lg scale-105"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                >
                  <span className="text-sm font-medium text-gray-700">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* All Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => openContactModal(index)}
                className={`relative group bg-gradient-to-br ${service.bgGradient} p-6 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer`}
              >
                {/* Service Icon & Logo */}
                <div className="relative mb-6">
                 
                  <service.icon className="absolute -top-2 -right-2 w-8 h-8 text-gray-600 opacity-20" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {service.tagline}
                </p>

                {/* Contact Info */}
                <div className="bg-white/30 backdrop-blur-sm p-3 rounded-xl mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3 h-3 text-gray-600" />
                      <span className="text-xs text-gray-700 truncate">
                        {service.contact.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3 h-3 text-gray-600" />
                      <span className="text-xs text-gray-700 truncate">
                        {service.contact.email}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Connect with our experts today and discover how we can help you
                achieve your global ambitions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">
                    +86 198 5448 8204
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">
                    info@sabitri.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal Lightbox */}
      {contactModal !== null && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeContactModal}
          ></div>

          {/* Modal */}
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl transform transition-all duration-300 scale-100">
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeContactModal();
                }}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className=" h-full">
                {/* Left Side - Contact Form */}
                <div
                  className={`p-8 lg:p-12 bg-gradient-to-br ${services[contactModal].bgGradient} rounded-l-3xl lg:rounded-r-none rounded-3xl lg:rounded-br-none`}
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-6">
                     
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {services[contactModal].title}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {services[contactModal].subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl mb-6">
                      <p className="text-gray-800 font-semibold mb-2">
                        {services[contactModal].tagline}
                      </p>
                      <p className="text-gray-700 text-sm">
                        {services[contactModal].description}
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white/30 backdrop-blur-sm p-4 rounded-2xl space-y-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 bg-${services[contactModal].accentColor}-500 rounded-lg flex items-center justify-center`}
                        >
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-800 font-medium">
                          {services[contactModal].contact.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 bg-${services[contactModal].accentColor}-500 rounded-lg flex items-center justify-center`}
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-800 font-medium">
                          {services[contactModal].contact.email}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 bg-${services[contactModal].accentColor}-500 rounded-lg flex items-center justify-center`}
                        >
                          <Building className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-800 font-medium text-sm">
                          {services[contactModal].contact.address}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`w-full bg-gradient-to-r from-${services[contactModal].accentColor}-500 to-${services[contactModal].accentColor}-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group`}
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Services Preview at Bottom */}
              <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 rounded-b-3xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    {(() => {
                      const Icon = services[contactModal].icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                    <span>Our Services</span>
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    <span>Mention your interest in the message above</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services[contactModal].mainServices.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-700 bg-white p-2 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="truncate">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Modal Animation */
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .fixed > .flex > .relative {
          animation: modalSlideIn 0.3s ease-out;
        }

        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        /* Enhanced focus states */
        input:focus,
        textarea:focus {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* Button hover effects */
        button:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        /* Map responsive height */
        @media (max-width: 1024px) {
          .fixed .grid-cols-1.lg\\:grid-cols-2 > div:last-child {
            min-height: 400px;
          }
        }
      `}</style>
    </>
  );
};

export default SabitriServicesSection;
