export interface Book {
    id: number;
    bookData: {
      bookName: string;
      authorName: string;
      blurb: string;
      image: string;
      genre: string;
    };
  }