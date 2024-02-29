import React from "react";
import { useGLTF } from "@react-three/drei";
import { snapshot, useSnapshot } from "valtio";
import state from "../store";
import { useFrame } from "@react-three/fiber";
import {easing} from 'maath'

const Model=(props)=> {
  const { nodes, materials } = useGLTF(
    "./building1.glb"
  );
  
  const snap = useSnapshot(state)

  
  useFrame((state,delta)=> 
  {easing.dampC(materials["22_-_Default"].color,
     snap.color, 0.25,delta)
    }
  )
  
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <group position={[212.324, 846.238, 210.269]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box585_Wall_Paint_0.geometry}
            material={materials.Wall_Paint}
            position={[378.613, -968.534, 46.545]}
          />
        </group>
        <group
          position={[-206.242, 846.238, -229.93]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box589_Wall_Paint_0.geometry}
            material={materials.Wall_Paint}
            position={[378.613, -968.534, 46.545]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line001_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, -118.11, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box001_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, -78.74, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box002_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, -78.74, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box003_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, -78.74, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box004_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, -78.74, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box005_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, -78.74, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box006_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, -78.74, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box007_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, -78.74, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box008_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, -78.74, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box009_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, -78.74, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box010_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, -78.74, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box011_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, -78.74, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box013_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, -78.74, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box014_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, -78.74, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box015_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, -116.74, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box016_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, -116.74, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box017_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, -116.74, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box018_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, -116.74, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, -78.74, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape001_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, -78.74, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape002_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, -78.74, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape003_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, -78.74, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape004_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, -78.74, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape005_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, -78.74, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape006_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, -78.74, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape007_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, -78.74, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape009_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, -78.74, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape010_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, -78.74, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape011_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, -78.74, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape012_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, -78.74, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape013_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, -78.74, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape016_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, -78.74, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape017_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, -78.74, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape018_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, -78.74, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape019_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, -78.74, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box020_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, -117.126, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape021_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, -117.126, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box021_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, -75.787, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape022_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, -75.787, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box022_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, -34.449, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape023_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, -34.449, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box023_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, -117.126, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box024_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, -75.787, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box025_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, -34.449, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape024_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, -117.126, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape025_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, -75.787, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape026_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, -34.449, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box026_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 39.37, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box027_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 39.37, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box028_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 39.37, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box029_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 39.37, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box030_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 39.37, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box031_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 39.37, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box032_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 39.37, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box033_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 39.37, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box034_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 39.37, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box035_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 39.37, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box036_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 39.37, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box037_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 39.37, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box038_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 1.37, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box039_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 1.37, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box040_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 1.37, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box041_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 1.37, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box042_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 0.984, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box043_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 42.323, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box044_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 83.661, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box045_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 0.984, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box046_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 42.323, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box047_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 83.661, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line002_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 0, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape027_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 39.37, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape028_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 39.37, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape029_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 39.37, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape030_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 39.37, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape031_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 39.37, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape032_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 39.37, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape033_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 39.37, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape034_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 39.37, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape035_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 39.37, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape036_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 39.37, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape037_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 39.37, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape038_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 39.37, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape039_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 39.37, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape040_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 39.37, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape041_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 39.37, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape042_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 39.37, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape043_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 0.984, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape044_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 42.323, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape045_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 83.661, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape046_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 0.984, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape047_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 42.323, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape048_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 83.661, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box048_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 157.48, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box049_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 157.48, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box050_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 157.48, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box051_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 157.48, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box052_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 157.48, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box053_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 157.48, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box054_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 157.48, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box055_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 157.48, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box056_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 157.48, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box057_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 157.48, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box058_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 157.48, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box059_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 157.48, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box060_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 119.48, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box061_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 119.48, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box062_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 119.48, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box063_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 119.48, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box064_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 119.094, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box065_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 160.433, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box066_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 201.772, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box067_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 119.094, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box068_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 160.433, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box069_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 201.772, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line003_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 118.11, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape049_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 157.48, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape050_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 157.48, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape051_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 157.48, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape052_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 157.48, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape053_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 157.48, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape054_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 157.48, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape055_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 157.48, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape056_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 157.48, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape057_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 157.48, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape058_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 157.48, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape059_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 157.48, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape060_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 157.48, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape061_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 157.48, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape062_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 157.48, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape063_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 157.48, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape064_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 157.48, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape065_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 119.094, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape066_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 160.433, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape067_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 201.772, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape068_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 119.094, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape069_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 160.433, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape070_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 201.772, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box070_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 275.591, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box071_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 275.591, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box072_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 275.591, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box073_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 275.591, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box074_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 275.591, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box075_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 275.591, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box076_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 275.591, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box077_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 275.591, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box078_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 275.591, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box079_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 275.591, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box080_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 275.591, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box081_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 275.591, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box082_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 237.591, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box083_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 237.591, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box084_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 237.591, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box085_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 237.591, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box086_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 237.205, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box087_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 278.543, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box088_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 319.882, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box089_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 237.205, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box090_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 278.543, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box091_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 319.882, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line004_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 236.22, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape071_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 275.591, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape072_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 275.591, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape073_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 275.591, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape074_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 275.591, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape075_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 275.591, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape076_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 275.591, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape077_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 275.591, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape078_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 275.591, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape079_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 275.591, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape080_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 275.591, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape081_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 275.591, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape082_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 275.591, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape083_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 275.591, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape084_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 275.591, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape085_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 275.591, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape086_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 275.591, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape087_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 237.205, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape088_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 278.543, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape089_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 319.882, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape090_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 237.205, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape091_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 278.543, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape092_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 319.882, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box092_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 393.701, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box093_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 393.701, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box094_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 393.701, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box095_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 393.701, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box096_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 393.701, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box097_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 393.701, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box098_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 393.701, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box099_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 393.701, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box100_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 393.701, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box101_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 393.701, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box102_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 393.701, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box103_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 393.701, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box104_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 355.701, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box105_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 355.701, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box106_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 355.701, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box107_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 355.701, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box108_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 355.315, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box109_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 396.654, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box110_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 437.992, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box111_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 355.315, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box112_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 396.654, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box113_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 437.992, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line005_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 354.331, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape093_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 393.701, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape094_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 393.701, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape095_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 393.701, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape096_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 393.701, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape097_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 393.701, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape098_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 393.701, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape099_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 393.701, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape100_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 393.701, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape101_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 393.701, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape102_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 393.701, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape103_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 393.701, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape104_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 393.701, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape105_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 393.701, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape106_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 393.701, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape107_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 393.701, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape108_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 393.701, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape109_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 355.315, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape110_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 396.654, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape111_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 437.992, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape112_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 355.315, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape113_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 396.654, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape114_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 437.992, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box114_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 511.811, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box115_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 511.811, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box116_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 511.811, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box117_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 511.811, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box118_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 511.811, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box119_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 511.811, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box120_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 511.811, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box121_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 511.811, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box122_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 511.811, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box123_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 511.811, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box124_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 511.811, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box125_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 511.811, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box126_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 473.811, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box127_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 473.811, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box128_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 473.811, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box129_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 473.811, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box130_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 473.425, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box131_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 514.764, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box132_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 556.102, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box133_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 473.425, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box134_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 514.764, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box135_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 556.102, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line006_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 472.441, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape115_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 511.811, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape116_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 511.811, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape117_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 511.811, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape118_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 511.811, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape119_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 511.811, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape120_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 511.811, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape121_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 511.811, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape122_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 511.811, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape123_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 511.811, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape124_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 511.811, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape125_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 511.811, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape126_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 511.811, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape127_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 511.811, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape128_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 511.811, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape129_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 511.811, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape130_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 511.811, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape131_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 473.425, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape132_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 514.764, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape133_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 556.102, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape134_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 473.425, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape135_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 514.764, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape136_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 556.102, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box136_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 629.921, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box137_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 629.921, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box138_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 629.921, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box139_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 629.921, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box140_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 629.921, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box141_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 629.921, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box142_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 629.921, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box143_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 629.921, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box144_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 629.921, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box145_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 629.921, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box146_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 629.921, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box147_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 629.921, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box148_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 591.921, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box149_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 591.921, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box150_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 591.921, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box151_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 591.921, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box152_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 591.535, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box153_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 632.874, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box154_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 674.213, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box155_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 591.535, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box156_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 632.874, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box157_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 674.213, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line007_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 590.551, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape137_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 629.921, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape138_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 629.921, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape139_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 629.921, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape140_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 629.921, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape141_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 629.921, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape142_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 629.921, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape143_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 629.921, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape144_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 629.921, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape145_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 629.921, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape146_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 629.921, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape147_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 629.921, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape148_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 629.921, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape149_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 629.921, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape150_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 629.921, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape151_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 629.921, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape152_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 629.921, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape153_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 591.535, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape154_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 632.874, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape155_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 674.213, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape156_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 591.535, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape157_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 632.874, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape158_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 674.213, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box158_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 748.031, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box159_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 748.031, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box160_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 748.031, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box161_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 748.031, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box162_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 748.031, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box163_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 748.031, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box164_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 748.031, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box165_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 748.031, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box166_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 748.031, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box167_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 748.031, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box168_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 748.031, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box169_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 748.031, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box170_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 710.032, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box171_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 710.032, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box172_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 710.032, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box173_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 710.032, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box174_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 709.646, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box175_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 750.984, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box176_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 792.323, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box177_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 709.646, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box178_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 750.984, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box179_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 792.323, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line008_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 708.661, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape159_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 748.031, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape160_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 748.031, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape161_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 748.031, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape162_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 748.031, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape163_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 748.031, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape164_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 748.031, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape165_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 748.031, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape166_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 748.031, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape167_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 748.031, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape168_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 748.031, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape169_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 748.031, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape170_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 748.031, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape171_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 748.031, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape172_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 748.031, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape173_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 748.031, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape174_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 748.031, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape175_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 709.646, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape176_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 750.984, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape177_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 792.323, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape178_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 709.646, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape179_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 750.984, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape180_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 792.323, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box180_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 866.142, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box181_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 866.142, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box182_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 866.142, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box183_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 866.142, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box184_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 866.142, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box185_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 866.142, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box186_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 866.142, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box187_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 866.142, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box188_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 866.142, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box189_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 866.142, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box190_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 866.142, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box191_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 866.142, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box192_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 828.142, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box193_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 828.142, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box194_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 828.142, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box195_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 828.142, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box196_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 827.756, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box197_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 869.094, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box198_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 910.433, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box199_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 827.756, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box200_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 869.094, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box201_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 910.433, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line009_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 826.772, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape181_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 866.142, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape182_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 866.142, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape183_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 866.142, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape184_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 866.142, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape185_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 866.142, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape186_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 866.142, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape187_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 866.142, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape188_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 866.142, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape189_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 866.142, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape190_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 866.142, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape191_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 866.142, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape192_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 866.142, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape193_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 866.142, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape194_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 866.142, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape195_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 866.142, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape196_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 866.142, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape197_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 827.756, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape198_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 869.094, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape199_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 910.433, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape200_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 827.756, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape201_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 869.094, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape202_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 910.433, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box202_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 984.252, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box203_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 984.252, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box204_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 984.252, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box205_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 984.252, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box206_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 984.252, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box207_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 984.252, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box208_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 984.252, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box209_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 984.252, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box210_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 984.252, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box211_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 984.252, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box212_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 984.252, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box213_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 984.252, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box214_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 946.252, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box215_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 946.252, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box216_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 946.252, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box217_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 946.252, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box218_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 945.866, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box219_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 987.205, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box220_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1028.543, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box221_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 945.866, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box222_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 987.205, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box223_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1028.543, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line010_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 944.882, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape203_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 984.252, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape204_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 984.252, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape205_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 984.252, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape206_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 984.252, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape207_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 984.252, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape208_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 984.252, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape209_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 984.252, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape210_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 984.252, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape211_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 984.252, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape212_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 984.252, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape213_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 984.252, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape214_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 984.252, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape215_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 984.252, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape216_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 984.252, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape217_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 984.252, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape218_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 984.252, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape219_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 945.866, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape220_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 987.205, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape221_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1028.543, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape222_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 945.866, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape223_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 987.205, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape224_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1028.543, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box224_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 1102.362, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box225_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 1102.362, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box226_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 1102.362, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box227_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 1102.362, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box228_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 1102.362, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box229_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 1102.362, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box230_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 1102.362, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box231_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 1102.362, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box232_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 1102.362, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box233_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 1102.362, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box234_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 1102.362, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box235_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 1102.362, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box236_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 1064.362, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box237_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 1064.362, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box238_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 1064.362, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box239_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 1064.362, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box240_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 1063.976, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box241_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1105.315, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box242_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1146.653, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box243_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1063.976, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box244_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1105.315, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box245_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1146.653, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line011_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 1062.992, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape225_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 1102.362, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape226_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 1102.362, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape227_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 1102.362, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape228_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 1102.362, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape229_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 1102.362, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape230_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 1102.362, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape231_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 1102.362, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape232_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 1102.362, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape233_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1102.362, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape234_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1102.362, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape235_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1102.362, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape236_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1102.362, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape237_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 1102.362, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape238_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 1102.362, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape239_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 1102.362, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape240_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 1102.362, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape241_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1063.976, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape242_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1105.315, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape243_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1146.653, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape244_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1063.976, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape245_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1105.315, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape246_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1146.653, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box246_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 1220.472, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box247_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 1220.472, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box248_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 1220.472, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box249_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 1220.472, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box250_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 1220.472, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box251_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 1220.472, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box252_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 1220.472, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box253_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 1220.472, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box254_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 1220.472, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box255_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 1220.472, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box256_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 1220.472, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box257_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 1220.472, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box258_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 1182.473, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box259_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 1182.473, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box260_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 1182.473, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box261_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 1182.473, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box262_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 1182.087, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box263_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1223.425, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box264_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1264.764, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box265_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1182.087, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box266_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1223.425, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box267_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1264.764, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line012_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 1181.102, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape247_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 1220.472, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape248_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 1220.472, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape249_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 1220.472, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape250_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 1220.472, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape251_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 1220.472, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape252_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 1220.472, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape253_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 1220.472, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape254_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 1220.472, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape255_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1220.472, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape256_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1220.472, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape257_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1220.472, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape258_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1220.472, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape259_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 1220.472, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape260_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 1220.472, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape261_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 1220.472, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape262_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 1220.472, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape263_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1182.087, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape264_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1223.425, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape265_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1264.764, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape266_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1182.087, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape267_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1223.425, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape268_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1264.764, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box268_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 1338.583, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box269_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 1338.583, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box270_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 1338.583, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box271_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 1338.583, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box272_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 1338.583, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box273_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 1338.583, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box274_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 1338.583, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box275_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 1338.583, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box276_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 1338.583, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box277_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 1338.583, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box278_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 1338.583, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box279_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 1338.583, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box280_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 1300.583, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box281_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 1300.583, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box282_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 1300.583, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box283_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 1300.583, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box284_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 1300.197, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box285_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1341.535, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box286_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1382.874, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box287_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1300.197, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box288_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1341.535, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box289_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1382.874, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line013_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 1299.213, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape269_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 1338.583, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape270_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 1338.583, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape271_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 1338.583, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape272_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 1338.583, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape273_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 1338.583, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape274_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 1338.583, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape275_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 1338.583, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape276_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 1338.583, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape277_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1338.583, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape278_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1338.583, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape279_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1338.583, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape280_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1338.583, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape281_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 1338.583, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape282_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 1338.583, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape283_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 1338.583, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape284_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 1338.583, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape285_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1300.197, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape286_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1341.535, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape287_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1382.874, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape288_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1300.197, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape289_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1341.535, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape290_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1382.874, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box290_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 1456.693, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box291_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 1456.693, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box292_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 1456.693, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box293_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 1456.693, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box294_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 1456.693, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box295_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 1456.693, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box296_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 1456.693, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box297_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 1456.693, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box298_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 1456.693, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box299_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 1456.693, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box300_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 1456.693, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box301_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 1456.693, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box302_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 1418.693, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box303_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 1418.693, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box304_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 1418.693, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box305_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 1418.693, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box306_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 1418.307, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box307_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1459.646, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box308_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1500.984, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box309_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1418.307, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box310_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1459.646, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box311_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1500.984, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line014_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 1417.323, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape291_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 1456.693, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape292_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 1456.693, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape293_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 1456.693, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape294_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 1456.693, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape295_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 1456.693, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape296_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 1456.693, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape297_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 1456.693, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape298_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 1456.693, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape299_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1456.693, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape300_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1456.693, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape301_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1456.693, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape302_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1456.693, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape303_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 1456.693, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape304_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 1456.693, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape305_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 1456.693, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape306_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 1456.693, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape307_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1418.307, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape308_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1459.646, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape309_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1500.984, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape310_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1418.307, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape311_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1459.646, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape312_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1500.984, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box312_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 1574.803, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box313_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 1574.803, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box314_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 1574.803, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box315_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 1574.803, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box316_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 1574.803, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box317_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 1574.803, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box318_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 1574.803, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box319_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 1574.803, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box320_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 1574.803, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box321_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 1574.803, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box322_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 1574.803, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box323_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 1574.803, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box324_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 1536.803, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box325_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 1536.803, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box326_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 1536.803, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box327_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 1536.803, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box328_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 1536.417, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box329_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1577.756, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box330_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1619.094, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box331_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1536.417, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box332_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1577.756, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box333_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1619.094, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line015_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 1535.433, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape313_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 1574.803, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape314_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 1574.803, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape315_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 1574.803, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape316_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 1574.803, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape317_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 1574.803, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape318_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 1574.803, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape319_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 1574.803, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape320_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 1574.803, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape321_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1574.803, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape322_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1574.803, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape323_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1574.803, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape324_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1574.803, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape325_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 1574.803, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape326_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 1574.803, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape327_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 1574.803, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape328_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 1574.803, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape329_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1536.417, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape330_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1577.756, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape331_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1619.094, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape332_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1536.417, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape333_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1577.756, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape334_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1619.094, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box334_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-136.274, 1692.913, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box335_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-57.534, 1692.913, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box336_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[21.206, 1692.913, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box337_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[99.946, 1692.913, -251.852]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box338_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-116.589, 1692.913, 232.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box339_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-37.849, 1692.913, 232.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box340_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[40.891, 1692.913, 232.408]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box341_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[119.631, 1692.913, 232.407]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box342_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.784, 1692.913, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box343_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.45, 1692.913, -127.703]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box344_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.776, 1692.913, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box345_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.55, 1692.913, 0.05]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box346_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-231.354, 1654.913, -192.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box347_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-211.771, 1654.913, 173.48]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box348_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[214.652, 1654.913, 173.263]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box349_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[196.062, 1654.913, -192.909]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box350_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.993, 1654.527, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box351_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1695.866, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box352_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-17.994, 1737.205, -252.906]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box353_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1654.527, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box354_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1695.866, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box355_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[2.649, 1737.205, 232.232]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line016_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-8.328, 1653.543, -9.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape335_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[99.946, 1692.913, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape336_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[21.229, 1692.913, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape337_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-57.487, 1692.913, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape338_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-136.204, 1692.913, -251.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape339_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[119.579, 1692.913, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape340_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[40.862, 1692.913, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape341_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-37.854, 1692.913, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape342_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-116.571, 1692.913, 232.826]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape343_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1692.913, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape344_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[293.168, 1692.913, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape345_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1692.913, 0.113]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape346_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.124, 1692.913, -117.903]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape347_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[205.83, 1692.913, -193.356]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape348_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[224.687, 1692.913, 172.799]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape349_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-201.807, 1692.913, 173.07]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape350_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-221.499, 1692.913, -193.251]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape351_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1654.527, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape352_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1695.866, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape353_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-17.914, 1737.205, -252.543]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape354_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1654.527, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape355_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1695.866, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape356_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[2.728, 1737.205, 232.595]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box356_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 39.295, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape357_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 39.295, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box357_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 157.329, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape358_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 157.329, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box358_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 275.364, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape359_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 275.364, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box359_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 393.399, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape360_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 393.399, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box360_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 511.434, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape361_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 511.434, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box361_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 629.469, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape362_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 629.469, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box362_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 747.503, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape363_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 747.503, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box363_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 865.538, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape364_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 865.538, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box364_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 983.573, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape365_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 983.573, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box365_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 1101.608, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape366_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 1101.608, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box366_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 1219.642, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape367_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 1219.642, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box367_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 1337.677, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape368_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 1337.677, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box368_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 1455.712, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape369_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 1455.712, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box369_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 1573.747, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape370_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 1573.747, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box370_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-309.452, 1691.782, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape371_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-309.055, 1691.782, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box371_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, -78.74, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box372_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 39.295, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box373_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 157.329, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box374_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 275.364, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box375_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 393.399, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box376_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 511.434, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box377_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 629.469, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box378_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 747.503, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box379_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 865.538, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box380_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 983.573, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box381_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 1101.608, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box382_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 1219.642, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box383_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 1337.677, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box384_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 1455.712, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box385_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 1573.747, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box386_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[292.502, 1691.782, 78.857]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape372_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, -78.74, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape373_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 39.295, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape374_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 157.329, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape375_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 275.364, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape376_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 393.399, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape377_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 511.434, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape378_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 629.469, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape379_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 747.503, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape380_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 865.538, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape381_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 983.573, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape382_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 1101.608, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape383_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 1219.642, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape384_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 1337.677, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape385_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 1455.712, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape386_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 1573.747, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape387_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[292.899, 1691.782, 78.778]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line017_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-7.923, -118.11, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line018_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-7.923, 0, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line019_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-7.923, 118.11, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line020__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 236.22, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line021_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-7.923, 236.22, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line022__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 354.331, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line023__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 472.441, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line024__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 590.551, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line025__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 708.661, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line026__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 826.772, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line027__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 944.882, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line028__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 1062.992, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line029__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 1181.102, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line030__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 1299.213, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line031__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 1417.323, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line032__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 1535.433, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line034__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 1653.543, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line035__0.geometry}
          material={materials.Line020__0}
          position={[-7.923, 1771.654, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line036_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, -118.11, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line037_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, -118.11, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line038_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, -118.11, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line039_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, -118.11, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line040_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, -106.299, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line041_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, -106.299, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line042_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, -106.299, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line043_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[262.204, -106.299, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line044_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, -107.747, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line045_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, -107.747, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line046_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, -107.747, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line047_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, -107.747, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box388_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, -118.11, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box389_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, -118.11, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box390_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, -118.11, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box391_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, -118.11, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box392_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, -118.11, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box393_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, -118.11, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box394_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, -118.11, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box395_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, -118.11, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box396_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, -118.11, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box397_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, -118.11, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box398_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, -118.11, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box399_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, -118.11, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line048_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 11.811, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line049_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 10.363, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box400_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 0, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line050_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 0, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box401_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 0, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box402_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 0, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line051_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 0, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box403_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 0, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line052_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 10.363, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box404_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 0, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box405_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 0, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line053_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 11.811, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line054_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 10.363, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box406_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 0, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box407_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 0, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box408_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 0, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line055_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 0, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line056_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 11.811, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line057_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 10.363, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box409_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 0, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box410_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 0, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box411_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 0, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line058_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 0, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line059_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 129.921, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line060_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 128.474, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box412_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 118.11, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line061_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 118.11, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box413_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 118.11, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box414_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 118.11, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line062_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 118.11, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box415_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 118.11, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line063_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 128.474, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box416_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 118.11, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box417_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 118.11, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line064_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 129.921, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line065_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 128.474, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box418_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 118.11, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box419_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 118.11, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box420_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 118.11, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line066_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 118.11, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line067_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 129.921, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line068_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 128.474, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box421_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 118.11, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box422_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 118.11, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box423_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 118.11, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line069_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 118.11, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line070_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 248.031, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line071_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 246.584, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box424_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 236.22, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line072_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 236.22, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box425_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 236.22, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box426_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 236.22, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line073_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 236.22, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box427_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 236.22, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line074_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 246.584, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box428_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 236.22, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box429_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 236.22, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line075_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 248.031, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line076_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 246.584, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box430_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 236.22, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box431_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 236.22, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box432_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 236.22, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line077_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 236.22, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line078_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 248.031, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line079_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 246.584, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box433_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 236.22, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box434_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 236.22, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box435_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 236.22, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line080_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 236.22, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line081_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 366.142, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line082_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 364.694, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box436_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 354.331, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line083_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 354.331, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box437_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 354.331, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box438_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 354.331, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line084_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 354.331, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box439_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 354.331, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line085_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 364.694, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box440_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 354.331, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box441_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 354.331, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line086_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 366.142, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line087_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 364.694, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box442_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 354.331, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box443_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 354.331, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box444_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 354.331, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line088_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 354.331, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line089_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 366.142, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line090_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 364.694, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box445_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 354.331, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box446_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 354.331, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box447_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 354.331, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line091_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 354.331, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line092_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 484.252, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line093_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 482.804, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box448_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 472.441, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line094_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 472.441, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box449_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 472.441, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box450_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 472.441, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line095_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 472.441, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box451_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 472.441, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line096_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 482.804, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box452_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 472.441, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box453_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 472.441, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line097_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 484.252, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line098_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 482.804, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box454_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 472.441, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box455_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 472.441, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box456_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 472.441, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line099_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 472.441, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line100_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 484.252, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line101_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 482.804, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box457_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 472.441, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box458_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 472.441, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box459_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 472.441, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line102_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 472.441, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line103_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 602.362, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line104_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 600.915, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box460_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 590.551, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line105_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 590.551, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box461_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 590.551, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box462_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 590.551, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line106_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 590.551, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box463_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 590.551, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line107_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 600.915, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box464_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 590.551, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box465_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 590.551, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line108_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 602.362, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line109_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 600.915, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box466_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 590.551, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box467_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 590.551, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box468_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 590.551, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line110_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 590.551, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line111_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 602.362, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line112_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 600.915, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box469_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 590.551, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box470_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 590.551, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box471_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 590.551, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line113_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 590.551, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line114_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 720.472, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line115_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 719.025, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box472_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 708.661, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line116_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 708.661, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box473_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 708.661, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box474_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 708.661, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line117_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 708.661, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box475_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 708.661, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line118_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 719.025, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box476_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 708.661, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box477_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 708.661, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line119_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 720.472, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line120_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 719.025, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box478_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 708.661, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box479_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 708.661, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box480_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 708.661, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line121_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 708.661, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line122_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 720.472, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line123_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 719.025, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box481_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 708.661, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box482_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 708.661, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box483_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 708.661, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line124_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 708.661, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line125_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 838.583, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line126_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 837.135, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box484_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 826.772, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line127_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 826.772, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box485_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 826.772, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box486_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 826.772, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line128_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 826.772, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box487_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 826.772, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line129_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 837.135, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box488_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 826.772, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box489_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 826.772, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line130_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 838.583, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line131_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 837.135, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box490_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 826.772, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box491_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 826.772, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box492_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 826.772, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line132_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 826.772, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line133_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 838.583, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line134_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 837.135, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box493_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 826.772, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box494_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 826.772, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box495_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 826.772, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line135_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 826.772, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line136_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 956.693, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line137_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 955.245, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box496_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 944.882, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line138_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 944.882, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box497_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 944.882, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box498_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 944.882, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line139_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 944.882, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box499_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 944.882, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line140_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 955.245, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box500_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 944.882, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box501_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 944.882, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line141_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 956.693, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line142_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 955.245, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box502_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 944.882, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box503_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 944.882, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box504_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 944.882, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line143_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 944.882, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line144_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 956.693, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line145_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 955.245, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box505_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 944.882, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box506_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 944.882, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box507_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 944.882, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line146_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 944.882, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line147_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 1074.803, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line148_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 1073.356, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box508_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1062.992, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line149_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 1062.992, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box509_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1062.992, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box510_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 1062.992, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line150_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 1062.992, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line152_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 1074.803, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line153_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1073.356, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box514_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 1062.992, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box515_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 1062.992, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box516_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 1062.992, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line154_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 1062.992, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line155_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 1074.803, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line156_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 1073.356, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box517_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1062.992, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box518_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1062.992, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box519_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 1062.992, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line157_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 1062.992, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line158_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 1192.913, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line159_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 1191.466, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box520_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1181.102, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line160_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 1181.102, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box521_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1181.102, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box522_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 1181.102, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line161_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 1181.102, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box523_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 1181.102, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line162_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1191.466, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box524_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 1181.102, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box525_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 1181.102, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line163_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 1192.913, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line164_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1191.466, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box526_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 1181.102, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box527_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 1181.102, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box528_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 1181.102, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line165_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 1181.102, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line166_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 1192.913, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line167_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 1191.466, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line168_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 1181.102, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line169_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 1311.024, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line170_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 1309.576, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box532_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1299.213, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line171_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 1299.213, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box533_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1299.213, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box534_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 1299.213, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line172_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 1299.213, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box535_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 1299.213, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line173_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1309.576, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box536_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 1299.213, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box537_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 1299.213, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line174_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 1311.024, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line175_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1309.576, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box538_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 1299.213, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box539_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 1299.213, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box540_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 1299.213, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line176_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 1299.213, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line177_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 1311.024, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line178_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 1309.576, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box541_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1299.213, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box542_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1299.213, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box543_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 1299.213, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line179_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 1299.213, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line180_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 1429.134, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line181_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 1427.686, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box544_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1417.323, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line182_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 1417.323, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box545_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1417.323, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box546_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 1417.323, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line183_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 1417.323, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box547_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 1417.323, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line184_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1427.686, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box548_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 1417.323, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box549_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 1417.323, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line185_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 1429.134, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line186_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1427.686, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box550_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 1417.323, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box551_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 1417.323, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box552_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 1417.323, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line187_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 1417.323, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line188_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 1429.134, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line189_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 1427.686, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box553_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1417.323, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box554_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1417.323, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box555_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 1417.323, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line190_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 1417.323, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line191_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 1547.244, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line192_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 1545.797, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box556_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1535.433, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line193_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 1535.433, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box557_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1535.433, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box558_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 1535.433, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line194_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 1535.433, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box559_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 1535.433, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line195_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1545.797, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box560_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 1535.433, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box561_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 1535.433, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line196_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 1547.244, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line197_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1545.797, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box562_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 1535.433, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box563_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 1535.433, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box564_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 1535.433, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line198_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 1535.433, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line199_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 1547.244, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line200_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 1545.797, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box565_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1535.433, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box566_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1535.433, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box567_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 1535.433, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line201_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 1535.433, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line202_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-259.224, 1665.354, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line203_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-223.201, 1663.907, 197.633]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box568_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1653.543, 250.284]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line204_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-259.224, 1653.543, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box569_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-339.623, 1653.543, 179.681]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box570_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-178.227, 1653.543, 250.235]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line205_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[262.204, 1653.543, 215.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box571_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.452, 1653.543, 263.864]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line206_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1663.907, 224.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box572_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[308.406, 1653.543, 180.473]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box573_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[180.553, 1653.543, 263.897]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line207_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[242.549, 1665.354, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line208_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[206.407, 1663.907, -217.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box574_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.805, 1653.543, -199.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box575_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[322.783, 1653.543, -269.54]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box576_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[161.508, 1653.543, -269.525]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line209_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-245.207, 1653.543, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line210_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[-245.207, 1665.354, -248.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line211_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-272.984, 1663.907, -243.719]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box577_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1653.543, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box578_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-325.61, 1653.543, -198.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box579_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-198.829, 1653.543, -282.564]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line212_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[242.549, 1653.543, -234.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line213__0.geometry}
          material={materials.Line020__0}
          position={[-23.396, 1771.65, -22.684]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box580_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[170.454, -122.297, 256.814]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box581_05_-_Default_0"].geometry}
          material={materials["05_-_Default"]}
          position={[-13.554, 1535.433, 237.058]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box582_05_-_Default_0"].geometry}
          material={materials["05_-_Default"]}
          position={[17.126, 1535.433, 237.058]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box583_05_-_Default_0"].geometry}
          material={materials["05_-_Default"]}
          position={[-33.922, 1535.433, -257.551]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box584_05_-_Default_0"].geometry}
          material={materials["05_-_Default"]}
          position={[-3.243, 1535.433, -257.551]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box588_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-169.513, -122.297, -276.474]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box590__0.geometry}
          material={materials.Line020__0}
          position={[-59.917, -101.087, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box591__0.geometry}
          material={materials.Line020__0}
          position={[-59.917, 17.017, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box592__0.geometry}
          material={materials.Line020__0}
          position={[-59.917, 135.127, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box593__0.geometry}
          material={materials.Line020__0}
          position={[-59.917, 253.237, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box594__0.geometry}
          material={materials.Line020__0}
          position={[-59.917, 371.347, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box595__0.geometry}
          material={materials.Line020__0}
          position={[-59.917, 489.458, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box596__0.geometry}
          material={materials.Line020__0}
          position={[64.566, 607.574, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box597__0.geometry}
          material={materials.Line020__0}
          position={[64.566, 725.678, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box598__0.geometry}
          material={materials.Line020__0}
          position={[64.566, 843.788, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box599__0.geometry}
          material={materials.Line020__0}
          position={[64.566, 961.899, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box602_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[168.891, 1198.119, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box603_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[-146.116, 1198.119, 236.512]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box604_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[299.028, 1198.119, 147.735]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box605_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[299.028, 1198.119, -154.008]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box606_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[145.88, 1198.119, -256.9]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box607_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[-168.993, 1198.119, -255.892]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box608_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[-312.766, 1198.119, -154.008]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box609_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[-312.766, 1198.119, 147.751]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box610__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 962.57, -19.587]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box611__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 844.098, -19.587]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box612__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 725.627, -19.587]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box613__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 607.155, -19.587]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box614__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 488.684, -19.587]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box615__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 372.135, -109.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box616__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 254.203, -109.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box617__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 136.272, -109.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box618__0.geometry}
          material={materials.Line020__0}
          position={[385.698, 18.341, -109.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box619__0.geometry}
          material={materials.Line020__0}
          position={[385.698, -99.591, -109.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line214_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-244.991, 1798.645, -230.041]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line215_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[226.631, 1791.546, 210.955]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box620__0.geometry}
          material={materials.Line020__0}
          position={[-25.651, -118.11, 8.599]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line216_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[0.609, -107.844, -22.664]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line217_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-7.923, -237.204, -9.671]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box621_23_-_Default_0"].geometry}
          material={materials["23_-_Default"]}
          position={[-380.526, -248.854, -358.007]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box622_23_-_Default_0"].geometry}
          material={materials["23_-_Default"]}
          position={[382.891, -248.854, -358.007]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box623_23_-_Default_0"].geometry}
          material={materials["23_-_Default"]}
          position={[-383.76, -248.854, 360.773]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box624_23_-_Default_0"].geometry}
          material={materials["23_-_Default"]}
          position={[404.125, -248.854, 359.383]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box625_11_-_Default_0"].geometry}
          material={materials["11_-_Default"]}
          position={[23.989, -353.736, 10.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line218_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-135.113, -145.648, -222.6]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line219_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[148.582, -145.648, -213.962]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line220_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[277.681, -145.648, -125.849]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line222_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[204.89, -145.648, 168.015]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line223_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[14.378, -145.648, 223.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line224_12_-_Car_Paint_0"].geometry}
          material={materials["12_-_Car_Paint"]}
          position={[-180.546, -145.648, 195.074]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line225_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-295.604, -145.648, 89.316]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line226_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-294.145, -145.648, -40.148]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line227_12_-_Car_Paint_0"].geometry}
          material={materials["12_-_Car_Paint"]}
          position={[-237.235, -145.648, -173.969]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line228_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[345.356, -145.648, 255.141]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line229_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[277.804, -145.648, 255.141]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line230_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[210.253, -145.648, 255.141]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line231_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[142.701, -145.648, 255.141]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line235_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-112.059, -145.648, 255.141]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line236_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-166.89, -145.648, 255.141]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line237_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-221.722, -145.648, 255.141]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line238_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-279.925, -145.648, 255.141]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line239_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[345.356, -145.648, -284.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line240_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[277.804, -145.648, -284.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line241_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[210.253, -145.648, -284.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line242_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[142.701, -145.648, -284.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line246_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-112.059, -145.648, -284.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line247_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-166.89, -145.648, -284.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line248_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-221.722, -145.648, -284.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line249_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-279.925, -145.648, -284.658]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage001_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[402.611, -243.493, 355.856]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.355}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage002_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[431.389, -242.623, 355.582]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage003_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[373.446, -242.623, 355.582]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage004_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[-372.16, -243.493, 355.856]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.355}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage005_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[-343.382, -242.623, 355.582]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage006_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[-401.325, -242.623, 355.582]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage007_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[-379.678, -243.493, -357.022]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.355}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage008_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[-350.9, -242.623, -357.296]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage009_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[-408.842, -242.623, -357.296]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage010_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[391.515, -243.493, -357.022]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.355}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage011_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[420.293, -242.623, -357.296]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Foliage012_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[362.35, -242.623, -357.296]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

export default Model

useGLTF.preload("/building1.glb");
