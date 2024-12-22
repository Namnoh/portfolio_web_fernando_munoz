export type Tags = {
    name: string;
    class: string;
    icon: any;
    scope: 'Front-End' | 'Back-End' | 'All' | 'Tools';
};

export type ContactOption = {
    name: string;
    url: string;
    icon: any;
    description: string;
    ariaLabel?: string;
};