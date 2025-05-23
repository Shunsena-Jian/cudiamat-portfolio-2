import HeaderLayout from "./HeaderLayout.jsx";
import UnderLineGrow from "../UnderlineGrow/UnderLineGrow.jsx";

const navItems = [
    {
        id: 'name',
        text: 'Jian Raphael R. Cudiamat',
        ElementType: 'h1',
        className: 'm-0',
    },
    {
        id: 'experience',
        text: 'Experience',
        ElementType: 'p',
        className: 'm-0',
    },
    {
        id: 'projects',
        text: 'Projects',
        ElementType: 'p',
        className: 'm-0',
    }
];

const logoItems = [
    {
        id: 'github_logo',
        ElementType: 'a',
        SubElementType: 'img',
        src: '/src/assets/images/github-logo-white.png',
        url: 'https://github.com/Shunsena-Jian',
        className: 'm-0',
    },
    {
        id: 'linkedIn_logo',
        ElementType: 'a',
        SubElementType: 'img',
        src: '/src/assets/images/InBug-White.png',
        url: 'https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/',
        className: 'm-0',
    }
];

export default function Header() {
    return (
        <HeaderLayout>
            <div className={'container-fluid d-flex flex-column'}>
                <div className={'container-fluid d-flex flex-column align-items-start gap-3 m-0'}>
                    {
                        navItems.map(item => {
                            const {id, text, ElementType, className} = item;

                            return (
                                <UnderLineGrow key={id}>
                                    <ElementType className={className}>{text}</ElementType>
                                </UnderLineGrow>
                            );
                        })
                    }
                </div>
                <div className={'container-fluid d-flex gap-3'}>

                </div>
            </div>

        </HeaderLayout>
    )
}