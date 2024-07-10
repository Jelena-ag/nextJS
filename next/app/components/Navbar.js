"use client"

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"

export const Navbar = () => {
    const pathname = usePathname

    return (
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
								<Link href='/contact' className='nav__items__list__item__link'>
									Kontakt
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
}