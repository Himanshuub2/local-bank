import React, { useState,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.jpg";
const slides = [c1,c2,c3,c5,c6];
function NewCar() {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  





  useEffect(()=>{
    const timer = setInterval(()=>{
      
      setCurrentIndex(currentIndex=>currentIndex>slides.length-2 ? slides.length-1-currentIndex :currentIndex+1)
    
    }
    
    ,3000)

    return(()=>clearInterval(timer))
  },[])

  
 

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
    <div className='w-5/6  m-auto pt-1 relative group'>
      <Image
        src ={slides[currentIndex]}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        alt="Image1"
      ></Image>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-1'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

  <div className = "w-screen flex justify-center items-center">
    <div className = "w-5/6 flex flex-row shadow-sm shadow-orange-300">
    <div className ="w-24 text-white font-medium bg-gradient-to-b from-orange-600 to-orange-400">Latest News</div>
      <Marquee speed={50} className ="w-76 border-2 border-orange-400 bg-orange-100 text-red-600 font-medium" >Hello All<p className ="text-green-500 inline ml-[50px]">Himansodifsdfs</p></Marquee>

    </div>
  
  </div>


</>
  );
}

export default NewCar;