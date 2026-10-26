import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/hompage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: '/books',
                Component: Books
            },
            {
                path: '/bookDetails/:bookId',
                Component: BookDetails,
                loader: () => fetch('/booksData.json')
            }
        ],

        errorElement: <ErrorPage />
    }
])
