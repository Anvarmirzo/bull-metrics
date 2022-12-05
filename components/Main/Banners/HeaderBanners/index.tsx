import React, {useCallback} from "react";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import {Banner728x90} from "../Banner728x90";
import {Banner1600x200} from "../Banner1600x200";
import {useAppSelector} from "../../../../core/hooks";
import {eBannerSize} from "../../../../core/models";
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
		<>
			<section className="banner-first">
				<div className="banner-first__container container-fluid">{renderBanners(eBannerSize.size_1600x200)}</div>
			</section>
			<section className="logo-section">
				<div className="logo-section__container container">
					<div className="logo">
						<a href="#">
							<Image src={Logo} alt="" />
						</a>
					</div>
					<div className="banner-second">{renderBanners(eBannerSize.size_728x90)}</div>
				</div>
			</section>
		</>
	);
};
