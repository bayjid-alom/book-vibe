import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadlist from '../../components/listedBooks/ListedReadlist';
import ListedWishlist from '../../components/listedBooks/ListedWishlist';


const Books = () => {
    const { readList, wishlist } = useContext(BookContext);
    // console.log(readList);
    // console.log(wishlist);




    return (
        <div className='w-[94%] md:w-[90%] lg:w-[80%] mx-auto mb-15 md:mb-20 mt-10'>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>


                <TabPanel>
                    <ListedReadlist></ListedReadlist>
                </TabPanel>
                <TabPanel>
                    <ListedWishlist></ListedWishlist>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;