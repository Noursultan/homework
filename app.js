const bookTitles = [
  'The Great Gatsby',
  'To Kill a Mockingbird',
  '1984',
  'Brave New World',
  'The Catcher in the Rye',
  'Pride and Prejudice',
  'The Lord of the Rings',
  'The Hitchhiker\'s Guide to the Galaxy'
];

function separateBooksByLetterY(books) {
  const yBooks = [];
  const otherBooks = [];

  books.forEach((book) => {
    if (book.toLowerCase().includes('y')) {
      yBooks.push(book);
    } else {
      otherBooks.push(book);
    }
  });

  console.log(`Books with 'y': ${yBooks.join(', ')}`);
  console.log(`Other books: ${otherBooks.join(', ')}`);
}

separateBooksByLetterY(bookTitles);
