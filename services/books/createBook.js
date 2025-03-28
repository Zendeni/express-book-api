import bookData from '../../data/books.json' with { type: "json" };
import { v4 as uuid } from 'uuid';

function createBook({ title, author, isbn, pages, available, genre }) {
  const newBook = {
    id: uuid(),
    title,
    author,
    isbn,
    pages,
    available,
    genre
  };

  bookData.books.push(newBook);
  return newBook;
}

export default createBook;
