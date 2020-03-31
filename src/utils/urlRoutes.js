export const LANDING_PAGE = {
    path: '/',
};
export const VIDEO = {
    path: '/video',
};
export const ABOUT = {
    path: '/omoss',
};
export const CONTACT = {
    path: '/kontakt',
};
export const PORTFOLIO = {
    path: '/portfolio',
};
export const SERVICES = {
    path: '/tjenster',
};
export const PROJECT_WITH_CATEGORY = {
    path: `${PORTFOLIO.path}/:category`,
    getPathWithId: category => `${PORTFOLIO.path}/${category}`,
};

export const PROJECT_WITH_ID = {
    path: `${PORTFOLIO.path}/:category/:id`,
    getPathWithId: (category, id) => `${PORTFOLIO.path}/${category}/${id}`,
};
