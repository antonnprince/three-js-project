import {Canvas} from "@react-three/fiber"
import Model from "./components/Model"
import Color from "./components/Color"
import { Center } from "@react-three/drei"


function App() {

 return(
  <div style={{height: '80vh'}}>
 
    <Canvas camera={{ position: [10, 10, 10], fov: 75 }} >
    <Center>
        <Model />
        </Center>
    </Canvas>
    <Color />
  </div>
 )
}

export default App
