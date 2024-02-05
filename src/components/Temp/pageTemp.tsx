import Image, { StaticImageData } from 'next/image';

export default function pageTemp({
	imgScript,
	imgSrc,
	pageScript,
}: {
	imgScript: string;
	imgSrc: StaticImageData;
	pageScript: string;
}) {
	return (
		<div className='pt-48 flex flex-col justify-center items-center realtive'>
			<h1 className='text-6xl text-center mb-10'>{pageScript}</h1>
			<div className='w-3/5'>
				<Image src={imgSrc} alt={imgScript} />
			</div>
		</div>
	);
}
