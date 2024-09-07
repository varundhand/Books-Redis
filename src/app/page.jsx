import Link from 'next/link'

const getBooks = async () => {
  // Fetch the list of books here
}

export default async function Home() {
  return (
    <main>
      <nav>
        <h1>Books on Redis!</h1>
        <Link href="/create" className="btn">Add a new book</Link>
      </nav>

      <section>
        <h2 className="text-lg font-semibold text-gray-700">List of Books:</h2>
        {/* Loop through books and render them */}
        <div className="card">
          <h2>Book Title</h2>
          <p>Author: John Doe</p>
          <p>Rating: 9/10</p>
        </div>
        {/* Repeat cards for each book */}
      </section>
    </main>
  )
}