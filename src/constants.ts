import GitHubIcon from "@components/icons/GitHubIcon.astro";
import LinkedInIcon from "@components/icons/LinkedInIcon.astro";
import MailIcon from "@components/icons/MailIcon.astro";
import NestJSIcon from "@components/icons/technologies/NestJSIcon.astro";
import NextjsIcon from "@components/icons/technologies/NextjsIcon.astro";
import PostgreSQLIcon from "@components/icons/technologies/PostgreSQLIcon.astro";
import PrismaIcon from "@components/icons/technologies/PrismaIcon.astro";
import PythonIcon from "@components/icons/technologies/PythonIcon.astro";
import ReactIcon from "@components/icons/technologies/ReactIcon.astro";
import ShadcnIcon from "@components/icons/technologies/ShadcnIcon.astro";
import TailwindIcon from "@components/icons/technologies/TailwindIcon.astro";
import TypeScriptIcon from "@components/icons/technologies/TypeScriptIcon.astro";
import type { ContactOption, Tags } from "./types";
import JavaScriptIcon from "@components/icons/technologies/JavaScriptIcon.astro";
import GitIcon from "@components/icons/technologies/GitIcon.astro";
import AstroIcon from "@components/icons/technologies/AstroIcon.astro";
import NodejsIcon from "@components/icons/technologies/NodejsIcon.astro";
import FigmaIcon from "@components/icons/technologies/FigmaIcon.astro";
import HTML5Icon from "@components/icons/technologies/HTML5Icon.astro";
import CSSIcon from "@components/icons/technologies/CSSIcon.astro";

export const NAV_LINKS = [
    {
        title: "Experiencia",
        label: "Experiencia",
        url: "/#experience",
    },
    {
        title: "Proyectos",
        label: "Proyectos",
        url: "/#projects",
    },
    {
        title: "Sobre mí",
        label: "Sobre mi",
        url: "/#aboutMe",
    },
    {
        title: "Contáctame",
        label: "Contáctame",
        url: "/#contactMe",
    },
];

export const TAGS: Record<string, Tags> = {
    NEXT: {
        name: 'Next.js',
        class: 'bg-black text-white',
        icon: NextjsIcon,
        scope: 'Front-End'
    },
    REACT: {
        name: 'React',
        class: 'bg-[#00d8ff]/25 text-white',
        icon: ReactIcon,
        scope: 'Front-End'
    },
    TAILWINDCSS: {
        name: 'Tailwind CSS',
        class: 'bg-[#19b4b9]/25 text-white',
        icon: TailwindIcon,
        scope: 'Front-End'
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        class: 'bg-[#3178c6]/30 text-white',
        icon: TypeScriptIcon,
        scope: 'All'
    },
    NESTJS: {
        name: 'NestJS',
        class: 'bg-[#e0224e]/25 text-white',
        icon: NestJSIcon,
        scope: 'Back-End'
    },
    PYTHON: {
        name: 'Python',
        class: 'bg-[#3775a7]/30 text-white',
        icon: PythonIcon,
        scope: 'Back-End'
    },
    SHADCN: {
        name: 'Shadcn',
        class: 'bg-black text-white',
        icon: ShadcnIcon,
        scope: 'Front-End'
    },
    POSTGRESQL: {
        name: 'PostgreSQL',
        class: 'bg-[#326690]/30 text-white',
        icon: PostgreSQLIcon,
        scope: 'Back-End'
    },
    GITHUB: {
        name: 'GitHub',
        class: 'bg-black text-white',
        icon: GitHubIcon,
        scope: 'Tools'
    },
    PRISMAORM: {
        name: 'Prisma ORM',
        class: 'bg-black text-white',
        icon: PrismaIcon,
        scope: 'Back-End'
    },
    JAVASCRIPT: {
        name: 'JavaScript',
        class: 'bg-[#f1da4e]/25 text-white',
        icon: JavaScriptIcon,
        scope: 'All'
    },
    GIT: {
        name: 'Git',
        class: 'bg-[#de4c35]/25 text-white',
        icon: GitIcon,
        scope: 'Tools'
    },
    ASTRO: {
        name: 'Astro',
        class: 'bg-[#f95f07]/25 text-white',
        icon: AstroIcon,
        scope: 'Front-End'
    },
    NODEJS: {
        name: 'Node.js',
        class: 'bg-[#68bb49]/25 text-white',
        icon: NodejsIcon,
        scope: 'Back-End'
    },
    FIGMA: {
        name: 'Figma',
        class: 'bg-black text-white',
        icon: FigmaIcon,
        scope: 'Tools'
    },
    HTML: {
        name: 'HTML5',
        class: 'bg-[#e34f27]/25 text-white',
        icon: HTML5Icon,
        scope: 'Front-End'
    },
    CSS: {
        name: 'CSS',
        class: 'bg-[#663398]/35 text-white',
        icon: CSSIcon,
        scope: 'Front-End'
    }
};

const MAIN_TECH_KEYS = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NEXT', 'TYPESCRIPT', 'TAILWINDCSS', 'ASTRO', 'NESTJS', 'NODEJS', 'PYTHON', 'POSTGRESQL', 'GITHUB', 'GIT',  'FIGMA'];

export const MAIN_TECH = MAIN_TECH_KEYS.reduce((acc, key) => {
    if (TAGS[key]) {
        acc[key] = TAGS[key];
    }
    return acc;
}, {} as Record<string, Tags>);

export const CONTACT_OPTIONS: Record<string, ContactOption> = {
    LINKEDIN: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/fernandomunozfrias',
        icon: LinkedInIcon,
        description: 'Aquí también encontrarás más información sobre mí, así como publicaciones y certificados.',
    },
    GITHUB: {
        name: 'GitHub',
        url: 'https://github.com/Namnoh',
        icon: GitHubIcon,
        description: 'Acá podrás ver más sobre mis proyectos y también sus códigos.',
    },
    EMAIL: {
        name: 'ferm.programmer@gmail.com',
        url: 'mailto:ferm.programmer@gmail.com',
        icon: MailIcon,
        description: '¡Y no dudes en enviarme un correo! Responderé a la brevedad :) .',
        ariaLabel: 'Enviar un correo a ferm.programmer@gmail.com'
    }
};