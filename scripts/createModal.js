import { projects } from '../db/db.js';

export default function createModal(id) {
	const {
		name,
		link,
		livePage,
		technologies,
		type,
		stack,
		role,
		description,
		responsibilities,
	} = projects.find((project) => project.id === Number(id));

	const getClass = (tech) => {
		switch (tech) {
			case 'TypeScript':
				return 'ts';
			case 'PostgreSQL':
				return 'sql';
			case 'MongoDB':
				return 'mongo';
			case 'Spring Boot':
				return 'spring';
			case 'NodeJS':
				return 'node';
			case 'Material UI':
				return 'mui';
			default:
				return tech.toLowerCase();
		}
	};

	const technologiesHTML = technologies
		.map(
			(tech) => `
        <div class="chip tiny ${getClass(tech)}"><span>${tech}</span></div>
        `
		)
		.join('');

	const responsibilitiesHTML = responsibilities
		.map((resp) => `<li class='resp-list-item'>${resp}</li>`)
		.join('');

	return `
        <div class="project-item max-w fv-start">
        <div class="project-title-modal">
            <h5>${name}</h5>
            <button class='close' id="close">Close</button>
        </div>
        <div class="project-details">
            <p>Project type: <strong>${type}</strong></p>
            <p>Stack: <strong>${stack}</strong></p>
            <p>Role: <strong>${role}</strong></p>
            <p>Technologies:</p>
            <div class="tech-stack small fh-start">
                ${technologiesHTML}
            </div>
            <p>Description: <br />${description}</p>
            <p>Achievements and Responsibilities:</p>
            <ul class='resp-list'>
                ${responsibilitiesHTML}
            </ul>
        </div>
        <div class='links'>
        <a href=${link} target="_blank">
        <div class="chip white"><span>Repository</span></div></a>
        <a href=${livePage} target="_blank">
        <div class="chip white"><span>Project page</span></div>
        </a>
        </div>
    </div>
    `;
}
