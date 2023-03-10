export const size = {
    mobile: '500px',
    tablet: '800px',
    laptop: '1170px',
    desktop: '1280px'
}

export const devices = {
    mobile: `(min-width: ${size.mobile})`,
    mobileMax: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletMax: `(max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopMax: `(max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
}