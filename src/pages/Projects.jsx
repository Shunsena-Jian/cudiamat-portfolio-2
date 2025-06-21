import {useEffect} from "react";
import { Carousel } from "react-bootstrap";
import githubLogo from "../assets/images/github-logo-white.png";
import linkedInLogo from "../assets/images/InBug-White.png";

import ProjectLayout from "../layouts/ProjectLayout.jsx";

export default function Projects() {
    useEffect(() => {
        document.title = 'Projects Cudiamat';
    }, []);

    const carouselItems = [
        {
            id: 1,
            src: githubLogo,
            alt: 'something',
            caption: {
                title: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            }
        },
        {
            id: 2,
            src: linkedInLogo,
            alt: 'something',
            caption: {
                title: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            }
        }
    ];

    const carousel = () => {
        return(
            <Carousel fade>
                {
                    carouselItems.map((item) => {
                        const {id, src, alt, caption} = item;
                        return (
                            <Carousel.Item id={id}>
                                <img src={src} alt={alt}/>
                                <Carousel.Caption>
                                    <h3>{caption.title}</h3>
                                    <p>{caption.text}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        );
    }

    return (
        <ProjectLayout
            content={ carousel() }
        />
    );
}