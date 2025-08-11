import { useState, useEffect } from 'react';

export const useExperiences = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('/data/experiences.json')
            .then(response => response.json())
            .then(data => setExperiences(data))
            .catch(error => console.error('Error fetching experiences:', error));
    }, []);

    return experiences;
};