"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

interface HeroProps {
  onSectionChange: (section: string) => void
}

export default function Hero({ onSectionChange }: HeroProps) {
  const cloudRef = useRef<HTMLDivElement>(null)
  const marioControls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cloudRef.current) return
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      cloudRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleBlockClick = () => {
    const audio = new Audio("/sounds/power-up.mp3")
    audio.play()

    marioControls.start({
      y: [-10, -200, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    })
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mario-green to-transparent" />

        {/* Animated clouds */}
        <div ref={cloudRef} className="absolute top-1/4 left-1/4 transition-transform duration-300 ease-out">
          <Image src="/images/cloud.png" alt="Cloud" width={100} height={60} className="opacity-20" />
        </div>
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <Image src="/images/cloud.png" alt="Cloud" width={150} height={90} className="opacity-20" />
        </motion.div>

        {/* Mario */}
        <motion.div
          className="absolute bottom-0 right-0 md:right-20 lg:right-40 z-10 hidden md:block"
          initial={{ y: 0, opacity: 1 }}
          animate={marioControls}
        >
          <Image src="/images/mario-pixel.png" alt="Mario" width={120} height={200} priority />
        </motion.div>

        {/* Question block */}
        <motion.div
          className="absolute bottom-10 left-10 z-10 hidden lg:block cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          onClick={handleBlockClick}
        >
          <Image
            src="/images/question-block.png"
            alt="Question Block"
            width={50}
            height={50}
            className="hover:animate-bounce"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block hidden sm:block"
          >
            <Image
              src="/images/mario-logo.png"
              alt="Mario Developer"
              width={200}
              height={100}
              priority
              className="mx-auto"
            />
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 7
            }}
            className="mx-auto -mt-10 mb-6 rounded-full border-4 border-white overflow-hidden w-24 h-24 sm:w-40 sm:h-40 shadow-xl"
          >
            <Image
              src="/images/profile.png"
              alt="Subhash Adhikari"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hey! I'm <span className="text-[#E52521]">Subhash</span>
            <br />
            <span className="text-mario-red">Full-Stack</span> Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl mb-8 text-mario-cream"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Building interactive experiences with code magic
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-mario-red text-white rounded-full font-bold text-lg shadow-lg hover:bg-mario-red/90 transition-colors"
              onClick={() => {
                const section = document.getElementById("projects")
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-mario-blue text-white rounded-full font-bold text-lg shadow-lg hover:bg-mario-blue/90 transition-colors"
              onClick={() => {
                const section = document.getElementById("contact")
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-[5.0rem] sm:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => {
          const section = document.getElementById("projects")
          if (section) {
            section.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="text-white h-8 w-8" />
        </motion.div>
      </motion.div>
    </div>
  )
}
