import React from 'react';
import Store from '../Store/Store';
import Books from './Shared/Books';
import AddBook from './AddBook';

const DisplayBooks = () => Store.map((book) => (
  <>
    <Books key={book.id} title={book.title} author={book.author} />
    <AddBook />
  </>
));

export default DisplayBooks;
