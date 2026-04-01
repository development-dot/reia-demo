"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, Building2, Coins, TrendingUp, PiggyBank } from "lucide-react"

// Step 1: Investment Purpose Options
const purposeOptions = [
  { id: "retirement", label: "老後の資産形成", icon: PiggyBank },
  { id: "passive-income", label: "不労所得を得たい", icon: Coins },
  { id: "grow-assets", label: "資産を増やしたい", icon: TrendingUp },
  { id: "inheritance", label: "相続対策がしたい", icon: Building2 },
  { id: "tax-saving", label: "節税がしたい", icon: Coins },
  { id: "sell-utilize", label: "不動産を売りたい・活用したい", icon: Building2 },
]

// Step 2: Financial Status Options
const incomeOptions = [
  "〜400万円",
  "400〜600万円",
  "600〜800万円",
  "800〜1,200万円",
  "1,200万円以上",
]

const savingsOptions = [
  "〜100万円",
  "100〜300万円",
  "300〜500万円",
  "500〜1,000万円",
  "1,000万円以上",
]

const propertyOptions = [
  "持っていない",
  "自宅のみ",
  "投資物件あり",
]

// Step 3: Concerns Options
const concernOptions = [
  "リスクをできるだけ抑えたい",
  "小額から始めたい",
  "管理の手間をかけたくない",
  "節税効果を重視したい",
  "長期的に安定した収益がほしい",
  "まずは少額で試してみたい",
]

// Result recommendations based on selections
const recommendations = [
  {
    name: "小口不動産クラウドファンディング",
    match: 92,
    reason: "少額から始められ、管理の手間がかからないため、あなたの投資スタイルに最適です。",
  },
  {
    name: "ワンルームマンション投資",
    match: 78,
    reason: "都市部の安定した需要と、節税効果を両立できる投資形態です。",
  },
  {
    name: "J-REIT（不動産投資信託）",
    match: 61,
    reason: "証券口座で手軽に購入でき、分散投資によるリスク低減が可能です。",
  },
  {
    name: "区分所有マンション投資",
    match: 54,
    reason: "長期的な資産形成と安定した家賃収入が期待できます。",
  },
]

export function DiagnosisSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null)
  const [selectedIncome, setSelectedIncome] = useState<string | null>(null)
  const [selectedSavings, setSelectedSavings] = useState<string | null>(null)
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([])

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedPurpose !== null
      case 2:
        return selectedIncome !== null && selectedSavings !== null && selectedProperty !== null
      case 3:
        return selectedConcerns.length > 0
      default:
        return true
    }
  }

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleConcernToggle = (concern: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : [...prev, concern]
    )
  }

  const handleRestart = () => {
    setCurrentStep(1)
    setSelectedPurpose(null)
    setSelectedIncome(null)
    setSelectedSavings(null)
    setSelectedProperty(null)
    setSelectedConcerns([])
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section id="diagnosis" className="py-24 bg-background grid-texture">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            2分で完了するAI資産運用診断
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            あなたに合った不動産投資の形を、AIが提案します。個人情報の入力は不要です。
          </p>
        </motion.div>

        {/* Gold gradient line */}
        <div className="gold-gradient-line w-full max-w-md mx-auto mb-12" />

        {/* Diagnosis Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10"
        >
          {/* Progress Bar */}
          {currentStep < 4 && (
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>STEP {currentStep} / {totalSteps - 1}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Steps Content */}
          <AnimatePresence mode="wait" custom={currentStep}>
            {/* Step 1: Investment Purpose */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl text-foreground mb-6">
                  あなたの「投資目的」は？
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {purposeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedPurpose(option.id)}
                      className={`p-4 rounded-lg border text-left transition-all duration-200 group hover:-translate-y-0.5 ${
                        selectedPurpose === option.id
                          ? "border-primary bg-primary/10 selection-glow"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <option.icon className={`w-5 h-5 ${selectedPurpose === option.id ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={selectedPurpose === option.id ? "text-primary" : "text-foreground"}>
                          {option.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Financial Status */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h3 className="text-xl sm:text-2xl text-foreground mb-6">
                  現在の「資産状況」を教えてください
                </h3>

                {/* Income */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-3">年収</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                    {incomeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedIncome(option)}
                        className={`p-3 rounded-lg border text-sm text-center transition-all duration-200 ${
                          selectedIncome === option
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-foreground hover:border-muted-foreground"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Savings */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-3">貯金・金融資産</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                    {savingsOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedSavings(option)}
                        className={`p-3 rounded-lg border text-sm text-center transition-all duration-200 ${
                          selectedSavings === option
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-foreground hover:border-muted-foreground"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-3">不動産保有状況</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {propertyOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedProperty(option)}
                        className={`p-3 rounded-lg border text-sm text-center transition-all duration-200 ${
                          selectedProperty === option
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-foreground hover:border-muted-foreground"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Concerns */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl text-foreground mb-2">
                  気になることを選んでください
                </h3>
                <p className="text-sm text-muted-foreground mb-6">複数選択可</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {concernOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleConcernToggle(option)}
                      className={`p-4 rounded-lg border text-left transition-all duration-200 flex items-center gap-3 ${
                        selectedConcerns.includes(option)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                        selectedConcerns.includes(option)
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}>
                        {selectedConcerns.includes(option) && (
                          <Check className="w-3 h-3 text-primary-foreground" />
                        )}
                      </div>
                      <span className={selectedConcerns.includes(option) ? "text-primary" : "text-foreground"}>
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Results */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/50 text-primary text-sm rounded-full mb-4">
                    <Check className="w-4 h-4" />
                    診断完了
                  </div>
                  <h3 className="font-[var(--font-cormorant)] text-2xl sm:text-3xl text-foreground">
                    あなたへのAI診断結果
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {recommendations.map((rec, index) => (
                    <motion.div
                      key={rec.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="glass-card rounded-xl p-5"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="text-lg text-foreground font-medium">{rec.name}</h4>
                        <span className="text-primary font-[var(--font-bebas)] text-xl whitespace-nowrap">
                          {rec.match}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${rec.match}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.reason}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 rounded font-medium"
                  >
                    アドバイザーに無料相談する
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 border border-primary text-primary hover:bg-primary/10 transition-all duration-300 rounded font-medium"
                  >
                    非公開の投資情報を受け取る
                  </a>
                </div>

                <button
                  onClick={handleRestart}
                  className="w-full mt-4 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  診断をやり直す
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                  currentStep === 1
                    ? "text-muted-foreground/50 cursor-not-allowed"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                戻る
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded transition-all duration-300 ${
                  canProceed()
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                {currentStep === 3 ? "診断結果を見る" : "次へ"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
