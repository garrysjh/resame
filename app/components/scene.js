'use client'
import * as THREE from "three";
import React from 'react';


export default function MainScene() {
    React.useEffect(() => {
        var canvas = document.querySelector('displayContent');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xF5F5DC);
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.TorusKnotGeometry(1);
        const material = new THREE.MeshPhongMaterial({shininess: 150, color: 'purple'});
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.AmbientLight(color, intensity);
        scene.add(light);

        // const pointLight = new THREE.PointLight( 0xffffff );
        // pointLight.position.set(1,1,2);
        // camera.add(pointLight);

        const directionalLight = new THREE.DirectionalLight(color, 5);
        directionalLight.position.set(0, 10, 0);
        directionalLight.target = sphere
        scene.add(directionalLight)


        camera.position.z = 5;

        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){
        
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        
            renderer.setSize( window.innerWidth, window.innerHeight );
        
        }


        function animate() {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.00125;
            sphere.rotation.y += 0.00125;
            renderer.render(scene, camera);

        }
        animate();
    })

}
