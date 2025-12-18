import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function SignatureSupportPackage() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      items: [
        "Needs assessment and preferences",
        "Budget planning and options",
        "Area recommendations",
        "Timeline and expectations",
      ],
    },
    {
      number: 2,
      title: "Property Search & Shortlisting",
      items: [
        "Curated property list based on your needs",
        "Scam verification and legitimacy checks",
        "Detailed property information",
        "Pros and cons analysis",
      ],
    },
    {
      number: 3,
      title: "Viewing & Inspection",
      items: [
        "Virtual or in-person viewing assistance",
        "What to look for guidance",
        "Questions to ask landlords",
        "Red flag identification",
      ],
    },
    {
      number: 4,
      title: "Application Support",
      items: [
        "Lease agreement review",
        "Document preparation",
        "Rights and responsibilities explained",
        "Payment and bond advice",
      ],
    },
    {
      number: 5,
      title: "Move-in & Settlement",
      items: [
        "Move-in checklist and condition report",
        "Utility setup guidance",
        "Local area orientation",
        "Ongoing support access",
      ],
    },
  ]

  return (
    <section className="py-20 bg-[#faf7f2]" id="signature-package">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
        
            <span className="text-sm font-medium tracking-wider uppercase text-[#FFC466]">A complete, guided journey from first contact to settling into your Melbourne accommodation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#2c5364]">Our Signature Support Package</h2>
          <div className="h-1 w-32 bg-[#FFC466] mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="bg-white/10 border-[#ffc466]/50 hover:border-[#FFC466] transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#FFC466] mb-2">0{step.number}.</div>
                  <h3 className="text-xl font-semibold text-[#2c5364] leading-tight">{step.title}</h3>
                </div>

                <ul className="space-y-3">
                  {step.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#FFC466] flex-shrink-0" />
                      <span className="text-[#2c5364]/90 leading-relaxed">{item}</span>
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
