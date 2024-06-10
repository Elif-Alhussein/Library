import React from 'react';
import BookList from '../components/BookList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <BookList />
    </div>
  );
};

export default HomePage;
