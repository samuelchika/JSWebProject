type AttribObject = {name:string , value:string};

interface AcademicInterface {
    certified: boolean;
    title: string;
    from: string;
    to: string;
    institution: string;
    link: string;
    outcome: string[];
}

interface CourseInterface {
    certified: boolean;
    title: string;
    of: string;
    from: string;
    to: string;
    body: string;
    online: boolean;
    link: string;
    certId: string;
}

interface ExperienceObject {
    jobTitle: string;
    employer: string;
    from: string;
    to: string;
    duration: string;
    responsibilities: string[];
}

interface EducationObject {
    academic: [AcademicInterface];
    courses: [CourseInterface];
}

interface AwardObject {
    certified: boolean;
    title: string;
    from: string;
    to: string;
    of: string;
    body: string;
}

interface BioData {
    hireable: boolean;
    name: string;
    email: string;
    availability: string;
    summary: string;
    currentLocation: string;
    phone: string;
    address: string;
    eircode: string,
    profile: string,
    profileSummary: string[]
}

interface SkillDetails {
    name: string;
    strength: number;
    fAwesome: string;
    progBarColor: string;
    fAwesomeA: string;
    fAwesomeTextColor: string;
}

interface AcademicAttributes  {
    certified: boolean;
    title: string;
    from: string;
    to: string;
    institution: string;
    link: string;
    outcome: string[];
}

interface SocialDetails {
    link: string;
    fAwesome: string;
}

interface ProjectAttributes {
    name: string;
    link: string;
    skills: string[];
    description: string;
}

enum BulletPoints { 
    EXPERIENCE = "fas fa-sign-out-alt text-secondary",
    EDUCATION = "fas fa-university",
    ACADEMIC = "fas fa-graduation-cap text-secondary",
    SCHOOL = "fas fa-school text-secondary",
    ONLINE_SCHOOL = "fas fa-globe",
    INSTITUTION = "fas fa-university text-secondary",
    AWARD = "fas fa-award text-warning",
    CERTIFICATE = "fas fa-certificate text-danger",
    COURSES = "fas fa-laptop-code text-secondary",
    COMPANY = "fa fa-building text-secondary",
    CALENDER = "fa fa-calendar-check text-secondary",
    BRIEFCASE = "fas fa-briefcase",
    COGS = "fas fa-cogs",
    TOOLS = "fas fa-tools",
    MEDAL = "fas fa-medal text-secondary",
};



export { BulletPoints, AttribObject, BioData, SkillDetails, AcademicAttributes, SocialDetails, ExperienceObject, EducationObject, CourseInterface, AcademicInterface, AwardObject, ProjectAttributes };