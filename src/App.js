import "./App.css"
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, CameraControls, Sky, OrbitControls, useScroll, ScrollControls, Text } from "@react-three/drei";
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'


import { Armchair } from './Armchair'

export default function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 70, position: [0, 2, 20] }}>
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight />
        
        <Suspense fallback={null}>

          <Selection>

            <EffectComposer multisampling={8} autoClear={false}>
              <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
            </EffectComposer>

            <ScrollControls pages={3}>
              <Models/>
            </ScrollControls>

          </Selection>

          <OrbitControls enableZoom={false} makeDefault minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4} minPolarAngle={0.5} maxPolarAngle={Math.PI / 4 + 0.5}/>
          {/* <Sky /> */}
          <Environment preset="sunset" background backgroundBlurriness={1}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

function ArmchairTriplet({y, label}) {
  return (
    <>
      <Text fontSize={3} color={'black'} position={[20, y - 5, 0]} rotation={[-Math.PI / 6, 0, 0]}>
        {label}
      </Text>
      <Armchair position={[0, y, 0]}/>
      <Armchair position={[-10, y, 0]}/>
      <Armchair position={[10, y, 0]}/>
    </>
  )
}

function Models () {
  const groupRef = useRef()
  const scroll   = useScroll()

 useFrame(() => (groupRef.current.position.y = 40 * scroll.offset))

  return (
    <group ref={groupRef}>
      <ArmchairTriplet y={0}   label={"2024-2025"}/>
      <ArmchairTriplet y={-20} label={"2023-2024"}/>
      <ArmchairTriplet y={-40} label={"2022-2023"}/>
    </group>
  )
}
