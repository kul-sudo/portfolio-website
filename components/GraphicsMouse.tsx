import type { FC } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Html } from '@react-three/drei'
import { Stack, Spinner } from '@chakra-ui/react'

const Model: FC = () => {
  return (
    <primitive object={useGLTF('/computer_mouse.glb').scene} scale={0.3} />
  )
}

const GraphicsMouse: FC = () => {
  useGLTF.preload('/computer_mouse.glb')

  return (
    <Stack display="flex" align="center">
      <Canvas legacy camera={{position: [-4, 4, -3], fov: 10}} style={{ width: '300px', height: '240px' }} id="mouse">
        <ambientLight />
        <spotLight />
        <Suspense fallback={<Html center><Spinner boxSize={50} /></Html>}>
          <Model />
          <Environment path="/" files="potsdamer_platz_1k.hdr" />
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
      </Canvas>
    </Stack>
  )
}

export default GraphicsMouse
