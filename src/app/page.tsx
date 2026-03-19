"use client";

import Link from "next/link";
import {
  Shield,
  Heart,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Phone,
  DollarSign,
  Umbrella,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BenefitsSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <StatsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-700 via-brand-500 to-brand-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Trusted by 10,000+ Families Nationwide
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Protect What Matters Most —{" "}
            <span className="text-gold-400">Your Family&apos;s Future</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl sm:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl"
          >
            Get personalized insurance and annuity solutions designed around your
            life. No jargon, no pressure — just honest guidance and real
            protection.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/quote" className="btn-gold text-center">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </Link>
            <a href="#services" className="btn-outline text-center">
              Explore Our Solutions
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-col sm:flex-row gap-6 text-blue-100 text-sm"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              100% Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              No Obligation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Licensed Professionals
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm font-medium">
          <span>As Featured In:</span>
          <span className="text-gray-500 font-semibold text-lg">Forbes</span>
          <span className="text-gray-500 font-semibold text-lg">
            Insurance Journal
          </span>
          <span className="text-gray-500 font-semibold text-lg">
            Wall Street Journal
          </span>
          <span className="text-gray-500 font-semibold text-lg">CNBC</span>
          <span className="text-gray-500 font-semibold text-lg">
            Kiplinger
          </span>
        </div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Family Protection",
      description:
        "Ensure your loved ones are financially secure no matter what life brings. Replace lost income, cover debts, and fund your children's future.",
    },
    {
      icon: DollarSign,
      title: "Guaranteed Income",
      description:
        "Create a steady stream of retirement income you can never outlive with our annuity solutions. Sleep soundly knowing your future is funded.",
    },
    {
      icon: TrendingUp,
      title: "Wealth Growth",
      description:
        "Build tax-advantaged wealth with products designed to grow your money safely while protecting it from market volatility.",
    },
    {
      icon: Umbrella,
      title: "Complete Coverage",
      description:
        "From life and health to disability and long-term care — we build a comprehensive safety net tailored to your unique situation.",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
            Why Thousands of Families Trust Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We don&apos;t just sell policies — we build personalized strategies
            that protect your family and grow your wealth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeIn}
              className="glass-card p-8 text-center hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-100 transition-colors">
                <benefit.icon className="w-8 h-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Life Insurance",
      subtitle: "Term, Whole, & Universal Life",
      features: [
        "Income replacement for your family",
        "Mortgage and debt payoff",
        "Children's education funding",
        "Estate planning benefits",
        "Cash value accumulation",
      ],
      cta: "Protect Your Family",
      highlight: false,
    },
    {
      title: "Annuities",
      subtitle: "Fixed, Variable, & Indexed",
      features: [
        "Guaranteed lifetime income",
        "Tax-deferred growth",
        "Protection from market downturns",
        "Flexible withdrawal options",
        "Legacy planning benefits",
      ],
      cta: "Secure Your Retirement",
      highlight: true,
    },
    {
      title: "Health & Supplemental",
      subtitle: "Health, Disability, & Long-Term Care",
      features: [
        "Comprehensive health coverage",
        "Disability income protection",
        "Long-term care planning",
        "Critical illness coverage",
        "Medicare supplement plans",
      ],
      cta: "Get Covered Today",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
            Solutions for Every Stage of Life
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you&apos;re starting a family, planning for retirement, or
            protecting your business — we have the right solution.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              className={`rounded-2xl p-8 ${
                service.highlight
                  ? "bg-brand-500 text-white shadow-2xl scale-105"
                  : "bg-white shadow-xl"
              }`}
            >
              {service.highlight && (
                <span className="inline-block bg-gold-400 text-brand-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
              <p
                className={`text-sm mb-6 ${
                  service.highlight ? "text-blue-200" : "text-gray-500"
                }`}
              >
                {service.subtitle}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        service.highlight ? "text-green-300" : "text-green-500"
                      }`}
                    />
                    <span
                      className={
                        service.highlight ? "text-blue-50" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/quote"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  service.highlight
                    ? "bg-gold-400 text-brand-800 hover:bg-gold-500"
                    : "bg-brand-500 text-white hover:bg-brand-600"
                }`}
              >
                {service.cta} <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Tell Us About You",
      description:
        "Fill out our simple questionnaire about your coverage needs, family situation, and financial goals.",
      icon: Users,
    },
    {
      number: "02",
      title: "Get Matched",
      description:
        "Our licensed advisors analyze your needs and match you with the best insurance and annuity options available.",
      icon: Shield,
    },
    {
      number: "03",
      title: "Free Consultation",
      description:
        "Review your personalized recommendations in a no-pressure consultation — by phone, video, or in person.",
      icon: Phone,
    },
    {
      number: "04",
      title: "Get Protected",
      description:
        "Choose the plan that fits your life and budget. We handle the paperwork — you enjoy peace of mind.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
            Getting Started Is Easy
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Four simple steps to protecting your family and securing your
            financial future.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeIn} className="relative text-center">
              <div className="text-6xl font-bold text-brand-100 mb-4">
                {step.number}
              </div>
              <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mother of Three",
      quote:
        "After my husband's unexpected passing, the life insurance policy SecureHorizon helped us set up saved my family. We could keep our home and the kids stayed in their schools. I can't express how grateful I am.",
      rating: 5,
    },
    {
      name: "Robert & Linda K.",
      role: "Retired Couple",
      quote:
        "We were terrified of running out of money in retirement. Our annuity gives us $3,200/month guaranteed for life. We travel, enjoy our grandkids, and never worry about bills.",
      rating: 5,
    },
    {
      name: "James T.",
      role: "Small Business Owner",
      quote:
        "As a business owner, I needed coverage that protected both my family and my company. The team at SecureHorizon built a plan that does exactly that. Incredible service from start to finish.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Stories From Real Families
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the families
            we&apos;ve helped protect.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeIn}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-blue-300 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: "10,000+", label: "Families Protected" },
    { number: "$2.5B+", label: "In Coverage Placed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years of Experience" },
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-brand-500 to-brand-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "How much does a consultation cost?",
      a: "Absolutely nothing. Our initial consultation is 100% free with no obligation. We believe in earning your trust before earning your business.",
    },
    {
      q: "How much life insurance do I need?",
      a: "A common guideline is 10-15x your annual income, but it depends on your debts, dependents, and goals. Our advisors will help you determine the right amount during your free consultation.",
    },
    {
      q: "What's the difference between an annuity and life insurance?",
      a: "Life insurance protects your family if something happens to you. An annuity protects you by providing guaranteed income during retirement. Many clients benefit from both.",
    },
    {
      q: "How long does it take to get coverage?",
      a: "Many policies can be issued within 24-48 hours. Some life insurance policies require a brief medical exam, which typically adds 2-3 weeks to the process.",
    },
    {
      q: "Can I change my coverage later?",
      a: "Yes! Life changes, and your coverage should too. We offer annual reviews to ensure your protection keeps pace with your evolving needs.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
            Common Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeIn}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-brand-800 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </motion.div>
  );
}

function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Don&apos;t Wait Until It&apos;s Too Late
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Every day without coverage is a day your family is unprotected. Take
            2 minutes now to start building your safety net — for free.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link
              href="/quote"
              className="btn-gold inline-flex items-center gap-2 text-xl"
            >
              Start My Free Quote Now
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
          <motion.div variants={fadeIn} className="mt-8 flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Takes just 2 minutes
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Your info is 100% secure
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              No credit card required
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
