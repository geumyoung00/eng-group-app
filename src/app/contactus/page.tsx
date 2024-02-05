import PageTemp from '@/components/Temp/pageTemp';
import contactusImg from '/public/search.jpg';

export default function ContactUs() {
	return (
		<>
			<PageTemp
				pageScript={'Scale to infinity'}
				imgScript={'Contact Us'}
				imgSrc={contactusImg}
			/>
		</>
	);
}
