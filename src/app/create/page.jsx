'use client'

import { createBook } from '@/app/actions/create'
import { useState } from "react"

export default function Create() {
  const [error, setError] = useState('')

  async function handleSubmit(formData) {
    const result = await createBook(formData)

    if (result?.error) {
      setError(result.error)
    }
  }

  return (
    <main>
      <form action={handleSubmit}>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add a New Book</h2>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="author" placeholder="Author" />
        <input type="number" name="rating" max={10} min={1} placeholder="Rating (1-10)" />
        <textarea name="blurb" placeholder="Blurb..." rows="5"></textarea>
        <button type="submit" className="btn">Add Book</button>
        {error && <div className="error">{error}</div>}
      </form>
    </main>
  )
}