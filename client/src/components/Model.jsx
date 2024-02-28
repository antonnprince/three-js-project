import React from 'react'
import Building from './Building1'
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  return (
    
      <>
            <OrbitControls />
            
            <ambientLight intensity={2} />
            <directionalLight 
                position={[-5,5,5]}
                castShadow
                shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
            />
            
         
            <group position={[0, -1, 0]}>
        <Building scale={[0.25,0.25,0.25]} 
        position={[1, -1, 0]}  rotation={[0, 0, 0]}/>
      </group>
      <mesh
        
        receiveShadow
      ></mesh>
      </>
    
  )
}

export default Model
