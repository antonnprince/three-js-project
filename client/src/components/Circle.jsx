import { useScroll } from '@react-three/drei'
import React from 'react'
import { useState } from 'react'

const Circle = (props) => {

    const [color,setColor] = useState('#FFFFFF')

    const handleColor=()=>{
            
    }

  return (
    <mesh {...props}
    onPointerOver={(e) => {
        e.object.scale.set(0.5, 0.5, 0.5); 
    e.object.material.color.set(0x636f82); 
  }}
  onPointerOut={(e) => {
    e.object.scale.set(0.4,0.4,0.4)
    e.object.material.color.set(0xffffff); 
  }}
    >
        <circleBufferGeometry args={[1, 32]} color={color}/>
        <meshBasicMaterial />
      </mesh>
  )
}

export default Circle
