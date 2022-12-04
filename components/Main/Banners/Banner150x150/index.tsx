import React from "react";
import Image from "next/image";
import Banner150 from "../../../../public/images/banner-150-150.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";

export const Banner150x150 = () => {
	return (
		<div className="banner__content banner-stroke__color banner__content-item">
			<a href="#">
				<Image src={Banner150} alt="" />
			</a>
			<a href="#" className="banner__decor">
				<Image src={AddBanner} alt="" />
				<span>Разместить рекламу</span>
			</a>
		</div>
	);
};
