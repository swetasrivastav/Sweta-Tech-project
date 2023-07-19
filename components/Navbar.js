import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import techmlogo from "../public/techmlogo.png"
import facebook from "../public/facebook.svg"
import twitter from "../public/twitter.svg"
import linkedin from "../public/linkedin.svg"

const Navbar = () => {
  return (

    <div className="navbar">
      {/* mobile */}
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li tabIndex={0}>
          <details>
            <summary>NXT.NOW™</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Industries</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Services</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Innovation</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>DigitAll</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>People</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        </ul>
      </div>
    
    </div>
    {/* desktop */}
    <div className="navbar-center hidden lg:flex">
        <div className='mx-16'>
    <Image
      src={techmlogo}
      alt="logo"
      />
      </div>
      <div className='ml-60'>
      <ul className="menu menu-horizontal px-1 ">
      <li>
          <details>
            <summary className='text-white'>NXT.NOW™</summary>
            <ul className="p-2 bg-[#414141]">
              <li><a className="text-red-700 font-semibold text-3xl ">NXT.NOW™</a></li>
              <li><a className="text-white text-lg"> Tech Mahindra has built pioneering systems, processes, 
              and solutions, for enterprise clients across<br/> the globe. Sitting at the intersection of
                 change, it’s time to deliver the future<br/> of industries. Introducing NXT.NOW™.</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary className='text-white'>Industries</summary>
            <ul className="p-2 bg-[#414141]">
              <li><a className="text-red-700 font-semibold text-3xl ">Industries</a></li>
              <li><a className="text-white text-lg"> As industries converge and new industries emerge, 
              we are re-imagining our strategy,<br/> solutions, and platforms as well. Our innovators and thought leaders
               are<br/> in continuing conversations with those who influence and shape the <br/>future of industries.</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary className='text-white'>Services</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary className='text-white'>Innovation</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary className='text-white'>DigitAll</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary className='text-white hover:scale-110 '>People</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
      </div>
    </div>
    {/* sidebar */}
<div className='ml-24'>
   <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button hidden lg:block text-white "><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-black text-white">
      {/* Sidebar content here */}
      <div className='mt-20 mb-8 ml-4'>
      <Image
      src={techmlogo}
      alt="logo"
      />
      </div>
      
      <li><a>Who We Are</a></li>
      <li><a>Our Brand</a></li>
      <li><a>Portfolio Companies</a></li>
      <li><a>Investors</a></li>
      <li><a>Contact Us</a></li>
      <div className="flex space-x-6">
      <Image
      src={facebook}
      alt="logo"
      className="w-8 h-6 my-12"
      />
       <Image
      src={twitter}
      alt="logo"
      className="w-8 h-6 my-12"
      />
        <Image
      src={linkedin}
      alt="logo"
      className="w-8 h-6 my-12 gap-6"
      />
      </div>
      </ul>
  </div>
 </div>
</div>
  </div>
  )
}

export default Navbar
