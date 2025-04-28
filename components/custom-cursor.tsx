"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverStart)
      link.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverStart)
        link.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [])

  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
    },
    clicked: {
      width: 24,
      height: 24,
    },
    link: {
      width: 48,
      height: 48,
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center"
      animate={{
        x: position.x - (linkHovered ? 24 : clicked ? 12 : 16),
        y: position.y - (linkHovered ? 24 : clicked ? 12 : 16),
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <motion.div
        variants={cursorVariants}
        animate={linkHovered ? "link" : clicked ? "clicked" : "default"}
        className="relative"
      >
        {linkHovered ? (
          <Image
            src="/images/mario-hand.png"
            alt="Mario hand cursor"
            width={48}
            height={48}
            className="transform rotate-45"
          />
        ) : (
          <div
            className={`rounded-full ${clicked ? "bg-mario-red" : "bg-mario-red/50"} flex items-center justify-center`}
          >
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
