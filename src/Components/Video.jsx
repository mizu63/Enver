import React from 'react'
import Container from '../Layout/Container'

const Video = () => {
    return (
        <section className='bg-[#19191B] pt-10'>
            <Container>
                <div className='flex gap-5 text-[#FFFFFF]  justify-between'>
                    <div className='  text-[40px] font-bold leading-[1.1] pr-7'>Why Enver Is The Best Choice?</div>
                   <div className=' text-[14px] font-Nil font-normal pl-4 '>Watch this one minute video so you understand why you should use our services!</div>

                </div>
                <div className="w-full mt-[33px] pb-12" >
                    <iframe className="w-full h-[500px]" src="https://www.youtube.com/embed/eILUmCJhl64" frameborder="0"></iframe>
                </div>
            </Container>

        </section>


    )
}

export default Video
