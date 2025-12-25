import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Melboueb Living Hub</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Expert accommodation support for international students in Melbourne
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/accommodation"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Popular Areas
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/how-we-help"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  How We Help
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <Link
                  href="/for-parents"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  For Parents
                </Link>
              </li> */}
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Student Accommodation Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@melbournelivinghubs.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">WhatsApp 0466126095</span>
              </li>
              {/* <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Melbourne, VIC</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Melboueb Living Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
