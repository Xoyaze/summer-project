import * as THREE from 'three';
import React, { JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF, SkeletonUtils } from 'three-stdlib';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

type ActionName = 'Armature|A_Open' | 'Armature|A_Close'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.SkinnedMesh
    Object_11: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    M_Chest_Reinforcment: THREE.MeshStandardMaterial
    M_Chest_Wood: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

const TreasureChest = (props: JSX.IntrinsicElements['group']) => {
  const group = React.useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/models/treasure_chest.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGLTF('/models/treasure_chest.glb') as unknown as GLTFResult;
  
  const { actions, names } = useAnimations(animations, group);

  useGSAP(() => {

    const timeline = gsap.timeline();

    timeline.fromTo(group.current?.position,{
      z: -100,
      y: -80,
    }, {
      z: -300,
      y: 150,
      duration: 1,
      delay: 0.8,
      ease: 'power1.inOut',
    })

    timeline.fromTo(group.current?.rotation, {
      x: -1.2,
    }, {
      x: 0,
      duration: 1.4,
      ease: 'power1.inOut',
    }, ">-1")

    timeline.fromTo(group.current?.position,{
      y: 150,
    }, {
      y: 80,
      duration: 1,
      ease: 'power1.inOut',
    }, ">-0.4 ")

    //second page animations here
    gsap.fromTo(group.current?.position, {
      z: -300,
      x: 0,
    }, {
      x: -190,
      z: -290,
      scrollTrigger: {
        trigger: '.secondPage',
        end: 'top center',
        scrub: true,
        immediateRender: false,
      }
    });
    gsap.fromTo(group.current?.rotation, {
      y: 0,
    }, {
      y: 1.2,
      scrollTrigger: {
        trigger: '.secondPage',
        end: 'top 40%',
        scrub: true,
        immediateRender: false,
      }
    })
    ScrollTrigger.create({
      trigger: '.secondPage', 
      start: 'top 40%',
      once: true,
      onEnter: () => {
        actions[names[0]]?.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.5).play();
        const action = actions[names[0]];
        action.clampWhenFinished = true;
      },
    });

    //mission page animation after this
    gsap.fromTo(group.current?.position, {
      y: 80,
    }, {
      y: 500,
      scrollTrigger: {
        trigger: '.mission',
        start: 'top 90%',
        end: 'top 20%',
        scrub: true,
        immediateRender: false,
      }
    });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[60, -143.323, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={1}>
          <group name="Chestfbx" rotation={[-Math.PI, 0, -0.35]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" rotation={[0, 0, -Math.PI]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_9" rotation={[0, 0, Math.PI]} />
                    <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.M_Chest_Reinforcment} skeleton={nodes.Object_10.skeleton} />
                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.M_Chest_Wood} skeleton={nodes.Object_11.skeleton} />
                  </group>
                </group>
                <group name="SM_Chest" rotation={[0, 0, -Math.PI]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/treasure_chest.glb');
export default TreasureChest;
