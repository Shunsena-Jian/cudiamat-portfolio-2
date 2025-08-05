export const getImageUrl = (name) => {
    return new URL(`../assets/images/technologies/${name}`, import.meta.url).href;
};
