import GitHubIcon from "@components/icons/GitHubIcon.astro";
import LinkedInIcon from "@components/icons/LinkedInIcon.astro";
import MailIcon from "@components/icons/MailIcon.astro";
import NextjsIcon from "@components/icons/technologies/NextjsIcon.astro";
import ReactIcon from "@components/icons/technologies/ReactIcon.astro";

export const NAV_LINKS = [
    {
        title: "Experiencia",
        label: "Experiencia",
        url: "#experience",
    },
    {
        title: "Proyectos",
        label: "Proyectos",
        url: "#projects",
    },
    {
        title: "Sobre mí",
        label: "Sobre mi",
        url: "#aboutMe",
    },
    {
        title: "Contáctame",
        label: "Contáctame",
        url: "#contactMe",
    },
];

export const TAGS = {
    NEXT: {
        name: 'Next.js',
        class: 'bg-black text-white',
        icon: NextjsIcon
    },
    REACT: {
        name: 'React',
        class: 'bg-[#00d8ff]/30 text-white',
        icon: ReactIcon
    }
};

export type Tag = keyof typeof TAGS;

type ContactOption = {
    name: string;
    url: string;
    icon: any;
    description: string;
    ariaLabel?: string;
};

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
}