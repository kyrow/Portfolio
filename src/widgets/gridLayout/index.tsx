
import GridLayout from "react-grid-layout";
import styles from './index.module.scss';
import AboutMeWidget from '../gridContent/aboutMe';
import SkillsSliderWidget from '../gridContent/skills';
import ContactWidget from "../gridContent/contact";
import ThemeTogglerWidget from "../gridContent/themeToggler";
import ExperienceWidget from "../gridContent/experience";

function GridLayoutWidget() {
	const { block } = styles;


	const layout =
		[
			{ i: "a", x: 0, y: 0, w: 6, h: 4, static: true, isResizable: false },
			{ i: "b", x: 6, y: 0, w: 3, h: 4, isResizable: false },
			{ i: "c", x: 9, y: 0, w: 3, h: 4, isResizable: false },
			{ i: "d", x: 0, y: 1, w: 3, h: 4, isResizable: false },
			{ i: "e", x: 3, y: 1, w: 3, h: 8, isResizable: false },
		]

	const components = [
		<AboutMeWidget />,
		<SkillsSliderWidget />,
		<ContactWidget />,
		<ThemeTogglerWidget />,
		<ExperienceWidget />
	];

	return (

		<GridLayout
			className="layout"
			layout={layout}
			cols={12}
			rowHeight={60}
			width={1200}
		>

			{components.map((component, index) => (
				<div key={layout[index].i} className={block}>
					{component}
				</div>
			))}
		</GridLayout>

	);
}

export default GridLayoutWidget;
