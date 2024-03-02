import React from 'react'
import flatImage from "./flat.jpg"

const showImage = () => {
  return (
    <div>
      <img src={flatImage} alt='flat' className='w-32 h-32'/>
    </div>
  )
}

export default showImage
