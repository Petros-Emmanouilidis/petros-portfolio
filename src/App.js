import "./App.css"
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";


import { Armchair } from './Armchair'

export default function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 70, position: [0, 2, 20] }}>
        <Suspense fallback={null}>

          <Armchair/>
          <Armchair position={[-10, 0 , 0]}/>
          <Armchair position={[10, 0 , 0]}/>

          <OrbitControls />
          <Environment preset="sunset" background backgroundBlurriness={1}/>
        </Suspense>
      </Canvas>
    </div>
  )
}
