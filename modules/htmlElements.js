const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookList = document.getElementById('bookList');
const button = document.getElementById('add');
const time = document.getElementById('time');

// grabbing lists
const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');
const list3 = document.querySelector('.list3');

// tagging elements
const addBook = document.getElementById('form');
const List = document.getElementById('list');
const contact = document.getElementById('contact');

const styleOne = () => {
  // show focus color
  list3.style.color = '#000';
  list2.style.color = '#000';
  list1.style.color = 'rgba(43, 64, 250,1)';

  // navigation
  List.classList.remove('hide-nav');
  addBook.classList.add('hide-nav');
  contact.classList.add('hide-nav');
};

const styleTwo = () => {
  list3.style.color = '#000';
  list2.style.color = 'rgba(43, 64, 250,1)';
  list1.style.color = '#000';

  addBook.classList.remove('hide-nav');
  contact.classList.add('hide-nav');
  List.classList.add('hide-nav');
};

const styleThree = () => {
  list3.style.color = 'rgba(43, 64, 250,1)';
  list2.style.color = '#000';
  list1.style.color = '#000';

  contact.classList.remove('hide-nav');
  List.classList.add('hide-nav');
  addBook.classList.add('hide-nav');
};

export {
  bookTitle,
  bookAuthor,
  bookList,
  button,
  time,
  list1,
  list2,
  list3,
  styleOne,
  styleTwo,
  styleThree,
  addBook,
  contact,
};