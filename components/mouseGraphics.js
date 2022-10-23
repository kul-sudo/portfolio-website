import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
import { Stack, Spinner } from '@chakra-ui/react'

const Model = () => {
  return (
	  <primitive object={useLoader(GLTFLoader, '/computer_mouse.glb').scene} scale={0.28} />
  )
}

const GraphicsMouse = () => {
  return (
    <Stack display="flex" align="center">
      <Canvas camera={{ position: [1, 5, -4], fov: 10 }} style={{width: "181px", height: "180px"}} id="mouse">
        <ambientLight />
        <spotLight />
        <Suspense fallback={<Html center><Spinner boxSize={50} /></Html>}>
          <Model />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
      </Canvas>
    </Stack>
	)
}

export default GraphicsMouse
