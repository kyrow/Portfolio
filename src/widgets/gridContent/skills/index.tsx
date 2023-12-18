import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './index.module.scss'
import { Pagination } from 'swiper/modules';


function SkillsSliderWidget() {

	const { container, skillPic, singleSlide, title } = styles

	const skillsPictures = [
		'/skills_icons/typescript-icon-round.svg',
		'/skills_icons/react.svg',
		'/skills_icons/redux.svg',
		'/skills_icons/nextjs-icon.svg'
	]

	return (

		<Swiper
			slidesPerView={1}
			pagination={true}
			modules={[Pagination]}
			className={container}
		>
			<span className={title}>Stack:</span>
			{skillsPictures.map((picture, index) => (
				<SwiperSlide
					key={index}
					className={singleSlide}
				>
					<img src={picture} className={skillPic} />
				</SwiperSlide>
			))}
		</Swiper>


	)
}

export default SkillsSliderWidget
