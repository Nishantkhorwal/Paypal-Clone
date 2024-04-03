import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCodeCompare} from '@fortawesome/free-solid-svg-icons'

function APIs() {
  return (
    <>
    <div className='relative md:py-20'>
        <h1 className='ps-12 mb-6 text-2xl md:text-5xl md:mb-10 md:ms-28'>Explore Our APIs & SDKs</h1>
        <div className='flex flex-col md:flex-row-reverse md:w-4/5  md:me-10 md:ms-28 md:mb-20'>
        <div className='flex flex-col w-3/4 md:w-[630px] ms-12 rounded-xl shadow-lg pb-8 mb-10 md:mb-0'>
            <div className='bg-green-400 py-10 mb-5 flex items-center justify-center rounded-t-xl'>
                <img src='work3.png' className='w-[7rem] h-[5em] '></img>
                <h4 className='relative left-[-72px] text-lg text-white'>API</h4>


            </div>
            <h1 className='text-xl  ps-4 mb-4'>APIs</h1>
            <p className='text-sm  ps-4 pe-11 mb-4'>PayPal offers APIs for new and legacy integrations.</p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>Rest APIs</a></p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>NVP/SOAP APIs</a></p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>GraphQL APIs</a></p>


        </div>
        <div className='flex flex-col w-3/4 ms-12 rounded-xl shadow-lg pb-8 mb-10 md:mb-0 md:w-[630px]'>
            <div className='bg-green-400 py-10 mb-5 flex items-center justify-center rounded-t-xl'>
                <img src='work3.png' className='w-[7rem] h-[5em] '></img>
                <h4 className='relative left-[-72px] text-lg text-white'>API</h4>


            </div>
            <h1 className='text-xl  ps-4 mb-4'>APIs</h1>
            <p className='text-sm  ps-4 pe-11 mb-4'>PayPal offers APIs for new and legacy integrations.</p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>Rest APIs</a></p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>NVP/SOAP APIs</a></p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>GraphQL APIs</a></p>


        </div>
        <div className='flex flex-col w-3/4 ms-12 rounded-xl shadow-lg pb-8 md:w-[630px]'>
            <div className='bg-green-400 py-10 mb-5 flex items-center justify-center rounded-t-xl'>
                <img src='work3.png' className='w-[7rem] h-[5em] '></img>
                <h4 className='relative left-[-72px] text-lg text-white'>API</h4>


            </div>
            <h1 className='text-xl  ps-4 mb-4'>APIs</h1>
            <p className='text-sm  ps-4 pe-11 mb-4'>PayPal offers APIs for new and legacy integrations.</p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>Rest APIs</a></p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>NVP/SOAP APIs</a></p>
            <p><a className=' ps-4 font-semibold text-blue-700 mb-3'>GraphQL APIs</a></p>


        </div>

        </div>

        <div className=' mt-10 md:mt-0 ms-10 w-4/5 flex justify-start bg-gray-200 items-center rounded-full mb-5 md:w-4/5 md:ms-36 md:py-5'>
            <div className='ms-5 me-4'><FontAwesomeIcon className='text-lg ' icon={faCodeCompare} /></div>
            <p>To browse PayPal SDKs, see our GitHub library. <a className='cursor-pointer text-blue-600'>Learn More</a></p>

        </div>

    </div>
      
    </>
  )
}

export default APIs
