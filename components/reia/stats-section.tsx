"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StatItemProps {
  value: number
  suffix: string
  label: string
  delay: number
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCount(Math.floor(stepValue * currentStep))
      } else {
        setCount(value)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-8 text-center group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="font-[var(--font-bebas)] text-5xl sm:text-6xl text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-sm tracking-wide">
        {label}
      </div>
    </motion.div>
  )
}

const stats = [
  { value: 12000, suffix: "+", label: "累計AI診断数" },
  { value: 8, suffix: "種類", label: "投資種別カバー" },
  { value: 5.8, suffix: "%", label: "平均期待利回り提案" },
  { value: 120, suffix: "名", label: "提携アドバイザー" },
]

export function StatsSection() {
  return (
    <section id="stats" className="py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
