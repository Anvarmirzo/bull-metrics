import React from "react";
import Image from "next/image";
import LargeBanner from "../../../../public/images/banner-1600-200.png";
import AddBanner from "../../../../public/images/AddBanner 1.png";
import Logo from "../../../../public/images/logo.png";
import Banner728 from "../../../../public/images/banner-728-90.png";

export const HeaderBanners = () => {
	return (
		<>
			<section className="banner-first">
				<div className="banner-first__container container-fluid">
					<div className="banner__content banner-stroke__color">
						<a href="#">
							<Image unoptimized src={LargeBanner} alt="" />
						</a>
						<a href="#" className="banner__decor">
							<Image unoptimized src={AddBanner} alt="" />
							<span>Разместить рекламу</span>
						</a>
					</div>
				</div>
			</section>
			<section className="logo-section">
				<div className="logo-section__container container">
					<div className="logo">
						<a href="#">
							<Image src={Logo} alt="" />
						</a>
					</div>
					<div className="banner-second">
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
			</section>
		</>
	);
};
