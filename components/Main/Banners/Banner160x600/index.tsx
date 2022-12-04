import React from "react";
import Image from "next/image";
import Banner160 from "../../../../public/images/banner-160-600.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";

export const Banner160x600 = () => {
	return (
		<div className="banner__content banner-stroke__color">
			<a href="#">
				<Image src={Banner160} alt="" />
			</a>
			<a href="#" className="banner__decor">
				<Image src={AddBanner} alt="" />
				<span>Разместить рекламу</span>
			</a>
		</div>
	);
};
