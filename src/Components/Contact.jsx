import React from 'react'
import Container from '../Layout/Container'
import Imageadd from "../assets/add.png"
const Contact = () => {
  return (
    <section className='bg-[#19191B] text-[#FFFFFFB2] pt-[150px] pb-[70px]'>
     <Container>
      <div  className="relative">
      
        <div className=' flex justify-between'>
        <h1 className='text-[40px] font-bold leading-[1.1]'>
          Contact us for the service <br/> you want to use
        </h1>
          <button className='text-[13px] font-bold font-Nil py-[3px] px-[27px] bg-[#5454D4] rounded-[3px] mt-8'>Our Services</button>
      </div>
      <img className='absolute -top-13 right-7' src={Imageadd} alt="" />
       <img className='absolute left-0 -bottom-13' src={Imageadd} alt="" />
    
     </div>
     </Container>
    </section>
  )
}

export default Contact
