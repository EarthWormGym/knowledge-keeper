import { useState } from 'react';
import BookForm from './BookForm';
import BookCard from './BookCard';
import { Book } from './Book';

const LibraryPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    const newBooks = [book, ...books]
    
    setBooks(newBooks);
  };

  const removeBook = (id: number) => {
    const removeArr = [...books].filter((book: Book) => book.id !== id)

    setBooks(removeArr);
  };

  return (
    <>
      <h1>Library</h1>
      <BookForm onSubmit={addBook}/>
      <div className="list-container">
        <BookCard books={books} removeBook={removeBook}/>
      </div>
    </>
  )
}

export default LibraryPage
