import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="bg-white light:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b ">
                <div class="w-screen-xl flex flex-wrap items-center justify-between md:ms-12 md:p-4">
                    <span class="self-center text-4xl font-extrabold whitespace-nowrap light:text-black "><text className='text-blue-900'>Pay</text><text className='text-blue-500'>Pal</text></span>
                    <span className='self-end text-xl font-semibold whitespace-nowrap text-gray-400 absolute left-[190px] hidden md:block'>Developer</span>
                    <button type="submit" class="items-center py-2.5 px-6 ms-2 text-sm font-medium text-blue-700 bg-transparent rounded-full border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  relative left-[110px] hidden md:inline-flex">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>

                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse me-5">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-4">Log in to Dashboard</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="md:items-end items-center md:justify-end justify-between hidden w-full md:flex md:w-1/2 md:order-1 lg:ms-[279px]" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href='#1' class="block py-2 px-3 text-black  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"  aria-current="page">Docs</a>
                            </li>
                            <li>
                                <a href='#2' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 light:text-white md:dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">APIs & SDKs</a>
                            </li>
                            <li>
                                <a href='#3' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tools</a>
                            </li>
                            <li>
                                <a href='#4' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            



        </>
    )
}

export default Navbar

