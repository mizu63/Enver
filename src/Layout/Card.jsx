import React from 'react'

const Card = ({item}) => {
 return (
    <div className="font-Nil text-center p-8">
  <img className='mx-auto' src={item.icon} alt={item.icon} />
  <h3 className='text-[19px] font-semibold mt-3'>{item.name}</h3>
   <h4 className='text-[13px] font-normal mt-3'>{item.title}</h4>
  
    </div>
  )
}

export default Card
