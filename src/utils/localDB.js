
const getAllReadlistFromLocalDB = () => {
    const allReadlist = localStorage.getItem("readlist");
    // console.log(allReadlist);

    if (allReadlist) return JSON.parse(allReadlist);
    // get as an array
    return [];
}

const addReadlistToLocalDB = (book) => {
    const allBooks = getAllReadlistFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId == book.bookId);

    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readlist", JSON.stringify(allBooks))
    }
}

// use in context
export { getAllReadlistFromLocalDB, addReadlistToLocalDB };