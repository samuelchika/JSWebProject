import ElementCreate from './utilities/ElementCreate.js';
class Socials {
    constructor(details) {
        this.socialLinks = [];
        this.socialLinks = details;
    }
    getSocials() {
        //the main div to house everything
        const div = new ElementCreate("div");
        div.setClasses(['row', 'mt-4', 'text-center']);
        div.setId('socialLinks');
        this.socialLinks.forEach((link, index) => {
            //create the div to house each social link
            const newDiv = new ElementCreate("div");
            newDiv.setClasses(['col-6', 'font-big', 'my-5', 'col-md-12', 'col-sm-3']);
            const a = new ElementCreate("a");
            ((index % 2) !== 0) ? a.setClass('oddSocials') : a.setClass('evenSocials');
            a.setAttributes([
                { name: "href", value: `${link.link}` },
                { name: "target", value: "_blank" }
            ]);
            const i = new ElementCreate("I");
            const fAwesomeClasses = link.fAwesome.split(" ");
            fAwesomeClasses.forEach(clas => {
                i.setClass(clas);
            });
            a.setChild(i.getElement());
            newDiv.setChild(a.getElement());
            div.setChild(newDiv.getElement());
        });
        return div.getElement();
    }
}
export default Socials;
