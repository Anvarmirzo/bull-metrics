import React from "react";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import {Banner728x90} from "../Banner728x90";
import {Banner1600x200} from "../Banner1600x200";

export const HeaderBanners = () => {
	return (
		<>
			<section className="banner-first">
				<div className="banner-first__container container-fluid">
					<Banner1600x200 />
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
						<Banner728x90 />
					</div>
				</div>
			</section>
		</>
	);
};
