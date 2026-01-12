import React from 'react'
import Listitem from "../Layout/Listitem"
import Logo from "../assets/Logo.png"
import Container from '../Layout/Container'
const Footer = () => {
  return (
   <section className='bg-[#19191B] text-[#FFFFFFB2] pt-10'>
    <footer>
        <Container>
        <nav className='flex justify-between items-center pb-[66px] '>
        <div className='flex'>
         <img src={Logo} alt="logo" />
         <h2 className='text-[19px] font-bold'>Enver</h2>
        </div>
         <div>
           <ul className='flex gap-[26px]'>
            <Listitem item="Support"/>
             <Listitem item="Privacy Policy"/>
              <Listitem item="Terms and Conditions"/>
               
           </ul>
         </div>
          <span className='text-[11px] font-Nil font-normal'>© 2020 Enver, All Rights Reserved</span>
      </nav>
      </Container>
    </footer>
   </section>
  )
}

export default Footer
