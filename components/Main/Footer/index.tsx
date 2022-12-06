import React, {useCallback} from "react";
import {Banner1200x150, Banner150x150, Banner1600x200, Banner160x600, Banner728x90} from "../Banners";
import {eBannerComponent, eBannerPosition, eBannerSize} from "../../../core/models";
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
		({
			bannerSize,
			component,
			position,
			index,
		}: {
			bannerSize: eBannerSize;
			component: eBannerComponent;
			position: eBannerPosition;
			index: number;
		}) => {
			const currentBanner = banners.find(
				(b) =>
					b.type.size === bannerSize &&
					b.type.component === component &&
					b.type.position === position &&
					b.type.index === index,
			);

			if (currentBanner) {
				const Component = placeholders[bannerSize];
				return (
					<Component
						bannerInfo={{size: bannerSize, component, position, index}}
						banner={currentBanner}
						key={currentBanner.id}
					/>
				);
			} else {
				const Component = placeholders[bannerSize];
				return <Component bannerInfo={{size: bannerSize, component, position, index}} />;
			}
		},
		[banners],
	);

	return (
		<footer className="footer-section">
			<div className="footer-section__container container-fluid">
				<div className="banner-fifth">
					{renderBanners({
						bannerSize: eBannerSize.size_728x90,
						component: eBannerComponent.Footer,
						index: 1,
						position: eBannerPosition.left,
					})}
				</div>
				<div className="banner-fifth">
					{renderBanners({
						bannerSize: eBannerSize.size_728x90,
						component: eBannerComponent.Footer,
						index: 1,
						position: eBannerPosition.right,
					})}
				</div>
			</div>
			<div className="footer-section__copirayt">
				<span>Bull-Metrics.com © 2022 All Rights Reserved</span>
			</div>
		</footer>
	);
};
