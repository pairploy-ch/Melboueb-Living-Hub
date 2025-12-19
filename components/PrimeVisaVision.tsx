"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Home, FileCheck, Briefcase, UserCheck } from "lucide-react"
import { ContactModal } from "@/components/contact"

export default function PrimeVisaVision() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+66",
    phone: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // TODO: ส่งข้อมูลไปยัง API
    alert("Thank you for your interest! Our team will contact you soon for a free consultation.")
    setIsModalOpen(false)
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+66",
      phone: "",
    })
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-[#2C5364]">Prime Visa Vision – Melbourne</h2>
            <p className="text-2xl font-bold text-[#F8AA36] mb-4 text-balance">Your Trusted Partner for Visa & Life in Melbourne</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prime Visa Vision provides professional visa consultation and personalized support for individuals planning to study, work, or live in Melbourne. From profile assessment to document preparation and visa submission, we guide you through every step with clarity and confidence.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#2C5364]">Our Melbourne-Focused Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border border-gray-200 bg-[#FAF7F2] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#F8AA36]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <FileCheck className="w-7 h-7 text-[#F8AA36]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2C5364]">Tourist Visa to Australia</h4>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-[#FAF7F2] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#F8AA36]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-7 h-7 text-[#F8AA36]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2C5364]">Student Visa for Melbourne Institutions</h4>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-[#FAF7F2] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#F8AA36]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Briefcase className="w-7 h-7 text-[#F8AA36]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2C5364]">Work & Business Visa</h4>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-[#FAF7F2] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#F8AA36]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Home className="w-7 h-7 text-[#F8AA36]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2C5364]">Long-Term & Permanent Residency (PR)</h4>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#2C5364]">Why Choose Prime Visa Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F8AA36]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[#F8AA36]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-[#2C5364]">Expert consultants with Australia-focused experience</h4>
                      <p className="text-gray-600 leading-relaxed">Our team specializes in Australian visa processes and regulations.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F8AA36]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-6 h-6 text-[#F8AA36]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-[#2C5364]">Personalized guidance based on your profile</h4>
                      <p className="text-gray-600 leading-relaxed">Every case is unique, and we tailor our approach to your specific situation.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F8AA36]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-6 h-6 text-[#F8AA36]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-[#2C5364]">End-to-end support from consultation to visa outcome</h4>
                      <p className="text-gray-600 leading-relaxed">We're with you at every stage of your visa journey.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F8AA36]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#F8AA36]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-[#2C5364]">Transparent, reliable, and client-focused service</h4>
                      <p className="text-gray-600 leading-relaxed">Clear communication and honest advice you can trust.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6 font-medium">Helping you start your journey in Melbourne with confidence.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#F8AA36] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#e69a2e] transition-colors"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </>
  )
}