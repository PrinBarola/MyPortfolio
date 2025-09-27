"use client"

import { useEffect, useState } from "react"

interface Skill {
  name: string
  percentage: number
  description: string
}

const skills: Skill[] = [
  { name: "HTML", percentage: 85, description: "Good grasp, able to structure pages clearly" },
  { name: "CSS", percentage: 80, description: "Strong with layouts, styling, and customization" },
  {
    name: "JavaScript",
    percentage: 65,
    description: "Basic to intermediate, still growing in logic and dynamic interaction",
  },
  { name: "Java", percentage: 75, description: "Good foundation from OOP, projects, and exercises" },
  { name: "PHP", percentage: 60, description: "Basic understanding, enough for simple back-end tasks" },
  { name: "C++", percentage: 70, description: "Solid grasp of fundamentals, data structures, and logic" },
  { name: "Other Tools", percentage: 65, description: "Data Analysis, SQL basics, CRM systems, etc." },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Overall Programming Proficiency: <span className="text-primary font-bold">73%</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-background p-6 rounded-lg shadow-lg hover-lift">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-primary font-bold text-lg">{skill.percentage}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="skill-bar rounded-full h-3 transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : "0%",
                      transitionDelay: `${index * 200}ms`,
                    }}
                  />
                </div>

                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
