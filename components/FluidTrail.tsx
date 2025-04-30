"use client"

import { useEffect, useRef } from "react"

interface Pointer {
  x: number
  y: number
  dx: number
  dy: number
  color: string
}

export default function FluidTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number

    const pointers: Pointer[] = [
      {
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: 0,
        dy: 0,
        color: "rgba(255, 80, 80, 0.5)", // fluid color
      },
    ]

    const draw = () => {
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
    //   ctx.fillStyle = "rgba(0, 0, 0, 0)" // dark fade trail background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const p of pointers) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 10, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        p.x += p.dx
        p.y += p.dy

        // apply drag to movement
        p.dx *= 0.9
        p.dy *= 0.9
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      const p = pointers[0]
      const newX = e.clientX
      const newY = e.clientY
      p.dx = newX - p.x
      p.dy = newY - p.y
    }

    draw()
    window.addEventListener("mousemove", onMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}
