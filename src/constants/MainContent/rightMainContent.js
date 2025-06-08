const paragraphProps = {
    ElementType: 'p',
};

const paragraphContents = [
    'Based in the Philippines',
    'I am dedicated Full Time',
    'Backend Developer with',
    'expertise in the Laravel',
    'framework passionate about',
    'building robust and efficient',
    'server-side applications.',
    'Driven by a desire to broaden',
    'my technical horizons, I am',
    'actively pursuing growth to evolve',
    'into a versatile Full Stack Developer.'
];

export const paragraphs = paragraphContents.map((text, index) => ({
    key: index + 1,
    content: text,
    ...paragraphProps
}));