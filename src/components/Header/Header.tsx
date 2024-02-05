import Link from 'next/link';

export default function Header() {
	return (
		<header className='w-full absolute z-10'>
			<nav className='container relative flex flex-wrap items-center justify-between mx-auto p-8'>
				<h1>
					<Link className='font-bold text-3xl' href='/'>
						Enginner Group
					</Link>
				</h1>
				<div className='space-x-4 text-xl'>
					<Link href='/aboutus'>About Us</Link>
					<Link href='/search'>Search</Link>
					<Link href='/contactus'>Contact Us</Link>
				</div>
			</nav>
		</header>
	);
}
