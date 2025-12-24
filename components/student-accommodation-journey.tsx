import {
  MessageCircle,
  FileCheck,
  Building2,
  SearchCheck,
  Users,
  Handshake,
  Rocket,
  Smile,
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function StudentAccommodationJourney() {
  const { t } = useLanguage()
  const journey = t.journey

  const icons = [
    MessageCircle,
    FileCheck,
    Building2,
    SearchCheck,
    Users,
    Handshake,
    Rocket,
    Smile,
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[#5B9BD5] text-sm font-medium mb-4 uppercase tracking-wide">
              {journey.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {journey.title}
            </h2>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-[#5B9BD5]/30" />

            <div className="space-y-12">
              {journey.steps.map((step, index) => {
                const Icon = icons[index] ?? Smile

                return (
                  <div key={index} className="relative flex gap-6">
                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#5B9BD5]/10 flex items-center justify-center flex-shrink-0 border-2 border-[#5B9BD5]">
                      <Icon className="w-6 h-6 text-[#5B9BD5]" />
                    </div>

                    {/* Content */}
                    <div className="pt-1 flex-1">
                      <p className="text-[#FFC466] text-sm font-semibold mb-2">
                        {step.step}
                      </p>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
