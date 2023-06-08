import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import { Suspense } from 'react';

export const Banner3D = () => {
    return (
        <div className='banner3d'>
            <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    backgroundColor: 'rgb(240, 240, 240)',
                    // width: '100vw',
                    // height: '100vh',
                }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={null}>
                    <Model position={[0.025, -0.9, 1]} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    )
}