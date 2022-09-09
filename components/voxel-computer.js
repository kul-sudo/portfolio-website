import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
import { motion } from "framer-motion"

const Loader = () => {
  return <Html center>
	<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </Html>
}

const Model = () => {
  return (
	<>
	  <primitive object={useLoader(GLTFLoader, 'computer_mouse.glb').scene} scale={0.25}/>
	</>
  );
};

const GraphicsComputer = () => {
  
  return (
	<>
	  <Canvas shadows dpr={[1, 2]} camera={{ position: [2, 5, 4], fov: 10 }} style={{height: '200px'}} id="mouse">
		<ambientLight/>
		<spotLight/>
		<Suspense fallback={<Loader/>}>
		  <Model/>
		  <Environment preset="city"/>
		</Suspense>
		<OrbitControls autoRotate enableZoom={false} enablePan={false}/>
	  </Canvas>
	</>
	)
}

export default GraphicsComputer