export interface Levels {
    title: string;
    url: string;
}


export interface Project {
    pageTitle: string;
    slug: string;
    titulo: string;
    descripcion: string;
    link: string;
    img?: string;
}

export interface Skill {
    title: string;
    items: {
        name: string;
        level: string;
    }[];
}

export interface Language {
    name: string;
    level: string;
}

export interface LevelScore {
    [key: string]: number;
}

export interface LevelRank {
    [key: string]: number;
}