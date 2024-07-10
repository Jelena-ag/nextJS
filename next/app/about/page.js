import { goals } from './goals';

const about = () => (
	<main className='main wrapper'>
		<section className='main__aboutus'>
			<div className='container'>
				<h2 className='main__aboutus__title main-title'>o nas</h2>
				<div className='underline'></div>
				<div className='main__aboutus__row'>
					
					{/* {		
				goals.map(goal => (

					<div className='main__aboutus__row__section'>
						<i className="goal"> {goal.goal}></i>
						<p className='main__aboutus__row__section__title'></p>
						<p className='main__aboutus__row__section__text'>
</p>
					</div>
				))
} */}

					<div className='main__aboutus__row__section'>
						<i className='fa-solid fa-mobile-screen'></i>
						<p className='main__aboutus__row__section__title'>mobile gaming</p>
						<p className='main__aboutus__row__section__text'>
							Tworzymy gry na urządzenia mobilne!
						</p>
					</div>
					<div className='main__aboutus__row__section'>
						<i className='fa-solid fa-desktop'></i>
						<p className='main__aboutus__row__section__title'>desktop gaming</p>
						<p className='main__aboutus__row__section__text'>
							Tworzymy gry na PC!
						</p>
					</div>
					<div className='main__aboutus__row__section'>
						<i className='fa-solid fa-file-code'></i>
						<p className='main__aboutus__row__section__title'>
							najwyższe standardy
						</p>
						<p className='main__aboutus__row__section__text'>
							Zachowujemy najwyżse standardy podczas pisania kodu.
						</p>
					</div>
					<div className='main__aboutus__row__section'>
						<i className='fa-solid fa-paw'></i>
						<p className='main__aboutus__row__section__title'>
							kochamy zwierzęta!
						</p>
						<p className='main__aboutus__row__section__text'>
							Wszystkie nasze gry są bezpiczne dla środowiska 🙂
						</p>
					</div>
					<div className='main__aboutus__row__section'>
						<i className='fa-solid fa-burger'></i>
						<p className='main__aboutus__row__section__title'>
							lubimy dobre jedzenie
						</p>
						<p className='main__aboutus__row__section__text'>
							Lubimy dobrze zjeść przed przystąpieniem do naszych zadań.
						</p>
					</div>
					<div className='main__aboutus__row__section'>
						<i className='fa-solid fa-champagne-glasses'></i>
						<p className='main__aboutus__row__section__title'>
							świetne relacje
						</p>
						<p className='main__aboutus__row__section__text'>
							Zachowujemy świetne relacje z naszymi klientami!
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className='main__aboutus'>
			<div className='main__aboutus main__aboutus-img container relative'>
				<div className='shadow'></div>
				<h2 className='main__aboutus__title main-title'>
					tworzymy gry na platformy
				</h2>
				<div className='underline'></div>
				<div className='main__aboutus__row'>
					<div className='main__aboutus__row__section'>
						<p className='main__aboutus__row__section__title'>PC</p>
						<i className='fa-brands fa-steam'></i>
						<p className='main__aboutus__row__section__text'>
							Graj ze znajomymi na swoim blaszaku!
						</p>
					</div>
					<div className='main__aboutus__row__section'>
						<p className='main__aboutus__row__section__title'>PlayStation</p>
						<p>
							<i className='fa-brands fa-playstation'></i>
						</p>
						<p className='main__aboutus__row__section__text'>
							Gry świetnie prezentują się na konsoli od Sony!
						</p>
					</div>
					<div className='main__aboutus__row__section'>
						<p className='main__aboutus__row__section__title'>Xbox</p>
						<p>
							<i className='fa-brands fa-xbox'></i>
						</p>
						<p className='main__aboutus__row__section__text'>
							Fani Xboxa spędzą z nami mnówstwo godzin!
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>
);

export default about;
