import ElementCreate from './utilities/ElementCreate.js';
import Modal from './utilities/Modal.js';
import Academic from './utilities/Academic.js';
import Course from './utilities/Course.js';
import { BulletPoints } from './utilities/Interfaces.js';
class Education extends Modal {
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
        //set out the academic and the courses classes
        if (this.body !== []) {
            //get the heading and the hr tag
            if (this.body[0].academic) {
                const h2 = new ElementCreate("H2");
                const i = new ElementCreate("I");
                const hr = new ElementCreate("HR");
                h2.setClass("lead");
                const school = BulletPoints.SCHOOL.split(" ");
                school.forEach(fAwesomeClass => i.setClass(fAwesomeClass));
                h2.setChild(i.getElement());
                h2.setElementText("&nbsp; Academic");
                modalBody.setChild(h2.getElement());
                modalBody.setChild(hr.getElement());
                //loop through the array and get each element assign to the academic class
                this.body[0].academic.forEach(academicDetails => {
                    const acad = new Academic(academicDetails);
                    modalBody.setChild(acad.getAcademic());
                });
            }
            if (this.body[0].courses) {
                //get the heading and the hr tag
                const h2 = new ElementCreate("H2");
                const i = new ElementCreate("I");
                const hr = new ElementCreate("HR");
                h2.setClass("lead");
                const school = BulletPoints.COURSES.split(" ");
                school.forEach(fAwesomeClass => i.setClass(fAwesomeClass));
                h2.setChild(i.getElement());
                //if the course array is length of one, we ensure to make course not courses
                h2.setElementText("&nbsp; Courses");
                modalBody.setChild(h2.getElement());
                modalBody.setChild(hr.getElement());
                this.body[0].courses.forEach(course => {
                    const courseClass = new Course(course);
                    modalBody.setChild(courseClass.getCourse());
                });
            }
        }
        return modalBody.getElement();
    }
}
export default Education;
