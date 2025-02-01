import { useState, useEffect } from "react"
import FaqForm from "./FaqForm"

const AdminPanel = () => {
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    fetchFaqs()
  }, [])

  const fetchFaqs = async () => {
    const response = await fetch("/api/faqs")
    const data = await response.json()
    setFaqs(data)
  }

  const handleSubmit = async (faqData) => {
    await fetch("/api/faqs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(faqData),
    })
    fetchFaqs()
  }

  return (
    <div>
      <h1>FAQ Admin Panel</h1>
      <FaqForm onSubmit={handleSubmit} />
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <h3>{faq.question}</h3>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminPanel

