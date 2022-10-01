import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
import { Spinner } from '@chakra-ui/react'

const Model = () => {
  return (
	  <primitive object={useLoader(GLTFLoader, '/computer_mouse.glb').scene} scale={0.25}/>
  );
};

const GraphicsMouse = () => {
  return (
	<>
	  <Canvas camera={{ position: [2, 5, 4], fov: 10 }} style={{height: '200px'}} id="mouse">
      <ambientLight/>
      <spotLight/>
      <Suspense fallback={<Html center><Spinner boxSize={50}/></Html>}>
        <Model/>
        <Environment preset="city"/>
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} enablePan={false}/>
	  </Canvas>
	</>
	)
}

export default GraphicsMouse
