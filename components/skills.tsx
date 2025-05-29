"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      id: 1,
      name: "Frontend",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 88 },
        // { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "TailwindCSS", level: 88 },
      ],
      icon: "/images/mushroom.png",
    },
    {
      id: 2,
      name: "Backend",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 70 },
        { name: "LLM/OpenAI API", level: 90 },
        
      ],
      icon: "/images/fire-flower.png",
    },
    {
      id: 3,
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Azure", level: 70 },
        { name: "AWS", level: 75 },
        { name: "Postman", level: 80 },
        { name: "UI/UX Design", level: 70 },
        { name: "Agile/Scrum", level: 80 },
      ],
      icon: "/images/star.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="min-h-screen py-20 pt-32 bg-gradient-to-b from-mario-dark to-mario-dark/90">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="text-mario-green">My</span> Skills
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-mario-green"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </h2>
          <p className="text-xl text-mario-cream max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-mario-dark-lighter rounded-xl p-6 shadow-xl border border-mario-dark-lighter hover:border-mario-green/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-4 relative">
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-mario-yellow">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-mario-cream">{skill.name}</span>
                      <span className="text-mario-cream/70">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-mario-dark rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-mario-green"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* upskilling */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-16 text-center" > <div className="inline-block bg-mario-dark px-6 py-4 rounded-lg"> <h4 className="text-lg font-mario text-yellow-400 mb-2">ALWAYS LEVELING UP!</h4> <p className="text-zinc-300">Continuously learning new technologies and improving existing skills</p> </div> </motion.div>

        {/* Animated Mario elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 relative h-20"
        >
          <motion.div
            className="absolute left-0"
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 15, ease: "linear" }}
          >
            <Image src="/images/mario-running.png" alt="Mario running" width={50} height={50} />
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-4 bg-mario-green/30 rounded-full" />
        </motion.div>
        
      </div>
    </div>
  )
}
