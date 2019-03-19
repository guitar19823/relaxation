window.onload = () => {
	const nav = document.getElementsByClassName('nav')[0];
	const menuButton = document.getElementsByClassName('button_menu')[0];

	menuButton.addEventListener('click', function () {
		nav.classList.contains('open_nav') ? closeNav() : openNav();
	});

	/**
	* openNav
	*/
	function openNav() {
		nav.classList.add('open_nav'),
		menuButton.classList.add('rotate_button'),
		menuButton.children[0].classList.add('turn_right'),
		menuButton.children[1].classList.add('turn_left')
	}

	/**
	* closeNav
	*/
	function closeNav() {
		nav.classList.remove('open_nav'),
		menuButton.classList.remove('rotate_button'),
		menuButton.children[0].classList.remove('turn_right'),
		menuButton.children[1].classList.remove('turn_left')
	}
};