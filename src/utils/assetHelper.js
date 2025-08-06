export const getTechImageUrl = (name) => {
    return new URL(`../assets/images/technologies/${name}`, import.meta.url).href;
};

export const getCompanyImageUrl = (name) => {
    return new URL(`../assets/images/companies/${name}`, import.meta.url).href;
};
