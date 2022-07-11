import { bookList } from './htmlElements.js';

let allBooks = [];

class Book {
    static count = 1;

    constructor(name, author) {
      /* eslint-disable no-plusplus */
      this.id = this.constructor.count++;
      this.name = name;
      this.author = author;
    }

    getBooks = () => {
      const books = JSON.parse(localStorage.getItem('bookList'));
      return books || [];
    };

    addBook = (book) => {
      const books = this.getBooks();
      books.unshift(book);
      localStorage.setItem('bookList', JSON.stringify(books));
    };

     refreshDOM = () => {
       allBooks = JSON.parse(localStorage.getItem('bookList'));
       allBooks.forEach((book) => {
         const bookDetails = `"${book.name}" by ${book.author}`;
         const bookId = book.id;
         const removeBtn = document.createElement('button');
         this.btn(removeBtn);
         const newBook = document.createElement('tr');
         const newTitle = document.createElement('td');
         newTitle.innerText = bookDetails;
         newBook.id = bookId;
         newBook.appendChild(newTitle);
         newBook.appendChild(removeBtn);
         bookList.appendChild(newBook);
       });
     };

      btn = (element) => {
        element.innerText = 'Remove';
        element.classList.add('show-color');
        element.addEventListener('click', (e) => {
          const { id } = e.target.parentNode;
          allBooks = allBooks.filter((book) => book.id.toString() !== id.toString());
          localStorage.setItem('bookList', JSON.stringify(allBooks)); // eslint-disable-next-line
          location.reload();
        });
      }
}

export default Book;