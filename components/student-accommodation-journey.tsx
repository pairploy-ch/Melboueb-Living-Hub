import { MessageCircle, FileCheck, Building2, SearchCheck, Users, Handshake, Rocket, Smile } from "lucide-react"

export function StudentAccommodationJourney() {
  const journeySteps = [
    {
      date: "Step 1",
      title: "Friendly Consultation",
      description: "Let's talk about study, lifestyle, and arrival plan.",
      icon: MessageCircle,
    },
    {
      date: "Step 2",
      title: "Visa & Documents Check",
      description: "We review your visa and documents to ensure a smooth and compliant rental process.",
      icon: FileCheck,
    },
    {
      date: "Step 3",
      title: "Verified Home Options",
      description: "We carefully select safe, legal, and trusted homes close to your university and transport.",
      icon: Building2,
    },
    {
      date: "Step 4",
      title: "Inspection & Choice",
      description:
        "We check the property condition and explain each option clearly, so you can choose with confidence.",
      icon: SearchCheck,
    },
    {
      date: "Step 5",
      title: "Lease Explained Simply",
      description: "We explain the rental agreement in clear, simple terms — no confusing legal language.",
      icon: Users,
    },
    {
      date: "Step 6",
      title: "Application & Approval",
      description: "We prepare and submit your rental application professionally to secure the property.",
      icon: Handshake,
    },
    {
      date: "Step 7",
      title: "Pre-Arrival Ready",
      description: "We confirm your move-in date, guide you through payments, and arrange key collection.",
      icon: Rocket,
    },
    {
      date: "Final Step",
      title: "Arrival & Move-in",
      description: "Welcome to your new home! We're here to support you as you settle into Melbourne.",
      icon: Smile,
    },
  ]

  return (
    <section className="py-20 bg-">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Title */}
          <div>
            <p className="text-[#5B9BD5] text-sm font-medium mb-4 uppercase tracking-wide">From first contact to a happy home in Melbourne, Australia</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Student Accommodation Journey
            </h2>
          </div>

          {/* Right side - Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-[#5B9BD5]/30" />

            {/* Timeline items */}
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Icon circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#5B9BD5]/10 flex items-center justify-center flex-shrink-0 border-2 border-[#5B9BD5]">
                    <step.icon className="w-6 h-6 text-[#5B9BD5]" />
                  </div>

                  {/* Content */}
                  <div className="pt-1 flex-1">
                    <p className="text-[#FFC466] text-sm font-semibold mb-2">{step.date}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
