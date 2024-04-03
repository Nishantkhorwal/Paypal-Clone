import React from 'react'

function Support() {
  return (
    <>
    <div className='flex flex-col md:flex-row pb-20'>
        <div className='flex flex-col md:ps-44 pt-20 '>
            <h1 className='md:text-5xl text-2xl ms-3 md:ms-0 mb-4'>Looking for Something Else?</h1>
            <p className='mb-8 ms-3 md:ms-0'>If you need additional help, check out our support articles, community resources, and more.</p>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 ms-2 md:ms-0 py-2.5 text-center me-2 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-44">Find Support
            </button>
            <div className='flex md:ms-2 ms-4'> <p className='md:me-8 me-4 font-semibold'>FAQs</p>  <p className='md:me-8 me-4 font-semibold'>Communities</p>  <p className='md:me-8 me-4 font-semibold'>Blog</p>  <p className= 'md:me-8 me-4 font-semibold'>Docs Archive</p></div>


        </div>
        <div>
            <img src='work5.png' className='w-[688px] mt-10'></img>
        </div>

    </div>
      
    </>
  )
}

export default Support
