import {Canvas} from "@react-three/fiber"

import Model from "./components/Model"


function App() {

 return(
  <div style={{height: '100vh'}}>
    <Canvas camera={{ position: [10, 10, 10], fov: 75 }} >
        <Model />
    </Canvas>
  </div>
 )
}

export default App
