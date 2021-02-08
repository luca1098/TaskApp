
export const breakpoints = {
    xs: 20,
    sm: 30,
    md: 45,
    lg: 60
}

export const mediaQueries = key => {
    return style => `@media(max-width: ${breakpoints[key]}em){${style}}`
}