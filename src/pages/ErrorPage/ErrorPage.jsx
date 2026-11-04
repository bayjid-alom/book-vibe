
import React from 'react';
import { Link, useNavigate } from 'react-router';
import notFoundImage from "../../assets/404.png";
import { ArrowLeft, House } from 'lucide-react';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-5 py-12">

            <div className="w-full max-w-5xl grid md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">

                {/* Left Side - Illustration */}
                <div className="flex items-center justify-center">
                    <img
                        src={notFoundImage}
                        alt="Book Not Found"
                        className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-full object-contain"
                    />
                </div>

                {/* Right Side - Error Content */}
                <div className="text-center md:text-left">

                    <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-blue-600">
                        404!
                    </h1>

                    <h2 className="mt-7 text-xl sm:text-2xl font-bold uppercase tracking-wide text-slate-900">
                        Looks like you're lost!
                    </h2>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-slate-500 max-w-md mx-auto md:mx-0">
                        Oops! The book you're looking for is not available.
                        It may have been removed, moved, or doesn't exist.
                    </p>


                    {/* Action Buttons */}
                    <div className="mt-5 flex  items-center justify-center md:justify-start gap-5">

                        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">


                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-blue-500 hover:text-blue-600"
                            >
                                <House size={17} />
                                Go to Home
                            </Link>

                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-blue-500 hover:text-blue-600"
                            >
                                <ArrowLeft size={17} />
                                Go Back
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ErrorPage;
