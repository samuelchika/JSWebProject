import { BulletPoints, CourseInterface } from './Interfaces.js';
import ElementCreate from './ElementCreate.js';

class Course {
    //constructor declaration
    constructor(private courseDetails: CourseInterface) {
        this.courseDetails = courseDetails;
    }

    getCourse(): HTMLElement {
        const div = new ElementCreate("DIV");
        div.setClasses(['exp', 'my-4', 'ml-4']);
        //create the fAwesome bullet Point
        const certificateSeal = new ElementCreate("I");
        const school = new ElementCreate("I");
        const globe = new ElementCreate("I");

        //set the classes for each font awesome element.
        const cert:string[] = BulletPoints.CERTIFICATE.split(" ");
        const schoolFAwesome: string[] = BulletPoints.SCHOOL.split(" ");
        const glob:string[] = BulletPoints.ONLINE_SCHOOL.split(" ");

        cert.forEach(certClass => certificateSeal.setClass(certClass));
        schoolFAwesome.forEach(sch => school.setClass(sch));
        glob.forEach(online => globe.setClass(online));

        //create all the necesary elements required to create a comfortable academic
        const h2 = new ElementCreate("H2");
        const p = new ElementCreate("P");
        const pOf = new ElementCreate("P");
       
        //set classes and attributes for for the elements created above.
        //H2 classes, attributes etc
        h2.setClass("lead");
        h2.setElementText(`${this.courseDetails.title} &nbsp;`);
        (this.courseDetails.certified && h2.setChild(certificateSeal.getElement()));

        //pOf 
        pOf.setClasses(['text-secondary', 'font-weight-bolder']);
        pOf.setElementText(this.courseDetails.of);
        //set classes and children of the paragraph
        p.setClasses(['text-left', 'font-small']);
        //span to hold some elements
        const span = new ElementCreate('SPAN');
        const a = new ElementCreate("A");
        //seting up the span elements
        span.setClasses(['text-italic', 'text-secondary']);
        span.setElementText(`${this.courseDetails.from} ${(this.courseDetails.to && ` - ` + this.courseDetails.to)}`);
        //setting up the anchor tag attributes and text for the school
        a.setAttributes([
            { name: "target", value: "_blank" },
            { name: "href", value: `${this.courseDetails.link}` }
        ]);
        a.setElementText(this.courseDetails.body);
        //finalize the paragraph elements
        p.setChild(span.getElement());

        if(this.courseDetails.online) {
            //the course is online
            p.setElementText(' &emsp; | &emsp; ');
            p.setChild(school.getElement());
            p.setElementText('&nbsp;')
            p.setChild(globe.getElement());
            p.setElementText('&emsp;');
            p.setChild(a.getElement());
        }

        (this.courseDetails.certId !== "") &&  p.setElementText(` &emsp; | &emsp; ${this.courseDetails.certId}`);
        
        

        //attach all elements to the returning div;
        div.setChild(h2.getElement());
        div.setChild(pOf.getElement());
        div.setChild(p.getElement());

        return div.getElement();
    }
}

export default Course;