import ElementCreate from './ElementCreate.js';
class Modal {
    constructor(modalType) {
        this.modalType = modalType;
    }
    getModalHeader() {
        const modalHeader = new ElementCreate("div");
        const h1 = new ElementCreate("H1");
        const button = new ElementCreate("BUTTON");
        const span = new ElementCreate("SPAN");
        modalHeader.setClasses(["modal-header", "bg-info", "text-white"]);
        h1.setId(`${this.modalType.toLowerCase()}Title`);
        h1.setClasses(['modal-title', 'font-big']);
        h1.setElementText(this.modalType.toUpperCase());
        //set button attributes and classes
        button.setAttributes([
            { name: "type", value: "button" },
            { name: "data-dismiss", value: "modal" },
            { name: "aria-label", value: "close" }
        ]);
        //span button to close the modal
        span.setAttribute({ name: "aria-hidden", value: "true" });
        span.setElementText('&times');
        //attach the span to the button
        button.setChild(span.getElement());
        button.setClasses(['btn', 'btn-light']);
        //attach the h1 and the span to the modalHeader
        modalHeader.setChildren([h1.getElement(), button.getElement()]);
        //return the modalHeader to the main modal. 
        return modalHeader.getElement();
    }
    getModalFooter() {
        const modalFooter = new ElementCreate("div");
        modalFooter.setClass("modal-footer");
        const button = new ElementCreate("BUTTON");
        button.setAttributes([
            { name: "type", value: "button" },
            { name: "data-dismiss", value: "modal" }
        ]);
        button.setClasses(['btn', 'btn-info']);
        button.setElementText("Close");
        modalFooter.setChild(button.getElement());
        return modalFooter.getElement();
    }
    getModal() {
        const modalHouse = new ElementCreate("div");
        const modalDialog = new ElementCreate("div");
        const modalContent = new ElementCreate("div");
        //set attributes and classes of all div element created
        //attributes for the modalHouse - Main modal div which should be returned
        modalHouse.setAttributes([
            { name: "tabindex", value: "-1" },
            { name: "role", value: "dialog" },
            { name: "aria-labelledBy", value: `${this.modalType.toLowerCase()}Title` },
            { name: "aria-hidden", value: "true" },
            { name: "data-keyboard", value: "false" },
            { name: "data-backdrop", value: "static" }
        ]);
        //data-keyboard="false" data-backdrop="static"
        //set Id
        modalHouse.setId(this.modalType.toLowerCase());
        //set the classes
        modalHouse.setClasses(['modal', 'fade']);
        //set attributes for the modal dialog
        modalDialog.setAttribute({ name: "role", value: "document" });
        modalDialog.setClasses(['modal-dialog', 'modal-lg']);
        //modal content attributes:
        modalContent.setClass('modal-content');
        /* create the modal header
        *  create the modal body
        *  create the modal footer
        */
        modalContent.setChildren([
            this.getModalHeader(),
            this.getModalBody(),
            this.getModalFooter()
        ]);
        modalDialog.setChild(modalContent.getElement());
        modalHouse.setChild(modalDialog.getElement());
        return modalHouse.getElement();
    }
}
export default Modal;
