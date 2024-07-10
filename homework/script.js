const nav = document.querySelector('.wrapper-fixed');
console.log(nav);

window.addEventListener('scroll', () => {
	if (window.scrollY >= 100) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
});

