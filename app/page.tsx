"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import BlogSection from "@/components/BlogSection"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    blogs: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      document.querySelectorAll('[class*="cursor-"]').forEach((el) => {
        el.className = el.className.replace(/cursor-\w+/g, "")
      })
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const [key, ref] of Object.entries(sectionRefs)) {
        const section = ref.current
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-mario-dark min-h-screen text-white overflow-hidden"
          >
            <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
            <CustomCursor />
            <main>
              <section id="hero" ref={sectionRefs.hero} className="min-h-screen">
                <Hero onSectionChange={handleSectionChange} />
              </section>
              <section id="projects" ref={sectionRefs.projects} className="min-h-screen">
                <Projects />
              </section>
              <section id="education" ref={sectionRefs.education} className="min-h-screen">
                <Education />
              </section>
              <section id="skills" ref={sectionRefs.skills} className="min-h-screen">
                <Skills />
              </section>
              <section id="blogs" ref={sectionRefs.blogs} className="py-20 sm:py-28">
                <BlogSection />
              </section>
              <section id="contact" ref={sectionRefs.contact} className="min-h-screen">
                <Contact />
              </section>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
