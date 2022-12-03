import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas, useThree } from '@react-three/fiber'
import VrSimulation from "./VrSimulation"
import { OrbitControls, Sky, Stats } from '@react-three/drei'
import { useEffect } from 'react'
export default function App() {
  return (
    <>
      <VRButton />
      <Canvas shadows style={{ height: "100vh" }}>
        <XR>
        <fog attach="fog" args={["white", 0, 40]} />
        <Sky/>
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 10, 0]} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
          <Controllers />
          <Hands />
          <VrSimulation/>
        </XR>
        <Stats/>
        <OrbitControls/>
      </Canvas>
    </>
  )
}

