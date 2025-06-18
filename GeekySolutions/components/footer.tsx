import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-700"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="2" x2="9" y2="4"></line>
                  <line x1="15" y1="2" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="22"></line>
                  <line x1="15" y1="20" x2="15" y2="22"></line>
                  <line x1="20" y1="9" x2="22" y2="9"></line>
                  <line x1="20" y1="14" x2="22" y2="14"></line>
                  <line x1="2" y1="9" x2="4" y2="9"></line>
                  <line x1="2" y1="14" x2="4" y2="14"></line>
                </svg>
                <span>GeekySolutions</span>
              </Link>
              <p className="text-muted-foreground">
                Professional tech services and solutions for businesses of all sizes. From web development to printer
                support, we've got you covered.
              </p>
              <div className="mt-2 flex gap-4">
                <Link href="#" target="_blank" rel="noreferrer">
                  <Facebook
                    className="h-5 w-5 text-muted-foreground transition-colors hover:text-blue-700"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" target="_blank" rel="noreferrer">
                  <Twitter
                    className="h-5 w-5 text-muted-foreground transition-colors hover:text-blue-700"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/geeky_solutions/" target="_blank" rel="noreferrer">
                  <Instagram
                    className="h-5 w-5 text-muted-foreground transition-colors hover:text-blue-700"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="" target="_blank" rel="noreferrer">
                  <Linkedin
                    className="h-5 w-5 text-muted-foreground transition-colors hover:text-blue-700"
                    aria-hidden="true"
                  />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              {/*<li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                  Shop
                </Link>
              </li>*/}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-development" className="text-muted-foreground hover:text-foreground">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#app-development" className="text-muted-foreground hover:text-foreground">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services#printer-support" className="text-muted-foreground hover:text-foreground">
                  Printer Support
                </Link>
              </li>
              <li>
                <Link href="/services#networking" className="text-muted-foreground hover:text-foreground">
                  Network Troubleshooting
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="text-muted-foreground hover:text-foreground">
                  Digital Marketing (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/services#it-equipment" className="text-muted-foreground hover:text-foreground">
                  IT Procurement & Sales (Coming Soon)
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 text-blue-700" />
                <span className="text-muted-foreground">
                  Krugersdorp
                  <br />
                  Johannesburg, Gauteng
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-700" />
                <Link href="tel:+11234567890" className="text-muted-foreground hover:text-foreground">
                  (060) 660-3409
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-700" />
                <Link href="mailto:info@geekysolutions.co.za" className="text-muted-foreground hover:text-foreground">
                  info@geekysolutions.co.za
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GeekySolutions. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
