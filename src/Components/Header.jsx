import React from 'react'
import Container from '../Layout/Container'
import Logo from "../assets/Logo.png"
import Listitem from '../Layout/Listitem'
const Header = () => {
  return (
   <section className='bg-[#19191B] text-[#FFFFFFB2]'>
    <header>
      <Container>
        <nav className='flex justify-between items-center py-6 '>
        <div className='flex'>
         <img src={Logo} alt="" />
         <h2 className='text-[19px] font-bold'>Enver</h2>
        </div>
         <div>
           <ul className='flex gap-[26px]'>
            <Listitem item="Home"/>
             <Listitem item="Services"/>
              <Listitem item="Our"/>
               <Listitem item="About us"/>
           </ul>
         </div>
          <button className='text-[10px] font-Nil font-normal border border-[0.5px] border-[#ffffff] rounded-[3px] py-2 px-5 bo'>Contact us</button>
      </nav>
      </Container>
    </header>
   </section>
  )
}

export default Header
