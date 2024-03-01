import React from 'react'
import { Html } from '@react-three/drei'
import flatImage from './flat.jpg'


const ShowImage = () => {
  return (
    <Html>
      <img src={flatImage} className='w-64 h-32'/>
    </Html>
  )
}

export default ShowImage
