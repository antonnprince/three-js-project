import React from 'react'
import Building from './Building1'
import { OrbitControls } from "@react-three/drei";
import {useSnapshot} from 'valtio'
import state from '../store';
import Circle from './Circle';

const Model = () => {

  
  const snap = useSnapshot(state);

  return (
      <>
            <OrbitControls />
            

            <ambientLight intensity={0.5} />
            <directionalLight position={[-5,5,5]} intensity={1} castShadow />  
            
            <Circle   position={[-1, 3,1.75]} scale={[0.4,0.4,0.4]}/>
            <Circle   position={[3, 5,1.75]} scale={[0.4,0.4,0.4]}/> 
            <Circle   position={[3, 1,1.75]} scale={[0.4,0.4,0.4]}/> 
              <Building 
              scale={[0.25,0.25,0.25]} 
              position={[1, -3, 0]}  
              castShadow
              />
      </>
    
  )
}

export default Model
