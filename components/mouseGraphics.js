import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Html } from '@react-three/drei'
import { Stack, Spinner } from '@chakra-ui/react'

const Model = () => {
  useGLTF.preload('/computer_mouse.glb')
  return (
	  <primitive object={useGLTF('/computer_mouse.glb').scene} scale={0.28} />
  )
}

const GraphicsMouse = () => {
  return (
    <Stack display="flex" align="center">
      <Canvas legacy camera={{position: [-4, 4, -3], fov: 10}} style={{width: "181px", height: "180px"}} id="mouse">
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
