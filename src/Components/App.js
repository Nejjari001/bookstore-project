import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Header from './Header';
import DisplayBooks from './DisplayBooks';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<DisplayBooks />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
