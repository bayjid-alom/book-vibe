import { FileText, MapPin, Users } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { BookContext } from '../../context/BookProvider';

const ListedWishlist = ({ sortingType }) => {
    const { wishlist } = useContext(BookContext);

    const [filteredWishlist, setFilteredWishlist] = useState(wishlist);
    useEffect(() => {
        if (sortingType) {
            if (sortingType === "pages") {
                const sortedData = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
                setFilteredWishlist(sortedData);
            }
            else if (sortingType === "rating") {
                const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating);
                setFilteredWishlist(sortedData);
            }
        }
        else {
            setFilteredWishlist(wishlist);
        }
    }, [sortingType, wishlist]);




    return (
        <div className="space-y-4">


            {/* Conditional empty message */}
            {
                wishlist.length === 0 && <div className="flex flex-col items-center justify-center text-center bg-[#F8FAFC] border border-gray-200 rounded-2xl py-16 md:py-20 px-5">


                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 font-serif">
                        Your Wishlist is Empty!
                    </h2>

                    <p className="text-sm text-gray-500 max-w-md mt-3 leading-6">
                        You haven't added any books to your wishlist yet.
                        Explore our collection and save your favorite books
                        for later.
                    </p>

                    <Link
                        to="/"
                        className="mt-6 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors"
                    >
                        Explore Books
                    </Link>

                </div>
            }





            {/* Wishlist Card */}
            {
                // wishlist.map(book => (
                filteredWishlist.map(book => (

                    <div
                        key={book.bookId}
                        className="flex flex-col sm:flex-row gap-4 md:gap-5 border border-gray-200 rounded-xl p-3 md:p-3.5 hover:shadow-sm transition-shadow"
                    >

                        {/* Book Image */}
                        <div className="w-full sm:w-36 md:w-36 lg:w-36 h-48 sm:h-36 shrink-0 flex items-center justify-center bg-[#F3F3F3] rounded-xl p-4">

                            <img
                                src={book.image}
                                alt={book.bookName}
                                className="w-full h-full object-contain"
                            />

                        </div>

                        {/* Book Information */}
                        <div className="flex-1 min-w-0 flex flex-col">

                            {/* Title and Author */}
                            <div>
                                <h2 className="text-lg md:text-xl font-bold font-serif text-gray-900">
                                    {book.bookName}
                                </h2>

                                <p className="text-sm text-gray-600 mt-1">
                                    By : {book.author}
                                </p>
                            </div>

                            {/* Tags and Publishing Year */}
                            <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-3">

                                <span className="text-sm font-bold text-gray-900">
                                    Tag
                                </span>

                                {
                                    book.tags?.map(tag => (
                                        <span
                                            key={tag}
                                            className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))
                                }

                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <MapPin size={15} />
                                    <span>
                                        Year of Publishing: {book.yearOfPublishing}
                                    </span>
                                </div>

                            </div>

                            {/* Publisher and Pages */}
                            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-500">

                                <div className="flex items-center gap-1.5">
                                    <Users size={15} />
                                    <span>Publisher: {book.publisher}</span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <FileText size={15} />
                                    <span>Page {book.totalPages}</span>
                                </div>

                            </div>

                            <div className="border-t border-gray-200 mt-3 mb-2.5" />

                            {/* Category, Rating and Button */}
                            <div className="flex flex-wrap items-center gap-2">

                                <span className="bg-blue-50 text-blue-500 text-xs px-3 py-1.5 rounded-full">
                                    Category: {book.category}
                                </span>

                                <span className="bg-orange-50 text-orange-400 text-xs px-3 py-1.5 rounded-full">
                                    Rating: {book.rating}
                                </span>

                                <Link
                                    to={`/bookDetails/${book.bookId}`}
                                    className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>

                    </div>

                ))
            }

        </div>
    );
};

export default ListedWishlist;