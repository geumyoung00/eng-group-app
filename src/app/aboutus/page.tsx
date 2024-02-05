import PageTemp from '@/components/Temp/pageTemp';
import aboutusImg from '/public/aboutus.jpg';

export default function AboutUs() {
	return (
		<>
			<PageTemp
				pageScript={'Blazing fast performance'}
				imgScript={'About Us'}
				imgSrc={aboutusImg}
			/>
		</>
	);
}
