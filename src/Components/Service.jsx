import React from 'react'
import Container from '../Layout/Container'
import Image8 from "../assets/img4.png"
import Image9 from "../assets/img7.png"
import Icon1 from "../assets/icon1.png"
import Icon2 from "../assets/icon2.png"
import Icon3 from "../assets/icon3.png"
import Icon4 from "../assets/icon4.png"
import Icon5 from "../assets/icon5.png"
import Icon6 from "../assets/icon6.png"
import Icon from "../assets/add.png"
import Card from '../Layout/Card'
const Service = () => {

  let Skills =[
    {
      name: "Development",
      title:"Create a platform with the best and coolest quality from us.",
      icon:Icon1
    },
      {
      name: "UI/UX Designer",
      title:"We provide UI/UX Design services, and of course with the best quality",
      icon:Icon2
    },
      {
      name: "Graphik Designer",
      title:"We provide Graphic Design services, with the best designers",
      icon:Icon3
    },
     {
      name: "Motion Graphik",
      title:"Create a platform with the best and coolest quality from us.",
      icon:Icon4
    },
     {
      name: "Photography",
      title:"We provide Photography services, and of course with the best quality",
      icon:Icon5
    },
     {
      name: "Videography",
      title:"Create a platform with the best and coolest quality from us.",
      icon:Icon6
    },
  ];
  return (
   <section className='bg-[#19191B] text-[#FFFFFF] pb-3.5'>
   <Container>
     <div className='relative'>
        <h1 className='text-[40px] font-bold text-center leading-[1.1]'>The Service We Provide <br /> For You</h1>
        <img className='absolute top-0 left-14' src={Image8} alt="" />
        <img className='absolute top-14 right-5'  src={Image9} alt="" />
    </div>
    <div>
       <div className='grid grid-cols-3 gap-8 place-items-center'>
  {Skills.map((Citem, index) => (
    <Card key={index} item={Citem} />
  ))}
</div>

    </div>
    <img src={Icon} alt="logo" />
   </Container>
   </section>
  )
}

export default Service
