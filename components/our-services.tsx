import { GraduationCap, FileText, Plane, UserCheck, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function OurServices() {
  return (
    <section id="our-service" className="py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2c5364]">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive support for international students throughout their accommodation journey in Melbourne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Student Accommodation Advisory</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expert guidance to help you find the perfect student accommodation that matches your budget,
                preferences, and university location.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Lease & Rental Process Guidance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Navigate the Australian rental process with confidence. We help you understand contracts, rights, and
                responsibilities.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <Plane className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Airport Pick-up & Arrival Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Start your Melbourne journey smoothly with our airport pick-up service and assistance settling into your
                new home.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <UserCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">After-Move-In & Agent Liaison</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ongoing support after you move in. We communicate with landlords and agents on your behalf for any
                issues or concerns.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Long-Term Stay Planning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Planning to stay in Australia long-term? We help you strategize your accommodation needs for extended
                periods and future transitions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
