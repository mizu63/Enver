import React, { Children } from 'react'

const Container = ( {children,className}) => {
  return (
    <div className={`${className} max-w-[1060px] mx-auto `}>
      {children}
    </div>
  )
}

export default Container
