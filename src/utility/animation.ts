export const slipeUp = (delay: number) => {
    return {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const slipeInFromSide = (direction: 'left' | 'right', delay: number) => {
    return {
        initial: {
            x: direction === 'left' ? -100 : 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};