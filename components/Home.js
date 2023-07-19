import React from 'react'
import Image from 'next/image'
import Image01 from "../public/Image01.PNG"
import Image02 from "../public/Image02.PNG"
import Navbar from './Navbar'

import Image06 from "../public/Image06.PNG"
import Image04 from "../public/Image04.png"


const Home = () => {
  return (
    <>
    
    <div className='relative h-full'>
  <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full ">
  <Image src={Image01} alt="Picture of background" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-64 mx-16'>
      <p className='font-semibold text-4xl text-white ' >Tech Mahinder Integrates Microsoft<br/>
      Azure OpenAI to Boost Enterprise<br/>
      Knowledge Search</p>
      <div className=" border-2 w-48 mt-16 ml-8">
        <h2 className="text-white py-3 text-center font-medium text-xl">
        Know More
        </h2>
      </div>
      </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <Image src={Image02} alt="Picture of background" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-64 mx-16'>
      <p className='font-semibold text-4xl text-white ' >Tech Mahinder Integrates Microsoft<br/>
      Azure OpenAI to Boost Enterprise<br/>
      Knowledge Search</p>
      <div className=" border-2 w-48 mt-16 ml-8">
        <h2 className="text-white py-3 text-center font-medium text-xl">
        Know More
        </h2>
      </div>
      </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <Image src={Image06}  alt="Picture of background" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-64 mx-16'>
      <p className='font-semibold text-4xl text-white ' >Tech Mahinder Ranked Market Leader <br/>
     in the HFS Horizons: Supply Chain<br/>
     Services,2023 Report</p>
      <div className=" border-2 text-xl w-48 mt-16 ml-8">
        <h2 className="text-white py-3 text-center font-medium ">
        Know More
        </h2>
      </div>
      </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <Image src={Image04}  alt="Picture of background" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-64 mx-16'>
      <p className='font-semibold text-4xl text-white ' >Tech Mahinder Integrates Microsoft<br/>
      Azure OpenAI to Boost Enterprise<br/>
      Knowledge Search</p>
      <div className=" border-2 text-xl w-48 mt-16 ml-8">
        <h2 className="text-white py-3 text-center font-medium ">
        Know More
        </h2>
      </div>
      </div>
  </div>
</div>
    
      <div className='absolute top-8'>
    <Navbar/>

  </div>
      </div>
    </>
  )
}

export default Home