import { layout } from './layout.js';
import { styles } from './styles.js';
function createTemplate() {
	const template = document.createElement('template');
	template.innerHTML = `
    ${styles}
    ${layout}
    `;

	return template;
}

class Timeline extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(createTemplate().content.cloneNode(true));
		const timelineItems = shadow.querySelectorAll('.timeline-item');
		timelineItems.forEach((item) => {
			const details = item.querySelector('.details');
			item.addEventListener('mouseover', () => {
				details.style.display = 'block';
			});
			item.addEventListener('mouseleave', () => {
				details.style.display = 'none';
			});
		});
	}
}

customElements.define('custom-timeline', Timeline);

export default Timeline;
