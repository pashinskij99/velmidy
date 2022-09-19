const browserContext = 16;

export const rem = (pixels: number): string => {
    return (pixels / browserContext).toString() + 'rem';
};
