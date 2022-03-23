const toggleBtn = document.querySelector('#toggle__btn');

toggleBtn.addEventListener('click', () => {
	// console.log(e.target);
	document.body.classList.toggle('light-theme');
});
