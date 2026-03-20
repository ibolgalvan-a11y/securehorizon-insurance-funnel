"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-800 to-brand-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeIn}>
            <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-gold-400" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            You&apos;re One Step Closer to Protection!
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-400 mb-12 max-w-xl mx-auto"
          >
            Thank you for trusting us with your information. A licensed advisor
            will reach out within 24 hours with your personalized recommendations.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-brand-700 rounded-2xl shadow-xl p-8 sm:p-10 border border-gold-500/10 mb-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h2
            variants={fadeIn}
            className="text-xl font-bold text-white mb-6"
          >
            What Happens Next?
          </motion.h2>

          <div className="space-y-6">
            <motion.div variants={fadeIn} className="flex gap-4">
              <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Within 24 Hours
                </h3>
                <p className="text-gray-400">
                  A licensed insurance advisor reviews your information and
                  prepares personalized coverage options tailored to your needs
                  and budget.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
              <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Free Consultation Call
                </h3>
                <p className="text-gray-400">
                  We&apos;ll schedule a convenient time to walk you through your
                  options — no pressure, no sales pitch. Just honest advice.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
              <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Detailed Proposal
                </h3>
                <p className="text-gray-400">
                  You&apos;ll receive a clear, easy-to-understand proposal with
                  side-by-side comparisons so you can choose with confidence.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
              <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Get Protected</h3>
                <p className="text-gray-400">
                  Once you choose your plan, we handle all the paperwork. Many
                  clients get coverage in as little as 24-48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Urgency / Value reminder */}
        <motion.div
          className="bg-gold-500/10 rounded-2xl p-8 text-center border border-gold-500/20 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gold-300 font-medium text-lg">
            Did you know? The average family is underinsured by{" "}
            <strong className="text-gold-400">$200,000</strong>. You&apos;ve taken the most important step
            — getting started.
          </p>
        </motion.div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            Back to Homepage
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
