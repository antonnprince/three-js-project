import React from 'react'
import { useState } from 'react'
import showImage from './showImage'

const Circle = (props) => {
  return (
    <>
    
    <mesh {...props}
    onPointerOver={(e) => {
    e.object.scale.set(0.5, 0.5, 0.5); 
        }}
    onPointerOut={(e) => {
    e.object.scale.set(0.4,0.4,0.4)
        }}

      onClick={() => window.open(props.url)}>
        
        <circleBufferGeometry args={[1, 32]} />
        <meshBasicMaterial transparent opacity={0.7} color={0xffffff}/>
      
      </mesh>

     </>
  )
}

export default Circle
