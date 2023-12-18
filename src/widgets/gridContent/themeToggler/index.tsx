import { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ThemeTogglerWidget() {

	const { container, toggleBtn } = styles

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
					<FontAwesomeIcon icon={faLightbulb} style={{ color: "#fcff5c", }} /> :
					<FontAwesomeIcon icon={faLightbulb} />
				}
			</button>

			{currentTheme == "light" ?
				<span>current theme is light</span> :
				<span>current theme is dark</span>
			}

		</div>
	)
}

export default ThemeTogglerWidget
