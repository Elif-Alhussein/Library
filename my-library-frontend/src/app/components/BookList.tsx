import React from 'react';
import BookItem from './BookItem';

interface BookListProps {
    books: {
        id: string;
        title: string;
        author: string;
        bookType: string;
        releaseDate: number;
    }[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <BookItem book={book} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
