export const LANDING_PAGE = {
    path: '/',
};
export const VIDEO = {
    path: '/video',
};
export const ABOUT = {
    path: '/omoss',
};
export const SERVICES = {
    path: '/tjenster',
};
export const PORTFOLIO = {
    path: '/portfolio',
};
export const CATEGORY = {
    path: '/category',
};
export const CATEGORY_WITH_ID = {
    path: `/${CATEGORY.path}/:category`,
    getPathWithId: category => `/${CATEGORY.path}/${category}`,
};
