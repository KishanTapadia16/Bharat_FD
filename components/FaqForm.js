import { useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

const FaqForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ question, answer })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter question"
        required
      />
      <CKEditor
        editor={ClassicEditor}
        data={answer}
        onChange={(event, editor) => {
          setAnswer(editor.getData())
        }}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FaqForm

