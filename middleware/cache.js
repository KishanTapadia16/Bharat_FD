import { createClient } from "redis"

const client = createClient()

client.on("error", (err) => console.log("Redis Client Error", err))

await client.connect()

export const cacheMiddleware = async (req, res, next) => {
  const lang = req.query.lang || "en"
  const key = `faqs_${lang}`

  try {
    const cachedFaqs = await client.get(key)
    if (cachedFaqs) {
      res.json(JSON.parse(cachedFaqs))
    } else {
      res.sendResponse = res.json
      res.json = (body) => {
        client.setEx(key, 3600, JSON.stringify(body))
        res.sendResponse(body)
      }
      next()
    }
  } catch (error) {
    next()
  }
}

