const size = Object.freeze({
    mobile: '375px',
    maxTablet: '767px',
    tablet: '768px',
    maxDesktop: '1439px',
    desktop: '1440px',
})

export const devices = Object.freeze({
    mobile: `min-width: ${size.mobile}`,
    maxTablet: `max-width: ${size.maxTablet}`,
    tablet: `min-width: ${size.tablet}`,
    maxDesktop: `max-width: ${size.maxDesktop}`,
    desktop: `min-width: ${size.desktop}`
});