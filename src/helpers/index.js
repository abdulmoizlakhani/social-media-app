// we can use uuid library for this
export const generateRandomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};