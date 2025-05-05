const pause = ms => new Promise(res => setTimeout(res, ms));

async function typeText(el, text, delay = 40) {
    for (let i = 0; i < text.length; i++) {
        el.textContent += text[i];
        await pause(delay);
    }
}

async function deleteText(el, speed = 25) {
    for (let i = el.textContent.length; i >= 0; i--) {
        el.textContent = el.textContent.slice(0, i);
        await pause(speed);
    }
}

async function renderList(listEl, data) {
    for (let item of data) {
        const li = document.createElement('li');
        listEl.appendChild(li);
        await typeText(li, `• ${item}\n`);
        await pause(200);
    }
}

function renderListImmediately(listEl, data) {
    for (let item of data) {
        const li = document.createElement('li');
        li.style.listStyleType = "disc"
        li.textContent = item;
        listEl.appendChild(li);
    }
}

export { pause, typeText, deleteText, renderList, renderListImmediately }