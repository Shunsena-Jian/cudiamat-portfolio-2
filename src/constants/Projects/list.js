const listProps = {
    ElementType: 'li',
};

const projects = [
    'Cadet Information System',
    'Intellijent'
];

export const list = projects.map((project, index) => ({
    key: index + 1,
    content: project,
    ...listProps
}));