
import styles from './index.module.scss'
import { useState } from "react"
import { faArrowLeft, faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"

function ContactWidget() {

	const { container, textSection, button } = styles
	const [isContactOpen, setContactOpen] = useState(false)

	const switchState = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setContactOpen(!isContactOpen);
	};

	return (
		<div className={container}>

			<button
				className={button}
				onClick={switchState}
				onMouseDown={(e) => e.stopPropagation()}
			>
				{isContactOpen ?
					<FontAwesomeIcon icon={faArrowLeft} /> :
					<FontAwesomeIcon icon={faArrowRight} />
				}
			</button>

			{!isContactOpen &&
				<div className={textSection}>
					<h3>You can find me here</h3>
				</div>}

			{isContactOpen &&
				<div className={textSection}>
					<ul>
						<li>
							<FontAwesomeIcon icon={faTelegram} />
							<a href="">Telegram</a>
						</li>
						<li>
							<FontAwesomeIcon icon={faGithub} />
							<a href="">Github</a>
						</li>
						<li>
							<FontAwesomeIcon icon={faEnvelope} />
							<a href="">Mail</a>
						</li>
						<li>
							<FontAwesomeIcon icon={faLinkedin} />
							<a href="">LinkedIn</a>
						</li>
						<li>
							<FontAwesomeIcon icon={faGithub} />
							<a href="">HeadHunter</a>
						</li>
					</ul>
				</div>
			}

		</div>
	)
}

export default ContactWidget
