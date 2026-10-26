import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId: bookParamsId } = useParams();
    // console.log(typeof bookParamsId , "<<");  // string

    const expectedBook = books.find(
        book => book.bookId === Number(bookParamsId)
    );

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = expectedBook;

    return (

        <section className="w-[94%] md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-10">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 lg:gap-10 items-start">

                {/* Book Image */}
                <div className="flex items-center justify-center rounded-xl bg-[#F3F3F3] p-8 md:p-6 lg:p-10 min-h-[350px] md:min-h-[400px] lg:min-h-[440px]">
                    <img
                        src={image}
                        alt={bookName}
                        className="w-full h-[300px] md:h-[350px] lg:h-[380px] object-contain"
                    />
                </div>


                {/* Book Information */}
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                        {bookName}
                    </h1>

                    <p className="mt-3 text-sm md:text-base text-gray-700">
                        By : {author}
                    </p>

                    <div className="border-t border-gray-200 mt-4" />

                    <p className="py-3 text-sm md:text-base text-gray-700">
                        {category}
                    </p>

                    <div className="border-t border-gray-200" />

                    {/* Review */}
                    <p className="mt-4 text-sm leading-6 text-gray-500">
                        <span className="font-bold text-gray-800">Review :</span>{' '}
                        {review}
                    </p>



                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-sm font-bold text-gray-800">
                            Tag
                        </span>

                        {tags?.map(tag => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="border-t border-gray-200 mt-4 mb-4" />



                    {/* Book Details */}
                    <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Number of Pages:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {totalPages}
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Publisher:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {publisher}
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Year of Publishing:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {yearOfPublishing}
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Rating:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {rating}
                            </span>
                        </div>
                    </div>



                    {/* Static Buttons */}
                    <div className="mt-6 flex gap-3">
                        <button className="btn btn-outline border-gray-300 bg-white px-6 text-gray-900 hover:bg-gray-100">
                            Read
                        </button>

                        <button className="btn border-none bg-[#50B8C8] px-6 text-white hover:bg-[#3DA5B5]">
                            Wishlist
                        </button>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default BookDetails;