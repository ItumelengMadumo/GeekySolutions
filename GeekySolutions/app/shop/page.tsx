import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Filter, Search, ShoppingCart, Tag } from "lucide-react"
import Image from "next/image"

export default function Shop() {
  return (
    <main className="flex-1">
      {/* Shop Hero */}
      <section className="relative bg-gradient-to-b from-amber-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                GeekySolutions Shop
              </div>
              <h1 className="text-3xl font-bold tracking-tighter text-amber-800 sm:text-4xl md:text-5xl">
                Tech Products & Accessories
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Browse our curated selection of technology products, accessories, and software solutions.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input className="pl-8" placeholder="Search products..." type="search" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar/Filters */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-20 space-y-6">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="h-5 w-5" />
                    <h3 className="font-semibold">Filters</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Categories</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input id="hardware" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="hardware" className="ml-2 text-sm">
                            Hardware
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="software" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="software" className="ml-2 text-sm">
                            Software
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="accessories" className="ml-2 text-sm">
                            Accessories
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="networking" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="networking" className="ml-2 text-sm">
                            Networking
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="printer" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="printer" className="ml-2 text-sm">
                            Printer Supplies
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Price Range</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Min" type="number" />
                        <Input placeholder="Max" type="number" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Brand</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input id="brand1" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="brand1" className="ml-2 text-sm">
                            TechMaster
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="brand2" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="brand2" className="ml-2 text-sm">
                            DigiPro
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="brand3" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="brand3" className="ml-2 text-sm">
                            NetWorks
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="brand4" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="brand4" className="ml-2 text-sm">
                            PrintSolutions
                          </label>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-5 w-5" />
                    <h3 className="font-semibold">Special Offers</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 rounded-md bg-amber-50 p-2">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                      <div>
                        <h4 className="text-sm font-medium">15% Off First Order</h4>
                        <p className="text-xs text-gray-600">Use code: FIRST15</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 rounded-md bg-blue-50 p-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                      <div>
                        <h4 className="text-sm font-medium">Free Shipping</h4>
                        <p className="text-xs text-gray-600">Orders over $50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Products</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="rounded-md border-gray-300 text-sm focus:ring-blue-600">
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Product Card 1 */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Wireless Keyboard"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Wireless Keyboard</CardTitle>
                    <CardDescription>TechMaster Ergonomic Series</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">$49.99</span>
                      <div className="flex items-center text-yellow-500">
                        <span>★★★★☆</span>
                        <span className="ml-1 text-xs text-gray-600">(42)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product Card 2 */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Wireless Mouse"
                      className="object-cover"
                      fill
                    />
                    <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">SALE</div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Wireless Mouse</CardTitle>
                    <CardDescription>TechMaster Precision Pro</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold">$29.99</span>
                        <span className="ml-2 text-sm line-through text-gray-400">$39.99</span>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <span>★★★★★</span>
                        <span className="ml-1 text-xs text-gray-600">(76)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product Card 3 */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image src="/placeholder.svg?height=300&width=300" alt="USB-C Hub" className="object-cover" fill />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">USB-C Hub</CardTitle>
                    <CardDescription>DigiPro Multi-Port Adapter</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">$39.99</span>
                      <div className="flex items-center text-yellow-500">
                        <span>★★★★☆</span>
                        <span className="ml-1 text-xs text-gray-600">(54)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product Card 4 */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Printer Toner"
                      className="object-cover"
                      fill
                    />
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">NEW</div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Printer Toner Cartridge</CardTitle>
                    <CardDescription>PrintSolutions XL Black</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">$79.99</span>
                      <div className="flex items-center text-yellow-500">
                        <span>★★★★★</span>
                        <span className="ml-1 text-xs text-gray-600">(31)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product Card 5 */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Wi-Fi Router"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Wi-Fi Router</CardTitle>
                    <CardDescription>NetWorks Dual-Band Mesh</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">$129.99</span>
                      <div className="flex items-center text-yellow-500">
                        <span>★★★★☆</span>
                        <span className="ml-1 text-xs text-gray-600">(63)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product Card 6 */}
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="External SSD"
                      className="object-cover"
                      fill
                    />
                    <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">SALE</div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">External SSD 1TB</CardTitle>
                    <CardDescription>DigiPro Ultra Fast</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold">$149.99</span>
                        <span className="ml-2 text-sm line-through text-gray-400">$179.99</span>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <span>★★★★★</span>
                        <span className="ml-1 text-xs text-gray-600">(47)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Previous Page</span>
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
                      className="h-4 w-4"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-50">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Next Page</span>
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
                      className="h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-t from-amber-50 to-white py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-amber-100 p-3">
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
                  className="h-6 w-6 text-amber-600"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <path d="M7 7v10" />
                  <path d="M13 7v10" />
                </svg>
              </div>
              <h3 className="font-bold">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-amber-100 p-3">
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
                  className="h-6 w-6 text-amber-600"
                >
                  <path d="M19 7v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7" />
                  <rect width="20" height="5" x="2" y="2" rx="2" />
                  <path d="M12 12v6" />
                  <path d="M9 15h6" />
                </svg>
              </div>
              <h3 className="font-bold">30-Day Returns</h3>
              <p className="text-sm text-gray-600">Hassle-free returns</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-amber-100 p-3">
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
                  className="h-6 w-6 text-amber-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" x2="12.01" y1="17" y2="17" />
                </svg>
              </div>
              <h3 className="font-bold">Expert Support</h3>
              <p className="text-sm text-gray-600">Available 7 days a week</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-amber-100 p-3">
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
                  className="h-6 w-6 text-amber-600"
                >
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                  <path d="M12 12h.01" />
                  <path d="M19 3v3" />
                  <path d="M5 3v3" />
                  <path d="M19 18v3" />
                  <path d="M5 18v3" />
                </svg>
              </div>
              <h3 className="font-bold">Secure Payments</h3>
              <p className="text-sm text-gray-600">SSL encrypted checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-lg bg-blue-50 p-6 md:p-8 lg:p-10">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold text-blue-800 sm:text-3xl">Subscribe to Our Newsletter</h2>
              <p className="mt-2 max-w-md text-gray-600">
                Get the latest product updates, special offers, and tech tips directly to your inbox.
              </p>
              <div className="mt-6 w-full max-w-md">
                <form className="flex gap-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button className="bg-blue-700 hover:bg-blue-800">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
