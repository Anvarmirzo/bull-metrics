import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import Image from "next/image";
import AddBanner from "../../../../public/images/AddBanner 1.png";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {toast} from "react-toastify";

export const HeaderChains = () => {
	// redux hooks
	const chainTypes = useAppSelector(({chain}) => chain.types);
	const dispatch = useAppDispatch();

	const onToggleModalVisibility = (payload: {name: "order"; isVisible: boolean}) => () => {
		const chain = chainTypes.data[0];
		if (chain) {
			dispatch(
				setIsVisibleModalAction({
					name: payload.name,
					data: {isVisible: payload.isVisible, price: chain.price, currentType: "chain"},
				}),
			);
		} else {
			toast.error("На данный момент нет места для текущей цепочки.");
		}
	};

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
				<button
					onClick={onToggleModalVisibility({name: "order", isVisible: true})}
					type="button"
					className="d-block ms-auto banner__decor"
				>
					<Image src={AddBanner} alt="" />
					<span>Разместить рекламу</span>
				</button>
			</div>
		</section>
	);
};
