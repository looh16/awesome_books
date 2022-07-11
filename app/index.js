import { DateTime } from '../node_modules/luxon/src/luxon.js';
import Book from '../modules/book.js';
import {
  time,
  styleOne,
  styleTwo,
  styleThree,
  list1,
  list2,
  list3,
  button,
  bookTitle,
  bookAuthor,
} from '../modules/htmlElements.js';

let newBook = new Book(bookTitle.value, bookAuthor.value);

button.addEventListener('click', (e) => {
  e.preventDefault();

  newBook = new Book(bookTitle.value, bookAuthor.value);

  if (!(bookTitle.value.length < 3 || bookAuthor.value.length < 3)) {
    newBook.addBook(newBook);

    bookTitle.value = '';
    bookAuthor.value = '';
  }
});
window.onload = newBook.refreshDOM;

list1.addEventListener('click', styleOne, newBook.refreshDOM);

list2.addEventListener('click', styleTwo);

list3.addEventListener('click', styleThree);

const setDate = () => {
  const date = DateTime.now();
  time.innerHTML = date.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};

window.setInterval(setDate, 1000);
