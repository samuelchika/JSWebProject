import { BulletPoints, ExperienceObject } from './utilities/Interfaces.js';
import ElementCreate from './utilities/ElementCreate.js';
import Modal from './utilities/Modal.js';

class Experience extends Modal {
    protected body:ExperienceObject[] = [];
    constructor(modalType:string) {
        super(modalType);
    }

    setModalBodyDetails(modalBody: [ExperienceObject]) {
        this.body = modalBody;
    }

    protected getModalBody():HTMLElement {
        const modalBody = new ElementCreate("DIV");
        //set modalBody properties:
        modalBody.setClasses(['modal-body', 'p-md-4', 'text-left', 'text-dark']);
        this.body.forEach(experience => modalBody.setChild(this.getExperiences(experience)));
        return modalBody.getElement();
    }

    private getExperiences(experience: ExperienceObject):HTMLElement {
        const div = new ElementCreate("div");
        const h2 = new ElementCreate("H2");
        const i = new ElementCreate("I");
        const iEmployee = new ElementCreate("I");
        const iCalender = new ElementCreate("I");
        const pEmployee = new ElementCreate("P");
        const p = new ElementCreate("P");
        const span = new ElementCreate("SPAN");
        const ul = new ElementCreate("UL");
        //set attributes and classes
        div.setClasses(['exp', 'my-4']);
        h2.setClass("lead");
        p.setClasses(['text-left', 'font-small']);
        span.setClasses(['font-italic', 'text-info']);
        ul.setClasses(['ml-4', 'mt-3', 'font-sm']);
        pEmployee.setClasses(['text-secondary', 'py-2']);
        

        //split the classes of the font awesome to use assign them as class values to the i tag
        const fAwesomeArr = BulletPoints.EXPERIENCE.split(" ");
        fAwesomeArr.forEach(val => i.setClass(val));
        const companyBullet = BulletPoints.COMPANY.split(" ");
        companyBullet.forEach(val => iEmployee.setClass(val));
        const durationBullet = BulletPoints.CALENDER.split(" ");
        durationBullet.forEach(val => iCalender.setClass(val));
        iCalender.setClass("text-dark");

        //set element texts
        (experience.to !== "") ? span.setElementText(`${experience.from} - ${experience.to}`) : span.setElementText(`${experience.from}`);
        p.setElementText(' &emsp; ');
        p.setElementText(iCalender.getElement());
        p.setElementText('&emsp;');
        p.setElementText(span.getElement());
        p.setElementText('&emsp;  |  &emsp; ')
        p.setElementText(experience.duration);
        h2.setElementText(i.getElement());
        h2.setElementText('&emsp;');
        h2.setElementText(experience.jobTitle);
        pEmployee.setElementText('&emsp;');
        pEmployee.setElementText(iEmployee.getElement());
        pEmployee.setElementText('&emsp;');
        pEmployee.setElementText(experience.employer);
        
        experience.responsibilities.forEach(responsibility => {
            const li = new ElementCreate("LI");
            const toolBullet = new ElementCreate("I");
            const tools:string[] = BulletPoints.TOOLS.split(" ");
            tools.forEach(tool => toolBullet.setClass(tool));
            toolBullet.setClass("text-slategray");
            li.setChild(toolBullet.getElement());
            li.setElementText('&emsp;');
            li.setElementText(responsibility);
            ul.setChild(li.getElement());
        });
        //attach all the neccessary tag to their parent.
        div.setChildren([
            h2.getElement(),
            pEmployee.getElement(),
            p.getElement(),
            ul.getElement()
        ]);
        return div.getElement();
    }

    
}

export default Experience;