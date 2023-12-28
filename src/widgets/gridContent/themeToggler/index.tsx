import { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { faLightbulb, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ThemeTogglerWidget() {

	const { container, toggleBtn, mainIcon } = styles

	const [currentTheme, setCurrentTheme] = useState(document.body.getAttribute("data-theme") || "light");

	useEffect(() => {
		document.body.setAttribute("data-theme", currentTheme);
	}, [currentTheme]);

	const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setCurrentTheme(currentTheme === "light" ? "dark" : "light");
	};

	return (
		<div className={container}>

			<button
				onClick={toggleTheme}
				onMouseDown={(e) => e.stopPropagation()}
				className={toggleBtn}
			>
				{currentTheme == "light" ?
					<FontAwesomeIcon icon={faLightbulb} style={{ color: "#1dd3b0", }} /> :
					<FontAwesomeIcon icon={faLightbulb} />
				}
			</button>

			{currentTheme == "light" ?
				<FontAwesomeIcon icon={faSun} className={mainIcon} beatFade /> :
				<FontAwesomeIcon icon={faMoon} className={mainIcon} bounce />
			}

		</div>
	)
}

export default ThemeTogglerWidget
