import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

export default function StringStringFruit(props) {
  const { scene } = useGLTF('/assets/models/Test.glb'); // Ensure the path is correct
  
  const { camera } = useThree();
  
  useEffect(() => {
    // Adjust the camera position and the model scale here if necessary
    camera.position.set(0, 2, 5); // Example camera position
    scene.scale.set(0.01, 0.01, 0.01); // Example scaling of the model
  }, [camera, scene]);

  return (
    <animated.primitive
      object={scene}
      {...props}
    />
  );
}

useGLTF.preload('/assets/models/Test.glb'); // Ensure the path is correct
