import React, {useCallback} from "react";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import {Banner728x90} from "../Banner728x90";
import {Banner1600x200} from "../Banner1600x200";
import {useAppSelector} from "../../../../core/hooks";
import {eBannerComponent, eBannerPosition, eBannerSize} from "../../../../core/models";
import {Banner1200x150} from "../Banner1200x150";
import {Banner160x600} from "../Banner160x600";
import {Banner150x150} from "../Banner150x150";

const placeholders = {
	[eBannerSize.size_1600x200]: Banner1600x200,
	[eBannerSize.size_1200x150]: Banner1200x150,
	[eBannerSize.size_728x90]: Banner728x90,
	[eBannerSize.size_160x600]: Banner160x600,
	[eBannerSize.size_150x150]: Banner150x150,
};

export const HeaderBanners = () => {
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
		<>
			<section className="banner-first">
				<div className="banner-first__container container-fluid">
					{renderBanners({
						bannerSize: eBannerSize.size_1600x200,
						component: eBannerComponent.Header,
						index: 1,
						position: eBannerPosition.full,
					})}
				</div>
			</section>
			<section className="logo-section">
				<div className="logo-section__container container">
					<div className="logo">
						<a href="#">
							<Image src={Logo} alt="" unoptimized />
						</a>
					</div>
					<div className="banner-second">
						{renderBanners({
							bannerSize: eBannerSize.size_728x90,
							component: eBannerComponent.Header,
							index: 1,
							position: eBannerPosition.full,
						})}
					</div>
				</div>
			</section>
		</>
	);
};
