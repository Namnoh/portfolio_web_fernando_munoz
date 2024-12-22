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