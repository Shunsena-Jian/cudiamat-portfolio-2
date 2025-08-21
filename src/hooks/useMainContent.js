import { useState, useEffect } from 'react';

export const useMainContent = () => {
    const [beTech, setBETech] = useState([]);
    const [feTech, setFETech] = useState([]);
    const [dbTech, setDBTech] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);
    const [resume, setResume] = useState(null);
    const [github, setGithub] = useState(null);
    const [linkedin, setLinkedIn] = useState(null);

    useEffect(() => {
        fetch('/data/mainContent.json')
            .then(response => response.json())
            .then(data => {
                const backendTechs = [];
                const frontendTechs = [];
                const databaseTechs = [];

                data.tech.forEach(item => {
                    if (item.backend) {
                        backendTechs.push(...item.backend);
                    }
                    if (item.frontend) {
                        frontendTechs.push(...item.frontend);
                    }
                    if (item.database) {
                        databaseTechs.push(...item.database);
                    }
                });

                setBETech(backendTechs);
                setFETech(frontendTechs);
                setDBTech(databaseTechs);
                setParagraphs(data.paragraphs);
                setResume(data.links.resume);
                setGithub(data.links.github);
                setLinkedIn(data.links.linkedin);
            })
            .catch(error => console.error('Error fetching content:', error));
    }, []);

    return { beTech, feTech, dbTech, paragraphs, resume, github, linkedin };
};
