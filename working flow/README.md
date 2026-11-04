## Book Vibe






after load and display all books.
then if someone click a  book card....details page e Link hoy,,navigate hobe details page e niye zabe

 {
    path: '/bookDetails/:id',
    Component: BookDetails
}

Card er div name change kore Link" kore dibo, cz click korle navigate korte hobe

```
<Link
    to={`/bookDetails/${book.bookId}`}
    key={book.bookId}
    className="book-card group rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
```

- {id: '5'}

BookDetails.jsx e ekhon...data gulo niye aste hobe useLoaderData()/ Promise,use diye




Mark as Read > already read this book
Add to Wishlist > Reader want to read it 
>> Database e rakhte hoy


But, amra locally rakhbo
for thakt

BookDetails.jsx
create a function name : 
const handleMarkAsRead

```
const handleMarkAsRead = () => {
    // step-1. store book id
    // step-2. where to store
    // step-2. array or collection
    // step-3. if the book is already exist then show a toast or alert
    // step-4. if not then add the book in the array or collection
}
```
<br>




// BookDetails to Listed Books.jsx e nite hobe : use Context api
contexst make kore nite hobe

context > BookProvider.jsx

main.jsx file e >>>>

```
Before :
<StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
```

```
After :
 <StrictMode>

    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>
    
  </StrictMode>,
```

data use in another file :
  const bookContext = useContext(BookContext)



Listed Books.jsx >>>  useContext(BookContext)...<here>












