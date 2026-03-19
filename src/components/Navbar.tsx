"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-brand-500 group-hover:text-brand-600 transition-colors" />
            <span className="text-2xl font-bold text-brand-800">
              Secure<span className="text-brand-500">Horizon</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#benefits"
              className="text-gray-600 hover:text-brand-500 font-medium transition-colors"
            >
              Benefits
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-brand-500 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-brand-500 font-medium transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-brand-500 font-medium transition-colors"
            >
              FAQ
            </a>
            <Link
              href="/quote"
              className="btn-primary !py-3 !px-6 !text-base"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <a
              href="#benefits"
              className="block text-gray-600 hover:text-brand-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#services"
              className="block text-gray-600 hover:text-brand-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="block text-gray-600 hover:text-brand-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="block text-gray-600 hover:text-brand-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <Link
              href="/quote"
              className="btn-primary block text-center !py-3"
              onClick={() => setIsOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
