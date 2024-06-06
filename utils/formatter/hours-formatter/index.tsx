const secondtoHours = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    return hours;
}

export { secondtoHours }