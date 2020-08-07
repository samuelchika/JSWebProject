class elementCreate {
    constructor(elementTag) {
        this.writeUp = "";
        this.id = "";
        this.classes = [];
        this.siblings = [];
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
    setId(id) {
        this.id = id;
    }
    setClasses(classes) {
        classes.forEach(classs => {
            this.classes.push(classs);
        });
    }
    setClass(clas) {
        this.classes.push(clas);
    }
    setAttributes(attribs) {
        attribs.forEach(attrib => {
            this.attributes.push(attrib);
        });
    }
    setAttribute(attrib) {
        this.attributes.push(attrib);
    }
    setSiblings(siblings) {
        siblings.forEach((sibling) => this.siblings.push(sibling));
    }
    setChildren(kids) {
        kids.forEach(kid => {
            this.children.push(kid);
        });
    }
    setChild(kid) {
        this.children.push(kid);
    }
    getElement() {
        //attach all the classes
        (this.classes !== null) && this.classes.forEach(clas => this.element.classList.add(clas));
        //attach all the attributes
        (this.attributes !== null) && this.attributes.forEach(attrib => this.element.setAttribute(attrib.name, attrib.value));
        //attach id
        (this.id !== "") && this.element.setAttribute("id", this.id);
        //attach the text
        (this.writeUp !== "") && (this.element.append(this.writeUp));
        //attach children
        //(this.children !== null) ? this.children.forEach(child => this.element.append(child)) : '';
        this.children.forEach(child => this.element.appendChild(child));
        //set the siblings
        return this.element;
    }
    toString() {
        let output = "";
        //attach all the classes
        (this.classes !== null) && this.classes.forEach(clas => this.element.classList.add(clas));
        //attach all the attributes
        (this.attributes !== null) && this.attributes.forEach(attrib => this.element.setAttribute(attrib.name, attrib.value));
        //attach id
        (this.id !== "") && this.element.setAttribute("id", this.id);
        //attach the text
        (this.writeUp !== "") && (this.element.innerText = this.writeUp);
        //attach children
        //(this.children !== null) ? this.children.forEach(child => this.element.append(child)) : '';
        this.children.forEach(child => this.element.appendChild(child));
        //set the siblings
        return output + this.element;
    }
}
export default elementCreate;
