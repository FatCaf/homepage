const about = document.getElementById('about');
const experience = document.getElementById('experience');
const projects = document.querySelectorAll('.project-item');
// const button = document.getElementById('button');
const modalWrapper = document.getElementById('modal-wrapper');
const modal = document.getElementById('modal');
const email = document.getElementById('email');

email.addEventListener('click', () => {
	const text = email.innerText;

	navigator.clipboard.writeText(text);

	alert(text + ' copied to clipboard');
});

// button.addEventListener('click', () => {
// 	modalWrapper.style.display = 'block';
// 	modal.innerHTML = createModal(test);

// 	const close = document.getElementById('close');
// 	close.addEventListener('click', () => {
// 		modalWrapper.style.display = 'none';
// 	});
// });

const getDisplayProperty = (element) =>
	window.getComputedStyle(element).display;

experience.addEventListener('click', () => {
	const experienceSection = document.querySelector('.experience');
	const display = getDisplayProperty(experienceSection);
	if (display === 'none') experienceSection.style.display = 'block';
	else experienceSection.style.display = 'none';
});

about.addEventListener('click', () => {
	const aboutSection = document.querySelector('.about');
	const display = getDisplayProperty(aboutSection);
	if (display === 'none') aboutSection.style.display = 'block';
	else aboutSection.style.display = 'none';
});
