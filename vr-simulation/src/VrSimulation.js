import React from "react";
import { useGLTF } from "@react-three/drei";
import model from "./gang.gltf"
import { editable as e } from '@theatre/r3f'

export default function VrSimulation(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <group position={[16.55, 3.1, 18.72]} scale={[5.79, 0.16, 3.68]}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials.naftalyellow}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials.proxy_mat_general_reflective}
        />
        <mesh
          geometry={nodes.Cube_3.geometry}
          material={materials.Sidewalk}
        />
        <mesh
          geometry={nodes.Cube_4.geometry}
          material={materials["Naftal wall"]}
        />
        <mesh
          geometry={nodes.Cube_5.geometry}
          material={nodes.Cube_5.material}
        />
        <mesh
          geometry={nodes.Cube_6.geometry}
          material={materials.proxy_mat_roof}
        />
        <mesh
          geometry={nodes.Cube_7.geometry}
          material={materials.proxy_mat_stone}
        />
        <mesh
          geometry={nodes.Cube_8.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Cube_9.geometry}
          material={materials.proxy_mat_grey}
        />
        <mesh
          geometry={nodes.Cube_10.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Cube_11.geometry}
          material={materials.naftalblue}
        />
      </group>
      <group position={[44.02, -0.1, 1.63]} scale={[1, 1, 0.75]}>
        <mesh
          geometry={nodes.Plane016.geometry}
          material={materials["Smooth Concrete"]}
        />
        <mesh
          geometry={nodes.Plane016_1.geometry}
          material={materials["Street.001"]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.road.geometry}
        material={materials.Street}
        position={[47.35, 0, 0]}
        scale={[5, 1, 5]}
      />
      <group position={[47.36, 0.14, 0]} scale={[1.67, 1, 2.24]}>
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.Sidewalkred}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials.sidewalkwhite}
        />
        <mesh
          geometry={nodes.Cube002_3.geometry}
          material={materials.Sidewalk}
        />
      </group>
      <group position={[56.29, 2.26, -8.16]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Circle045_1.geometry}
          material={nodes.Circle045_1.material}
        />
        <mesh
          geometry={nodes.Circle045_2.geometry}
          material={materials.POTO}
        />
        <mesh
          geometry={nodes.Circle045_3.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Circle045_4.geometry}
          material={materials.rooftop}
        />
        <mesh
          geometry={nodes.Circle045_5.geometry}
          material={materials.rooftop}
        />
      </group>
      <group position={[48.59, 2.26, 8.37]}>
        <mesh
          geometry={nodes.Circle070.geometry}
          material={nodes.Circle070.material}
        />
        <mesh
          geometry={nodes.Circle070_1.geometry}
          material={materials.POTO}
        />
        <mesh
          geometry={nodes.Circle070_2.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Circle070_3.geometry}
          material={materials.rooftop}
        />
        <mesh
          geometry={nodes.Circle070_4.geometry}
          material={materials.rooftop}
        />
      </group>
      <group position={[29.82, 0.72, -12.21]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Cube079.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Cube079_1.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Cube079_2.geometry}
          material={materials.rooftop}
        />
        <mesh
          geometry={nodes.Cube079_3.geometry}
          material={nodes.Cube079_3.material}
        />
      </group>
      <group position={[66.84, 0.72, 13.96]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Cube082.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Cube082_1.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Cube082_2.geometry}
          material={materials.rooftop}
        />
        <mesh
          geometry={nodes.Cube082_3.geometry}
          material={nodes.Cube082_3.material}
        />
      </group>
      <group position={[47.36, 0.14, 0]} scale={[1.67, 1, 2.24]}>
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials.Sidewalkred}
        />
        <mesh
          geometry={nodes.Cube006_2.geometry}
          material={materials.sidewalkwhite}
        />
        <mesh
          geometry={nodes.Cube006_3.geometry}
          material={materials.Sidewalk}
        />
      </group>
      <group position={[47.36, 0.14, 0]} scale={[1.67, 1, 2.24]}>
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials.Sidewalkred}
        />
        <mesh
          geometry={nodes.Cube007_2.geometry}
          material={materials.sidewalkwhite}
        />
        <mesh
          geometry={nodes.Cube007_3.geometry}
          material={materials.Sidewalk}
        />
      </group>
      <group position={[47.36, 0.14, 0]} scale={[1.67, 1, 2.24]}>
        <mesh
          geometry={nodes.Cube021.geometry}
          material={materials.Sidewalkred}
        />
        <mesh
          geometry={nodes.Cube021_1.geometry}
          material={materials.sidewalkwhite}
        />
        <mesh
          geometry={nodes.Cube021_2.geometry}
          material={materials.Sidewalk}
        />
      </group>
      <mesh
        
        
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[66.84, 0.72, 13.96]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes.Cube003.geometry}
        material={materials["Metal grey"]}
        position={[66.84, 0.72, 13.96]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <group position={[66.84, 0.72, 13.96]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Cube024.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Cube024_1.geometry}
          material={materials["Metal grey"]}
        />
      </group>
      <mesh
        
        
        geometry={nodes.Cube007.geometry}
        material={materials.rooftop}
        position={[66.84, 0.72, 13.96]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes.Cube009.geometry}
        material={materials.handelblack}
        position={[66.84, 0.72, 13.96]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <group position={[30.7, 0.2, 24.31]}>
        <mesh
          geometry={nodes.Plane033.geometry}
          material={materials.proxy_mat_roof}
        />
        <mesh
          geometry={nodes.Plane033_1.geometry}
          material={materials["Naftal wall"]}
        />
        <mesh
          geometry={nodes.Plane033_2.geometry}
          material={materials.naftalyellow}
        />
        <mesh
          geometry={nodes.Plane033_3.geometry}
          material={materials.Sidewalk}
        />
        <mesh
          geometry={nodes.Plane033_4.geometry}
          material={materials.naftalblue}
        />
      </group>
      <group position={[30.62, 0.21, 20.23]}>
        <mesh
          geometry={nodes.Plane012.geometry}
          material={materials.clima}
        />
        <mesh
          geometry={nodes.Plane012_1.geometry}
          material={materials.naftalblue}
        />
        <mesh
          geometry={nodes.Plane012_2.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Plane012_3.geometry}
          material={materials.naftalyellow}
        />
        <mesh
          geometry={nodes.Plane012_4.geometry}
          material={materials["Naftal wall"]}
        />
        <mesh
          geometry={nodes.Plane012_5.geometry}
          material={nodes.Plane012_5.material}
        />
      </group>
      <group position={[30.62, 0.21, 22.3]}>
        <mesh
          geometry={nodes.Plane017.geometry}
          material={materials.clima}
        />
        <mesh
          geometry={nodes.Plane017_1.geometry}
          material={materials.naftalblue}
        />
        <mesh
          geometry={nodes.Plane017_2.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Plane017_3.geometry}
          material={materials.naftalyellow}
        />
        <mesh
          geometry={nodes.Plane017_4.geometry}
          material={materials["Naftal wall"]}
        />
        <mesh
          geometry={nodes.Plane017_5.geometry}
          material={nodes.Plane017_5.material}
        />
      </group>
      <group position={[55.8, 7.71, 13.18]} scale={[1.24, 1, 0.75]}>
        <mesh
          geometry={nodes.Plane008.geometry}
          material={materials.proxy_mat_roof}
        />
        <mesh
          geometry={nodes.Plane008_1.geometry}
          material={materials.proxy_mat_grey}
        />
        <mesh
          geometry={nodes.Plane008_2.geometry}
          material={materials.proxy_mat_general_reflective}
        />
        <mesh
          geometry={nodes.Plane008_3.geometry}
          material={materials.dzayerlbida}
        />
        <mesh
          geometry={nodes.Plane008_4.geometry}
          material={materials.proxy_mat_stone}
        />
        <mesh
          geometry={nodes.Plane008_5.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Plane008_6.geometry}
          material={materials.clima}
        />
        <mesh
          geometry={nodes.Plane008_7.geometry}
          material={materials["red mat stone"]}
        />
      </group>
      <group position={[36.67, 7.71, -12.35]} scale={[1.24, 1, 0.75]}>
        <mesh
          geometry={nodes.Plane004_1.geometry}
          material={materials.proxy_mat_roof}
        />
        <mesh
          geometry={nodes.Plane004_2.geometry}
          material={materials.proxy_mat_grey}
        />
        <mesh
          geometry={nodes.Plane004_3.geometry}
          material={materials.proxy_mat_general_reflective}
        />
        <mesh
          geometry={nodes.Plane004_4.geometry}
          material={materials.dzayerlbida}
        />
        <mesh
          geometry={nodes.Plane004_5.geometry}
          material={materials.proxy_mat_stone}
        />
        <mesh
          geometry={nodes.Plane004_6.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Plane004_7.geometry}
          material={materials.clima}
        />
        <mesh
          geometry={nodes.Plane004_8.geometry}
          material={materials["red mat stone"]}
        />
      </group>
      <group position={[18.9, 7.71, -12.35]} scale={[1.24, 1, 0.75]}>
        <mesh
          geometry={nodes.Plane005.geometry}
          material={materials.proxy_mat_roof}
        />
        <mesh
          geometry={nodes.Plane005_1.geometry}
          material={materials.proxy_mat_grey}
        />
        <mesh
          geometry={nodes.Plane005_2.geometry}
          material={materials.proxy_mat_general_reflective}
        />
        <mesh
          geometry={nodes.Plane005_3.geometry}
          material={materials.dzayerlbida}
        />
        <mesh
          geometry={nodes.Plane005_4.geometry}
          material={materials.proxy_mat_stone}
        />
        <mesh
          geometry={nodes.Plane005_5.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Plane005_6.geometry}
          material={materials.clima}
        />
        <mesh
          geometry={nodes.Plane005_7.geometry}
          material={materials["red mat stone"]}
        />
      </group>
      <group position={[73.96, 7.71, 13.18]} scale={[1.24, 1, 0.75]}>
        <mesh
          geometry={nodes.Plane007.geometry}
          material={materials.proxy_mat_roof}
        />
        <mesh
          geometry={nodes.Plane007_1.geometry}
          material={materials.proxy_mat_grey}
        />
        <mesh
          geometry={nodes.Plane007_2.geometry}
          material={materials.proxy_mat_general_reflective}
        />
        <mesh
          geometry={nodes.Plane007_3.geometry}
          material={materials.dzayerlbida}
        />
        <mesh
          geometry={nodes.Plane007_4.geometry}
          material={materials.proxy_mat_stone}
        />
        <mesh
          geometry={nodes.Plane007_5.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Plane007_6.geometry}
          material={materials.clima}
        />
        <mesh
          geometry={nodes.Plane007_7.geometry}
          material={materials["red mat stone"]}
        />
      </group>
      <group position={[65.17, 0.27, 8.34]}>
        <e.mesh
          theatreKey="mesh-1"
          
          geometry={nodes.Cube028.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Cube028_1.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Cube028_2.geometry}
          material={materials.Garbage}
        />
        <mesh
          geometry={nodes.Cube028_3.geometry}
          material={materials["Screen black"]}
        />
        <mesh
          geometry={nodes.Cube028_4.geometry}
          material={materials["Garbage.Darker"]}
        />
        <mesh
          geometry={nodes.Cube028_5.geometry}
          material={materials.Material}
        />
      </group>
      <group position={[29, 0.27, -8.21]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Cube053.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Cube053_1.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Cube053_2.geometry}
          material={materials.Garbage}
        />
        <mesh
          geometry={nodes.Cube053_3.geometry}
          material={materials["Screen black"]}
        />
        <mesh
          geometry={nodes.Cube053_4.geometry}
          material={materials["Garbage.Darker"]}
        />
        <mesh
          geometry={nodes.Cube053_5.geometry}
          material={materials.Material}
        />
      </group>
      <group position={[70.96, 0.27, 7.81]}>
        <e.mesh
               theatreKey="mesh-2"
          geometry={nodes.Cube054.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Cube054_1.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Cube054_2.geometry}
          material={materials.Garbage}
        />
        <mesh
          geometry={nodes.Cube054_3.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube054_4.geometry}
          material={materials.clima}
        />
        <mesh
          geometry={nodes.Cube054_5.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube054_6.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube054_7.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube054_8.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group position={[68.76, 0.27, 8.34]}>
        <e.mesh
          theatreKey="mesh-3"
          
          geometry={nodes.Cube055.geometry}
          material={materials.handelblack}
        />
        <mesh
          geometry={nodes.Cube055_1.geometry}
          material={materials["Metal grey"]}
        />
        <mesh
          geometry={nodes.Cube055_2.geometry}
          material={materials.Garbage}
        />
        <mesh
          geometry={nodes.Cube055_3.geometry}
          material={materials["Screen black"]}
        />
        <mesh
          geometry={nodes.Cube055_4.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/gang.gltf");