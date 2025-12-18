"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PopularLocations() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const locations = [
    {
      id: 1,
      title: "Melbourne CBD",
      subtitle: "Sale and Rent Condo, House, Land",
      image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800&h=600&fit=crop",
      categories: ["Condos", "Houses"],
    },
    {
      id: 2,
      title: "South Yarra",
      subtitle: "Sale and Rent Condo, House, Land",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
      categories: ["Condos", "Houses"],
    },
    {
      id: 3,
      title: "St Kilda",
      subtitle: "Sale and Rent Condo, House, Land",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop",
      categories: ["Condos", "Houses"],
    },
    {
      id: 4,
      title: "Richmond",
      subtitle: "Sale and Rent Condo, House, Land",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/A_downtown_view_of_Richmond%2C_VA.jpg",
      categories: ["Condos", "Houses"],
    },
    {
      id: 5,
      title: "Carlton",
      subtitle: "Sale and Rent Condo, House, Land",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      categories: ["Condos", "Houses"],
    },
    {
      id: 6,
      title: "Fitzroy",
      subtitle: "Sale and Rent Condo, House, Land",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
      categories: ["Condos", "Houses"],
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Popular Location In Melbourne</h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {locations.map((location) => (
              <div key={location.id} className="flex-shrink-0 w-80 group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={location.image || "/placeholder.svg"}
                      alt={location.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{location.title}</h3>
                      <p className="text-white/90 text-sm mb-4">{location.subtitle}</p>

                      {/* Category Buttons - using golden color #F8AA36 */}
                      <div className="flex gap-2 flex-wrap">
                        {location.categories.map((category, index) => (
                          <button
                            key={index}
                            className="px-4 py-2 bg-transparent border-2 border-[#F8AA36] text-[#F8AA36] rounded-full text-sm font-semibold hover:bg-[#F8AA36] hover:text-white transition-all duration-300"
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="h-1 bg-[#F8AA36] rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
