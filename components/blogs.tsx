"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { createClient } from "@supabase/supabase-js"

// 🔑 Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// 📌 Type ให้ตรงกับตารางจริง
interface Blog {
  id: number
  title: string
  content: string
  cover: string | null
  created_at: string
}

export default function BlogsSection() {
  const { t } = useLanguage()
  const router = useRouter()

  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 4

  // 🔹 ดึงข้อมูลจาก Supabase
  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("id, title, content, cover, created_at")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setBlogs(data)
    } else {
      console.error(error)
    }

    setLoading(false)
  }

  // ✂️ ตัด content เป็น excerpt
  const getExcerpt = (content: string, length = 120) =>
    content.length > length
      ? content.substring(0, length) + "..."
      : content

  // Pagination
  const totalPages = Math.ceil(blogs.length / blogsPerPage)
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">
        Loading blogs...
      </section>
    )
  }

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C5364]">
            {t.blog.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.blog.subtitle}
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
                  src={blog.cover || "/placeholder.jpg"}
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
                  {getExcerpt(blog.content)}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {new Date(blog.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
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
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>

          <div className="font-semibold">
            {currentPage} / {totalPages}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
