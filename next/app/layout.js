import { Inter } from 'next/font/google';
import './globals.css';
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body classNameName={inter.classNameName}>
				<header className='header-fixed'>
					<nav className='nav'>
						<div className='nav__brand'>
							<i className='nav__brand__logo fa-solid fa-headset'></i>
							{/* <FontAwesomeIcon icon='fa-solid fa-headset' /> */}
							<Link className='nav__brand__text' href='/'>
								pro<span className='nav__brand__text-white'>gamers</span>
							</Link>
						</div>
						<div className='nav__items'>
							<ul className='nav__items__list'>
								<li className='nav__items__list__item'>
									<Link href='/about' className='nav__items__list__item__link'>
										O nas
									</Link>
								</li>
								<li className='nav__items__list__item'>
									<Link
										href='/portfolio'
										className='nav__items__list__item__link'>
										Portfolio
									</Link>
								</li>
								<li className='nav__items__list__item'>
									<Link href='/team' className='nav__items__list__item__link'>
										Zespół
									</Link>
								</li>
								<li className='nav__items__list__item'>
									<Link
										href='/contact'
										className='nav__items__list__item__link'>
										Kontakt
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</header>
				{/* <Navbar/> */}
				{children}
				<footer className='footer wrapper'>
					<p className='footer__time'>&copy; 2024 | ProGamers</p>
					<p className='footer__text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</footer>
			</body>
		</html>
	);
}