import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './index.module.scss'
import { Autoplay, Pagination } from 'swiper/modules';


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
			modules={[Pagination, Autoplay]}
			className={container}
			autoplay={{
				delay: 1500,
				disableOnInteraction: false,
			}}
		>
			<h2 className={title}>Hard skills:</h2>
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
