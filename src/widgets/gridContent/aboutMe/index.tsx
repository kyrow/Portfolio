import { Suspense } from 'react'
import styles from './index.module.scss'
import { Canvas } from '@react-three/fiber'

import { Environment, OrbitControls } from "@react-three/drei"
import { BlacksadModel } from '../../../assets/models/Scene'

function AboutMeWidget() {

	const { container, jobStatus, dot, modelContainer } = styles

	return (

		<div className={container}>

			<span className={jobStatus}>
				<div className={dot}></div>
				Active Job Searching
			</span>

			<div className={modelContainer}>
				<Canvas
					camera={{ position: [0, 0, 4] }}
				>
					<Environment preset="sunset" />
					<OrbitControls
						enableZoom={false}
						minAzimuthAngle={-Infinity}
						maxAzimuthAngle={Infinity}
						minPolarAngle={Math.PI / 2}
						maxPolarAngle={Math.PI / 2}
					/>
					<Suspense fallback={null}>
						<BlacksadModel />
					</Suspense>
				</Canvas>

			</div>
			<div>
				<h2>My name is Alexander</h2>
				<p>I'm frontend developer.</p>
			</div>
		</div>
	)
}

export default AboutMeWidget
