import React from 'react'
import Building from './Building1'
import { OrbitControls } from "@react-three/drei";
import {useSnapshot} from 'valtio'
import state from '../store';
import Circle from './Circle';
import flat1 from "./flat.jpg"
import flat2 from "./flat2.jpg"
import flat3 from "./falt3.jpg"

const Model = () => {

  
  const snap = useSnapshot(state);

  const url1 = flat1
  const url2 = flat2
  const url3 = flat3

  return (
      <>
            <OrbitControls />
            

            <ambientLight intensity={0.5} />
            <directionalLight position={[-5,5,5]} intensity={1} castShadow />  
            
            <Circle  url={flat1} position={[-1, 3,1.75]} scale={[0.4,0.4,0.4]}/>
            <Circle   url={flat2} position={[3, 5,1.75]} scale={[0.4,0.4,0.4]}/> 
            <Circle   url={flat3} position={[3, 1,1.75]} scale={[0.4,0.4,0.4]}/> 

              <Building 
              scale={[0.25,0.25,0.25]} 
              position={[1, -3, 0]}  
              castShadow
              />
      </>
    
  )
}

export default Model
