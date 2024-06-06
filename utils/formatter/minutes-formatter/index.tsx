const secondtoMinutes = (seconds: number) => {
    const minutes = Math.floor((seconds % 3600) / 60);
    return minutes;
}

export { secondtoMinutes }
