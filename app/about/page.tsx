"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Globe,
  Users,
  Award,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Building,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  Mail,
  Phone,
  Linkedin,
  ChevronDown,
  ChevronUp,
  Eye,
  Compass,
} from "lucide-react";

const SabitriAboutPage = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  // Company milestones timeline
  const timeline = [
    {
      year: "2018",
      title: "Foundation & Vision",
      description:
        "Sabitri SZX was founded with a vision to bridge global opportunities through comprehensive services",
      icon: Lightbulb,
      color: "blue",
    },
    {
      year: "2019",
      title: "Education Services Launch",
      description:
        "Launched SabitriEdu, connecting students worldwide with premier educational institutions",
      icon: Award,
      color: "green",
    },
    {
      year: "2020",
      title: "Travel & Tourism Expansion",
      description:
        "Introduced SabitriTours, offering premium travel experiences and customized itineraries",
      icon: Globe,
      color: "purple",
    },
    {
      year: "2021",
      title: "International Trade Division",
      description:
        "Established SabitriTrade to facilitate seamless global commerce and supply chain solutions",
      icon: TrendingUp,
      color: "orange",
    },
    {
      year: "2022",
      title: "AI Technology Integration",
      description:
        "Launched SabitriAI, pioneering AI-powered translation and transcription services",
      icon: Zap,
      color: "cyan",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description:
        "Achieved international recognition with 50+ countries served and 15,000+ satisfied clients",
      icon: Star,
      color: "yellow",
    },
  ];

  // Company values
  const values = [
    {
      icon: Eye,
      title: "Vision",
      subtitle: "Global Bridge Builder",
      description:
        "To be the world's most trusted partner in connecting opportunities across education, travel, trade, and technology.",
      details:
        "We envision a world where geographical boundaries don't limit access to opportunities. Through our comprehensive services, we aim to create pathways for individuals and businesses to achieve their global ambitions.",
      color: "blue",
    },
    {
      icon: Compass,
      title: "Mission",
      subtitle: "Empowering Global Success",
      description:
        "Delivering exceptional services that transform aspirations into achievements through innovation, expertise, and unwavering commitment.",
      details:
        "Our mission is to empower our clients with world-class services that open doors to international education, unforgettable travel experiences, successful trade ventures, and cutting-edge AI solutions.",
      color: "green",
    },
    {
      icon: Heart,
      title: "Values",
      subtitle: "Excellence in Everything",
      description:
        "Integrity, Innovation, Excellence, and Client Success are the pillars that guide every decision and action we take.",
      details:
        "We believe in maintaining the highest standards of integrity while continuously innovating to deliver excellence. Our clients' success is our ultimate measure of achievement.",
      color: "purple",
    },
  ];

  // Core principles
  const principles = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "Building lasting relationships through honest communication and reliable service delivery",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Embracing cutting-edge technology and creative solutions to stay ahead of industry trends",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Every service is tailored to meet unique client needs with personalized attention and care",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Understanding diverse cultures and markets to provide truly international solutions",
    },
  ];

  // Team members
  const teamMembers = [
    {
      name: "Sarah Chen",
      position: "Chief Executive Officer",
      department: "Executive Leadership",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader with 15+ years in global business development and international relations.",
      expertise: [
        "Strategic Planning",
        "Global Expansion",
        "Stakeholder Relations",
      ],
      email: "sarah.chen@sabitri.com",
      linkedin: "#",
    },
    {
      name: "David Rodriguez",
      position: "Chief Operating Officer",
      department: "Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Operations expert specializing in process optimization and service excellence across multiple verticals.",
      expertise: [
        "Operations Management",
        "Process Optimization",
        "Quality Assurance",
      ],
      email: "david.rodriguez@sabitri.com",
      linkedin: "#",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Director of Education Services",
      department: "SabitriEdu",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "Educational consultant with PhD in International Education and 12+ years helping students achieve their dreams.",
      expertise: [
        "University Partnerships",
        "Student Counseling",
        "Visa Processing",
      ],
      email: "priya.sharma@sabitriedu.com",
      linkedin: "#",
    },
    {
      name: "Michael Thompson",
      position: "Head of Travel Operations",
      department: "SabitriTours",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Travel industry veteran with expertise in luxury travel planning and destination management.",
      expertise: [
        "Destination Planning",
        "Luxury Travel",
        "Customer Experience",
      ],
      email: "michael.thompson@sabitritours.com",
      linkedin: "#",
    },
    {
      name: "Lisa Wang",
      position: "International Trade Director",
      department: "SabitriTrade",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Trade finance specialist with extensive experience in cross-border commerce and supply chain management.",
      expertise: ["Import/Export", "Supply Chain", "Trade Finance"],
      email: "lisa.wang@sabitritrade.com",
      linkedin: "#",
    },
    {
      name: "Dr. Alex Kumar",
      position: "AI Technology Lead",
      department: "SabitriAI",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
      bio: "AI researcher and engineer with PhD in Machine Learning, specializing in NLP and translation technologies.",
      expertise: ["Machine Learning", "NLP", "Translation Technology"],
      email: "alex.kumar@sabitriaidata.com",
      linkedin: "#",
    },
  ];

  // Company statistics
  const stats = [
    { number: "20,000+", label: "Clients Served", icon: Users },
    { number: "50+", label: "Countries Reached", icon: Globe },
    { number: "300+", label: "Partner Institutions", icon: Building },
    { number: "98%", label: "Success Rate", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "15+", label: "Languages Supported", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                About Sabitri SZX
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Connecting
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Global Dreams
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since 2018, we&apos;ve been the trusted bridge between aspirations
              and achievements, connecting individuals and businesses with
              global opportunities across education, travel, trade, and
              technology.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and driven by a clear vision for global
              connectivity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${
                  value.color === "blue"
                    ? "from-blue-100 via-indigo-50 to-purple-100"
                    : value.color === "green"
                    ? "from-green-100 via-teal-50 to-blue-100"
                    : "from-purple-100 via-violet-50 to-indigo-100"
                } p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                onClick={() =>
                  setExpandedValue(expandedValue === index ? null : index)
                }
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className={`text-${value.color}-700 font-semibold mb-4`}>
                  {value.subtitle}
                </p>
                <p className="text-gray-700 mb-4">{value.description}</p>

                {expandedValue === index && (
                  <div className="mt-4 p-4 bg-white/40 backdrop-blur-sm rounded-xl">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {value.details}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-gray-600">Learn more</span>
                  {expandedValue === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental beliefs that guide our approach to every client
              relationship and business decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a vision to global impact - discover the milestones that
              shaped Sabitri SZX
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:space-x-8`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      activeTimeline === index ? "scale-105" : ""
                    } transition-transform duration-300`}
                  >
                    <div
                      className={`bg-gradient-to-br ${
                        item.color === "blue"
                          ? "from-blue-100 via-indigo-50 to-purple-100"
                          : item.color === "green"
                          ? "from-green-100 via-teal-50 to-blue-100"
                          : item.color === "purple"
                          ? "from-purple-100 via-violet-50 to-indigo-100"
                          : item.color === "orange"
                          ? "from-orange-100 via-red-50 to-pink-100"
                          : item.color === "cyan"
                          ? "from-cyan-100 via-blue-50 to-indigo-100"
                          : "from-yellow-100 via-orange-50 to-red-100"
                      } p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-${item.color}-500 rounded-xl flex items-center justify-center`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div
                          className={`text-2xl font-bold text-${item.color}-700`}
                        >
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to your success, bringing
              together expertise from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setActiveTeamMember(index)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links */}
                  {activeTeamMember === index && (
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Rest of the card content remains the same */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-500">{member.department}</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied clients who have achieved their global
            ambitions with Sabitri SZX
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">
               +86 198 5448 8204
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">info@sabitri.com</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Shenzhen City, Guangdong PR China</span>
            </div>
          </div>
            <Link href="/contact" passHref>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 mx-auto group">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default SabitriAboutPage;
