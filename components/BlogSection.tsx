"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

interface BlogEntry {
  id: number
  title: string
  snippet: string
  contentFile: string
  date: string
  icon: string
}

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedBlog, setSelectedBlog] = useState<BlogEntry | null>(null)
  const [fullText, setFullText] = useState<string>("")

  const blogs: BlogEntry[] = [
    {
      id: 1,
      title: "Leveling Up : My Developer Odyssey",
      snippet: "From mushroom beginnings to star-powered builds— how Next.js turbocharged my portfolio..",
      contentFile: "/blogs/blog-1.txt",
      date: "1/05/2025",
      icon: "/images/star.png",
    },
    {
      id: 2,
      title: " Bug? More Like Bonus Coin: My Debugging Mindset",
      snippet: "What if every bug is just a hidden coin block waiting to be hit?",
      contentFile: "/blogs/blog-2.txt",
      date: "March 2025",
      icon: "/images/question-block.png",
    },
    {
      id: 3,
      title: "Pixel-Perfect Power: Designing Joy Into My Portfolio",
      snippet: "How I made users feel like they’re playing Mario while scrolling my resume..",
      contentFile: "/blogs/blog-3.txt",
      date: "February 2025",
      icon: "/images/mushroom.png",
    },
  ]

  useEffect(() => {
    if (selectedBlog) {
      fetch(`${window.location.origin}${selectedBlog.contentFile}`)
        .then((res) => res.text())
        .then((text) => setFullText(text))
        .catch((err) => {
          console.error("Failed to load blog:", err);
          setFullText("⚠️ Failed to load blog content.");
        });
    }
  }, [selectedBlog]);

  return (
    <div className="py-8 pt-16 bg-gradient-to-b from-mario-dark to-mario-dark/90">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="text-mario-yellow">My</span> Blog
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-mario-yellow"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </h2>
          <p className="text-xl text-mario-cream max-w-2xl mx-auto">
            Sharing my journey, tips, and ideas — one block at a time!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              className="bg-mario-dark-lighter rounded-xl p-6 shadow-lg border border-mario-dark-lighter hover:border-mario-yellow/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image src={blog.icon} alt="icon" width={40} height={40} />
                <h3 className="text-xl font-bold text-mario-yellow">{blog.title}</h3>
              </div>
              <p className="text-mario-cream mb-3">{blog.snippet}</p>
              <p className="text-sm text-mario-cream/70 mb-2">{blog.date}</p>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="text-sm text-mario-yellow hover:underline"
              >
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center px-4">
          <div className="bg-mario-dark-lighter p-6 rounded-xl max-w-2xl w-full relative text-white shadow-xl overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-white text-xl"
              onClick={() => {
                setSelectedBlog(null)
                setFullText("")
              }}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-mario-yellow mb-4">{selectedBlog.title}</h3>
            <p className="text-sm text-mario-cream/70 mb-2">{selectedBlog.date}</p>
            <p className="text-mario-cream whitespace-pre-wrap">{fullText}</p>
          </div>
        </div>
      )}
    </div>
  )
}
