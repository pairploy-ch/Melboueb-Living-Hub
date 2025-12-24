import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext" // นำเข้า Context

export function SignatureSupportPackage() {
  const { t } = useLanguage() // ดึงฟังก์ชัน t ออกมาใช้งาน
  const pkg = t.signaturePackage // ดึงข้อมูล signaturePackage จาก locales

  return (
    <section className="py-20 bg-[#faf7f2]" id="signature-package">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            {/* ดึง eyebrow จากไฟล์ภาษา */}
            <span className="text-sm font-medium tracking-wider uppercase text-[#FFC466]">
              {pkg.eyebrow}
            </span>
          </div>
          {/* ดึง title จากไฟล์ภาษา */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#2c5364]">
            {pkg.title}
          </h2>
          <div className="h-1 w-32 bg-[#FFC466] mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* เปลี่ยนจาก steps.map เป็น pkg.steps.map */}
          {pkg.steps.map((step: any) => (
            <Card
              key={step.number}
              className="bg-white/10 border-[#ffc466]/50 hover:border-[#FFC466] transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#FFC466] mb-2">0{step.number}.</div>
                  <h3 className="text-xl font-semibold text-[#2c5364] leading-tight">
                    {step.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {step.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#FFC466] flex-shrink-0" />
                      <span className="text-[#2c5364]/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}