import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

export const HeaderChains = () => {
	return (
		<section className="banner-fifth">
			<div className="banner-fifth__container container">
				<div className="banner-fifth__list">
					<Swiper
						spaceBetween={50}
						slidesPerView={7}
						speed={3000}
						autoplay={{delay: 1, disableOnInteraction: false}}
						modules={[Autoplay]}
						className="banner-list-slider"
					>
						<SwiperSlide>
							<a href="#" className="d-block py-4">
								Реклама
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="#" className="d-block py-4">
								Реклама
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="#" className="d-block py-4">
								Реклама
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="#" className="d-block py-4">
								Реклама
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="#" className="d-block py-4">
								Реклама
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="#" className="d-block py-4">
								Реклама
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="#" className="d-block py-4">
								Реклама
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="#" className="d-block py-4">
								Реклама
							</a>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};
