export default function createModal(project) {
	const { test } = project;

	return `
        <div>
            <p>${test}</p>
            <button id="close">Close</button>
        </div>
    
    `;
}
