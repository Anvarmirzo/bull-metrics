import Head from "next/head";
import Image from "next/image";
import AddBanner from "../public/images/AddBanner 1.png";
import Banner1200 from "../public/images/banner-1200-150.png";
import Banner728 from "../public/images/banner-728-90.png";
import Banner160 from "../public/images/banner-160-600.png";
import Banner150 from "../public/images/banner-150-150.png";
import {Footer, Header, HeaderBanners} from "../components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

export default function Home() {
	return (
		<>
			<Head>
				<title>Bull-metrics</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HeaderBanners />

			<Header />

			<section className="banner-third">
				<div className="banner-third__container container">
					<div className="banner__content banner-stroke__color">
						<a href="#">
							<Image src={Banner1200} alt="" />
						</a>
						<a href="#" className="banner__decor">
							<Image src={AddBanner} alt="" />
							<span>Разместить рекламу</span>
						</a>
					</div>
				</div>
			</section>
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
								<a href="#">Реклама</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#">Реклама</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#">Реклама</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#">Реклама</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#">Реклама</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#">Реклама</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#">Реклама</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#">Реклама</a>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
			<section className="banner-fourth">
				<div className="banner-fourth__container container">
					<div className="banner-fourth__row row">
						<div className=" banner-fourth__left col">
							<div className="banner__content banner-stroke__color">
								<a href="#">
									<Image src={Banner160} alt="" />
								</a>
								<a href="#" className="banner__decor">
									<Image src={AddBanner} alt="" />
									<span>Разместить рекламу</span>
								</a>
							</div>
							<div className="banner__content banner-stroke__color banner__content-item">
								<a href="#">
									<Image src={Banner150} alt="" />
								</a>
								<a href="#" className="banner__decor">
									<Image src={AddBanner} alt="" />
									<span>Разместить рекламу</span>
								</a>
							</div>
						</div>
						<div className=" banner-fourth__center col-xl-6 col-sm-12">
							<div className="banner__content banner-stroke__color">
								<a href="#">
									<Image src={Banner728} alt="" />
								</a>
								<a href="#" className="banner__decor">
									<Image src={AddBanner} alt="" />
									<span>Разместить рекламу</span>
								</a>
							</div>
							<div className="banner-fourth__list">
								<div className="banner-fourth__list-link">
									<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
								</div>
								<div className="banner-fourth__list-text">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, architecto est. Commodi, quis!
										Unde, nesciunt? Maiores atque debitis doloremque magnam placeat assumenda quam repudiandae ut
										suscipit. Quos sit officiis aspernatur.
									</p>
								</div>
							</div>
							<div className="banner-fourth__list">
								<div className="banner-fourth__list-link">
									<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
								</div>
								<div className="banner-fourth__list-text">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, architecto est. Commodi, quis!
										Unde, nesciunt? Maiores atque debitis doloremque magnam placeat assumenda quam repudiandae ut
										suscipit. Quos sit officiis aspernatur.
									</p>
								</div>
							</div>
							<div className="banner-fourth__list">
								<div className="banner-fourth__list-link">
									<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
								</div>
								<div className="banner-fourth__list-text">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, architecto est. Commodi, quis!
										Unde, nesciunt? Maiores atque debitis doloremque magnam placeat assumenda quam repudiandae ut
										suscipit. Quos sit officiis aspernatur.
									</p>
								</div>
							</div>
						</div>
						<div className=" banner-fourth__right col">
							<div className="banner__content banner-stroke__color">
								<a href="#">
									<Image src={Banner160} alt="" />
								</a>
								<a href="#" className="banner__decor">
									<Image src={AddBanner} alt="" />
									<span>Разместить рекламу</span>
								</a>
							</div>
							<div className="banner__content banner-stroke__color banner__content-item">
								<a href="#">
									<Image src={Banner150} alt="" />
								</a>
								<a href="#" className="banner__decor">
									<Image src={AddBanner} alt="" />
									<span>Разместить рекламу</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
