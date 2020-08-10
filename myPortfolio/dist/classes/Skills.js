import ElementCreate from './utilities/ElementCreate.js';
class Skills {
    constructor(skill) {
        this.skillsArray = [];
        this.skillsArray = skill;
    }
    getSkills() {
        const div = new ElementCreate('div');
        div.setClass('row');
        //temporal div to monitor the our div and ensure it is 3 per role for spacing.
        let tempDiv = new ElementCreate('div');
        tempDiv.setClass('col-12');
        tempDiv.setClass('row');
        //set the children of the temporal div
        let children = [];
        if (this.skillsArray !== [] && (this.skillsArray.length <= 3)) {
            this.skillsArray.forEach(skill => children.push(this.buildHousingDiv(skill)));
            div.setChildren(children);
        }
        else if (this.skillsArray.length > 3) {
            this.skillsArray.forEach((skill, i) => {
                if (i % 3 === 0) {
                    //set the children of the tempDiv, and add the tempDiv to the div as a child
                    tempDiv.setChildren(children);
                    div.setChild(tempDiv.getElement());
                    //reset tempDiv and children
                    tempDiv = new ElementCreate('div');
                    tempDiv.setClass('row'); //define a new row for the elements
                    tempDiv.setClass('col-12');
                    children = [];
                    children.push(this.buildHousingDiv(skill));
                }
                else {
                    children.push(this.buildHousingDiv(skill));
                }
            });
            tempDiv.setChildren(children);
            div.setChild(tempDiv.getElement());
        }
        //div.setChildren(children);
        return div.getElement();
    }
    buildHousingDiv(skill) {
        const div = new ElementCreate('div');
        div.setClasses(['col-md-3', 'my-3', 'offset-md-1', 'offset-sm-0', 'shadow', 'skillDetail', 'py-5', 'col-sm-8', 'mx-sm-auto']);
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
        i.setClasses([skill.fAwesome.toString(), skill.fAwesomeA.toString(), skill.fAwesomeTextColor.toString()]);
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
        div.setClasses(['progress-bar', `${skill.progBarColor.toString()}`]);
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
export default Skills;
