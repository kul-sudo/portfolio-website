import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
import Loader from './loader'

const Model = () => {
  return (
	  <primitive object={useLoader(GLTFLoader, '/my_mouse_graphics.glb').scene} scale={5}/>
  );
};

const UseMouseGraphics = () => {
  return (
	<>
	  <Canvas shadows dpr={[1, 2]} camera={{ position: [2, 5, 4], fov: 10 }} style={{height: '400px'}} id="use-mouse">
		<ambientLight/>
		<spotLight/>
		<Suspense fallback={<Html center><Loader mb="0"/></Html>}>
		  <Model/>
		  <Environment preset="city"/>
		</Suspense>
		<OrbitControls autoRotate enableZoom={false} enablePan={false}/>
	  </Canvas>
	</>
	)
}

export default UseMouseGraphics