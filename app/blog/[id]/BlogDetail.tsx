"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { createClient } from "@supabase/supabase-js"
import { LanguageProvider } from "@/contexts/LanguageContext"

// 🔑 Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// ✅ interface ให้ตรงกับตารางจริง
interface BlogPost {
  id: number
  title: string
  content: string
  cover: string | null
  tags: string | null
  created_at: string
}

// ฟังก์ชันแปลงวันที่
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  const blogId = params.id as string

  useEffect(() => {
    fetchBlog()
  }, [blogId])

  const fetchBlog = async () => {
    setLoading(true)

    const { data, error } = await supabase
      .from("blogs")
      .select("id, title, content, cover, tags, created_at")
      .eq("id", blogId)
      .single()

    if (error) {
      console.error(error)
      setBlog(null)
    } else {
      setBlog(data)
    }

    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <Link href="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Back */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      {/* Blog */}
      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Cover */}
        <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.cover || "/placeholder.jpg"}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(blog.created_at)}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          {blog.title}
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-3xl">
          {blog.content.split("\n").map((line, i) => {
            if (line.trim() === "") return <br key={i} />
            return <p key={i}>{line}</p>
          })}
        </div>

        {/* Tags */}
        {blog.tags && (
          <div className="mt-8 flex gap-2 flex-wrap">
            {blog.tags.split(",").map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full"
              >
                #{tag.trim()}
              </span>
            ))}
          </div>
        )}
      </article>

      <Footer />
    </main>
  )
}
