
const getAllReadlistFromLocalDB = () => {
    const allReadlist = localStorage.getItem("readlist");
    
    if (allReadlist) return JSON.parse(allReadlist);
    // to get as an array
    return [];
}


const addReadlistToLocalDB = (book) => {
    const allBooks = getAllReadlistFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);

    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readlist", JSON.stringify(allBooks));
    }
}
// call this function in BookProvider.jsx > handleMarkAsRead({...here})

// use in context
export { getAllReadlistFromLocalDB, addReadlistToLocalDB };