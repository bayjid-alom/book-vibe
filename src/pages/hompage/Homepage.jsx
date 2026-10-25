import React from 'react';
import { Link } from 'react-router';
import bannerBook from '../../assets/banner-book.png';

const Homepage = () => {
    return (
        <main className="w-[94%] md:w-[90%] lg:w-[80%] mx-auto mb-15 md:mb-20 lg:mb-30">
            <section className="mt-6 md:mt-10 rounded-2xl md:rounded-3xl bg-[#F3F3F3] overflow-hidden">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16">

                    {/* Banner Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                            Books to freshen up your bookshelf
                        </h1>

                        <p className="mt-4 max-w-lg mx-auto md:mx-0 text-sm sm:text-base leading-7 text-gray-600">
                            Discover your next favorite read from our collection
                            of inspiring stories, timeless classics, and exciting
                            new adventures.
                        </p>

                        <Link
                            to="/books"
                            className="btn mt-6 min-h-12 rounded-lg border-none bg-[#23BE0A] px-7 text-base font-semibold text-white shadow-none hover:bg-green-700"
                        >
                            View The List
                        </Link>
                    </div>

                    {/* Banner Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src={bannerBook}
                            alt="A collection of books"
                            className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px] h-auto object-contain"
                        />
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Homepage;