document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("introOverlay");
    const containerIntro = document.querySelector(".container.full-screen");
    containerIntro.style.opacity = 0;

    const nameEl = document.getElementById("name");
    const positionEl = document.getElementById("position");
    const contactsLabelEl = document.getElementById("contactsLabel");
    const tgEl = document.getElementById("tg");
    const liEl = document.getElementById("li");
    const ghEl = document.getElementById("gh");
    const aboutHeaderEl = document.getElementById("aboutMe");
    const aboutTextEl = document.getElementById("aboutMeText");

    [nameEl, positionEl, contactsLabelEl, tgEl, liEl, ghEl, aboutHeaderEl, aboutTextEl].forEach(el => el.textContent = "");
    aboutHeaderEl.style.opacity = "0";

    const typingDelay = 40;
    const pause = ms => new Promise(res => setTimeout(res, ms));

    async function typeText(el, text, delay = typingDelay) {
        for (let i = 0; i < text.length; i++) {
            el.textContent += text[i];
            await pause(delay);
        }
    }

    const fakeThoughts = [
        "Full-stack wizard... no, too cheesy.",
        "Just a JS ninja? Sounds cringe.",
        "Tech lover, dreamer, coffee... nah.",
        "Okay focus... what do I actually do?",
    ];

    const finalAbout = `Hi, I'm Mykyta — a proactive full-stack developer with a background in computer science and hands-on experience in both frontend and backend development. I've completed comprehensive training in modern web technologies and currently contribute to impactful projects at Meduzzen. I'm driven by solving complex challenges, constantly bringing fresh ideas to elevate the quality and performance of every project I touch. Outside of work, I stay energized through sports like gym training and swimming.`;

    async function deleteText(el, speed = 25) {
        for (let i = el.textContent.length; i >= 0; i--) {
            el.textContent = el.textContent.slice(0, i);
            await pause(speed);
        }
    }

    async function animateIntro() {
        await pause(1000); // meme delay
        intro.classList.add("fade-out");
        await pause(800);
        intro.style.display = "none";

        containerIntro.style.transition = "opacity 1s ease-in-out";
        containerIntro.style.opacity = 1;
        await pause(1000); // fade-in

        await typeText(nameEl, "Name: Mykyta Neklesa");
        await pause(200);
        await typeText(positionEl, "Position: Full-Stack Developer");
        await pause(300);
        await typeText(contactsLabelEl, "Contacts:");
        await pause(200);
        await typeText(tgEl, "Telegram");
        await pause(100);
        await typeText(liEl, "LinkedIn");
        await pause(100);
        await typeText(ghEl, "Github");
        await pause(500);

        aboutHeaderEl.style.transition = "opacity 0.5s ease";
        aboutHeaderEl.textContent = "About Me:";
        aboutHeaderEl.style.opacity = "1";
        await pause(600);

        for (let line of fakeThoughts) {
            await typeText(aboutTextEl, line);
            await pause(1000);
            await deleteText(aboutTextEl);
        }

        await pause(800);
        await typeText(aboutTextEl, finalAbout, typingDelay);
    }

    animateIntro();
});
