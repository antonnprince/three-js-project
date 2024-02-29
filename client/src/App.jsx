import {Canvas} from "@react-three/fiber"
import Model from "./components/Model"
import Color from "./components/Color"
import { Center } from "@react-three/drei"


function App() {

 return(
  <div 
  className="bg-slate-400 h-screen w-screen rounded-xl"
  >
 
 <div style={{height:'90vh'}}>
    <Canvas camera={{ position: [10, 10, 10], fov: 75 }} >
    <Center>
        <Model />
        </Center>
    </Canvas>
    </div>
    <Color />
  </div>
 )
}

export default App
