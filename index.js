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

    const skillsHeaderEl = document.getElementById('skillsHeader');
    const skillsTextEl = document.getElementById('skillsText');

    const experiencesHeaderEl = document.getElementById('experiencesHeader');
    const experienceDisclaimerEl = document.getElementById('experienceDisclaimer');
    const experiencesDurationEl = document.getElementById('experiencesDuration');
    const companyNameEl = document.getElementById('companyName');
    const projectRole1El = document.getElementById('projectRole1');
    const projectName1El = document.getElementById('projectName1');
    const projectRole2El = document.getElementById('projectRole2');
    const projectName2El = document.getElementById('projectName2');
    const responsibilitiesListEl1 = document.getElementById('responsibilitiesList1');
    const responsibilitiesListEl2 = document.getElementById('responsibilitiesList2');

    const educationHeaderEl = document.getElementById("educationHeaderEl");
    const educationYearEl = document.getElementById("educationYearEl");
    const educationSchoolEl = document.getElementById("educationSchoolEl");
    const educationCoursesEl = document.getElementById("educationCoursesEl");
    const languagesHeaderEl = document.getElementById("languagesHeaderEl");
    const languagesList = document.getElementById("languagesList")

    const elements = [nameEl, positionEl, contactsLabelEl, tgEl, liEl, ghEl, aboutHeaderEl, aboutTextEl];
    if (elements.every(el => el !== null)) {
        elements.forEach(el => el.textContent = "");
        aboutHeaderEl.style.opacity = "0";
    } else {
        console.warn("Some DOM elements not found", elements);
    }
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
        await pause(1000);
        intro.classList.add("fade-out");
        await pause(800);
        intro.style.display = "none";

        containerIntro.style.transition = "opacity 1s ease-in-out";
        containerIntro.style.opacity = 1;
        await pause(1000);

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

    const fakeSkills = [
        "Advanced coffee drinking ☕,",
        "100+ WPM in writing TODO comments,",
        "React-ing emotionally to bugs,",
        "Certified Google searcher,",
        "Once deployed on Friday... and survived.",
    ];
    const punchline = "I'm kidding))";
    const finalSkills = `Proficient in JavaScript, TypeScript, React, Next.js, Redux Toolkit, RTK Query, 
Node.js, NestJS, PostgreSQL, MongoDB, REST API, Websockets, Git, Postman, and React Hook Form.
Experienced in full-cycle web application development, real-time features.`;

    async function animateSkills() {
        skillsHeaderEl.textContent = "Skills:";

        for (let line of fakeSkills) {
            await typeText(skillsTextEl, line + "\n");
            await pause(600);
        }

        await typeText(skillsTextEl, punchline);
        await pause(1000);

        await deleteText(skillsTextEl);

        await pause(500);
        await typeText(skillsTextEl, finalSkills);
    }

    const responsibilitiesProj1 = [
        "Refactored and modernized a legacy frontend application",
        "Implemented an extra registration step for onboarding",
        "Integrated third-party KYC verification",
        "Participated in backend migration to NestJS + PostgreSQL",
        "Migrated legacy invoicing service to a new architecture",
        "Built a real-time user balance tracking service using WebSockets",
        "Maintained existing features and fixed bugs"
    ];

    const responsibilitiesProj2 = [
        "Maintained and improved a complex legacy frontend codebase",
        "Fixed long-standing bugs and performance bottlenecks in the app",
        "Modernized parts of the frontend stack where possible",
        "Implemented real-time updates for dashboard module",
    ];

    async function renderList(listEl, data) {
        for (let item of data) {
            const li = document.createElement('li');
            listEl.appendChild(li);
            await typeText(li, `• ${item}\n`);
            await pause(200);
        }
    }

    async function animateExperience() {
        await typeText(experiencesHeaderEl, "Experience:");
        await pause(200);

        await typeText(experienceDisclaimerEl, "(*they forced me to sign NDA, so I can't tell a lot about my job, unless we pretend this all is my imagination)");
        await pause(200);

        await typeText(experiencesDurationEl, "2024-Present");
        await pause(200);

        await typeText(companyNameEl, "Meduzzen");
        await pause(200);

        await typeText(projectRole1El, "Full-Stack Developer");
        await pause(200);

        await typeText(projectName1El, "Classified project #1");
        await pause(200);

        await  renderList(responsibilitiesListEl1, responsibilitiesProj1)

        await typeText(projectRole2El, "Front-End Developer");
        await pause(200);

        await typeText(projectName2El, "Classified project #2");
        await pause(200);

        await  renderList(responsibilitiesListEl2, responsibilitiesProj2)
    }

    const courses = [
        "Computer Science",
        "Frontend Development",
        "Backend Development"
    ];

    const languages = [
        "English - B2",
        "Ukrainian - Fluent"
    ]

    async function animateEducation() {
        await typeText(educationHeaderEl, "Education:");
        await pause(200);

        await typeText(educationYearEl, "2023-2024");
        await pause(200);

        await typeText(educationSchoolEl, "SH++ IT School");
        await pause(200);

        await renderList(educationCoursesEl, courses)

        await typeText(languagesHeaderEl, "Languages:");
        await pause(200);

        await renderList(languagesList, languages)
    }

    async function startAnimation() {
        await animateIntro();
        await animateSkills();
        await animateExperience();
        await animateEducation();
    }

    startAnimation();
});
