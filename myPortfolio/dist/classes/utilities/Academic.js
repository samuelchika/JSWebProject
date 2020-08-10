import { BulletPoints } from './Interfaces.js';
import ElementCreate from './ElementCreate.js';
class Academic {
    //constructor declaration
    constructor(academicDetails) {
        this.academicDetails = academicDetails;
        this.academicDetails = academicDetails;
    }
    getAcademic() {
        const div = new ElementCreate("DIV");
        div.setClasses(['exp', 'my-4', 'ml-4']);
        //create the fAwesome bullet Point
        const certificateSeal = new ElementCreate("I");
        const bulletPoint = new ElementCreate("I");
        const school = new ElementCreate("I");
        //set the classes for each font awesome element.
        const cert = BulletPoints.CERTIFICATE.split(" ");
        const medal = BulletPoints.MEDAL.split(" ");
        const schoolFAwesome = BulletPoints.SCHOOL.split(" ");
        cert.forEach(certClass => certificateSeal.setClass(certClass));
        medal.forEach(bullet => bulletPoint.setClass(bullet));
        schoolFAwesome.forEach(sch => school.setClass(sch));
        bulletPoint.setClass('text-slategray');
        //create all the necesary elements required to create a comfortable academic
        const h2 = new ElementCreate("H2");
        const p = new ElementCreate("P");
        const ul = new ElementCreate("UL");
        //set classes and attributes for for the elements created above.
        //H2 classes, attributes etc
        h2.setClass("lead");
        //h2.setElementText('&emsp;');
        h2.setChild(bulletPoint.getElement());
        h2.setElementText('&emsp;');
        h2.setElementText(`${this.academicDetails.title} &nbsp;`);
        (this.academicDetails.certified && h2.setChild(certificateSeal.getElement()));
        //set classes and children of the paragraph
        p.setClasses(['text-left', 'font-small']);
        //span to hold some elements
        const span = new ElementCreate('SPAN');
        const a = new ElementCreate("A");
        //seting up the span elements
        span.setClasses(['text-italic', 'text-secondary']);
        span.setElementText(`${this.academicDetails.from} ${(this.academicDetails.to && ` - ` + this.academicDetails.to)}`);
        //setting up the anchor tag attributes and text for the school
        a.setAttributes([
            { name: "target", value: "_blank" },
            { name: "href", value: `${this.academicDetails.link}` }
        ]);
        a.setElementText(this.academicDetails.institution);
        //finalize the paragraph elements
        p.setElementText('&emsp; &emsp; &nbsp; ');
        p.setChild(span.getElement());
        p.setElementText(' &emsp; | &emsp; ');
        p.setChild(school.getElement());
        p.setElementText('&emsp;');
        p.setChild(a.getElement());
        //set up the ul tags
        ul.setClass('ml-3');
        this.academicDetails.outcome.forEach(knowledge => {
            const li = new ElementCreate("LI");
            const bulPoint = new ElementCreate("I");
            const bulPointClass = BulletPoints.ACADEMIC.split(" ");
            bulPointClass.forEach(points => bulPoint.setClass(points));
            bulPoint.setClasses(['text-slategray', 'font-smaller']);
            li.setChild(bulPoint.getElement());
            li.setElementText(' &nbsp;' + knowledge);
            ul.setChild(li.getElement());
        });
        //attach all elements to the returning div;
        div.setChild(h2.getElement());
        div.setChild(p.getElement());
        div.setChild(ul.getElement());
        return div.getElement();
    }
}
export default Academic;
