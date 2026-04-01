"use client"

import { motion } from "framer-motion"
import { Sparkles, BookOpen, Users, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: "AI診断（2分）",
    description: "あなたの投資タイプを把握",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "メディアで学ぶ",
    description: "不動産×お金の知識をつける",
  },
  {
    number: "03",
    icon: Users,
    title: "アドバイザーに相談（無料）",
    description: "実際のアクションを決める",
  },
]

export function FlowSection() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl text-[#0A1628] font-semibold mb-4">
            3ステップではじめる
          </h2>
          <p className="text-[#4A6580] max-w-2xl mx-auto">
            REIAは、AI診断から専門家への相談まで、一貫してサポートします
          </p>
        </motion.div>

        {/* Gold gradient line */}
        <div className="gold-gradient-line w-full max-w-md mx-auto mb-12" />

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 relative">
          {/* Connecting lines (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 -translate-y-1/2">
            <div className="flex items-center justify-between px-8">
              <ArrowRight className="w-6 h-6 text-primary/50" />
              <ArrowRight className="w-6 h-6 text-primary/50" />
            </div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="glass-card rounded-xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
                {/* Step number */}
                <div className="font-[var(--font-bebas)] text-5xl text-primary/30 mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
