import Link from 'next/link';

const contact = () => (
	<main className='main wrapper'>
		<section className='main__contact'>
			<div className='shadow'></div>
			<h2 className='main__contact__title main-title'>kontakt</h2>
			<div className='underline'></div>
			<div className='container'>
				<div className='main__contact__cards'>
					<div className='main__contact__cards__item'>
						<h3 className='main__contact__cards__item__title'>główna siedziba</h3>
						<ul>
							<li>ul.Sezamkowa 0</li>
							<li>00-000 Kraków</li>
							<li>
								<Link href='+48000000000'>+48 000 000 000</Link>
							</li>
							<li>
								<Link href='mailto:mail@mail.pl'>mail@mail.pl</Link>
							</li>
						</ul>
					</div>
					<div className='main__contact__cards__item'>
						<h3 className='main__contact__cards__item__title'>social media</h3>
						<div className='social-media'>
							<Link href='#'>
								<i className='fa-brands fa-facebook-f'></i>
							</Link>
							<Link href='#'>
								<i className='fa-brands fa-twitter'></i>
							</Link>
							<Link href='#'>
								<i className='fa-brands fa-linkedin-in'></i>
							</Link>
						</div>
					</div>
					<div className='main__contact__cards__item'>
						<h3 className='main__contact__cards__item__title'>
							siedziba w Londynie
						</h3>
						<ul>
							<li>Milk Street 0</li>
							<li>00-000 Londyn</li>
							<li>
								<Link href='+44000000000'>+44 000 000 000</Link>
							</li>
							<li>
								<Link href='mailto:mail@mail.pl'>mail@mail.pl</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</main>
);

export default contact;
