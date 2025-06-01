import Image from "next/image"
import Link from "next/link"
import { Award, Clock, Cpu, Users } from "lucide-react"

export default function About() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">About Us</div>
                <h1 className="text-3xl font-bold tracking-tighter text-blue-800 sm:text-4xl md:text-5xl">
                  Who We Are
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  GeekySolutions is a team of passionate tech experts dedicated to providing comprehensive IT services
                  and solutions for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-video h-auto w-full max-w-[600px] overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Our team"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Where It All Began</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2021, GeekySolutions began as a small web development agency with a vision to make technology
                accessible to businesses of all sizes. What started as a one-person operation has now grown into a
                full-service tech company with a diverse team of experts in various IT fields.
              </p>
              <p>
                The journey has been driven by a simple philosophy: providing honest, reliable, and efficient tech
                solutions that truly address our clients' needs. We believe that technology should empower businesses,
                not complicate them.
              </p>
              <p>
                Over the years, we've expanded our services to include app development, printer support, network
                solutions, and more, always staying on top of the latest technological advancements to serve our clients
                better.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-blue-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">What Drives Us</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Our core values shape everything we do and how we serve our clients.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow">
              <div className="rounded-full bg-amber-50 p-3">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Client-Centered Approach</h3>
              <p className="text-center text-gray-600">
                We put our clients' needs first, focusing on building long-term relationships based on trust and mutual
                success.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow">
              <div className="rounded-full bg-amber-50 p-3">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Excellence & Quality</h3>
              <p className="text-center text-gray-600">
                We strive for excellence in everything we do, delivering high-quality solutions that exceed
                expectations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow">
              <div className="rounded-full bg-amber-50 p-3">
                <Cpu className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-center text-gray-600">
                We embrace new technologies and approaches, constantly evolving to provide the best solutions for our
                clients.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow">
              <div className="rounded-full bg-amber-50 p-3">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-center text-gray-600">
                We are committed to being there when our clients need us, providing dependable support and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Meet the Experts</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Our dedicated team of professionals is committed to delivering exceptional service.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  width={160}
                  height={160}
                  alt="Team member"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Itumeleng Madumo</h3>
              <p className="text-blue-700">Founder & CEO</p>
              <p className="text-center text-sm text-gray-600">
                With over 5 years of experience in IT, Itu leads our team with vision and expertise.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-white to-amber-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Ready to Work with Us?</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Let's discuss how GeekySolutions can help your business succeed with our tech expertise.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
