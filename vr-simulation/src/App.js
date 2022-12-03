import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import VrSimulation from "./VrSimulation"
import { OrbitControls, Sky, Stats } from '@react-three/drei'

import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'


import { SheetProvider } from '@theatre/r3f'
import { getProject } from "@theatre/core";

studio.initialize()
studio.extend(extension)

export default function App() {
  let project = getProject('DEVFEST22-IOtERROR').sheet('Prototype sheet');
  return (
    <>
      <VRButton />
      <Canvas shadows style={{ height: "100vh" }}>
      <SheetProvider sheet={project}>
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
        </SheetProvider>
      </Canvas>
    </>
  )
}

