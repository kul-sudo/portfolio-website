import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
    // location of the 3D model
    const gltf = useLoader(GLTFLoader, "computer_mouse.glb");
    return (
        <>
            {/* Use scale to control the size of the 3D model */}
            <primitive object={gltf.scene} scale={0.25} />
        </>
    );
};

const VoxelComputer = () => {
    return (
        <div>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [2, 5, 4], fov: 10 }} style={{height: '200px'}}>
                <ambientLight intensity={0.7} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} castShadow/>
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate enableZoom={false} enablePan={false}/>
            </Canvas>
        </div>
    )
  }

export default VoxelComputer
  