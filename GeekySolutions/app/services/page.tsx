import { Button } from "@/components/ui/button"
import { Code, HardDrive, Laptop, Network, Printer, Workflow } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Services</div>
              <h1 className="text-3xl font-bold tracking-tighter text-blue-800 sm:text-4xl md:text-5xl">
                Comprehensive Tech Solutions
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                From web development to IT support, we offer a wide range of services to meet all your technology needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-blue-100 p-1.5">
                    <Code className="h-5 w-5 text-blue-700" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tighter text-gray-900 sm:text-3xl">
                    Web Design & Development
                  </h2>
                </div>
                <p className="max-w-[600px] text-gray-600 md:text-lg">
                  We create beautiful, functional websites tailored to your business needs. Our web development services
                  include:
                </p>
              </div>
              <ul className="grid gap-2 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Responsive Website Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-amber-600 font-semibold">Coming Soon:</span><span className="text-gray-700">E-commerce Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Custom Web Applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-amber-600 font-semibold">Coming Soon:</span><span className="text-gray-700">Content Management Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">SEO Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Website Maintenance</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-blue-50 p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Need a website that stands out?</h3>
                <p className="text-gray-600">
                  Our designers and developers work together to create websites that not only look great but also
                  perform exceptionally well.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-700 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                >
                  Get a Web Design Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Development */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 flex items-center justify-center rounded-lg bg-amber-50 p-8 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Mobile Apps for Your Business</h3>
                <p className="text-gray-600">
                  Extend your business reach with custom mobile applications designed for your specific needs and
                  audience.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-amber-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-600"
                >
                  Discuss App Development
                </Link>
              </div>
            </div>
            <div className="order-1 flex flex-col justify-center space-y-4 lg:order-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-amber-100 p-1.5">
                    <Workflow className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tighter text-gray-900 sm:text-3xl">App Development</h2>
                </div>
                <p className="max-w-[600px] text-gray-600 md:text-lg">
                  We develop intuitive and powerful mobile and web applications that help streamline your business
                  processes. Our app development services include:
                </p>
              </div>
              <ul className="grid gap-2 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-amber-600 font-semibold">Coming Soon:</span> <span className="text-gray-700">iOS App Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Android App Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-amber-600 font-semibold">Coming Soon:</span><span className="text-gray-700">Cross-Platform Applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Progressive Web Apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">API Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">App Maintenance & Updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Debugging & Maintenance */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                Technical Support
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Debugging & Maintenance</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                We ensure your applications and systems run smoothly with our debugging and maintenance services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold">Code Debugging</h3>
              <p className="flex-1 text-gray-600">
                We identify and fix bugs in your existing applications to ensure optimal performance.
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold">Performance Optimization</h3>
              <p className="flex-1 text-gray-600">
                We improve the speed and efficiency of your websites and applications.
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold">Regular Maintenance</h3>
              <p className="flex-1 text-gray-600">
                We provide ongoing support to keep your digital assets up-to-date and secure.
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="bg-blue-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                IT Infrastructure
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">IT Services & Support</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                We provide comprehensive IT services to keep your business running smoothly.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2">
            <div className="space-y-4 rounded-lg border bg-white p-6 shadow">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-1.5">
                  <Printer className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold">Printer Support</h3>
              </div>
              <p className="text-gray-600">
                We offer comprehensive toner-based printer support and maintenance services, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Printer Setup & Installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Toner Replacement & Recycling</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Printer Troubleshooting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Service Level Agreements (SLAs)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 rounded-lg border bg-white p-6 shadow">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-1.5">
                  <Network className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold">Network Solutions</h3>
              </div>
              <p className="text-gray-600">
                We ensure your network infrastructure is secure and optimized for performance:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Network Design & Setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Network Troubleshooting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Wi-Fi Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Network Security</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 rounded-lg border bg-white p-6 shadow">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-1.5">
                  <HardDrive className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold">IT Equipment Procurement</h3>
              </div>
              <p className="text-gray-600">
                <span className="text-amber-600 font-semibold">Coming Soon:</span> We'll help you source and purchase
                the right IT equipment for your business:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Hardware Recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Competitive Pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Software Licensing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Equipment Setup & Installation</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 rounded-lg border bg-white p-6 shadow">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-1.5">
                  <Laptop className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold">Laptop Repairs</h3>
              </div>
              <p className="text-gray-600">
                <span className="text-amber-600 font-semibold">Coming Soon:</span> We'll provide expert repair services
                for laptops of all brands:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Hardware Repairs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Operating System Issues</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Data Recovery</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Performance Upgrades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                Flexible Service Options
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                We offer transparent pricing and flexible service options to meet your needs and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Project-Based</h3>
                <p className="text-sm text-gray-600">For one-time projects</p>
              </div>
              <ul className="mb-4 flex-1 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Custom quote based on requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Clear project milestones</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Dedicated project manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Post-project support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-700 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
              >
                Get a Quote
              </Link>
            </div>
            <div className="flex flex-col rounded-lg border-2 border-amber-600 bg-white p-6 shadow-lg">
              <div className="mb-4">
                <div className="mb-2 inline-block rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold">Monthly Retainer</h3>
                <p className="text-sm text-gray-600">For ongoing support needs</p>
              </div>
              <ul className="mb-4 flex-1 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Dedicated support hours each month</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Priority response times</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Monthly performance reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700">Discounted hourly rates</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md bg-amber-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-600"
              >
                Learn More
              </Link>
            </div>
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Service Contract</h3>
                <p className="text-sm text-gray-600">For enterprise clients</p>
              </div>
              <ul className="mb-4 flex-1 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Customized SLAs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">24/7 emergency support</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Quarterly business reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-700 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-white to-amber-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Need a Custom Solution?</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Contact us today to discuss your specific tech needs and how we can help your business succeed.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
