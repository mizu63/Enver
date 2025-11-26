import React from 'react'
import Container from '../Layout/Container'
import Image from "../assets/img1.png"
import Add from "../assets/add.png"
import Image3 from "../assets/img3.png"
import Image5 from "../assets/img5.png"
import Image6 from "../assets/img6.png"
import Image4 from "../assets/img4.png"
const Hero = () => {
  return (
    <section className='bg-[#19191B] pb-[80px] pt-[80px]'>
      <Container>
        <div className='flex'>
          <div className='w-1/3'>
            <h1 className='text-[53px] font-bold text-[#FFFFFF] font-Nil  leading-[1.1] mb-[15px]'>Build Your Awesome Platform</h1>
            <p className='text-[13px] font-Nil font-normal text-[#FFFFFFB2]'>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
            <button className='text-[13px] font-bold font-Nil py-[9px] px-[17px] bg-[#5454D4] rounded-[3px] mt-8'>Our Services</button>
          </div>
          <div className='w-2/3 relative'>
            <img className='' src={Image} alt="" />
            <img className='absolute bottom-0 right-0' src={Add} alt="" />
            <img className='absolute  top-0 right-0' src={Image3} alt="" />
            <img className='absolute bottom-0 left-0' src={Image4} alt="" />
            <div className="relative w-fit mx-auto">
              <img className="items-center mx-auto" src={Image5} alt="" />

              <img className="absolute top-[-60px] right-0 " src={Image6} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
