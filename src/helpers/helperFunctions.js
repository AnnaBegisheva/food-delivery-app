export const toggleItem = (prevState, filter) => {
    if (prevState.includes(filter)) {
        return [...prevState.filter((item) => item !== filter)];
    }
    return [...prevState, filter];
};