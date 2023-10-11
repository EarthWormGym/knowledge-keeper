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
            <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Genre
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Non-fiction</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Fiction</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Historical</a>
            </div>
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
