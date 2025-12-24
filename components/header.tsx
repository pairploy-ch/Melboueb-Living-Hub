"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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

    alert(t.common.thankYou)

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
      <header className="bg-[#FAF7F2] sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/melbourne-living-hub-logo.png"
                alt="Melbourne Living Hub - SPW Associate Pty Ltd"
                width={200}
                height={200}
                className="h-20 w-auto"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="md:flex items-center gap-8">
              <Link
                href="#accommodation"
                className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors font-medium"
              >
                {t.header.accommodation}
              </Link>

              <Link
                href="#our-service"
                className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors font-medium"
              >
                {t.header.ourService}
              </Link>

              <Link
                href="#signature-package"
                className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors font-medium"
              >
                {t.header.signaturePackage}
              </Link>
            </nav>

            {/* Language Selector & Contact Button */}
            <div className="hidden md:flex items-center gap-4">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[100px] bg-white border-[#D4A574] focus:ring-[#D4A574]">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="th">TH</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F8AA36] hover:bg-[#E09A26] text-white font-semibold px-8 rounded-lg"
              >
                {t.common.contactUs}
              </Button>
            </div>
          </div>
        </div>
      </header>

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
