    import React, { useEffect, useRef } from 'react';
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

    const Heatmap = () => {
      const mountRef = useRef(null);

      useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
    
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create 3D heatmap grid
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial();
    
        const grid = new THREE.Group();
    
        for(let x = 0; x < 10; x++) {
          for(let y = 0; y < 10; y++) {
            const cube = new THREE.Mesh(geometry, material.clone());
            cube.position.set(x * 1.2, y * 1.2, 0);
            cube.material.color.setHSL(Math.random(), 0.7, 0.5);
            cube.scale.z = Math.random() * 3;
            grid.add(cube);
          }
        }

        scene.add(grid);
    
        // Add lights
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 10);
        scene.add(light);
    
        camera.position.z = 20;

        // Add controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };

        animate();

        return () => {
          mountRef.current?.removeChild(renderer.domElement);
        };
      }, []);

      return <div ref={mountRef} className="w-full h-full" />;
    };

    export default Heatmap;