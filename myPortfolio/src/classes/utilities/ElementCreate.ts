import { AttribObject } from './Interfaces.js';

class ElementCreate { 
    private element: HTMLElement;
    private id: string = "";
    private classes: string[] = [];
    private children: HTMLElement[] = [];
    private attributes: AttribObject[] = [];
    
    constructor(private elementTag: string) {
        this.elementTag = elementTag;
        this.element = document.createElement(elementTag.toUpperCase());
    }

    setElementText(text: HTMLElement | string):void {
        const span = document.createElement("SPAN");
        if(typeof text === "string") {
            span.innerHTML += text;
        } else {
            span.appendChild(text);
        }
        this.children.push(span);
        //span.innerHTML = text;
        //this.children.push(span);
    }

    //set element id
    setId(id: string):void {
        this.id = id;
    }
    //set multiple classes at a time
    setClasses(classes: string[]):void {
        classes.forEach(classs => {
            this.classes.push(classs);
        });
    }
    //set a single class
    setClass(clas: string):void {
        this.classes.push(clas);
    }
    //set multiple attribute
    setAttributes(attribs: Array<AttribObject>):void {
        attribs.forEach(attrib => {
            this.attributes.push(attrib);
        });
    }
    //set a single attribute
    setAttribute(attrib: AttribObject): void {
        this.attributes.push(attrib);
    }
    //set many children at the same time
    setChildren(kids: Array<HTMLElement>):void {
        kids.forEach(kid => {
            this.children.push(kid);
        });
    }
    //set a single child
    setChild(kid: HTMLElement): void {
        this.children.push(kid);
    }
    //create the HTMLElement and return it
    getElement(): HTMLElement {
        //attach all the classes
        (this.classes !== null) && this.classes.forEach(clas => this.element.classList.add(clas));        
        //attach all the attributes
        (this.attributes !== null) && this.attributes.forEach(attrib => this.element.setAttribute(attrib.name, attrib.value));
        //attach id
        (this.id !== "") && this.element.setAttribute("id", this.id);    
        //attach children
        this.children.forEach(child => this.element.appendChild(child));
        //set the siblings
        
        return this.element;
    }
}
//export the Class to be useful
export default ElementCreate;