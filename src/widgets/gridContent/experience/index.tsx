import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const SingleWork = ({ title, jobName }: { title: string, jobName?: string }) => {

	const { workContainer, pointer } = styles

	return (
		<li className={workContainer}>
			<span>{title}</span>
			<span className={pointer}>-</span>
			<span>{jobName}</span>
		</li>
	)
}

function ExperienceWidget() {

	const { container, title, timelineContainer, timeLine, workList, icon } = styles

	return (
		<div className={container}>
			<h2 className={title}>My experience:</h2>
			<div className={timelineContainer}>
				<span className={timeLine}></span>
				<ul className={workList}>
					<SingleWork title='NetLight lab.' jobName='Manager of tech. support' />
					<SingleWork title='Freelance' />
					<SingleWork title='Autodata' jobName='Frontend developer' />
					<SingleWork title='Blackbox std.' jobName='Frontend developer' />
				</ul>
			</div>
			<button>
				<span>More info</span>
				<FontAwesomeIcon icon={faArrowRightLong} className={icon} />
			</button>
		</div>
	)
}

export default ExperienceWidget
