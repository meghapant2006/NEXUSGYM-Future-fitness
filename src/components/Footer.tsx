"use client"

import { Dumbbell, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  NEXUS<span className="text-red-500">GYM</span>
                </h3>
                <div className="text-xs text-gray-400 tracking-widest">FUTURE FITNESS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the future of fitness with cutting-edge technology and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Membership", "Personal Training", "Group Classes"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Contact Us", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>123 Fitness Street, City</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-red-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-red-500" />
                <span>info@nexusgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Nexus Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}