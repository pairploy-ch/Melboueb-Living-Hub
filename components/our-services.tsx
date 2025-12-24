import { GraduationCap, FileText, Plane, UserCheck, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

export function OurServices() {
  const {  t } = useLanguage()
  return (
    <section id="our-service" className="py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2c5364]">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{t.services.items.advisory.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
              {t.services.items.advisory.desc}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{t.services.items.lease.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.services.items.lease.desc}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <Plane className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{t.services.items.pickup.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.services.items.pickup.desc}
              </p>
            </CardContent>
          </Card>

      
        </div>
      </div>
    </section>
  )
}
