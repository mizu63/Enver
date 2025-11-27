import React from 'react'
import Container from '../Layout/Container'
import Image12 from "../assets/img3.png"
import Group1 from "../assets/group1.png"
import Group2 from "../assets/group2.png"
import Group3 from "../assets/group3.png"
import Icon from "../assets/img1.png"
const Project = () => {
    return (
        <section className='bg-[#19191B] text-[#FFFFFF] pt-8 '>
            <Container>
                <div className='relative'>
                    <h1 className='text-[39px] font-extrabold font-Nil'>Our Awesome Portofolio</h1>
                    <img className='absolute top-4 right-10' src={Image12} alt="logo" />

                    {/* <div className='bg-[#19191B] pt-5' >
                     <img className='' src={Group1} alt="" />
                    <img className='absolute top-28 left-1/2 -translate-x-1/2' src={Group2} alt="" />
                    <img className='absolute top-44 right-0' src={Group3} alt="" />
                   </div> */}
                </div>
                <div className="flex justify-center gap-10 mt-10">


                    <img
                        src={Group1}
                        className="w-72 rounded-xl  relative top-0"
                        alt=""
                    />


                    <img
                        src={Group2}
                        className="w-72 rounded-xl relative top-8"
                        alt=""
                    />


                    <img
                        src={Group3}
                        className="w-72 rounded-xl relative top-16"
                        alt=""
                    />

                </div>

                <img className='mt-24' src={Icon} alt="" />
            </Container>
        </section>
    );
}

export default Project
