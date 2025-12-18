import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Home } from "lucide-react"

export function WhyLivingHub() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-[#2C5364]">Why Melbourne Living Hub?</h2>
          <p className="text-2xl font-bold text-[#F8AA36] mb-4 text-balance">We help you live, not just stay.</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To ensure students are not left to navigate Melbourne alone, and families can trust that someone on the
            ground is supporting their child every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#F8AA36]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-[#F8AA36]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C5364]">Safe & Verified</h3>
              <p className="text-gray-600 leading-relaxed">
                We help you avoid rental scams and ensure you're choosing legitimate, safe accommodation options.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#F8AA36]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-[#F8AA36]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C5364]">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team understands the Melbourne rental market and guides you through every step of the process.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#F8AA36]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-[#F8AA36]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C5364]">Right Match</h3>
              <p className="text-gray-600 leading-relaxed">
                We help match you with accommodation that fits your needs, budget, and lifestyle preferences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
