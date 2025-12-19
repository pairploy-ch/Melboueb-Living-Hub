"use client"

import { X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  formData: {
    fullName: string
    email: string
    countryCode: string
    phone: string
  }
  onInputChange: (field: string, value: string) => void
  onSubmit: () => void
}

export function ContactModal({
  isOpen,
  onClose,
  formData,
  onInputChange,
  onSubmit,
}: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                You've made a great choice
              </h2>
              <p className="text-sm text-gray-500">Get in touch with us</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => onInputChange("fullName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => onInputChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => onInputChange("countryCode", e.target.value)}
                  className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] bg-white"
                >
                  <option value="+66">🇹🇭 +66</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+86">🇨🇳 +86</option>
                </select>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => onInputChange("phone", e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={onSubmit}
              className="w-full py-4 bg-[#5B9BD5] text-white font-semibold rounded-lg transition-colors shadow-lg text-lg hover:bg-[#4A8BC2]"
            >
              Contact Us
            </button>

            {/* Terms & Privacy */}
            <p className="text-xs text-center text-gray-500">
              By submitting, you agree to our{" "}
              <a
                href="#"
                className="text-[#5B9BD5] underline hover:text-[#4A8BC2]"
              >
                Terms & Conditions
              </a>
              , and{" "}
              <a
                href="#"
                className="text-[#5B9BD5] underline hover:text-[#4A8BC2]"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}