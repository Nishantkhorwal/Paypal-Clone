import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faGlobe,faAddressCard,faCreditCard,faCartShopping,faFlag,faMobile,faIdCard } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';


function Docs() {
    
  return (
    <>
    <div className='relative flex flex-col md:top-16 '>
    <div className='  flex justify-center items-start flex-col px-10 md:py-10 py-20 bg-blue-900 md:p-28 md:pb-20 w-fit'>
        <h3 className='text-gray-500 font-semibold md:text-3xl text-lg mb-4 md:mb-8'>PayPal Developer</h3>
        <h1 className='text-2xl md:text-6xl md:mb-10 md:font-bold font-bold text-white mb-4'>Build a payment solution that's right for you with PayPal for Developers</h1>
        <p className='text-white mb-6 text-sm md:text-xl md:pr-44 md:mb-12'>Whether you're building an online,mobile or in-person payment solution,create a PayPal Developer account and find the resources you need to test & go live</p>
        <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm md:text-xl px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" >Get API Credentials</button>

    </div>
    <div  className='md:px-32 md:py-10 py-10 w-full items-center px-0 '>
        <div className='flex justify-start bg-gray-200 items-center rounded-full mb-5'>
            <div  className='me-6 bg-pink-300 px-2 py-1 md:pe-5 ms-3 my-4 md:flex md:justify-center md:items-center rounded-full text-pink-800'> <FontAwesomeIcon className='hidden md:block md:me-2' icon={faClock} /> New</div>
            <p>Explore our Checkout code with the interactive Integration Builder. <a href='' className='cursor-pointer text-blue-600'>Try it now</a></p>

        </div>
        <h3 className='ps-6 font-semibold text-lg md:text-4xl md:py-8 mb-4 '>ACCEPT PAYMENTs</h3>
        <div className='flex flex-col ms-6 mb-4 md:flex-row md:w-3/5' >
            <div className='md:pe-20'>
            <h1 className='mb-4 text-xl md:text-2xl '><FontAwesomeIcon className='text-sm md:text-xl mr-2' icon={faGlobe} /> <text className='md:text-[40px]'>Online</text></h1>
            <p className='mb-4 text-lg md:text-lg'>Build a scalable checkout solution for web and mobile with our REST APIs & Javascript SDK</p>
            <p className='mb-4'><a href='' className='text-blue-800 font-semibold'>Checkout</a></p>
            <p className='mb-4'><a href='' className='text-blue-800 font-semibold'>Subscription</a></p>
            <p className='mb-4'><a href=''  className='text-blue-800 font-semibold'>Invoicing</a></p>
            <p className='mb-4'><a href='' className='text-blue-800 font-semibold'>Donate</a></p>
            </div>
            <div>
            <h1 className='mb-4 text-xl'><FontAwesomeIcon className='text-sm md:text-xl mr-2' icon={faAddressCard} /> <text className='md:text-[40px]'>In-Person </text></h1>
            <p className='mb-4 text-lg md:text-lg'>Build a scalable checkout solution for web and mobile with our REST APIs & Javascript SDK</p>
            <p className='mb-4'><a href='' className='text-blue-800 font-semibold'>Point of Sale Solutionss</a></p>
            </div>

        </div>
        <img src='Work1.png' className='md:w-[433px] md:absolute md:left-[1005px] md:top-[749px] hidden md:block   ' alt=''></img>
        <div className='flex flex-col ms-6 mb-4 md:flex-row md:w-3/5'>
            <div className='md:pe-20'>
            <h1 className='mb-4 text-xl'><FontAwesomeIcon className='text-sm md:text-xl mr-2'  icon={faCreditCard} /><text className='md:text-[40px]' >Multiparty </text></h1>
            <p className='mb-4 text-lg md:text-lg'>Build a scalable checkout solution for web and mobile with our REST APIs & Javascript SDK</p>
            <p className='mb-4'><a href='' className='text-blue-800 font-semibold'>Build a Marketplace</a></p>
            </div>
            <div>
            <h1 className='mb-4 text-xl'><FontAwesomeIcon className='text-sm md:text-xl mr-2' icon={faCartShopping} /> <text className='md:text-[40px]'>3rd-Party</text></h1>
            <p className='mb-4 text-lg md:text-lg'>Build a scalable checkout solution for web and mobile with our REST APIs & Javascript SDK</p>
            <p className='mb-4'><a href='' className='text-blue-800 font-semibold'>Partners</a></p>
            <p className='mb-4'><a href='' className='text-blue-800 font-semibold'>Plugins</a></p>
            </div>

        </div>

    </div>
    </div>
    <div className='flex md:ps-60 md:pe-48 w-full md:py-20 bg-yellow-500 md:mt-20 md:flex-row flex-col py-10'>
        <img src='work2.png' className='w-64 ms-14 mt-5 mb-4' alt=''></img>
        <div className='md:ps-44 px-14'>
            <h1 className='text-4xl mb-4'>Make Payments</h1>
            <h3 className='text-xl mb-4'>Payouts</h3>
            <p className='text-sm mb-4 md:pe-72'>Code a solution to send mass payments to contract workers, claimants, freelancers, and sellers around the world</p>
            <p><a href='' className='font-semibold text-blue-700'>Get started</a></p>
        </div>

    </div>
    <div className='py-20'>
        <h1 className='text-xl mb-8 md:text-5xl ms-5 md:ms-24 md:mb-10'>Additional Solutions</h1>
        <div className='flex flex-col md:flex-row md:px-10'>
        <div className='px-14 flex flex-col mb-6 md:pe-44'> 
            <div className='flex items-center justify-start mb-2'><FontAwesomeIcon className='me-2 text-blue-700' icon={faFlag} /> <h1 className='mb-1 text-lg'>Disputes</h1></div>
            <p className='text-sm mb-4'>Automate your dispute management, from initial claim to final resolution</p>
            <p><a href='' className='text-blue-700 font-semibold'>Get Started</a></p>

        </div>
        <div className='px-14 flex flex-col mb-6 '> 
            <div className='flex items-center justify-start mb-2'><FontAwesomeIcon className='me-2 text-blue-700' icon={faMobile}/> <h1 className='mb-1 text-lg'>Reporting</h1></div>
            <p className='text-sm mb-4'>Automate your dispute management, from initial claim to final resolution</p>
            <p><a href='' className='text-blue-700 font-semibold'>Get Started</a></p>

        </div>
        <div className='px-14 flex flex-col mb-6'> 
            <div className='flex items-center justify-start mb-2'><FontAwesomeIcon className='me-2 text-blue-700' icon={faIdCard} /> <h1 className='mb-1 text-lg'>Identity</h1></div>
            <p className='text-sm mb-4'>Automate your dispute management, from initial claim to final resolution</p>
            <p><a href='' className='text-blue-700 font-semibold'>Get Started</a></p>

        </div>
        </div>


    </div>
      
    </>
  )
}

export default Docs
