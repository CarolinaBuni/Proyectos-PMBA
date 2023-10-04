export const linkPage = (id, page) => {
    const link = document.querySelector(id);
    link && link.addEventListener('click', () => page());
};