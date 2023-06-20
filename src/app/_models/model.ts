export interface Project {
    id: string;
    title: string;
    short_description: string;
    long_description: string;
    explanation: string;
    link: string;
    link_icon: string;
    skills: Skill[];
    images: string[];
}

export interface Skill {
    icon: string;
    name: string;
}