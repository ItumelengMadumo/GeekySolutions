import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Code, HardDrive, Laptop, Monitor, Printer, Smartphone, TrendingUp, Network } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                Service Packages
              </div>
              <h1 className="text-3xl font-bold tracking-tighter text-blue-800 sm:text-4xl md:text-5xl">
                Professional Tech Service Packages
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Choose from our carefully crafted service packages designed to meet your specific technology needs. Each
                package is available in three tiers to fit your budget and requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Get Your Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Laptop & Desktop Services */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Laptop className="h-6 w-6 text-blue-700" />
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                  Laptop & Desktop Services
                </h2>
              </div>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Comprehensive computer repair, upgrade, and diagnostic services for both laptops and desktop computers.
                From hardware failures to performance optimization, we've got you covered.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-blue-700" />
                  Basic Diagnostic
                </CardTitle>
                <CardDescription>Essential computer diagnostics and basic repairs</CardDescription>
                <div className="text-2xl font-bold text-blue-700">R450</div>
                <p className="text-sm text-gray-600">Per diagnostic session</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Hardware diagnostic scan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Software issue identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic virus/malware removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Performance assessment report</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic system cleanup</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Turnaround: 1-2 days</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Basic</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Professional Package */}
            <Card className="relative border-2 border-amber-600">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-amber-600" />
                  Professional Repair
                </CardTitle>
                <CardDescription>Complete repair and upgrade services</CardDescription>
                <div className="text-2xl font-bold text-amber-600">R1,250</div>
                <p className="text-sm text-gray-600">Includes parts up to R500 value</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Basic package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Hardware component replacement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">RAM & SSD upgrades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Operating system reinstallation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Data backup & recovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">30-day warranty on repairs</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Turnaround: 2-4 days</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Choose Professional</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Premium Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-blue-700" />
                  Premium Complete
                </CardTitle>
                <CardDescription>Full system overhaul and optimization</CardDescription>
                <div className="text-2xl font-bold text-blue-700">R2,500</div>
                <p className="text-sm text-gray-600">Includes parts up to R1,200 value</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Professional package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Complete system optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Premium antivirus installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Software suite installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">3-month technical support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">90-day warranty on all work</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Turnaround: 3-5 days</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Premium</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Printer Services */}
      <section className="bg-blue-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Printer className="h-6 w-6 text-blue-700" />
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                  Toner-Based Printer Services
                </h2>
              </div>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Specialized repair and maintenance services for toner-based printers, with expertise in{" "}
                <strong>Konica Minolta</strong> and <strong>Olivetti</strong> brands. From routine maintenance to
                complex repairs, we keep your printers running smoothly.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Package */}
            <Card className="relative bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Printer className="h-5 w-5 text-blue-700" />
                  Basic Maintenance
                </CardTitle>
                <CardDescription>Essential printer maintenance and diagnostics</CardDescription>
                <div className="text-2xl font-bold text-blue-700">R350</div>
                <p className="text-sm text-gray-600">Per service visit</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Printer diagnostic assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic cleaning & maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Toner cartridge replacement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Print quality optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic troubleshooting</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Response: Same day</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Basic</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Professional Package */}
            <Card className="relative border-2 border-amber-600 bg-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white">Recommended</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Printer className="h-5 w-5 text-amber-600" />
                  Professional Service
                </CardTitle>
                <CardDescription>Complete repair and parts replacement</CardDescription>
                <div className="text-2xl font-bold text-amber-600">R850</div>
                <p className="text-sm text-gray-600">Includes parts up to R400 value</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Basic package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Component replacement & repair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Drum unit servicing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Fuser unit maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Network connectivity setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">30-day service warranty</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Response: 4-hour priority</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Choose Professional</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Premium Package */}
            <Card className="relative bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Printer className="h-5 w-5 text-blue-700" />
                  Premium SLA
                </CardTitle>
                <CardDescription>Complete service level agreement</CardDescription>
                <div className="text-2xl font-bold text-blue-700">R1,500</div>
                <p className="text-sm text-gray-600">Monthly SLA contract</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Professional package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Monthly preventive maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">All toner & parts included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">24/7 emergency support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Guaranteed 2-hour response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Loaner printer during repairs</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Response: 2-hour guarantee</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Premium SLA</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Website & App Development */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Code className="h-6 w-6 text-blue-700" />
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                  Website & App Development
                </h2>
              </div>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Professional web and mobile application development services. From simple business websites to complex
                web applications, we create digital solutions that drive your business forward.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-700" />
                  Starter Website
                </CardTitle>
                <CardDescription>Professional business website</CardDescription>
                <div className="text-2xl font-bold text-blue-700">R4,500</div>
                <p className="text-sm text-gray-600">One-time setup fee</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">5-page responsive website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Mobile-friendly design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Contact form integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Google Analytics setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">3 months free hosting</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Delivery: 2-3 weeks</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Starter</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Professional Package */}
            <Card className="relative border-2 border-amber-600">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white">Best Value</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-amber-600" />
                  Business Pro
                </CardTitle>
                <CardDescription>Advanced website with CMS</CardDescription>
                <div className="text-2xl font-bold text-amber-600">R8,500</div>
                <p className="text-sm text-gray-600">One-time setup fee</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Starter package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Up to 15 pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Content Management System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">E-commerce functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Social media integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">6 months free hosting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">3 months free maintenance</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Delivery: 4-6 weeks</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Choose Business Pro</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Premium Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-700" />
                  Enterprise Solution
                </CardTitle>
                <CardDescription>Custom web application development</CardDescription>
                <div className="text-2xl font-bold text-blue-700">R15,000+</div>
                <p className="text-sm text-gray-600">Custom quote based on requirements</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Business Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Custom web application</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Database integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">User authentication system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">API development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">12 months hosting included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">6 months free maintenance</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Delivery: 8-12 weeks</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Get Custom Quote</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="bg-blue-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-6 w-6 text-blue-700" />
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                  Digital Marketing Services
                </h2>
              </div>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Comprehensive digital marketing solutions to grow your online presence and reach more customers. From
                SEO to social media management, we help your business thrive in the digital landscape.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Package */}
            <Card className="relative bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-700" />
                  Digital Starter
                </CardTitle>
                <CardDescription>Essential online presence setup</CardDescription>
                <div className="text-2xl font-bold text-blue-700">R1,500</div>
                <p className="text-sm text-gray-600">Per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Google Business Profile setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Social media account setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">2 social media posts per week</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Monthly performance report</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">3-month minimum</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Digital Starter</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Professional Package */}
            <Card className="relative border-2 border-amber-600 bg-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-amber-600" />
                  Growth Marketing
                </CardTitle>
                <CardDescription>Comprehensive marketing strategy</CardDescription>
                <div className="text-2xl font-bold text-amber-600">R3,500</div>
                <p className="text-sm text-gray-600">Per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Digital Starter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Advanced SEO & keyword research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">5 social media posts per week</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Facebook & Instagram ads management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">2 blog posts per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Email marketing setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Detailed analytics reporting</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">6-month minimum</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Choose Growth Marketing</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Premium Package */}
            <Card className="relative bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-700" />
                  Enterprise Marketing
                </CardTitle>
                <CardDescription>Full-service marketing solution</CardDescription>
                <div className="text-2xl font-bold text-blue-700">R6,500</div>
                <p className="text-sm text-gray-600">Per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Growth Marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Daily social media management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Google Ads campaign management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">4 blog posts per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Video content creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Weekly strategy calls</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">12-month minimum</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Enterprise</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Procurement Services */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
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
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                  IT Procurement Services
                </h2>
              </div>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Professional IT equipment sourcing and procurement services. We help you find the right technology at
                the best prices, from laptops and desktops to networking equipment and accessories.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
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
                    className="h-5 w-5 text-blue-700"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  Basic Sourcing
                </CardTitle>
                <CardDescription>Essential equipment sourcing service</CardDescription>
                <div className="text-2xl font-bold text-blue-700">5% markup</div>
                <p className="text-sm text-gray-600">On equipment cost + R200 service fee</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Product research & recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Price comparison from 3+ suppliers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic accessories (mice, keyboards)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Standard delivery coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic setup assistance</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Delivery: 5-7 business days</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Basic</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Professional Package */}
            <Card className="relative border-2 border-amber-600">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white">Business Choice</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
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
                    className="h-5 w-5 text-amber-600"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M12 6h.01" />
                    <path d="M12 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 10h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M8 14h.01" />
                  </svg>
                  Professional Procurement
                </CardTitle>
                <CardDescription>Complete equipment sourcing & setup</CardDescription>
                <div className="text-2xl font-bold text-amber-600">8% markup</div>
                <p className="text-sm text-gray-600">On equipment cost + comprehensive service</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Basic package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Laptops, desktops & workstations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Monitors, routers & networking gear</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Complete system configuration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Software installation & licensing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">On-site delivery & setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">30-day support warranty</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Delivery: 3-5 business days</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Choose Professional</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Premium Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
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
                    className="h-5 w-5 text-blue-700"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  Enterprise Procurement
                </CardTitle>
                <CardDescription>Full-scale IT procurement management</CardDescription>
                <div className="text-2xl font-bold text-blue-700">12% markup</div>
                <p className="text-sm text-gray-600">Volume discounts + managed service</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Everything in Professional package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Bulk purchasing & volume discounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Asset management & tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Warranty management service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Dedicated procurement specialist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Priority supplier relationships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">90-day comprehensive support</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary">Delivery: 1-3 business days</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Enterprise</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Equipment Categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Equipment We Source</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Laptop className="h-6 w-6 text-blue-700" />
                </div>
                <h4 className="font-semibold">Computers</h4>
                <p className="text-sm text-gray-600">Laptops, desktops, workstations, tablets</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-blue-700" />
                </div>
                <h4 className="font-semibold">Displays</h4>
                <p className="text-sm text-gray-600">Monitors, projectors, digital displays</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Network className="h-6 w-6 text-blue-700" />
                </div>
                <h4 className="font-semibold">Networking</h4>
                <p className="text-sm text-gray-600">Routers, switches, access points, cables</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
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
                    <path d="M6 3h12l4 6-10 13L2 9l4-6z" />
                    <path d="M11 3L8 9l4 13 4-13-3-6" />
                    <path d="M2 9h20" />
                  </svg>
                </div>
                <h4 className="font-semibold">Accessories</h4>
                <p className="text-sm text-gray-600">Mice, keyboards, headsets, cables</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Enterprise Solutions */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-lg bg-gradient-to-r from-blue-50 to-amber-50 p-8 md:p-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Need a Custom Solution?</h2>
              <p className="text-gray-600 md:text-lg">
                Every business is unique. If our standard packages don't fit your specific needs, we'll create a custom
                solution tailored to your requirements and budget.
              </p>
              <div className="grid gap-4 md:grid-cols-2 mt-8">
                <div className="space-y-2">
                  <h3 className="font-semibold">Enterprise IT Support</h3>
                  <p className="text-sm text-gray-600">Comprehensive IT management for large organizations</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Multi-Location Services</h3>
                  <p className="text-sm text-gray-600">Coordinated support across multiple business locations</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Industry-Specific Solutions</h3>
                  <p className="text-sm text-gray-600">Specialized services for healthcare, legal, retail, and more</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">24/7 Critical Support</h3>
                  <p className="text-sm text-gray-600">Round-the-clock support for mission-critical systems</p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
