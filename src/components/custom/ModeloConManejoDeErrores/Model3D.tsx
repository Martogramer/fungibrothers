import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

interface Model3DProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

export function Model3D({ modelPath, scale = 1, position = [0, 0, 0] }: Model3DProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} dispose={null} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
}

import { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function ContextLossHandler() {
  const { gl } = useThree();
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  const [sceneState, setSceneState] = useState<any>(null);

  useEffect(() => {
    const handleContextLoss = (event: Event) => {
      event.preventDefault();
      console.warn('WebGL context lost. Trying to restore...');

      // Pausar la animación
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        setAnimationFrameId(null);
      }

      // Guardar el estado actual de la escena
      setSceneState({
        // Guarda el estado relevante de tu escena aquí
      });
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored.');

      // Restaurar el estado de la escena
      if (sceneState) {
        // Restaura el estado relevante de tu escena aquí
      }

      // Reanudar la animación
      const newAnimationFrameId = requestAnimationFrame(animate);
      setAnimationFrameId(newAnimationFrameId);
    };

    const animate = () => {
      // Lógica de animación
      if (animationFrameId) {
        requestAnimationFrame(animate);
      }
    };

    gl.domElement.addEventListener('webglcontextlost', handleContextLoss as EventListener);
    gl.domElement.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      gl.domElement.removeEventListener('webglcontextlost', handleContextLoss as EventListener);
      gl.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [gl, animationFrameId, sceneState]);

  return null;
}

interface Model3DViewerProps {
  modelPath: string;
}

export function Model3DViewer({ modelPath }: Model3DViewerProps) {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={2} />
        <ContextLossHandler />
        <spotLight position={[1, 1, 10]} angle={1.0} penumbra={1} />
        <pointLight position={[-1, -10, -10]} />
        <Suspense fallback={null}>
          <Model3D modelPath={modelPath} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}