import mongoose from "mongoose"
import translate from "@vitalets/google-translate-api"

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  translations: {
    type: Map,
    of: {
      question: String,
      answer: String,
    },
  },
})

faqSchema.pre("save", async function (next) {
  if (this.isModified("question") || this.isModified("answer")) {
    const languages = ["hi", "bn", "es", "fr"] // Add more languages as needed
    for (const lang of languages) {
      const translatedQuestion = await translate(this.question, { to: lang })
      const translatedAnswer = await translate(this.answer, { to: lang })
      this.translations.set(lang, {
        question: translatedQuestion.text,
        answer: translatedAnswer.text,
      })
    }
  }
  next()
})

faqSchema.methods.getTranslation = function (lang) {
  if (this.translations.has(lang)) {
    return this.translations.get(lang)
  }
  return {
    question: this.question,
    answer: this.answer,
  }
}

const Faq = mongoose.model("Faq", faqSchema)

export default Faq

