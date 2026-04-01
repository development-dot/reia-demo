"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, TrendingUp, PieChart, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-texture">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Text Area (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block px-4 py-1.5 border border-primary/50 text-primary text-sm rounded-full tracking-wide">
                AI × 不動産投資
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground">
              <span className="block">あなたの資産に、</span>
              <span className="block gold-text">AIという判断力を。</span>
            </h1>

            {/* Subheading */}
            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl leading-relaxed">
              年収・現状を選ぶだけで、最適な不動産投資戦略をAIが提案。
              2分でわかる、本格AI診断をいますぐ体験できます。
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <a
                href="#diagnosis"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 text-lg font-medium rounded group"
              >
                AIで無料診断する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-muted-foreground text-sm">
                個人情報の入力は不要。全て選択式で回答できます。
              </p>
            </motion.div>
          </motion.div>

          {/* Right Mock Screen (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              </div>
              
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">STEP 1 / 3</div>
                <h3 className="text-xl text-foreground">あなたの「投資目的」は？</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {["老後の資産形成", "不労所得を得たい", "資産を増やしたい", "節税がしたい"].map((item, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border text-sm text-center transition-all ${
                        i === 0 
                          ? "border-primary bg-primary/10 text-primary" 
                          : "border-border text-muted-foreground hover:border-muted-foreground"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-primary rounded-full" />
                  </div>
                  <span className="text-xs text-muted-foreground">25%</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 grid grid-cols-3 gap-3"
            >
              {[
                { icon: TrendingUp, label: "期待利回り", value: "5.8%" },
                { icon: PieChart, label: "投資種別", value: "8種類" },
                { icon: Shield, label: "無料診断", value: "2分" },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-lg p-3 text-center">
                  <item.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#stats" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs tracking-wider">SCROLL</span>
            <ChevronDown className="w-5 h-5 scroll-indicator" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
