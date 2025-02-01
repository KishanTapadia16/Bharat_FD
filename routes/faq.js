import express from "express"
import Faq from "../models/Faq.js"
import { cacheMiddleware } from "../middleware/cache.js"

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const faq = new Faq(req.body)
    await faq.save()
    res.status(201).json(faq)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get("/", cacheMiddleware, async (req, res) => {
  try {
    const lang = req.query.lang || "en"
    const faqs = await Faq.find()
    const translatedFaqs = faqs.map((faq) => ({
      _id: faq._id,
      ...faq.getTranslation(lang),
    }))
    res.json(translatedFaqs)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router

