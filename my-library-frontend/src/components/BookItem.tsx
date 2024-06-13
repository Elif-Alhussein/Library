import React from "react";

interface BookItemProps {
  book: {
    id: string;
    title: string;
    author: string;
    bookType: string;
    releaseDate: number;
  };
}


const BookItem: React.FC<BookItemProps> = ({ book }) => {
  console.log(book);
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">By: {book.author}</p>
          <p className="text-gray-600">Type: {book.bookType}</p>
        </div>
        <p className="text-gray-600">Release Date: {book.releaseDate}</p>
      </div>
    </div>
  );
};

export default BookItem;
