import request from "supertest"
import app from "../app.js"
import mongoose from "mongoose"

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe("FAQ API", () => {
  it("should create a new FAQ", async () => {
    const res = await request(app).post("/api/faqs").send({
      question: "Test question?",
      answer: "Test answer.",
    })
    expect(res.statusCode).toBe(201)
    expect(res.body.question).toBe("Test question?")
  })

  it("should get all FAQs", async () => {
    const res = await request(app).get("/api/faqs")
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBeTruthy()
  })
})

