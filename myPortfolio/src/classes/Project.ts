import { ProjectAttributes } from './utilities/Interfaces.js';
import ElementCreate from './utilities/ElementCreate.js';
import Modal from './utilities/Modal.js';

class Project extends Modal {
    protected body: ProjectAttributes[] = [];
    
    constructor(modalType: string) {
        super(modalType);
    }

    setModalBodyDetails(projects: [ProjectAttributes]) {
        this.body = projects;
    }

    getModalBody(): HTMLElement {
        const modalBody = new ElementCreate("DIV");
        const mainDiv = new ElementCreate("DIV");
        //set modalBody properties:
        modalBody.setClasses(['modal-body', 'p-md-4', 'text-left', 'text-dark']);
        mainDiv.setClass("row");
        this.body.forEach(project => {
            mainDiv.setChild(this.getProject(project));
        });
        modalBody.setChild(mainDiv.getElement());
        return modalBody.getElement();
    }

    private getProject(project: ProjectAttributes) {
        //elements to create
        /* 
            * create the row div
            * div col-md-6
            * div card-header
            * div card-body
            * div card-footer
        */

        /* 
            * h3 card-title
            * ul list-group list-group-flush
            * li list-group-item 
        */ 
        const divCol = new ElementCreate("DIV");
        divCol.setClasses(["col-sm-6", "col-10", "col-md-6", "mx-auto", "my-3"]);
        const card = new ElementCreate("DIV");
        card.setClass("card");
        const cardHeader = new ElementCreate("DIV");
        cardHeader.setClasses(["card-header", "my-auto", "bg-secondary", "text-white"]);
        const cardBody = new ElementCreate("DIV");
        cardBody.setClass("card-body");
        const cardFooter = new ElementCreate("DIV");
        cardFooter.setClasses(["card-footer", "text-center"]);


        //set the name of the project
        const h1 = new ElementCreate("H1");
        const ul = new ElementCreate("UL");
        const button = new ElementCreate("A");
        const description = new ElementCreate("P");
        description.setClasses(["p-3", "text-muted", "bg-light", "text-justify"]);
        //set the classes for each of the element
        h1.setClasses(["card-title", "text-center"]);
        h1.setElementText(project.name.toUpperCase());
        cardHeader.setChild(h1.getElement())
        
        ul.setClasses(["list-group", "list-group-flush"]);
        project.skills.forEach( skill => {
            const li = new ElementCreate("LI");
            li.setClass("list-group-item");
            li.setElementText(skill.toUpperCase());
            ul.setChild(li.getElement());
        });
        description.setElementText(project.description);
        cardBody.setChildren([ul.getElement(), description.getElement()]);

        button.setAttributes([
            { name: "href", value: project.link },
            { name: "target", value: "_blank" }
        ]);
        button.setClasses(["btn", "btn-outline-info"]);
        button.setElementText("Visit Project");
        cardFooter.setChild(button.getElement());
        

        card.setChildren([
            cardHeader.getElement(),
            cardBody.getElement(),
            cardFooter.getElement()
        ]);
        divCol.setChild(card.getElement());

        return divCol.getElement();
    }
}

export default Project;