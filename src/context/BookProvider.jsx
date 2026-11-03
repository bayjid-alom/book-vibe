import React, { createContext, useState } from 'react';

export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        // step-1. store book id
        // step-2. where to store
        // step-2. array or collection
        // step-3. if the book is already exist then show a toast or alert
        // step-4. if not then add the book in the array or collection
        const isExistBook = readList.find(book => book.bookId == currentBook.bookId)
        if (isExistBook) {
            alert("The book is already exist.")
        }
        else {
            setReadList([...readList, currentBook])
            alert(`${currentBook.bookName} is added to list.`)
        }

        // console.log(currentBook, readList);
    }



    const data = {
        readList,
        setReadList,
        handleMarkAsRead,
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;