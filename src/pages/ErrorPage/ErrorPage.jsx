
import React from 'react';
import { Link, useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-6 py-12">
            <div className="max-w-5xl w-full grid md:grid-cols-2 items-center gap-10">

                {/* 404 Illustration */}
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-64 h-64 bg-blue-300/30 blur-3xl rounded-full"></div>

                    <div className="relative text-center">
                        <h1 className="text-8xl sm:text-9xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                            404
                        </h1>

                        <div className="mt-4 inline-block rounded-2xl border border-blue-100 bg-white px-6 py-4 shadow-xl shadow-blue-100/50">
                            <p className="text-5xl">🚀</p>
                            <p className="mt-2 font-semibold text-slate-700">
                                Lost in Space?
                            </p>
                        </div>

                        <span className="absolute top-0 right-0 text-3xl text-blue-400">✦</span>
                        <span className="absolute bottom-12 -left-4 text-3xl text-indigo-400">✧</span>
                    </div>
                </div>

                {/* Error Message */}
                <div className="text-center md:text-left">
                    <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold tracking-wide text-blue-700">
                        PAGE NOT FOUND
                    </span>

                    <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
                        Oops! This page
                        <span className="block mt-2 text-blue-600">
                            went missing.
                        </span>
                    </h2>

                    <p className="mt-5 text-base sm:text-lg leading-8 text-slate-500">
                        The page you are looking for doesn't exist or may have been moved.
                        Don't worry, let's get you back on track.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/"
                            className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700 text-center"
                        >
                            Back to Home →
                        </Link>

                        <button
                            onClick={() => navigate(-1)}
                            className="rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                        >
                            ← Go Back
                        </button>
                    </div>

                    <p className="mt-8 text-sm text-slate-400">
                        Error 404 · Page Not Found
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;