import { RiCloseCircleLine } from 'react-icons/ri';
import { Book } from './Book';

interface BookCardProps {
    books: Book[];
    removeBook: (id: number) => void;
}

const BookCard = ({books, removeBook}: BookCardProps) => {

    return books.map((book: Book, index: number) => (
        <div className="book" key={index}>
            <div className="bookCard" key={book.id}>
                <div className="bookCard-header">
                    <img src={book.bookData.image} />
                </div>
                <p>{book.bookData.genre}</p>
                <div className="bookCard-body">
                    <h4>
                        {book.bookData.bookName}
                    </h4>
                    <h5>Author:</h5>
                    <p>
                        {book.bookData.authorName}
                    </p>
                    <h5>Blurb:</h5>
                    <p>
                        {book.bookData.blurb}
                    </p>
                    <h5>Genre:</h5>
                    <p>
                        {book.bookData.genre}
                    </p>
                </div>
                <div className="icons">
                    <RiCloseCircleLine 
                    onClick={() => removeBook(book.id)}
                    className="delete-icon"
                    />
                </div>
            </div>
        </div>
    ));
}

export default BookCard;