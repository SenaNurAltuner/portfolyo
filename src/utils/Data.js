import { FaReact, FaNode, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from '../assets/Project-img.PNG';
import Project2 from '../assets/Project-img1.png';

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact/>
    },

    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode/>
    },

    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt/>
    },

    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript/>
    },
];

export const projectDetails = [
    {
        id:0,
        project_name: "YouaChildCo",
        project_desc: "E-Commerce Web Site",
        tech_stack: ['HTML', 'CSS', 'Javascript'],
        project_img: Project1,
        reverse: false,
    },

    {
        id:2,
        project_name: "Travel.",
        project_desc: "Travel Web Site",
        tech_stack: ['HTML', 'CSS', 'Javascript', 'React'],
        project_img: Project2,
        reverse: true,
    },
]

export const navLinks = [
    {
        id:0,
        name: 'Home',
        href: 'Home',
    },

    {
        id:1,
        name: 'My Skills',
        href: 'Skills',
    },

    {
        id:2,
        name: 'My Projects',
        href: 'Projects',
    },

    {
        id:3,
        name: 'My Contact',
        href: 'Contact',
    },


]