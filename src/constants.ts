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
import AngularIcon from "@components/icons/technologies/AngularIcon.astro";
import ExpressJSIcon from "@components/icons/technologies/ExpressJSIcon.astro";

export const NAV_LINKS = [
    {
        title: "nav.experience",
        label: "nav.experience",
        url: "/#experience",
    },
    {
        title: "nav.projects",
        label: "nav.projects",
        url: "/#projects",
    },
    {
        title: "nav.aboutMe",
        label: "nav.aboutMe",
        url: "/#aboutMe",
    },
    {
        title: "nav.contactMe",
        label: "nav.contactMe",
        url: "/#contactMe",
    },
] as const;

export const TAGS: Record<string, Tags> = {
    NEXT: {
        name: 'Next.js',
        class: 'bg-black text-white',
        icon: NextjsIcon,
        scope: 'Front-End'
    },
    REACT: {
        name: 'React',
        class: 'bg-[#00d8ff]/20 text-white',
        icon: ReactIcon,
        scope: 'Front-End'
    },
    TAILWINDCSS: {
        name: 'Tailwind CSS',
        class: 'bg-[#19b4b9]/20 text-white',
        icon: TailwindIcon,
        scope: 'Front-End'
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        class: 'bg-[#3178c6]/25 text-white',
        icon: TypeScriptIcon,
        scope: 'All'
    },
    NESTJS: {
        name: 'NestJS',
        class: 'bg-[#e0224e]/15 text-white',
        icon: NestJSIcon,
        scope: 'Back-End'
    },
    PYTHON: {
        name: 'Python',
        class: 'bg-[#3775a7]/25 text-white',
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
        class: 'bg-[#326690]/25 text-white',
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
        class: 'bg-[#f1da4e]/20 text-white',
        icon: JavaScriptIcon,
        scope: 'All'
    },
    GIT: {
        name: 'Git',
        class: 'bg-[#de4c35]/20 text-white',
        icon: GitIcon,
        scope: 'Tools'
    },
    ASTRO: {
        name: 'Astro',
        class: 'bg-[#f95f07]/20 text-white',
        icon: AstroIcon,
        scope: 'Front-End'
    },
    NODEJS: {
        name: 'Node.js',
        class: 'bg-[#68bb49]/20 text-white',
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
        class: 'bg-[#e34f27]/20 text-white',
        icon: HTML5Icon,
        scope: 'Front-End'
    },
    CSS: {
        name: 'CSS',
        class: 'bg-[#663398]/30 text-white',
        icon: CSSIcon,
        scope: 'Front-End'
    },
    ANGULAR: {
        name: 'Angular',
        class: 'bg-[#e0224e]/15 text-white',
        icon: AngularIcon,
        scope: 'Front-End'
    },
    EXPRESSJS: {
        name: 'Express.js',
        class: 'bg-[#68bb49]/20 text-white',
        icon: ExpressJSIcon,
        scope: 'Back-End'
    }
};

const MAIN_TECH_KEYS = ['HTML', 'CSS', 'JAVASCRIPT', 'NODEJS', 'EXPRESSJS', 'REACT', 'NEXT', 'TYPESCRIPT', 'TAILWINDCSS', 'ASTRO', 'NESTJS', 'PYTHON', 'POSTGRESQL', 'GITHUB', 'GIT', 'FIGMA', 'ANGULAR'];

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