import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({book}) => {
    return (
        <div
            key={book.bookId}
            className="book-card group rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            {/* Book Image */}
            <div className="flex h-52 sm:h-56 items-center justify-center rounded-xl bg-[#F3F3F3] p-5 overflow-hidden">
                <img
                    src={book.image}
                    alt={book.bookName}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Category and Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                    {book.category}
                </span>

                {book.tags?.map(tag => (
                    <span
                        key={tag}
                        className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Information */}
            <div className="mt-4">
                <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
                    {book.bookName}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                    By: {book.author}
                </p>
            </div>

            {/* Dashed Divider */}
            <div className="my-5 border-t border-dashed border-gray-300" />

            {/* Footer */}
            <div className="flex flex-wrap font-bold items-center justify-between gap-3 text-sm">
                <span className="font-medium text-gray-600">
                    {book.tags?.[0] || book.category}
                </span>

                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">
                        {book.rating}
                    </span>

                    <FaRegStar className="text-gray-700" />
                </div>
            </div>
        </div>
    );
};

export default BookCard;