import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  const { bookId } = useParams() // TODO: Use bookId from route
  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(bookId).then(({ data }) => setBook(data))
  }, [bookId])

  if (!book) return <h3>Loading book...</h3>

  return (
    <div>
      <Book book={book} showDetail />
      <Link to="/library">Back to Catalog</Link>
    </div>
  )
}

export default BookDetail
