import bookData from '../../data/books.json' with { type: "json" };

const getBooks = (genre, available) => {
  let books = bookData.books;


  if (genre) {
    books = books.filter(book => book.genre === genre);
  }

  if (available !== undefined) {
    books = books.filter(book => book.available === JSON.parse(available));
  }

  return books;
}

export default getBooks;