import React from 'react'
import { useState } from 'react'
import ShowImage from './showImage'

const Circle = (props) => {

    const [content,showContent] = useState(false)


  return (
    <>
    <mesh {...props}
    onPointerOver={(e) => {
    e.object.scale.set(0.5, 0.5, 0.5); 
        }}
    onPointerOut={(e) => {
    e.object.scale.set(0.4,0.4,0.4)
        }}
       onClick={()=>showContent(!content)}
        >
        <circleBufferGeometry args={[1, 32]} />
        <meshBasicMaterial transparent opacity={0.7} color={0xffffff}/>
      </mesh>

      <ShowImage />
     </>
  )
}

export default Circle
