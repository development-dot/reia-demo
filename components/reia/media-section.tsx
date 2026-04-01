"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const categories = ["すべて", "不動産投資", "節税", "相続", "資産運用", "売却"]

const articles = [
  {
    category: "不動産投資",
    title: "2026年版｜ワンルームマンション投資のメリット・デメリットを徹底解説",
    date: "2026.01.15",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80",
  },
  {
    category: "節税",
    title: "不動産投資で節税できる仕組みとは？確定申告の基本も解説",
    date: "2026.01.12",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    category: "相続",
    title: "相続した不動産、売る？貸す？AIが最適な選択肢を提案",
    date: "2026.01.10",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    category: "不動産投資",
    title: "不動産クラウドファンディングとは？少額から始める新しい投資法",
    date: "2026.01.08",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
  },
  {
    category: "資産運用",
    title: "年収600万円からできる不動産投資の始め方完全ガイド",
    date: "2026.01.05",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    category: "売却",
    title: "マンション売却のベストタイミングとAI査定の活用術",
    date: "2026.01.02",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
]

export function MediaSection() {
  const [activeCategory, setActiveCategory] = useState("すべて")

  const filteredArticles = activeCategory === "すべて"
    ? articles
    : articles.filter((article) => article.category === activeCategory)

  return (
    <section id="media" className="py-24 bg-background grid-texture">
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
            不動産×お金の総合メディア
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            投資の基礎知識から最新トレンドまで、資産運用に役立つ情報をお届けします
          </p>
        </motion.div>

        {/* Gold gradient line */}
        <div className="gold-gradient-line w-full max-w-md mx-auto mb-12" />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-foreground font-medium leading-relaxed mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      読む
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
