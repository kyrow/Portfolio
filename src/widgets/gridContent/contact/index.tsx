
import styles from './index.module.scss'
import { useState } from "react"
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"

function ContactWidget() {

	const { container, button, textSection, buttonIcon, reverseButtonIcon } = styles
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
				<FontAwesomeIcon
					icon={faArrowLeft}
					className={isContactOpen ? buttonIcon : reverseButtonIcon}
				/>
			</button>

			{!isContactOpen &&

				<h2>You can find me here</h2>
			}

			{isContactOpen &&

				<ul className={textSection}>
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

			}

		</div>
	)
}

export default ContactWidget
