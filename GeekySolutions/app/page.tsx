import { Check, Code, HardDrive, Laptop, Network, Printer, Workflow } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-5">
            <div className="flex flex-col justify-center space-y-4 xl:col-span-2">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-blue-800 sm:text-4xl md:text-5xl lg:text-6xl">
                  Tech Solutions for Your Business
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Expert web development, IT support, and tech services to help your business thrive in the digital age.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/services"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-blue-700 bg-white px-8 text-sm font-medium text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end xl:col-span-3">
              <div className="relative aspect-video h-auto w-full max-w-[600px] overflow-hidden rounded-xl border shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Tech services illustration"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Expertise</div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                Comprehensive Tech Services
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                From web development to printer support, we provide a wide range of IT services to meet your business
                needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <div className="rounded-full bg-blue-50 p-3">
                <Code className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-center text-sm text-gray-600">
                Custom websites tailored to your business needs and goals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <div className="rounded-full bg-blue-50 p-3">
                <Workflow className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold">App Development</h3>
              <p className="text-center text-sm text-gray-600">
                Mobile and web applications built with the latest technologies.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <div className="rounded-full bg-blue-50 p-3">
                <Printer className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold">Printer Support</h3>
              <p className="text-center text-sm text-gray-600">
                Toner-based printer maintenance and service level agreements.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <div className="rounded-full bg-blue-50 p-3">
                <Network className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold">Network Solutions</h3>
              <p className="text-center text-sm text-gray-600">
                Troubleshooting and optimizing your business network infrastructure.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <div className="rounded-full bg-blue-50 p-3">
                <HardDrive className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold">IT Equipment</h3>
              <p className="text-center text-sm text-gray-600">
                Procurement services for all your IT needs.{" "}
                <span className="text-amber-600 font-semibold">Coming Soon</span>
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow transition-all hover:shadow-lg">
              <div className="rounded-full bg-blue-50 p-3">
                <Laptop className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold">Laptop Repairs</h3>
              <p className="text-center text-sm text-gray-600">
                Professional repair services for all laptop brands.{" "}
                <span className="text-amber-600 font-semibold">Coming Soon</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/services"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Why GeekySolutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                What Sets Us Apart
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                We combine technical expertise with exceptional customer service to deliver the best results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold">Expert Team</h3>
              </div>
              <p className="text-sm text-gray-600">
                Our team consists of certified professionals with years of industry experience.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold">Tailored Solutions</h3>
              </div>
              <p className="text-sm text-gray-600">
                We customize our services to fit your specific business requirements.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold">Fast Response</h3>
              </div>
              <p className="text-sm text-gray-600">Quick turnaround times and prompt support when you need it most.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold">Competitive Pricing</h3>
              </div>
              <p className="text-sm text-gray-600">High-quality services at competitive rates that fit your budget.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold">Ongoing Support</h3>
              </div>
              <p className="text-sm text-gray-600">
                We provide continued assistance and maintenance after project completion.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold">Advanced Technology</h3>
              </div>
              <p className="text-sm text-gray-600">
                We use the latest tools and technologies to deliver modern solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/*<section className="relative py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Contact us today for a free consultation and let us help you elevate your business with our tech
                solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
              >
                Contact Us
              </Link>
              <Link
                href="/shop"
                className="inline-flex h-10 items-center justify-center rounded-md border border-amber-600 bg-white px-8 text-sm font-medium text-amber-600 shadow-sm transition-colors hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-600"
              >
                Visit Our Shop
              </Link>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Shop Teaser */}
      <section className="bg-gradient-to-b from-white to-amber-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Our Shop</div>
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Quality Tech Products</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Browse our selection of high-quality tech products, accessories, and software solutions.
                </p>
              </div>
              <Link
                href="/shop"
                className="inline-flex h-10 w-fit items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-600"
              >
                Shop Now
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width={200}
                    height={200}
                    alt="Tech product"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width={200}
                    height={200}
                    alt="Tech product"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width={200}
                    height={200}
                    alt="Tech product"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width={200}
                    height={200}
                    alt="Tech product"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
