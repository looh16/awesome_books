import { DateTime } from './node_modules/luxon/src/luxon.js';
import book from './modules/book.js';
import {
    time,
    style_one,
    style_two,
    style_three,
    list1,
    list2,
    list3,
    button,
    addBook,
    contact
} from './modules/htmlElements.js';

let newBook = new book(bookTitle.value, bookAuthor.value);


button.addEventListener('click', (e) => {
    e.preventDefault();

    newBook = new book(bookTitle.value, bookAuthor.value);
    
    if (!( bookTitle.value.length < 3 || bookAuthor.value.length < 3)) {
      
        newBook.addBook(newBook);

        bookTitle.value = '';
        bookAuthor.value = '';
        newBook.refreshDOM;
    }
});
window.onload = newBook.refreshDOM;

list1.addEventListener('click', style_one, newBook.refreshDOM);

list2.addEventListener('click', style_two);

list3.addEventListener('click', style_three);

const setDate = () => {
    const date = DateTime.now();
    time.innerHTML = date.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};

window.setInterval(setDate, 1000);

