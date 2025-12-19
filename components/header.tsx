"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact"

export function Header() {
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
    // TODO: ทำการส่งข้อมูลไปยัง API หรือ Database
    alert("Thank you for contacting us! We will get back to you soon.")
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
              <Link href="#Accommodation" className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors font-medium">
                Accommodation
              </Link>
          
              <Link href="#our-service" className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors font-medium">
                Our Service
              </Link>
              <Link
                href="#signature-package"
                className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors font-medium"
              >
                Signature Package
              </Link>
            </nav>

            {/* Contact Button */}
            <Button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:inline-flex bg-[#F8AA36] hover:bg-[#E09A26] text-white font-semibold px-8 rounded-lg"
            >
              Contact Us
            </Button>
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