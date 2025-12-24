"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Home, FileCheck, Briefcase, UserCheck } from "lucide-react"
import { ContactModal } from "@/components/contact"
import { useLanguage } from "@/contexts/LanguageContext" // 1. นำเข้า Context

export default function PrimeVisaVision() {
  const { t } = useLanguage() // 2. ดึงฟังก์ชัน t มาใช้งาน
  const visa = t.visa // อ้างอิง Key 'visa' จากไฟล์ locales

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+66",
    phone: "",
  })

  // แมปไอคอนสำหรับส่วน Services (ลำดับต้องตรงกับใน locales)
  const serviceIcons = [FileCheck, Users, Briefcase, Home]
  
  // แมปไอคอนสำหรับส่วน Features/Why Choose Us (ลำดับต้องตรงกับใน locales)
  const featureIcons = [Shield, UserCheck, FileCheck, Users]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // ใช้ข้อความแจ้งเตือนจาก locales (ถ้ามี) หรือข้อความกลาง
    alert(t.common.thankYou || "Thank you!")
    setIsModalOpen(false)
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
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-[#2C5364]">
              {visa.title}
            </h2>
            <p className="text-2xl font-bold text-[#F8AA36] mb-4 text-balance">
              {visa.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {visa.description}
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#2C5364]">
              {visa.servicesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visa.services.map((service: any, index: number) => {
                const Icon = serviceIcons[index]
                return (
                  <Card key={index} className="border border-gray-200 bg-[#FAF7F2] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-[#F8AA36]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Icon className="w-7 h-7 text-[#F8AA36]" />
                      </div>
                      <h4 className="text-lg font-bold text-[#2C5364]">{service.title}</h4>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#2C5364]">
              {visa.whyTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visa.features.map((feature: any, index: number) => {
                const Icon = featureIcons[index]
                return (
                  <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#F8AA36]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#F8AA36]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2 text-[#2C5364]">{feature.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6 font-medium">
              {visa.ctaText}
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#F8AA36] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#e69a2e] transition-colors"
            >
              {visa.button}
            </button>
          </div>
        </div>
      </section>

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