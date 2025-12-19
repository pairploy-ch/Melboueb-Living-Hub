"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

// ข้อมูล blogs ตัวอย่าง
const blogs = [
  {
    id: 1,
    title: "ไทยติดอันดับ Top 15 ในออสเตรเลีย: Melbourne Living Hub ช่วยนักเรียนไทยในการหาที่พัก",
    excerpt: "เมื่อพิจารณาภาพรวมการศึกษาต่อต่างประเทศในช่วงเดือนมกราคมถึงกันยายน 2025 ออสเตรเลียยังคงเป็นจุดหมายปลายทางอันดับต้นๆ ของโลก และสำหรับเราที่ Melbourne Living Hub มีสถิติหนึ่งที่น่าสนใจอย่างยิ่งคือ ประเทศไทยได้ก้าวขึ้นมาเป็นหนึ่งใน 15 ประเทศหลัก (Top 15) ที่ส่งออกนักเรียนไปเรียนต่อในออสเตรเลียอย่างเต็มตัว",
    image: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/601972793_1491840529119002_7790933657693028870_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sPO0eJv9cgQQ7kNvwFgaFZm&_nc_oc=AdmI88Mu1KMHo-7xbkzDPVJnjJWuVoQt3Mxu9qXqSY5K57ltLNYLJZ6ybIha1EeJGZ4&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=sNRu1u4R7ea7jQSw9OpRxw&oh=00_Afm_nNMuNqAJ_NpNc6sfcuuVCuP1YCKVLd1v1hjlpyr8uw&oe=694B5805",
    date: "Dec 19, 2024"
  },
//   {
//     id: 2,
//     title: "Top 10 Suburbs for International Students in 2025",
//     excerpt: "Discover the best neighborhoods offering great amenities, transport links, and student-friendly environments.",
//     image: "/blog2.jpg",
//     date: "Dec 12, 2024"
//   },
//   {
//     id: 3,
//     title: "Understanding Your Australian Student Visa: A Complete Guide",
//     excerpt: "Navigate the visa application process with confidence and avoid common pitfalls.",
//     image: "/blog3.jpg",
//     date: "Dec 10, 2024"
//   },
//   {
//     id: 4,
//     title: "Budgeting Tips for Students Living in Melbourne",
//     excerpt: "Learn how to manage your finances effectively and make the most of your student budget.",
//     image: "/blog4.jpg",
//     date: "Dec 8, 2024"
//   },
//   {
//     id: 5,
//     title: "How to Avoid Rental Scams in Melbourne",
//     excerpt: "Stay safe and secure with our expert tips on identifying and avoiding accommodation scams.",
//     image: "/blog5.jpg",
//     date: "Dec 5, 2024"
//   },
//   {
//     id: 6,
//     title: "Preparing for Your Move to Melbourne: Essential Checklist",
//     excerpt: "Everything you need to prepare before arriving in Melbourne for your studies.",
//     image: "/blog6.jpg",
//     date: "Dec 3, 2024"
//   },
//   {
//     id: 7,
//     title: "Understanding Rental Agreements in Australia",
//     excerpt: "Know your rights and responsibilities as a tenant in Victoria.",
//     image: "/blog7.jpg",
//     date: "Dec 1, 2024"
//   },
//   {
//     id: 8,
//     title: "Best Part-Time Jobs for International Students",
//     excerpt: "Explore work opportunities that complement your studies and provide valuable experience.",
//     image: "/blog8.jpg",
//     date: "Nov 28, 2024"
//   }
]

export default function BlogsSection() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 4

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / blogsPerPage)
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C5364]">
            Latest Insights & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical guides, tips, and updates to help you navigate life in Melbourne
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentBlogs.map((blog) => (
            <Card
              key={blog.id}
              onClick={() => router.push(`/blog/${blog.id}`)}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-5">
                <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#F8AA36] transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#F8AA36] group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="bg-white text-[#2C5364] border-2 border-[#2C5364] hover:bg-[#2C5364] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2 font-semibold bg-white px-6 py-3 rounded-lg shadow-sm">
            <span className="text-lg text-[#2C5364]">{currentPage}</span>
            <span className="text-sm text-gray-500">of</span>
            <span className="text-lg text-[#2C5364]">{totalPages}</span>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="bg-white text-[#2C5364] border-2 border-[#2C5364] hover:bg-[#2C5364] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}