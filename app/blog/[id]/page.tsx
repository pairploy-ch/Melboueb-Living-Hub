"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
// import { supabase } from "@/lib/supabaseClient"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// กำหนด interface สำหรับ Blog ให้ตรงกับโครงสร้างจาก Supabase
interface BlogPost {
  id: number
  Title: string
  Content: string
  created_at: string
  Tags: string | null
  cover: string
  [key: string]: any
}

// ฟังก์ชันสำหรับแปลงวันที่
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
  const [loading, setLoading] = useState(false)

  const blogId = params.id as string

  useEffect(() => {
    // ข้อมูลตัวอย่าง
    const mockBlog: BlogPost = {
      id: 1,
      Title: "ไทยติดอันดับ Top 15 ในออสเตรเลีย: Melbourne Living Hub ช่วยนักเรียนไทยในการหาที่พัก",
      Content: `เมื่อพิจารณาภาพรวมการศึกษาต่อต่างประเทศในช่วงเดือนมกราคมถึงกันยายน 2025 ออสเตรเลียยังคงเป็นจุดหมายปลายทางอันดับต้นๆ ของโลก และสำหรับเราที่ Melbourne Living Hub มีสถิติหนึ่งที่น่าสนใจอย่างยิ่งคือ ประเทศไทยได้ก้าวขึ้นมาเป็นหนึ่งใน 15 ประเทศหลัก (Top 15) ที่ส่งออกนักเรียนไปเรียนต่อในออสเตรเลียอย่างเต็มตัว
.
ตัวเลขที่สะท้อนความจริง: ด้วยจำนวนนักเรียนไทยประมาณ 19,251 คน ที่ลงทะเบียนเรียนในปัจจุบัน ทำให้ประเทศไทยแซงหน้าหลายตลาดเดิม เช่น มาเลเซีย เกาหลีใต้ ญี่ปุ่น ฮ่องกง และไต้หวัน ไปอย่างชัดเจน

หากเราเจาะลึกเฉพาะ "ตลาดเอเชีย" จะเห็นการแบ่งระดับที่ชัดเจนขึ้นดังนี้:

กลุ่มผู้นำ: จีน (~189,254 คน) และอินเดีย (~139,720 คน) ยังคงครองส่วนแบ่งสูงสุด

กลุ่มตลาดระดับกลางที่ทรงพลัง: นี่คือจุดที่ประเทศไทยโดดเด่น โดยเราอยู่ในกลุ่มเดียวกับประเทศที่มีอัตราการเติบโตสูงอย่าง เวียดนาม (~36,052 คน), ฟิลิปปินส์ (~34,247 คน) และอินโดนีเซีย (~24,668 คน)

ตัวเลขที่ "ซ่อนอยู่" – พลังของ Working Holiday Visa: นอกจากตัวเลขนักเรียนสายตรงแล้ว ยังมีคนไทยอีกกว่า 3,000 คน ที่เดินทางเข้าสู่ระบบด้วย Working Holiday Visas (WHV) ซึ่งคนกลุ่มนี้มีความต้องการระบบสนับสนุนในด้านที่พักคุณภาพ การปรับตัวเข้ากับชุมชน และคำแนะนำจากคนในพื้นที่ไม่ต่างจากกลุ่มนักเรียนหลักเลยค่ะ
.
ทำไมสิ่งนี้จึงสำคัญสำหรับ Melbourne Living Hub: ที่ Melbourne Living Hub เรามองเห็นมากกว่าแค่ตัวเลข แต่เรามองเห็นบุคคลและครอบครัวที่กำลังเปลี่ยนผ่านเข้าสู่ชีวิตใหม่ในต่างแดน:

ความต้องการคุณภาพที่สูงขึ้น: เมื่อไทยก้าวเข้าสู่กลุ่ม "ตลาดระดับกลาง" ความคาดหวังในบริการสนับสนุนด้านที่พักที่ผ่านการตรวจสอบแล้ว (Verified) ปลอดภัย และเป็นมืออาชีพจึงสูงขึ้นตามไปด้วย

ความเข้าใจในวัฒนธรรม: การเข้าใจความต้องการเฉพาะของนักเรียนไทยและผู้ถือวีซ่า WHV ตั้งแต่เรื่องทำเลที่พักใกล้สถานศึกษาไปจนถึงการอธิบายสัญญาเช่าที่ชัดเจน คือหัวใจสำคัญในการบริการของเรา
.
สะพานแห่งความไว้วางใจ: ด้วยสถิติไทยใน Top 15 เรามุ่งมั่นที่จะเป็นพันธมิตรในพื้นที่ (On-the-ground partner) ที่ผู้ปกครองและนักเรียนสามารถไว้วางใจได้ด้วยความชัดเจนและมั่นใจ
.
การเติบโตนำมาซึ่งโอกาส แต่ก็มาพร้อมกับความต้องการระบบการจัดการที่ดีขึ้น ไม่ว่าคุณจะมาเพื่อศึกษาต่อในระดับปริญญา หรือมาเพื่อค้นหาประสบการณ์ชีวิตผ่าน Working Holiday Melbourne Living Hub พร้อมแล้วที่จะดูแลให้การมาออสเตรเลียของคุณไม่ใช่แค่ "การมาพัก" แต่คือ "การใช้ชีวิต" อย่างแท้จริง
-
#MelbourneLivingHub #InternationalStudentsAustralia #StudyInAustralia #ThaiStudentsInAustralia #MelbourneAccommodation #DesignThinking #TalkToSipim `,
      created_at: "2024-12-15T10:00:00Z",
      Tags: null,
      cover: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/601972793_1491840529119002_7790933657693028870_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sPO0eJv9cgQQ7kNvwFgaFZm&_nc_oc=AdmI88Mu1KMHo-7xbkzDPVJnjJWuVoQt3Mxu9qXqSY5K57ltLNYLJZ6ybIha1EeJGZ4&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=sNRu1u4R7ea7jQSw9OpRxw&oh=00_Afm_nNMuNqAJ_NpNc6sfcuuVCuP1YCKVLd1v1hjlpyr8uw&oe=694B5805"
    }

    setBlog(mockBlog)
  }, [blogId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <Link href="/blogs" className="text-primary hover:underline">
              Back to Articles
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
      
      {/* Header Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <article className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12">
        {/* Hero Image */}
        <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.cover || "/placeholder.svg"}
            alt={blog.Title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(blog.created_at)}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
          {blog.Title}
        </h1>

        {/* Content */}
        <div className="max-w-3xl prose prose-lg text-gray-700 leading-relaxed mb-12">
          {blog.Content.split('\n').map((paragraph, index) => {
            // ตรวจสอบว่าเป็น heading หรือไม่
            if (paragraph.trim().startsWith('–') || paragraph.trim().startsWith('-')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-black mt-8 mb-4">
                  {paragraph.replace(/^[–-]\s*/, '')}
                </h2>
              )
            }
            // ตรวจสอบว่าเป็นบรรทัดว่างหรือไม่
            if (paragraph.trim() === '') {
              return <br key={index} />
            }
            // แสดงเป็น paragraph ปกติ
            return (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Share Section */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
          <h3 className="text-lg font-semibold text-black mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: blog.Title,
                    url: window.location.href,
                  })
                }
              }}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Share
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert('Link copied to clipboard!')
              }}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Back to Blog Button */}
        {/* <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            View All Articles
          </Link>
        </div> */}
      </article>

      <Footer />
    </main>
  )
}