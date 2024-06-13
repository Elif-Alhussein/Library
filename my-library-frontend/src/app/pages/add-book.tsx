import React from "react";
import AddBookForm from "../../components/AddBookForm";

const AddBookPage: React.FC = () => {
  const handleBookAdded = () => {};

  return (
    <div className="container">
      <h1 className="header">Add a New Book</h1>
      <AddBookForm onBookAdded={handleBookAdded} />
    </div>
  );
};

export default AddBookPage;
