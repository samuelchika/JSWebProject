class ElementCreate {
    constructor(elementTag) {
        this.elementTag = elementTag;
        this.id = "";
        this.classes = [];
        this.children = [];
        this.attributes = [];
        this.elementTag = elementTag;
        this.element = document.createElement(elementTag.toUpperCase());
    }
    setElementText(text) {
        const span = document.createElement("SPAN");
        if (typeof text === "string") {
            span.innerHTML += text;
        }
        else {
            span.appendChild(text);
        }
        this.children.push(span);
        //span.innerHTML = text;
        //this.children.push(span);
    }
    //set element id
    setId(id) {
        this.id = id;
    }
    //set multiple classes at a time
    setClasses(classes) {
        classes.forEach(classs => {
            this.classes.push(classs);
        });
    }
    //set a single class
    setClass(clas) {
        this.classes.push(clas);
    }
    //set multiple attribute
    setAttributes(attribs) {
        attribs.forEach(attrib => {
            this.attributes.push(attrib);
        });
    }
    //set a single attribute
    setAttribute(attrib) {
        this.attributes.push(attrib);
    }
    //set many children at the same time
    setChildren(kids) {
        kids.forEach(kid => {
            this.children.push(kid);
        });
    }
    //set a single child
    setChild(kid) {
        this.children.push(kid);
    }
    //create the HTMLElement and return it
    getElement() {
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
