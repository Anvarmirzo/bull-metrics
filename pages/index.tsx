import Head from "next/head";
import {
	Banner1200x150,
	Banner150x150,
	Banner1600x200,
	Banner160x600,
	Banner728x90,
	Footer,
	Header,
	HeaderBanners,
	HeaderChains,
	MainContexts,
} from "../components";
import {useAppSelector} from "../core/hooks";
import {eBannerComponent, eBannerPosition, eBannerSize} from "../core/models";
import {useCallback} from "react";

const placeholders = {
	[eBannerSize.size_1600x200]: Banner1600x200,
	[eBannerSize.size_1200x150]: Banner1200x150,
	[eBannerSize.size_728x90]: Banner728x90,
	[eBannerSize.size_160x600]: Banner160x600,
	[eBannerSize.size_150x150]: Banner150x150,
};

export default function Home() {
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
			<Head>
				<title>Bull-metrics</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HeaderBanners />
			<HeaderChains />
			<Header />

			<section className="banner-third">
				{renderBanners({
					bannerSize: eBannerSize.size_1200x150,
					component: eBannerComponent.Main,
					index: 1,
					position: eBannerPosition.full,
				})}
			</section>

			<section className="banner-fourth">
				<div className="banner-fourth__container container">
					<div className="banner-fourth__row row">
						<div className="banner-fourth__left col">
							{renderBanners({
								bannerSize: eBannerSize.size_160x600,
								component: eBannerComponent.Sidebar,
								index: 1,
								position: eBannerPosition.left,
							})}
							{renderBanners({
								bannerSize: eBannerSize.size_150x150,
								component: eBannerComponent.Sidebar,
								index: 1,
								position: eBannerPosition.left,
							})}
						</div>
						<div className=" banner-fourth__center col-xl-6 col-sm-12">
							{renderBanners({
								bannerSize: eBannerSize.size_728x90,
								component: eBannerComponent.Main,
								index: 1,
								position: eBannerPosition.full,
							})}
							<MainContexts />
						</div>
						<div className=" banner-fourth__right col">
							{renderBanners({
								bannerSize: eBannerSize.size_160x600,
								component: eBannerComponent.Sidebar,
								index: 1,
								position: eBannerPosition.right,
							})}
							{renderBanners({
								bannerSize: eBannerSize.size_150x150,
								component: eBannerComponent.Sidebar,
								index: 1,
								position: eBannerPosition.right,
							})}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
