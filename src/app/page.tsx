import PageTemp from '../components/Temp/pageTemp';
import HomeImg from '../../public/home.jpg';

export default function Home() {
	return (
		<>
			<PageTemp
				pageScript={'Professional Cloud Hosting'}
				imgScript={'Home'}
				imgSrc={HomeImg}
			/>
		</>
	);
}
