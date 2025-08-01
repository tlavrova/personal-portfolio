import portfolioPreview from '../../assets/images/portfolio-preview.jpg';
import recipeFinder from '../../assets/images/recipe-finder.png';
import weatherApp from '../../assets/images/weather-app.png';
import todoList from '../../assets/images/todo-list.png';

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github?: string;
    liveDemo?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website built to showcase my projects and skills.",
        technologies: ["React", "TypeScript", "CSS"],
        image: portfolioPreview,
        github: "https://github.com/tlavrova/personal-portfolio",
        liveDemo: "tlavrova.github.io/personal-portfolio/"
    },
    {
        id: 2,
        title: "Recipe Finder",
        description: "A web application that helps users discover recipes based on available ingredients.",
        technologies: ["React", "TypeScript", "HTML", "CSS", "GitHub Pages"],
        image: recipeFinder,
        github: "https://github.com/tlavrova/recipe-finder",
        liveDemo: "https://tlavrova.github.io/recipe-finder"
    },
    {
        id: 3,
        title: "Weather App",
        description: "A React-based weather application that allows users to search for weather information by city name or current location.",
        technologies: ["React", "TypeScript", "CSS", "OpenWeather API", "Geolocation API", "Local Storage"],
        image: weatherApp,
        github: "https://github.com/tlavrova/weather-app",
        liveDemo: "https://tlavrova.github.io/weather-app"
    },
    {
        id: 4,
        title: "Todo List Application",
        description: "A responsive React-based todo list application that allows users to create, manage, and track their tasks.",
        technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "GitHub Pages"],
        image: todoList,
        github: "https://github.com/tlavrova/todo-list",
        liveDemo: "https://tlavrova.github.io/todo-list"
    },
];
