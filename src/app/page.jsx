import { client } from '@/lib/db'
import Link from 'next/link'

// Fetch the list of books here from redis
const getBooks = async () => {
  try {
    // Fetch the sorted set of books (zRangeWithScores)
    const result = await client.zRangeWithScores('books', 0, -1)

    // Check if books exist in the sorted set
    if (!result.length) {
      return []; // Return an empty array if no books found
    }

    // Fetch the details for each book from the hash
    const books = await Promise.all(result.map(async (b) => {
      const bookData = await client.hGetAll(`books:${b.score}`)
      
      // If book data exists, return it with the score (optional)
      return bookData.title ? { ...bookData, score: b.score } : null
    }))

    // Filter out any null values in case some books were not found
    return books.filter(book => book !== null)
    
  } catch (error) {
    console.error('Error fetching books:', error)
    return [] // Return an empty array in case of an error
  }
}

export default async function Home() {
  const books = await getBooks()
  // console.log('books:', books)
  
  return (
    <main>
      <nav>
        <h1>Books on Redis!</h1>
        <Link href="/create" className="btn">Add a new book</Link>
      </nav>

      <section>
        <h2 className="text-lg font-semibold text-gray-700">List of Books:</h2>
        {/* Loop through books and render them */}
        {/* {console.log(books)} */}
        {books.length ? (
          books.map((book, index) => (
            <div key={index} className="card">
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Rating: {book.rating}/10</p>
            </div>
          ))
        ) : (
          <p>No books available</p>
        )}
      </section>
    </main>
  )
}