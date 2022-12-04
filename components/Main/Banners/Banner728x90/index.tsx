import React from "react";
import Image from "next/image";
import Banner728 from "../../../../public/images/banner-728-90.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";

export const Banner728x90 = () => {
	return (
		<div className="banner__content banner-stroke__color">
			<a href="#">
				<Image src={Banner728} alt="" />
			</a>
			<a href="#" className="banner__decor">
				<Image src={AddBanner} alt="" />
				<span>Разместить рекламу</span>
			</a>
		</div>
	);
};
