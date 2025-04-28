"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionClick = (section: string) => {
    onSectionChange(section)
    setMobileMenuOpen(false)

    // Scroll to section
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-mario-dark/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="#hero"
          onClick={() => handleSectionClick("hero")}
          className="text-2xl font-bold text-mario-red flex items-center"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
          >
            <span className="text-mario-red">By Order Of </span>
            <span className="text-white">The</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleSectionClick(item.id)}
              className={`relative px-2 py-1 transition-colors duration-300 ${
                activeSection === item.id ? "text-mario-red" : "text-white hover:text-mario-yellow"
              }`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-mario-dark/50 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-mario-dark/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleSectionClick(item.id)}
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                    activeSection === item.id ? "bg-mario-red/20 text-mario-red" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
