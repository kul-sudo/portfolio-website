import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
import Loader from './loader'

const Model = () => {
  return (
    <primitive object={useLoader(GLTFLoader, '/keyboard-graphics.glb').scene} scale={0.13}/>
  );
};

const GraphicsKeyboard = () => {
  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [2, 5, 4], fov: 5 }} style={{height: '500px'}} id="keyboard">
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

export default GraphicsKeyboard