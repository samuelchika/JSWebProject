import ElementCreate  from './classes/utilities/ElementCreate.js';
import Skills from './classes/Skills.js';
import Bio from './classes/Bio.js';
import Socials from './classes/Socials.js';
import Experience from './classes/Experience.js';
import Education from './classes/Education.js';
import Award from './classes/Award.js';
import { BulletPoints, EducationObject, AwardObject, BioData, ExperienceObject, ProjectAttributes } from './classes/utilities/Interfaces.js';
import Project from './classes/Project.js';

window.addEventListener('load', () => {
    $.getJSON('./dist/data.json', (data) => {
        const skills = data.skills;
        //skill = data.skills;
        populateBio(data.bio);
        populateSkills(skills);
        populateSocials(data.socials);
        createExperienceModal(data.experience);
        createEducationModal(data.education);
        createAwardModal(data.award);
        createProjectModal(data.projects); 
    });
});

//main container
let container = new ElementCreate("SECTION");
let marquee = new ElementCreate("marquee");
container.setId("contain");
container.setClasses(["container", "jumbotron", "mx-auto", "text-center", "col-md-10", "text-white"]);
marquee.setElementText("This was created using TypeScript. To learn more about this project, click on the Project button below and see 'MY PORTFOLIO' section description.");
container.setChild(marquee.getElement());

//data needed
let bio = new ElementCreate("DIV");
let social;
//structure the website
let topSection = new ElementCreate("SECTION");
let middleSection = new ElementCreate("SECTION");
let middleContainer = new ElementCreate("div");
middleContainer.setClass("container");
middleSection.setClass('row');
//the middle section consist of a section and an aside tag
let middleLeft = new ElementCreate("SECTION");
middleLeft.setClasses(['p-4', 'mx-auto', 'col-md-10', 'col-9']);
let middleRight = new ElementCreate("SECTION");
middleRight.setClasses(['p-4', 'mx-auto', 'col-md-2', 'my-auto', 'col-11']);

//create the buttons for the modals 
const buttonSection = new ElementCreate("SECTION");
    //setting the attributes of the button Section
    buttonSection.setId("infoSection");
    buttonSection.setClasses(["container", "mt-3"]);
let buttonSectionRow = new ElementCreate("div");
buttonSectionRow.setClass("row");
let modals = new ElementCreate("DIV");
const buttons = ["experience", "education", "awards", "projects"];
    //create each button.
    buttons.forEach( button => {
        const div = new ElementCreate("DIV");
        div.setClasses(['col-md-3', 'text-center', 'my-4', 'col-sm-6']);
        let btn =  new ElementCreate("BUTTON");
        btn = setUpModal(btn, button);
        div.setChild(btn.getElement());
        buttonSectionRow.setChild(div.getElement());

    });
buttonSection.setChild(buttonSectionRow.getElement());
console.log(buttonSectionRow.getElement());
middleSection.setChild(middleContainer.getElement());
topSection.setChild(bio.getElement());
container.setChild(topSection.getElement());
middleSection.setChildren([middleLeft.getElement(), middleRight.getElement()]);
container.setChild(middleSection.getElement());
container.setChild(buttonSection.getElement());
container.setChild(modals.getElement());
document.body.appendChild(container.getElement());

//this section down defines functions.

const populateSocials = (data:[]) => {
    const socials = new Socials(data);
    //console.log(socials.getSocials());
    middleRight.setChild(socials.getSocials());
    middleContainer.setChild(middleRight.getElement())
    social = socials.getSocials();
}

const populateSkills = (data:[]) => {
    const skillClass = new Skills(data);
    middleLeft.setChild(skillClass.getSkills());
    middleContainer.setChild(middleLeft.getElement());
    //return skillClass.getSkills();
}

let populateBio = (data: BioData) => {
    const bioo = new Bio(data);
    //console.log(bio.getBioData());
    bio.setChild(bioo.getBioData());
    topSection.setChild(bio.getElement());   
}

const createEducationModal = ( data: EducationObject ) => {
    const educationModal = new Education("education");
    educationModal.setModalBodyDetails([data]);
    //console.log(educationModal.getModal());
    modals.setChild(educationModal.getModal());
    container.setChild(modals.getElement());
}

const createExperienceModal = (data:[ExperienceObject]) => {
    //create the experience modal
    const experienceModal = new Experience("experience");
    experienceModal.setModalBodyDetails(data);
    //console.log(experienceModal.getModal());
    modals.setChild(experienceModal.getModal());
    container.setChild(modals.getElement());
}

const createAwardModal = (data: [AwardObject]) => {
    const awardModal = new Award("awards");
    awardModal.setModalBodyDetails(data);
    console.log(awardModal.getModal());
    modals.setChild(awardModal.getModal());
    container.setChild(modals.getElement());
}

const createProjectModal = ( (data: [ProjectAttributes]) => {
    const projectModal = new Project("projects");
    projectModal.setModalBodyDetails(data);
    console.log(projectModal.getModal());
    modals.setChild(projectModal.getModal());
    container.setChild(modals.getElement());
})

function setUpModal(buttonType: ElementCreate, buttonName: string) {
    //add class to the buttons
    const fAwesome = [BulletPoints.BRIEFCASE, BulletPoints.EDUCATION, BulletPoints.AWARD, BulletPoints.COGS];
    let modalButtonProperties = [
        { name: "type", value: "button" },
        { name: "data-toggle", value: "modal" },
        { name: "data-target", value: `#${buttonName.toLowerCase()}` }
    ];
    let arr = [];
    //set font awesome to attach to the button.
    const i = new ElementCreate("I");
    switch(buttonName.toLowerCase()) {
        case "experience":
            arr = BulletPoints.BRIEFCASE.split(" ");
            arr.forEach(e => {
                i.setClass(e);
            });
            i.setClass("text-success");
            break;
        case "education":
            arr = BulletPoints.EDUCATION.split(" ");
            arr.forEach(e => {
                i.setClass(e);
            });
            i.setClass("text-info");
            break;
        case "awards":
            arr = BulletPoints.AWARD.split(" ");
            arr.forEach((e, index) => {
                ((index < 2) && i.setClass(e));
            });
            i.setClass("text-danger");
            break;
        case "projects":
            arr = BulletPoints.COGS.split(" ");
            arr.forEach(e => {
                i.setClass(e);
            });
            i.setClass("text-dark");
            break;
        default:
            break;
    }
    
    buttonType.setClasses(['btn', 'btn-lg', 'btn-light', 'mx-auto']);
    console.log(i.getElement());
    //set attributes
    buttonType.setAttributes(modalButtonProperties);
    buttonType.setChild(i.getElement());
    buttonType.setElementText(`&nbsp; ${buttonName.substr(0,1).toUpperCase() + buttonName.slice(1, buttonName.length)} `);

    return buttonType;
}

//actions to be carried out
