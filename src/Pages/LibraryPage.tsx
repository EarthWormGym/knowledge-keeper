import { ChangeEvent, useState } from 'react'

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
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="form-label">Book title</label>
            <input type="text" className="form-text-input" onChange={handleChange} value={bookName} placeholder="Shantaram" required/>
          </div>
          <div>
            <label className="form-label">Author</label>
            <input type="text" className="form-text-input" placeholder="Gregory David Roberts" required/>
          </div>
          <div>
            <label className="form-label">Genre</label>
            <input type="text" className="form-text-input" placeholder="Fiction" required/>
          </div>
          <div>
            <label className="form-label">Picture</label>
            <input type="text" className="form-text-input" placeholder="book.jpg" required/>
          </div>
        </div>
        <button type="submit" className="submit-button">Add Book</button>
      </form>
      <div>
        {books.join(', ')}
      </div>
    </>
  )
}

export default LibraryPage
