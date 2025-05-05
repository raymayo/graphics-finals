import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PortfolioCard from '../components/PortfolioCard.jsx';
import Daft from '../assets/images/daft_final.png';
import Kdot from '../assets/images/kendrick final.png';
import Rocky from '../assets/images/rocky final.png';
import Porsche from '../assets/images/porsche final.png';
import Val2 from '../assets/images/valen 2.png';
import Val1 from '../assets/images/proj.png';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} custom-arrow`}
			style={{
				...style,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'none',
				border: '1px solid white',
				borderRadius: '50%',
				width: '40px',
				height: '40px',
				cursor: 'pointer',
				position: 'absolute',
				right: '-3rem',
			}}
			onClick={onClick}>
			<ChevronRight color="white" size={20} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} custom-arrow`}
			style={{
				...style,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'none',
				border: '1px solid white',
				borderRadius: '50%',
				width: '40px',
				height: '40px',
				cursor: 'pointer',
				position: 'absolute',
				left: '-3rem',
			}}
			onClick={onClick}>
			<ChevronLeft color="white" size={20} />
		</div>
	);
}
const Portfolio = () => {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="bg-zinc-950 text-zinc-100 w-full flex flex-col items-center justify-center px-12 min-w-[530px]">
			<div className="w-full max-w-7xl flex flex-col items-center justify-center mx-auto ">
				<h1 className="font-times font-semibold text-2xl sm:text-3xl lg:text-4xl  text-center py-10">
					Portfolio
				</h1>
				<ul className="flex text-center font-times gap-8 text-base md:text-lg lg:text-xl">
					<li className="underline underline-offset-8">All</li>
					<li>Branding</li>
					<li>Mockups</li>
					<li>Web Design</li>
				</ul>

				<div className="slider-container w-full max-w-[22rem] sm:max-w-[30rem] md:max-w-[38rem] lg:max-w-[55rem] xl:max-w-6xl py-20 ">
					<Slider {...settings}>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Daft}
								title="Daft Punk"
								type="Graphic Design"
							/>
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Porsche}
								title="RWB"
								type="Graphic Design"
							/>
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Kdot}
								title="King Kunta"
								type="Graphic Design"
							/>
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard image={Rocky} title="A$AP" type="Graphic Design" />
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Val2}
								title="Cupids"
								type="Graphic Design"
							/>
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Val1}
								title="Hearts"
								type="Graphic Design"
							/>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
