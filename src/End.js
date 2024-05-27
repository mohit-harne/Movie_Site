import React from 'react'
import { Footer } from 'flowbite-react';

const End = () => {
  return (
    <div>
        <Footer container className='bg-blue-950 rounded-none  w-[100%] shadow-none mt-[-100px] '>
      <div className="w-full text-center mt-[50px] lg:mt-[100px] md:mt-[100px]">
        <div className="w-full  justify-between sm:flex sm:items-start sm:justify-between">
        <h1 className="text-2xl text-red-700 ml-[-80px] lg:ml-[-80px] md:ml-[-100px]">
            <span className="text-white ml-24">SNEA</span>KISS
          </h1>
          <Footer.LinkGroup className='mr-[590px]  grid grid-flow-col gap-6 leading-[50px] lg:leading-7 md:leading-7 text-white'>
            <Footer.Link  href="/" >HOME</Footer.Link>
            <Footer.Link  href="/" >MOVIES</Footer.Link>
            <Footer.Link  href="/webseries" >TV SHOWS</Footer.Link>
            <Footer.Link href="/aboutus" >ABOUT US</Footer.Link>
           
          </Footer.LinkGroup>
        </div>
       <br/>
        <Footer.Copyright className='text-gray-400' href="#" by="SNEAKISS™ 2023 ALL RIGHTS RESERVED" year={2022} />
      </div>
    </Footer>
    </div>
  )
}

export default End