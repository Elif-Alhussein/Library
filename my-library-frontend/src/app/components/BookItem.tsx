import React from 'react';

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
    return (
        <div>
            <h3>{book.title}</h3>
            <p>By: {book.author}</p>
            <p>Type: {book.bookType}</p>
            <p>Release Date: {book.releaseDate}</p>
        </div>
    );
};

export default BookItem;

