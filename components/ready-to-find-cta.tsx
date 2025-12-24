"use client" // ต้องใส่เพราะมีการใช้ Context/Hook

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext" // นำเข้า Hook

export function ReadyToFindCTA() {
  const { t } = useLanguage() // เรียกใช้ฟังก์ชัน t
  const cta = t.cta // อ้างอิงถึงข้อมูล cta ใน locales

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-yl.jpg')" }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900">
          {cta.title} {/* ใช้ภาษาจาก locales */}
        </h2>
        <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto text-gray-800">
          {cta.subtitle} {/* ใช้ภาษาจาก locales */}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-[#5B9BD5] text-white hover:bg-[#4A8BC2] font-semibold shadow-lg">
            <Link href="/contact">
              {cta.getStarted} {/* ใช้ภาษาจาก locales */}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-white border-2 border-[#2C5364] text-[#2C5364] hover:bg-gray-50 font-semibold shadow-lg"
          >
            <Link href="#Accommodation">
              {cta.browse} {/* ใช้ภาษาจาก locales */}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}