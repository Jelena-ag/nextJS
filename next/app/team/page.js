import Link from 'next/link';

const team = () => (
	<main className='main wrapper'>
		<div className='container'>
			<section className='main__team'>
				<div className='shadow'></div>
				<h2 className='main__team__title main-title'>zespół</h2>
				<div className='underline'></div>
				<div className='container'>
					<div className='main__team__card'>
						<div className='main__team__card__container'>
							<img
								src='/team/adult-2449725_1920.jpg'
								className='main__team__card__container__img'
								alt='Uśmiechnięty prezes kołó komputera'
							/>
							<div className='main__team__card__container__text'>
								<h5 className='main__team__card__container__text__title'>ceo</h5>
								<p className='main__team__card__container__text__paragraf'>
									Szef szefów. Nikt nie zna jego imienia. Podwładni mówią na
									niego "Pan Prezes".
								</p>
							</div>
							<div className='main__team__card__container__footer'>
								<Link href='/'>
									<i className='fa-brands fa-facebook-f'></i>
								</Link>
								<Link href='/'>
									<i className='fa-brands fa-twitter'></i>
								</Link>
								<Link href='/'>
									<i className='fa-brands fa-linkedin-in'></i>
								</Link>
							</div>
						</div>
						<div className='main__team__card__container'>
							<img
								src='/team/woman.jpg'
								className='main__team__card__container__img'
								alt='Paula, pracownik HR'
							/>
							<div className='main__team__card__container__text'>
								<h5 className='main__team__card__container__text__title'>hr</h5>
								<p className='main__team__card__container__text__paragraf'>
									Paula zajmuje się rekrutowaniem młodych i gniewnych talentów.
								</p>
							</div>
							<div className='main__team__card__container__footer'>
								<Link href='/'>
									<i className='fa-brands fa-facebook-f'></i>
								</Link>
								<Link href='/'>
									<i className='fa-brands fa-twitter'></i>
								</Link>
								<Link href='/'>
									<i className='fa-brands fa-linkedin-in'></i>
								</Link>
							</div>
						</div>
						<div className='main__team__card__container'>
							<img
								src='/team/building-2762241_1920.jpg'
								className='main__team__card__container__img'
								alt='grafik w kasku koło domu'
							/>
							<div className='main__team__card__container__text'>
								<h5 className='main__team__card__container__text__title'>grafik</h5>
								<p className='main__team__card__container__text__paragraf'>
									Pan Wiesio jest grafikiem z długoletnim stażem na L4
								</p>
							</div>
							<div className='main__team__card__container__footer'>
								<Link href='/'>
									<i className='fa-brands fa-facebook-f'></i>
								</Link>
								<Link href='/'>
									<i className='fa-brands fa-twitter'></i>
								</Link>
								<Link href='/'>
									<i className='fa-brands fa-linkedin-in'></i>
								</Link>
							</div>
						</div>
						<div className='main__team__card__container'>
							<img
								src='/team/entrepreneur-2326419_1920.jpg'
								className='main__team__card__container__img'
								alt='Tomek w biurze przed komputerem'
							/>
							<div className='main__team__card__container__text'>
								<h5 className='main__team__card__container__text__title'>tomek</h5>
								<p className='main__team__card__container__text__paragraf'>
									To jest Tomek. Nikt oprócz prezesa nie wie, czym zajmuje się
									Tomek.
								</p>
							</div>
							<div className='main__team__card__container__footer'>
								<Link href='/'>
									<i className='fa-brands fa-facebook-f'></i>
								</Link>
								<Link href='/'>
									<i className='fa-brands fa-twitter'></i>
								</Link>
								<Link href='/'>
									<i className='fa-brands fa-linkedin-in'></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</main>
);

export default team;
