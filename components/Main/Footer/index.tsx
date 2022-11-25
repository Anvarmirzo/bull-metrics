import React from "react";
import Image from "next/image";
import AddBanner from "../../../public/images/AddBanner 1.png";
import Banner728 from "../../../public/images/banner-728-90.png";

export const Footer = () => {
	return (
		<footer className="footer-section">
			<div className="footer-section__container container-fluid">
				<div className="banner-fifth">
					<div className="banner__content banner-stroke__color">
						<a href="#">
							<Image src={Banner728} alt="" />
						</a>
						<a href="#" className="banner__decor">
							<Image src={AddBanner} alt="" />
							<span>Разместить рекламу</span>
						</a>
					</div>
				</div>
				<div className="banner-fifth">
					<div className="banner__content banner-stroke__color">
						<a href="#">
							<Image src={Banner728} alt="" />
						</a>
						<a href="#" className="banner__decor">
							<Image src={AddBanner} alt="" />
							<span>Разместить рекламу</span>
						</a>
					</div>
				</div>
			</div>
			<div className="footer-section__copirayt">
				<span>Bull-Metrics.com © 2022 All Rights Reserved</span>
			</div>
		</footer>
	);
};
