import React from 'react'

const Listitem = ({className,item}) => {
  return (
  <li className={` text-[12px] font-normal font-Nil ${className}`}>{item}</li>
  )
}

export default Listitem
