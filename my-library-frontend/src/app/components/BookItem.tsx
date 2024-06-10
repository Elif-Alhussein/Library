import React from 'react';

type BookItemProps = {
  title: string;
  author: string;
  releaseDate: number;
  bookType: string;
};

const BookItem: React.FC<BookItemProps> = ({ title, author, releaseDate, bookType }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>Author: {author}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Type: {bookType}</p>
    </div>
  );
};

export default BookItem;

