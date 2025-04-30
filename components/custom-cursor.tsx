"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setHovering(true))
      link.addEventListener("mouseleave", () => setHovering(false))
    })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setHovering(true))
        link.removeEventListener("mouseleave", () => setHovering(false))
      })
    }
  }, [])

  const getOffset = () => {
    if (hovering) return 24
    if (clicked) return 12
    return 16
  }

  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(229, 37, 33, 0.5)",
    },
    clicked: {
      width: 24,
      height: 24,
      backgroundColor: "#E52521",
    },
    link: {
      width: 48,
      height: 48,
      backgroundColor: "#E52521",
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
      animate={{
        x: position.x - getOffset(),
        y: position.y - getOffset(),
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        damping: 35,//quicker settle
        stiffness: 700,//faster
        mass: 0.2,//lighter
      }}
    >
      {/* cursor glowing effect */}
      {/* <div className="absolute w-10 h-10 rounded-full bg-mario-red/20 blur-2xl" /> */}  
      <motion.div
        variants={cursorVariants}
        animate={hovering ? "link" : clicked ? "clicked" : "default"}
        className="rounded-full flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-white rounded-full" />
      </motion.div>
    </motion.div>
  )
}
