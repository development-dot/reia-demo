"use client"

import { motion } from "framer-motion"
import { Building2, Home, Building, Coins, BarChart3, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

const investmentTypes = [
  {
    icon: Home,
    title: "ワンルームマンション投資",
    description: "少額から始められる都市型投資",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    icon: Building2,
    title: "区分所有マンション投資",
    description: "安定収益と節税効果を両立",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    icon: Building,
    title: "一棟アパート・マンション",
    description: "高利回りを狙う本格投資",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  },
  {
    icon: Coins,
    title: "不動産クラウドファンディング",
    description: "1万円から始める新時代の投資",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    icon: BarChart3,
    title: "J-REIT（不動産投資信託）",
    description: "証券口座で買える不動産投資",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
  },
  {
    icon: MapPin,
    title: "相続・土地活用",
    description: "遊休地を収益化する選択肢",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
]

export function InvestmentTypesSection() {
  return (
    <section id="investment-types" className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            不動産投資の種類を知る
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            それぞれの特徴を理解し、あなたに合った投資方法を見つけましょう
          </p>
        </motion.div>

        {/* Gold gradient line */}
        <div className="gold-gradient-line w-full max-w-md mx-auto mb-12" />

        {/* Investment Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card rounded-xl overflow-hidden h-full hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="relative h-[160px] overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {type.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  詳しく見る
                  <ArrowRight className="w-4 h-4" />
                </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
