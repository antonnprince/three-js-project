import React from 'react'
import Building from './Building1'
import { OrbitControls } from "@react-three/drei";
import {useSnapshot} from 'valtio'
import state from '../store';


const Model = () => {

  const snap = useSnapshot(state);

  return (
      <>
            <OrbitControls 
            />

            <ambientLight intensity={2} />
            <directionalLight position={[-5,5,5]}  castShadow />  
              
              <Building 
              scale={[0.5,0.5,0.5]} 
              position={[1, -3, 0]}  
              />
      </>
    
  )
}

export default Model
