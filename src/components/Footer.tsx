import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-gold-400" />
              <span className="text-xl font-bold">
                Secure<span className="text-gold-400">Horizon</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping families and individuals protect their future with
              personalized insurance and annuity solutions since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#benefits" className="hover:text-gold-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-400 transition-colors">
                  Client Stories
                </a>
              </li>
              <li>
                <Link href="/quote" className="hover:text-gold-400 transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Life Insurance</li>
              <li>Health Insurance</li>
              <li>Fixed Annuities</li>
              <li>Variable Annuities</li>
              <li>Indexed Annuities</li>
              <li>Retirement Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                info@securehorizon.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5" />
                <span>
                  123 Financial District
                  <br />
                  Suite 400
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-500/20 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SecureHorizon. All rights reserved.</p>
          <p className="mt-2">
            Insurance products and annuities are subject to terms, conditions,
            and exclusions. Consult with a licensed professional for personalized advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
