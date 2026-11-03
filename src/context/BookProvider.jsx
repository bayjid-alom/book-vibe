import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([]);


    const handleMarkAsRead = (currentBook) => {
        // step-1. store book id
        // step-2. where to store
        // step-2. array or collection
        // step-3. if the book is already exist then show a toast or alert
        // step-4. if not then add the book in the array or collection
        const isExistBook = readList.find(book => book.bookId == currentBook.bookId)
        if (isExistBook) {
            toast.info("You've already added this book to your read list.");
            return;
        }
        else {
            setReadList([...readList, currentBook])
            toast.success(`${currentBook.bookName} added to your wishlist!`);
        }

        // console.log(currentBook, readList);
    }



    const handleWishlist = (currentBook) => {

        // Important condition
        const isExistInReadList = readList.find(book => book.bookId == currentBook.bookId);
        if (isExistInReadList) {
            toast.error("This book is already in your read list!");
            return;
        }

        const isExistBook = wishlist.find(book => book.bookId == currentBook.bookId)
        if (isExistBook) {
            toast.info("You've already added this book to your wishlist.");
            return;
        }
        else {
            setWishlist([...readList, currentBook])
            toast.success(`${currentBook.bookName} added to your wishlist!`);
        }


    }



    const data = {
        readList,
        setReadList,
        handleMarkAsRead,
        wishlist,
        setWishlist,
        handleWishlist
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;