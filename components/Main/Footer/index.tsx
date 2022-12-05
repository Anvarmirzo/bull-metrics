import React from "react";
import {Banner728x90} from "../Banners";

export const Footer = () => {
	return (
		<footer className="footer-section">
			<div className="footer-section__container container-fluid">
				<div className="banner-fifth">
					<Banner728x90 />
				</div>
				<div className="banner-fifth">
					<Banner728x90 />
				</div>
			</div>
			<div className="footer-section__copirayt">
				<span>Bull-Metrics.com © 2022 All Rights Reserved</span>
			</div>
		</footer>
	);
};
