import ElementCreate from './utilities/ElementCreate.js';
import Modal from './utilities/Modal.js';
import { BulletPoints } from './utilities/Interfaces.js';
class Award extends Modal {
    constructor(modalType) {
        super(modalType);
        this.body = [];
    }
    setModalBodyDetails(modalBody) {
        this.body = modalBody;
    }
    getModalBody() {
        const modalBody = new ElementCreate("DIV");
        //set modalBody properties:
        modalBody.setClasses(['modal-body', 'p-md-4', 'text-left', 'text-dark']);
        this.body.forEach(experience => modalBody.setChild(this.getExperiences(experience)));
        return modalBody.getElement();
    }
    getExperiences(experience) {
        const div = new ElementCreate("div");
        const h2 = new ElementCreate("H2");
        //award font awesome
        const i = new ElementCreate("I");
        //certificate font awesome
        const iCert = new ElementCreate("I");
        const iCalender = new ElementCreate("I");
        const iBody = new ElementCreate("I");
        const pOf = new ElementCreate("P");
        const p = new ElementCreate("P");
        const span = new ElementCreate("SPAN");
        const ul = new ElementCreate("UL");
        //set attributes and classes
        div.setClasses(['exp', 'my-4']);
        h2.setClass("lead");
        p.setClasses(['text-left', 'font-small']);
        span.setClasses(['font-italic', 'text-dark']);
        ul.setClasses(['ml-4', 'mt-3', 'font-sm']);
        pOf.setClasses(['text-secondary', 'py-2']);
        //split the classes of the font awesome to use assign them as class values to the i tag
        const fAwesomeAward = BulletPoints.AWARD.split(" ");
        fAwesomeAward.forEach(val => i.setClass(val));
        const cert = BulletPoints.CERTIFICATE.split(" ");
        cert.forEach(val => iCert.setClass(val));
        const calender = BulletPoints.CALENDER.split(" ");
        calender.forEach(val => iCalender.setClass(val));
        iCalender.setClass("text-info");
        const body = BulletPoints.SCHOOL.split(" ");
        body.forEach(bd => iBody.setClass(bd));
        //set element texts
        (experience.to !== "") ? span.setElementText(`${experience.from} - ${experience.to}`) : span.setElementText(`${experience.from}`);
        // p.setElementText(' &emsp; ');
        p.setElementText(iCalender.getElement());
        p.setElementText('&emsp;');
        p.setElementText(span.getElement());
        p.setElementText('&emsp;  |  &emsp; ');
        p.setChild(iBody.getElement());
        p.setElementText(`&emsp; ${experience.body}`);
        // p.setElementText(experience.duration);
        h2.setElementText(i.getElement());
        h2.setElementText('&emsp;');
        h2.setElementText(experience.title);
        h2.setElementText('&emsp;');
        ((experience.certified) && h2.setElementText(iCert.getElement()));
        // pOf.setElementText('&emsp;');
        pOf.setElementText(`&emsp; &nbsp; ${experience.of}`);
        //attach all the neccessary tag to their parent.
        div.setChildren([
            h2.getElement(),
            pOf.getElement(),
            p.getElement()
        ]);
        return div.getElement();
    }
}
export default Award;
