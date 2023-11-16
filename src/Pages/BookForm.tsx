import { ChangeEvent, FormEvent, useState } from 'react'
import { Book } from './Book';

interface BookFormProps {
  onSubmit: (book: Book) => void;
}

const BookForm = (props: BookFormProps) => {
    const [bookData, setBookData] = useState<Book["bookData"]>({
      bookName: '',
      authorName: '',
      blurb: '',
      image: '',
      genre: ''
    });
    const [book, setBook] = useState<Book>({ 
      id: 0,
      bookData: { bookName: '',
      authorName: '',
      blurb: '',
      image: '',
      genre: '' }
    });
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      if (name === 'image' && event.target.files) {
        const reader = new FileReader();
        reader.onloadend = function() {
          setBookData({...bookData, [name]: reader.result as string});
        }
        reader.readAsDataURL(event.target.files[0])
      } else {
        setBookData({...bookData, [name]: value });
      }
        setBookData({...bookData, [name]: value });
    };
  
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        setBookData(bookData);
        setBook({id: Math.floor((Math.random() * 10000) + 1), bookData: bookData})

        props.onSubmit(book);

        setBook({id: 0,
          bookData: { bookName: '',
          authorName: '',
          blurb: '',
          image: '',
          genre: '' }});
        setBookData({
            bookName: '',
            authorName: '',
            blurb: '',
            image: '',
            genre: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="form-label">Book title</label>
            <input type="text" className="form-text-input" 
              name="bookName"
              value={bookData.bookName} 
              onChange={handleChange} 
              placeholder="Shantaram" required/>
          </div>
          <div>
            <label className="form-label">Author</label>
            <input type="text" className="form-text-input" 
              name="authorName"
              value={bookData.authorName} 
              onChange={handleChange} 
              placeholder="Gregory David Roberts" required/>
          </div>
          <div>
            <label className="form-label">Blurb</label>
            <input type="text" className="form-text-input" 
              name="blurb"
              value={bookData.blurb} 
              onChange={handleChange} 
              placeholder="This book is about" required/>
          </div>
          <div>
            <label className="form-label">Picture</label>
            <input type="file" className="form-text-input" 
              name="image"
              value={bookData.image}
              onChange={handleChange}
              accept="image/*"
              placeholder="book.jpg" />
          </div>
          <div>
            <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Genre
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
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
        </div>
        <button type="submit" className="submit-button">Add Book</button>
      </form>
    )
}

export default BookForm;