import ElementCreate from './utilities/ElementCreate.js';
import Modal from './utilities/Modal.js';
import { BulletPoints, AwardObject } from './utilities/Interfaces.js';


class Award extends Modal {
    protected body:AwardObject[] = [];
    constructor(modalType:string) {
        super(modalType);
    }

    setModalBodyDetails(modalBody: [AwardObject]) {
        this.body = modalBody;
    }

    protected getModalBody():HTMLElement {
        const modalBody = new ElementCreate("DIV");
        //set modalBody properties:
        modalBody.setClasses(['modal-body', 'p-md-4', 'text-left', 'text-dark']);
        this.body.forEach(experience => modalBody.setChild(this.getExperiences(experience)));
        return modalBody.getElement();
    }

    private getExperiences(award: AwardObject):HTMLElement {
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
        (award.to !== "") ? span.setElementText(`${award.from} - ${award.to}`) : span.setElementText(`${award.from}`);
        // p.setElementText(' &emsp; ');
        p.setElementText(iCalender.getElement());
        p.setElementText('&emsp;');
        p.setElementText(span.getElement());
        p.setElementText('&emsp;  |  &emsp; ');
        p.setChild(iBody.getElement());
        p.setElementText(`&emsp; ${award.body}`);
        // p.setElementText(experience.duration);
        h2.setElementText(i.getElement());
        h2.setElementText('&emsp;');
        h2.setElementText(award.title);
        h2.setElementText('&emsp;');
        ((award.certified) && h2.setElementText(iCert.getElement()));
        // pOf.setElementText('&emsp;');
        pOf.setElementText(`&emsp; &nbsp; ${award.of}`);
        //attach all the neccessary tag to their parent.
        (award.of === "") ? 
        div.setChildren([
            h2.getElement(),
            p.getElement()
        ]) : div.setChildren([
            h2.getElement(),
            pOf.getElement(),
            p.getElement()
        ]);
        return div.getElement();
    }

    
}

export default Award;