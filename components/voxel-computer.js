import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return <Html center><CircularProgress variant="determine"></CircularProgress></Html>
}

const Model = () => {
    const gltf = useLoader(GLTFLoader, 'computer_mouse.glb');

    return (
        <>
            <primitive object={gltf.scene} scale={0.25}/>
        </>
    );
};

const GraphicsComputer = () => {
    return (
        <>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [2, 5, 4], fov: 10 }} style={{height: '200px'}} id="mouse">
                <ambientLight intensity={0.7}/>
                <spotLight intensity={0.5} angle={0.1} penumbra={1} castShadow/>
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
  