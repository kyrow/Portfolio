
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Object_2: THREE.Mesh
		Object_3: THREE.Mesh
		Object_4: THREE.Mesh
		Object_5: THREE.Mesh
	}
	materials: {
		None: THREE.MeshStandardMaterial
	}
}

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function BlacksadModel(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('blacksad_bust/scene.gltf') as GLTFResult
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={0.545}>
				<mesh geometry={nodes.Object_2.geometry} material={materials.None} />
				<mesh geometry={nodes.Object_3.geometry} material={materials.None} />
				<mesh geometry={nodes.Object_4.geometry} material={materials.None} />
				<mesh geometry={nodes.Object_5.geometry} material={materials.None} />
			</group>
		</group>
	)
}

useGLTF.preload('/scene.gltf')
