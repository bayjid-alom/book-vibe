## Book Vibe

https://book-vibe-bookshelf.surge.sh/




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




