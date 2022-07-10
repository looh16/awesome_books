import { DateTime } from './node_modules/luxon/src/luxon.js';
import book from './modules/book.js';
import {
    time,
    List,
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
    
    if (!( bookTitle.value.length < 3 || bookAuthor.value.length < 3)) {
      
        newBook.addBook(newBook);

        bookList.innerHTML = '';
        bookTitle.value = '';
        bookAuthor.value = '';
        newBook.refreshDOM;
    }
});

window.addEventListener('DOMContentLoaded', newBook.refreshDOM);

list1.addEventListener('click', () => {
    // show focus color
    list3.style.color = '#000';
    list2.style.color = '#000';
    list1.style.color = 'rgba(43, 64, 250,1)';

    // navigation
    List.classList.remove('hide-nav');
    addBook.classList.add('hide-nav');
    contact.classList.add('hide-nav');
});

list2.addEventListener('click', () => {
    list3.style.color = '#000';
    list2.style.color = 'rgba(43, 64, 250,1)';
    list1.style.color = '#000';

    addBook.classList.remove('hide-nav');
    contact.classList.add('hide-nav');
    List.classList.add('hide-nav');
});

list3.addEventListener('click', () => {
    list3.style.color = 'rgba(43, 64, 250,1)';
    list2.style.color = '#000';
    list1.style.color = '#000';

    contact.classList.remove('hide-nav');
    List.classList.add('hide-nav');
    addBook.classList.add('hide-nav');
});






const addDate = () => {
    const date = DateTime.now();
    time.innerHTML = date.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};

window.setInterval(addDate, 1000);

