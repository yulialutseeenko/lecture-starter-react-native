const getRandomNumber = (min?: number, max?: number): number => {
    if (min && max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return Math.floor(Math.random() * 100);
}

export { getRandomNumber };