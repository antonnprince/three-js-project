import React from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'
import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'


const CanvasModel = () => {
  return (
    <div>
      <ambientLight 
        intensity={0.5}
      />

      <Environment preset='city'/>

      
          <Center>
            <Shirt/>
          </Center>
      
    </div>
  )
}

export default CanvasModel
