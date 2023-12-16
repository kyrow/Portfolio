import GridLayoutWidget from '../../widgets/gridLayout'
import styles from './index.module.scss'

function MainPage() {

	const { container, gridContainer } = styles

	return (
		<div className={container}>

			<div className={gridContainer}>
				<GridLayoutWidget />
			</div>
		</div>
	)
}

export default MainPage
