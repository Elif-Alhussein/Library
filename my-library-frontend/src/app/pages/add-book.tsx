import React from 'react';
import AddBookForm from '../components/AddBookForm';

const AddBookPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="header">Add a New Book</h1>
      <AddBookForm />
    </div>
  );
};

export default AddBookPage;
