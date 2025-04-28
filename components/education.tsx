"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science (Hons) in Computer Science",
      institution: "Herald College Kathmandu (Affiliated to University of Wolverhampton)",
      year: "2024 - 2026",
      description: "Focused on software development, AI, databases, and web technologies.",
      achievements: ["Top 5% of class","Built multiple full-stack projects using Java, Spring Boot, React, and PostgreSQL","Self-learned technologies beyond coursework (like Next.js, TailwindCSS,MongoDB)"],
    },
    {
      id: 2,
      degree: "Higher Secondary Education in Science",
      institution: "Model Multiple College",
      year: "2018 - 2020",
      description: "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
      achievements: ["Graduated with 3.06 GPA"],
    },
    {
      id: 3,
      degree: "Secondary Education Examination (SEE)",
      institution: "Siddharth Shishu Sadan",
      year: "2018",
      description: "Focused on core subjects including Mathematics, Science, and English.",
      achievements: ["Graduated with 3.40 GPA"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="min-h-screen py-20 pt-32 bg-gradient-to-b from-mario-dark/90 to-mario-dark">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="text-mario-blue">My</span> Education
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-mario-blue"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </h2>
          <p className="text-xl text-mario-cream max-w-2xl mx-auto">
            My academic journey and professional development that shaped my expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-mario-blue/30"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5 }}
            style={{ marginLeft: "-0.5px" }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10"
          >
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-8 mb-16 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-6 h-6 bg-mario-blue rounded-full transform -translate-x-1/2 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                >
                  <GraduationCap size={14} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-mario-dark-lighter p-6 rounded-xl border border-mario-blue/20 shadow-xl hover:border-mario-blue/50 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-1 text-mario-blue">{item.degree}</h3>
                    <h4 className="text-lg mb-3 text-mario-yellow">{item.institution}</h4>

                    {/* <div className="flex items-center mb-4 text-mario-cream/70">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.year}</span>
                    </div> */}

                    <p className="mb-4 text-mario-cream">{item.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-mario-cream flex items-center">
                        <Award size={16} className="mr-2 text-mario-yellow" />
                        Achievements
                      </h5>
                      <ul className="list-disc list-inside text-mario-cream/80 space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
