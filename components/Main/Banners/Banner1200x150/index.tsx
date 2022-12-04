import React from "react";
import Image from "next/image";
import Banner1200 from "../../../../public/images/banner-1200-150.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";

export const Banner1200x150 = () => {
	return (
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
	);
};
