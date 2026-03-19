"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  CheckCircle2,
  Lock,
  User,
  Heart,
  DollarSign,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  // Step 1: Coverage Interest
  coverageTypes: string[];
  primaryGoal: string;
  // Step 2: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Step 3: About You
  age: string;
  maritalStatus: string;
  dependents: string;
  employmentStatus: string;
  // Step 4: Needs & Budget
  annualIncome: string;
  currentCoverage: string;
  budgetRange: string;
  timeframe: string;
  additionalNotes: string;
};

const initialForm: FormData = {
  coverageTypes: [],
  primaryGoal: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  maritalStatus: "",
  dependents: "",
  employmentStatus: "",
  annualIncome: "",
  currentCoverage: "",
  budgetRange: "",
  timeframe: "",
  additionalNotes: "",
};

const steps = [
  { label: "Coverage", icon: Shield },
  { label: "Contact", icon: User },
  { label: "About You", icon: Heart },
  { label: "Needs", icon: DollarSign },
];

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const toggleCoverageType = (type: string) => {
    setForm((prev) => ({
      ...prev,
      coverageTypes: prev.coverageTypes.includes(type)
        ? prev.coverageTypes.filter((t) => t !== type)
        : [...prev.coverageTypes, type],
    }));
    setErrors((prev) => ({ ...prev, coverageTypes: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (form.coverageTypes.length === 0)
        newErrors.coverageTypes = "Please select at least one coverage type";
      if (!form.primaryGoal)
        newErrors.primaryGoal = "Please select your primary goal";
    }

    if (step === 1) {
      if (!form.firstName.trim()) newErrors.firstName = "First name is required";
      if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!form.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        newErrors.email = "Please enter a valid email";
      if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (!form.age) newErrors.age = "Please select your age range";
      if (!form.maritalStatus)
        newErrors.maritalStatus = "Please select your marital status";
    }

    if (step === 3) {
      if (!form.annualIncome)
        newErrors.annualIncome = "Please select your income range";
      if (!form.timeframe) newErrors.timeframe = "Please select a timeframe";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-3">
            Get Your Free Personalized Quote
          </h1>
          <p className="text-gray-600 text-lg">
            Answer a few quick questions and we&apos;ll match you with the best
            coverage options.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    i <= step
                      ? "bg-brand-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {i < step ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <s.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    i <= step ? "text-brand-500" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-12 sm:w-20 h-0.5 mx-2 mb-6 ${
                    i < step ? "bg-brand-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && (
                <Step1
                  form={form}
                  errors={errors}
                  toggleCoverageType={toggleCoverageType}
                  updateField={updateField}
                />
              )}
              {step === 1 && (
                <Step2 form={form} errors={errors} updateField={updateField} />
              )}
              {step === 2 && (
                <Step3 form={form} errors={errors} updateField={updateField} />
              )}
              {step === 3 && (
                <Step4 form={form} errors={errors} updateField={updateField} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
            {step > 0 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-500 hover:text-brand-500 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button onClick={handleNext} className="btn-primary flex items-center gap-2">
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-gold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Get My Free Quote
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-400 text-sm">
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            256-bit SSL Encrypted
          </span>
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            We never sell your data
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Step Components ---------- */

function Step1({
  form,
  errors,
  toggleCoverageType,
  updateField,
}: {
  form: FormData;
  errors: Record<string, string>;
  toggleCoverageType: (type: string) => void;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  const coverageOptions = [
    { value: "life", label: "Life Insurance", emoji: "🛡️" },
    { value: "annuity", label: "Annuities", emoji: "📈" },
  ];

  const goals = [
    "Protect my family financially",
    "Create guaranteed retirement income",
    "Build tax-advantaged savings",
    "Replace my income if I can't work",
    "Plan for long-term care needs",
    "I'm not sure — I need guidance",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-800 mb-2">
        What Coverage Are You Interested In?
      </h2>
      <p className="text-gray-500 mb-8">Select all that apply</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {coverageOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => toggleCoverageType(opt.value)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              form.coverageTypes.includes(opt.value)
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-gray-200 hover:border-gray-300 text-gray-600"
            }`}
          >
            <span className="text-2xl block mb-1">{opt.emoji}</span>
            <span className="text-sm font-medium">{opt.label}</span>
          </button>
        ))}
      </div>
      {errors.coverageTypes && (
        <p className="text-red-500 text-sm mb-4">{errors.coverageTypes}</p>
      )}

      <h3 className="text-lg font-semibold text-brand-800 mb-4">
        What&apos;s your primary goal?
      </h3>
      <div className="space-y-3">
        {goals.map((goal) => (
          <label
            key={goal}
            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              form.primaryGoal === goal
                ? "border-brand-500 bg-brand-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="primaryGoal"
              value={goal}
              checked={form.primaryGoal === goal}
              onChange={(e) => updateField("primaryGoal", e.target.value)}
              className="w-4 h-4 text-brand-500"
            />
            <span className="text-gray-700 font-medium">{goal}</span>
          </label>
        ))}
      </div>
      {errors.primaryGoal && (
        <p className="text-red-500 text-sm mt-2">{errors.primaryGoal}</p>
      )}
    </div>
  );
}

function Step2({
  form,
  errors,
  updateField,
}: {
  form: FormData;
  errors: Record<string, string>;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-800 mb-2">
        How Can We Reach You?
      </h2>
      <p className="text-gray-500 mb-8">
        We&apos;ll use this info to send your personalized quote
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">First Name *</label>
          <input
            type="text"
            className="input-field"
            placeholder="John"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className="form-label">Last Name *</label>
          <input
            type="text"
            className="input-field"
            placeholder="Smith"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
        <div>
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            className="input-field"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            className="input-field"
            placeholder="(555) 123-4567"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Step3({
  form,
  errors,
  updateField,
}: {
  form: FormData;
  errors: Record<string, string>;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-800 mb-2">
        Tell Us About Yourself
      </h2>
      <p className="text-gray-500 mb-8">
        This helps us recommend the most relevant options for your situation
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Age Range *</label>
          <select
            className="input-field"
            value={form.age}
            onChange={(e) => updateField("age", e.target.value)}
          >
            <option value="">Select age range</option>
            <option value="18-25">18 - 25</option>
            <option value="26-35">26 - 35</option>
            <option value="36-45">36 - 45</option>
            <option value="46-55">46 - 55</option>
            <option value="56-65">56 - 65</option>
            <option value="65+">65+</option>
          </select>
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>

        <div>
          <label className="form-label">Marital Status *</label>
          <select
            className="input-field"
            value={form.maritalStatus}
            onChange={(e) => updateField("maritalStatus", e.target.value)}
          >
            <option value="">Select status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
            <option value="domestic-partner">Domestic Partner</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-500 text-sm mt-1">{errors.maritalStatus}</p>
          )}
        </div>

        <div>
          <label className="form-label">Number of Dependents</label>
          <select
            className="input-field"
            value={form.dependents}
            onChange={(e) => updateField("dependents", e.target.value)}
          >
            <option value="">Select</option>
            <option value="0">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4 or more</option>
          </select>
        </div>

        <div>
          <label className="form-label">Employment Status</label>
          <select
            className="input-field"
            value={form.employmentStatus}
            onChange={(e) => updateField("employmentStatus", e.target.value)}
          >
            <option value="">Select</option>
            <option value="employed">Employed Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="self-employed">Self-Employed</option>
            <option value="retired">Retired</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function Step4({
  form,
  errors,
  updateField,
}: {
  form: FormData;
  errors: Record<string, string>;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-800 mb-2">
        Your Needs & Preferences
      </h2>
      <p className="text-gray-500 mb-8">
        Almost done! This helps us tailor your recommendations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Annual Household Income *</label>
          <select
            className="input-field"
            value={form.annualIncome}
            onChange={(e) => updateField("annualIncome", e.target.value)}
          >
            <option value="">Select range</option>
            <option value="under-30k">Under $30,000</option>
            <option value="30k-50k">$30,000 - $50,000</option>
            <option value="50k-75k">$50,000 - $75,000</option>
            <option value="75k-100k">$75,000 - $100,000</option>
            <option value="100k-150k">$100,000 - $150,000</option>
            <option value="150k-250k">$150,000 - $250,000</option>
            <option value="250k+">$250,000+</option>
          </select>
          {errors.annualIncome && (
            <p className="text-red-500 text-sm mt-1">{errors.annualIncome}</p>
          )}
        </div>

        <div>
          <label className="form-label">Do You Have Current Coverage?</label>
          <select
            className="input-field"
            value={form.currentCoverage}
            onChange={(e) => updateField("currentCoverage", e.target.value)}
          >
            <option value="">Select</option>
            <option value="none">No coverage at all</option>
            <option value="employer">Through employer only</option>
            <option value="some">Some personal coverage</option>
            <option value="comprehensive">Comprehensive coverage</option>
            <option value="unsure">Not sure</option>
          </select>
        </div>

        <div>
          <label className="form-label">Monthly Budget for Coverage</label>
          <select
            className="input-field"
            value={form.budgetRange}
            onChange={(e) => updateField("budgetRange", e.target.value)}
          >
            <option value="">Select range</option>
            <option value="under-100">Under $100/month</option>
            <option value="100-250">$100 - $250/month</option>
            <option value="250-500">$250 - $500/month</option>
            <option value="500-1000">$500 - $1,000/month</option>
            <option value="1000+">$1,000+/month</option>
            <option value="flexible">Flexible / Not sure</option>
          </select>
        </div>

        <div>
          <label className="form-label">When Do You Need Coverage? *</label>
          <select
            className="input-field"
            value={form.timeframe}
            onChange={(e) => updateField("timeframe", e.target.value)}
          >
            <option value="">Select timeframe</option>
            <option value="asap">As soon as possible</option>
            <option value="1-month">Within the next month</option>
            <option value="3-months">Within 3 months</option>
            <option value="6-months">Within 6 months</option>
            <option value="exploring">Just exploring options</option>
          </select>
          {errors.timeframe && (
            <p className="text-red-500 text-sm mt-1">{errors.timeframe}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label className="form-label">
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          className="input-field min-h-[100px] resize-y"
          placeholder="Tell us about any specific concerns, health conditions, or questions you have..."
          value={form.additionalNotes}
          onChange={(e) => updateField("additionalNotes", e.target.value)}
        />
      </div>
    </div>
  );
}
