import TEXTS  from "./assets/text/texts.js";
import { pause, typeText, deleteText, renderList, renderListImmediately } from "./helpers/helpers.js";

document.addEventListener("DOMContentLoaded", () => {
    const isAnimPlayed = localStorage.getItem('isAnimPlayed') === 'true';
    localStorage.setItem('isAnimPlayed', 'true');
    const intro = document.getElementById("introOverlay");
    const containerIntro = document.querySelector(".container.full-screen");

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

    if (isAnimPlayed) {
        intro.style.display = "none";

        nameEl.textContent = TEXTS.name;
        positionEl.textContent = TEXTS.position;
        contactsLabelEl.textContent = TEXTS.contactsLabel;
        tgEl.textContent = TEXTS.telegram;
        liEl.textContent = TEXTS.linkedin;
        ghEl.textContent = TEXTS.github;
        aboutHeaderEl.textContent = TEXTS.aboutHeader;
        aboutHeaderEl.style.opacity = "1";
        aboutTextEl.textContent = TEXTS.aboutFinal;

        skillsHeaderEl.textContent = TEXTS.skillsHeader;
        skillsTextEl.textContent = TEXTS.skillsFinal;

        experiencesHeaderEl.textContent = TEXTS.experienceHeader;
        experienceDisclaimerEl.textContent = TEXTS.experienceDisclaimer;
        experiencesDurationEl.textContent = TEXTS.experiencesDuration;
        companyNameEl.textContent = TEXTS.companyName;
        projectRole1El.textContent = TEXTS.projectRole1;
        projectName1El.textContent = TEXTS.projectName1;
        renderListImmediately(responsibilitiesListEl1, TEXTS.responsibilitiesProj1);

        projectRole2El.textContent = TEXTS.projectRole2;
        projectName2El.textContent = TEXTS.projectName2;
        renderListImmediately(responsibilitiesListEl2, TEXTS.responsibilitiesProj2);

        educationHeaderEl.textContent = TEXTS.experienceHeader;
        educationYearEl.textContent = TEXTS.educationYear;
        educationSchoolEl.textContent = TEXTS.educationSchool;
        renderListImmediately(educationCoursesEl, TEXTS.courses)

        languagesHeaderEl.textContent = TEXTS.languagesHeader;
        renderListImmediately(languagesList, TEXTS.languages)

        return;
    }

    const elements = [nameEl, positionEl, contactsLabelEl, tgEl, liEl, ghEl, aboutHeaderEl, aboutTextEl];
    if (elements.every(el => el !== null)) {
        elements.forEach(el => el.textContent = "");
        aboutHeaderEl.style.opacity = "0";
    } else {
        console.warn("Some DOM elements not found", elements);
    }
    aboutHeaderEl.style.opacity = "0";

    const typingDelay = 40;

    async function animateIntro() {
        containerIntro.style.opacity = 0;
        await pause(1000);
        intro.classList.add("fade-out");
        await pause(800);
        intro.style.display = "none";

        containerIntro.style.transition = "opacity 1s ease-in-out";
        containerIntro.style.opacity = 1;
        await pause(1000);

        await typeText(nameEl, TEXTS.name);
        await pause(200);
        await typeText(positionEl, TEXTS.position);
        await pause(300);
        await typeText(contactsLabelEl, TEXTS.contactsLabel);
        await pause(200);
        await typeText(tgEl, TEXTS.telegram);
        await pause(100);
        await typeText(liEl, TEXTS.linkedin);
        await pause(100);
        await typeText(ghEl, TEXTS.github);
        await pause(500);

        aboutHeaderEl.style.transition = "opacity 0.5s ease";
        aboutHeaderEl.textContent = TEXTS.aboutHeader
        aboutHeaderEl.style.opacity = "1";
        await pause(600);

        for (let line of TEXTS.fakeThoughts) {
            await typeText(aboutTextEl, line);
            await pause(1000);
            await deleteText(aboutTextEl);
        }

        await pause(800);
        await typeText(aboutTextEl, TEXTS.aboutFinal, typingDelay);
    }

    async function animateSkills() {
        skillsHeaderEl.textContent = TEXTS.skillsHeader;

        for (let line of TEXTS.fakeSkills) {
            await typeText(skillsTextEl, line + "\n");
            await pause(600);
        }

        await typeText(skillsTextEl, TEXTS.punchline);
        await pause(1000);

        await deleteText(skillsTextEl);

        await pause(500);
        await typeText(skillsTextEl, TEXTS.skillsFinal);
    }

    async function animateExperience() {
        await typeText(experiencesHeaderEl, TEXTS.experienceHeader);
        await pause(200);

        await typeText(experienceDisclaimerEl, TEXTS.experienceDisclaimer);
        await pause(200);

        await typeText(experiencesDurationEl, TEXTS.experiencesDuration);
        await pause(200);

        await typeText(companyNameEl, TEXTS.companyName);
        await pause(200);

        await typeText(projectRole1El, TEXTS.projectRole1);
        await pause(200);

        await typeText(projectName1El, TEXTS.projectName1);
        await pause(200);

        await  renderList(responsibilitiesListEl1, TEXTS.responsibilitiesProj1)

        await typeText(projectRole2El, TEXTS.projectRole2);
        await pause(200);

        await typeText(projectName2El, TEXTS.projectName2);
        await pause(200);

        await  renderList(responsibilitiesListEl2, TEXTS.responsibilitiesProj2)
    }

    async function animateEducation() {
        await typeText(educationHeaderEl, TEXTS.educationHeader);
        await pause(200);

        await typeText(educationYearEl, TEXTS.educationYear);
        await pause(200);

        await typeText(educationSchoolEl, TEXTS.educationSchool);
        await pause(200);

        await renderList(educationCoursesEl, TEXTS.courses)

        await typeText(languagesHeaderEl, TEXTS.languagesHeader);
        await pause(200);

        await renderList(languagesList, TEXTS.languages)
    }

    async function startAnimation() {
        await animateIntro();
        await animateSkills();
        await animateExperience();
        await animateEducation();
    }

        startAnimation();
});
