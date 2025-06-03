import React from 'react'
import {Phone,Mail,MapPin,Clock,Plane,GraduationCap,ArrowRight} from 'lucide-react';

export default function page() {
  return (
    <>
    <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Global Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with our expert team and discover how we can help you
              achieve your global goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <Phone className="w-8 h-8 text-cyan-400" />
                  <span>Get In Touch</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">Call Us</p>
                      <p className="text-xl font-bold">+86 188 2001 4418</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">Email Us</p>
                      <p className="text-xl font-bold">info@sabitri.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">Visit Us</p>
                      <p className="text-xl font-bold">Global Offices</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">Available</p>
                      <p className="text-xl font-bold">24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <GraduationCap className="w-6 h-6" />
                  <span>Education Consult</span>
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Plane className="w-6 h-6" />
                  <span>Travel Planning</span>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <select className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors">
                  <option value="">Select Service</option>
                  <option value="education">SabitriEdu - Education</option>
                  <option value="travel">SabitriTours - Travel</option>
                  <option value="trade">SabitriTrade - Import/Export</option>
                  <option value="ai">SabitriAI - AI Solutions</option>
                  <option value="hospital">SabitriSZX - Healthcare</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}
