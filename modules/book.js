import { bookTitle, bookList } from './htmlElements.js';

 class Book {

    static count = 0;

    constructor(name, author) {
        this.id = ++this.constructor.count;
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
        let allBooks = [];
        allBooks = JSON.parse(localStorage.getItem('bookList'));
        allBooks.forEach((book) => {
          bookTitle = `"${book.name}" by ${book.author}`;
          const bookId = book.id;
          const removeBtn = document.createElement('button');
          removeBtn.innerText = 'Remove';
          removeBtn.classList.add('show-color');
          removeBtn.addEventListener('click', (e) => {
            const { id } = e.target.parentNode;
            allBooks = allBooks.filter((book) => book.id.toString() !== id.toString());
            localStorage.setItem('bookList', JSON.stringify(allBooks)); // eslint-disable-next-line
            location.reload();
          });
          const newBook = document.createElement('tr');
          const newTitle = document.createElement('td');
          newTitle.innerText = bookTitle;
          newBook.id = bookId;
          newBook.appendChild(newTitle);
          newBook.appendChild(removeBtn);
          bookList.appendChild(newBook);
        });

      };
      
}

export default Book;