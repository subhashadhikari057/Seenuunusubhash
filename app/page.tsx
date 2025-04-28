"use client"

import { useEffect, useState } from "react"
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

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
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
            <main>
              <section id="hero" className="min-h-screen">
                <Hero onSectionChange={handleSectionChange} />
              </section>
              <section id="projects" className="min-h-screen">
                <Projects />
              </section>
              <section id="education" className="min-h-screen">
                <Education />
              </section>
              <section id="skills" className="min-h-screen">
                <Skills />
              </section>
              <section id="contact" className="min-h-screen">
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
