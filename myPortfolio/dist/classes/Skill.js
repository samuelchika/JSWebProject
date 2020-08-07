import ElementCreate from './ElementCreate.js';
//clean up the interface later, have a file called Interface.js
class Skills {
    constructor(skill) {
        this.skillsArray = [];
        this.skillsArray.push(skill);
    }
    setSkills(skill) {
        this.skillsArray.push(skill);
    }
    getSkills() {
        const div = new ElementCreate('div');
        div.setClass('row');
        //set the children of the div
        let children = [];
        (this.skillsArray !== []) ? this.skillsArray.forEach((skill) => children.push(this.buildHousingDiv(skill))) : '';
        div.setChildren(children);
        return div.getElement();
    }
    buildHousingDiv(skill) {
        const div = new ElementCreate('div');
        div.setClasses(['col-md-3', 'my-3', 'offset-md-1', 'offset-sm-0', 'shadow', 'skillDetail', 'py-5', 'col-sm-9', 'mx-sm-auto']);
        div.setChild(this.buildEnclosingDiv(skill));
        return div.getElement();
    }
    buildEnclosingDiv(skill) {
        const div = new ElementCreate('div');
        div.setClass('col-md-12');
        div.setChildren([this.buildFontAwesomeParagraph(skill), this.buildSkillText(skill), this.buildProgressBarDiv(skill)]);
        return div.getElement();
    }
    buildSkillText(skill) {
        const div = new ElementCreate('div');
        div.setClasses(['my-3', 'text-center', 'font-weight-bold']);
        div.setElementText(skill.name.toUpperCase());
        return div.getElement();
    }
    buildFontAwesomeParagraph(skill) {
        const p = new ElementCreate('p');
        p.setClasses(['icon', 'text-center', 'font-big']);
        p.setChild(this.buildFontAwesomeIcon(skill));
        return p.getElement();
    }
    buildFontAwesomeIcon(skill) {
        const i = new ElementCreate('i');
        i.setClasses([skill.fAwesome, skill.progBarColor]);
        i.setAttribute({ name: "aria-hidden", value: "true" });
        return i.getElement();
    }
    buildProgressBarDiv(skill) {
        const div = new ElementCreate('div');
        div.setClass('progress');
        div.setChild(this.progBarInner(skill));
        return div.getElement();
    }
    progBarInner(skill) {
        const div = new ElementCreate('div');
        div.setClasses(['progress-bar', 'bg-info']);
        div.setAttributes([
            { name: "role", value: "progressbar" },
            { name: "style", value: `width: ${skill.strength.toString()}%` },
            { name: "aria-valuenow", value: skill.strength.toString() },
            { name: "aria-valuemin", value: "0" },
            { name: "aria-valuemax", value: "100" }
        ]);
        return div.getElement();
    }
}
