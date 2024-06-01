import createModal from './createModal.js';

const about = document.getElementById('about');
const experience = document.getElementById('experience');
const projects = document.querySelectorAll('.project-item');
const seeMore = document.querySelectorAll('.see-more');
const modalWrapper = document.getElementById('modal-wrapper');
const modal = document.getElementById('modal');
const email = document.getElementById('email');

email.addEventListener('click', () => {
	const text = email.innerText;

	navigator.clipboard.writeText(text);

	alert(text + ' copied to clipboard');
});

Array.from(seeMore).forEach((item) => {
	item.addEventListener('click', (event) => {
		const { id } = event.target;
		modalWrapper.style.display = 'block';
		document.body.style.overflow = 'hidden';
		modal.innerHTML = createModal(id);

		const close = document.getElementById('close');
		close.addEventListener('click', () => {
			modalWrapper.style.display = 'none';
			document.body.style.overflow = 'auto';
		});
	});
});

const getDisplayProperty = (element) =>
	window.getComputedStyle(element).display;

const toggleVisibility = (sectionToShow, sectionToHide) => {
	const sectionToShowElement = document.querySelector(sectionToShow);
	const sectionToHideElement = document.querySelector(sectionToHide);

	const display = getDisplayProperty(sectionToShowElement);
	if (display === 'none') {
		sectionToShowElement.style.display = 'block';
		sectionToHideElement.style.display = 'none';
	} else {
		sectionToShowElement.style.display = 'none';
	}
};

experience.addEventListener('click', () => {
	toggleVisibility('.experience', '.about');
});

about.addEventListener('click', () => {
	toggleVisibility('.about', '.experience');
});
