import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadlist from '../../components/listedBooks/ListedReadlist';
import ListedWishlist from '../../components/listedBooks/ListedWishlist';


const Books = () => {
    const { readList, wishlist } = useContext(BookContext);
    // console.log(readList);

    const [sortingType, setSortingType] = useState("");





    return (
        <div className='w-[94%] md:w-[90%] lg:w-[80%] mx-auto mb-15 md:mb-20 mt-10'>




            {/* Dropdown */}
            <div className="flex justify-end mb-4">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-0 min-h-0 h-9 w-40 border-none rounded-lg bg-[#16C60C] text-white text-sm font-semibold shadow-none hover:bg-[#14B80B]"
                    >
                        Sort by : {sortingType}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu mt-1 w-40 rounded-lg bg-[#F3F3F3] p-2 shadow-none text-left text-sm text-[#444]"
                    >
                        <li onClick={() => setSortingType("rating")}>
                            <a className="justify-center whitespace-nowrap">Rating</a>
                        </li>
                        <li onClick={() => setSortingType("pages")}>
                            <a className="justify-center whitespace-nowrap">Number of pages</a>
                        </li>
                        <li onClick={() => setSortingType("year")}>
                            <a className="justify-center whitespace-nowrap">Publisher year</a>
                        </li>
                    </ul>
                </div>
            </div>







            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>


                <TabPanel>
                    <ListedReadlist sortingType={sortingType}></ListedReadlist>
                </TabPanel>
                <TabPanel>
                    <ListedWishlist sortingType={sortingType}></ListedWishlist>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;