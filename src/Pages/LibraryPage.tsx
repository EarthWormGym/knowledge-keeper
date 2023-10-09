import { ChangeEvent, useState } from 'react'
import '../CSS/App.css'

function LibraryPage() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookName(e.target.value)
  };

  const addBook = () => {
    setBooks([...books, bookName]);
    setBookName('');
  }

  return (
    <>
      <h1>Library</h1>
      <div className="card">
        <input type="text" onChange={handleChange} value={bookName}></input>
        <button onClick={addBook}>Add book name</button>
        <p>{books.join(', ')}</p>
      </div>
    </>
  )
}

export default LibraryPage
