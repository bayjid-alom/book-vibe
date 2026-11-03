import React, { use, useContext } from 'react';
import { BookContext } from '../../context/BookProvider';


const Books = () => {
    const { readList, wishlist } = useContext(BookContext);
    // console.log(readList);
    // console.log(wishlist);




    return (
        <div className='w-[94%] md:w-[90%] lg:w-[80%] mx-auto mb-15 md:mb-20 mt-10'>
            <p>Wishlist : {readList.length}</p>
            <p>Wishlist : {wishlist.length}</p>
        </div>
    );
};

export default Books;