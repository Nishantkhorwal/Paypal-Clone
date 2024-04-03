import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWallet} from '@fortawesome/free-solid-svg-icons'

function Tools() {
  return (
    <>
    <div className='relative md:w-fit bg-yellow-100'>
        <div className='flex flex-col md:flex-row w-fit md:px-44 pb-20 '>
            <div className='w-fit mt-20 ms-10 md:ms-0 '>
                <h1 className='md:text-5xl text-3xl md:mb-20 mb-10'>Developer Tools &<br/> Resources</h1>
                <img src='work6.jpg' alt='' className='md:w-[500px] w-[300px]' ></img>

            </div>
            <div className='flex flex-col md:w-fit w-72 md:ms-44 mt-20 ms-10'>
                <div className='flex flex-col w-fit shadow-lg ps-5 pe-10 pt-4 pb-10 md:ps-10 md:pe-20 md:pt-5 md:pb-8 rounded-xl mb-4 bg-white'>
                    <div className='flex items-center justify-start mb-4'><FontAwesomeIcon className=' me-4 md:me-8 md:text-3xl' icon={faWallet} /> <h1 className='md:text-4xl md:mb-3'>Demo Portal</h1></div>
                    <p className='text-sm md:text-lg md:ms-16 ms-8 mb-3'>Explore PayPal product experiences from the customer's perspective.</p>
                    <p className='md:ms-16 ms-8 md:text-lg'><a className='font-semibold text-blue-700'>View Demo</a></p>

                </div>
                <div className='flex flex-col w-fit shadow-lg ps-5 pe-10 pt-4 pb-10 md:ps-10 md:pe-20 md:pt-5 md:pb-8 rounded-xl mb-4 bg-white'>
                    <div className='flex items-center justify-start mb-4'><FontAwesomeIcon className=' me-4 md:me-8 md:text-3xl' icon={faWallet} /> <h1 className='md:text-4xl md:mb-3'>Demo Portal</h1></div>
                    <p className='text-sm md:text-lg md:ms-16 ms-8 mb-3'>Explore PayPal product experiences from the customer's perspective.</p>
                    <p className='md:ms-16 ms-8 md:text-lg'><a className='font-semibold text-blue-700'>View Demo</a></p>

                </div>
                <div className='flex flex-col w-fit shadow-lg ps-5 pe-10 pt-4 pb-10 md:ps-10 md:pe-20 md:pt-5 md:pb-8 rounded-xl mb-4 bg-white'>
                    <div className='flex items-center justify-start mb-4'><FontAwesomeIcon className=' me-4 md:me-8 md:text-3xl' icon={faWallet} /> <h1 className='md:text-4xl md:mb-3'>Demo Portal</h1></div>
                    <p className='text-sm md:text-lg md:ms-16 ms-8 mb-3'>Explore PayPal product experiences from the customer's perspective.</p>
                    <p className='md:ms-16 ms-8 md:text-lg'><a className='font-semibold text-blue-700'>View Demo</a></p>

                </div>

            </div>

        </div>

    </div>
      
    </>
  )
}

export default Tools
