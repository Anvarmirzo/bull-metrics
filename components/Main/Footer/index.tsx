import React, {useCallback} from "react";
import {Banner1200x150, Banner150x150, Banner1600x200, Banner160x600, Banner728x90} from "../Banners";
import {eBannerSize} from "../../../core/models";
import {useAppSelector} from "../../../core/hooks";

const placeholders = {
	[eBannerSize.size_1600x200]: Banner1600x200,
	[eBannerSize.size_1200x150]: Banner1200x150,
	[eBannerSize.size_728x90]: Banner728x90,
	[eBannerSize.size_160x600]: Banner160x600,
	[eBannerSize.size_150x150]: Banner150x150,
};
export const Footer = () => {
	// redux hooks
	const banners = useAppSelector(({banner}) => banner.data);

	const renderBanners = useCallback(
		(bannerSize: eBannerSize) => {
			const currentBanners = banners.filter((b) => b.type.size === bannerSize);

			if (currentBanners.length) {
				return currentBanners.map((b) => {
					const Component = placeholders[bannerSize];
					return <Component banner={b} key={b.id} />;
				});
			} else {
				const Component = placeholders[bannerSize];
				return <Component />;
			}
		},
		[banners],
	);

	return (
		<footer className="footer-section">
			<div className="footer-section__container container-fluid">
				<div className="banner-fifth">{renderBanners(eBannerSize.size_728x90)}</div>
				<div className="banner-fifth">{renderBanners(eBannerSize.size_728x90)}</div>
			</div>
			<div className="footer-section__copirayt">
				<span>Bull-Metrics.com © 2022 All Rights Reserved</span>
			</div>
		</footer>
	);
};
