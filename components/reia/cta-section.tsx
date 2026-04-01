"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Mail, ArrowRight, Check, Clock, Shield, Video } from "lucide-react"

function CalendarMock() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() // 0-indexed
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayOfWeek = new Date(year, month, 1).getDay()
  const today = now.getDate()

  // Highlight some weekdays around mid-month as available slots
  const availableDays: number[] = []
  for (let d = today + 1; d <= Math.min(today + 14, daysInMonth); d++) {
    const dow = new Date(year, month, d).getDay()
    if (dow >= 1 && dow <= 5) availableDays.push(d) // weekdays only
  }

  return (
    <div className="bg-card/50 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-foreground">{year}年{month + 1}月</span>
        <div className="flex gap-2">
          <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <Clock className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
          <div key={day} className="p-2 text-muted-foreground">{day}</div>
        ))}
        {Array.from({ length: firstDayOfWeek }, (_, i) => (
          <div key={`empty-${i}`} className="p-2" />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              availableDays.includes(i + 1)
                ? "bg-primary/20 text-primary cursor-pointer hover:bg-primary/30"
                : i + 1 === today
                  ? "bg-muted text-foreground font-medium"
                  : "text-muted-foreground/50"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contact" className="py-24 bg-background grid-texture">
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
            次のステップへ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            専門家への相談も、最新情報の取得も、すべて無料でご利用いただけます
          </p>
        </motion.div>

        {/* Gold gradient line */}
        <div className="gold-gradient-line w-full max-w-md mx-auto mb-12" />

        {/* Two Column CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Advisor Consultation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl text-foreground">
                プロに、直接聞いてみる
              </h3>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Check, label: "完全無料" },
                { icon: Shield, label: "押し売りなし" },
                { icon: Video, label: "オンライン対応" },
              ].map((feature) => (
                <span
                  key={feature.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm text-muted-foreground"
                >
                  <feature.icon className="w-3.5 h-3.5 text-primary" />
                  {feature.label}
                </span>
              ))}
            </div>

            {/* Calendar Mock */}
            <CalendarMock />

            <a
              href="#"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 rounded font-medium"
            >
              日程を選んで予約する
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl text-foreground">
                一般非公開の投資情報を受け取る
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              月1回配信。AI分析レポート・非公開物件情報・節税事例をお届けします。
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "厳選された非公開物件情報",
                "AI市場分析レポート",
                "成功事例・節税ノウハウ",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレスを入力"
                    className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded font-medium"
                >
                  無料で受け取る
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">登録が完了しました</p>
                <p className="text-sm text-muted-foreground mt-1">
                  ご登録ありがとうございます
                </p>
              </motion.div>
            )}

            <p className="text-xs text-muted-foreground mt-4 text-center">
              迷惑メールは送りません。いつでも解除できます。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
