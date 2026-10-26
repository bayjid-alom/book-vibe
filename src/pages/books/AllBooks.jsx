import React, { use } from 'react';
import BookCard from '../../ui/BookCard';

const booksPromise = fetch("/booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);

    return (
        <section className="w-[94%] md:w-[90%] lg:w-[80%] mx-auto py-10 md:py-14">
            {/* Heading */}
            <div className="text-center mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Books
                </h2>
                <p className="mt-3 text-sm md:text-base text-gray-500">
                    Discover your next favorite read from our collection.
                </p>
            </div>

            {/* Books Grid */}
            <div className="book-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

                {
                    books.map(book => {
                        return <BookCard key={book.bookId} book={book}></BookCard>
                    })
                }
                
            </div>
        </section>
    );
};

export default AllBooks;