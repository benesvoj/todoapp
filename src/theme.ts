export const theme = {
    colors: {
        white: '#ffffff',
        grey: '#21212150',
        grey100: '#2b2b2b',
        grey200: '#777777',
        grey300: '#e3e3e3',
        grey400: '#e8e8e8',
        gray: '#ebecf0',
        grayishBlue: '#42526e',
        magenta: 'rgba(7, 3, 53, 1) 97.5%',
        darkShade: 'rgba(5, 8, 114, 1) 0%',
        radialGradient:
            'radial-gradient(circle 610px at 5.2% 51.6%, rgba(5, 8, 114, 1) 0%, rgba(7, 3, 53, 1) 97.5%)',
        pink: '#E31F71',
        black: '#212121',
        black100: '#282828',
        green: '#23ce6b',
        blue: '#016fb9',
        reactBlue: '#61DBFB',
    },
    text: {
        primary: '#8993A4',
        secondary: '#42526E',
        tertiary: '#7A869A',
        danger: '#B71C1C',
        success: '#0E6027',
        link: '#0065FF',
        white: '#FFFFFF',
    },
    input: {
        border: '#a5adba',
    },
    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Roboto, sans-serif',
    },
    fontSizes: {
        heading: {
            heading_1: '28px',
            heading_2: '24px',
            heading_3: '21px',
            heading_4: '16px',
            heading_5: '14px',
            heading_6: '12px',
        },
    },
    fontWeights: {
        thin: 100,
        light: 300,
        regular: 400,
        semiBold: 500,
        bold: 700,
    },
    lineHeights: {
        heading: {
            heading_1: '32px',
            heading_2: '32px',
            heading_3: '28px',
            heading_4: '24px',
            heading_5: '20px',
            heading_6: '16px',
        },
    },
    sizes: {
        default: {
            height: '32px',
        },
        small: {
            height: '16px',
        },
    },
    spacings: {
        small: '1rem', //16px
        basic: '2rem', //32px
        extended: '2.5rem',
        extendedTop: '3.5rem',
    },
    borderRadius: {
        default: '4px',
    },
    responsive: {
        xs: `@media (max-width: 360px)`,
        sm: `@media (max-width: 600px)`,
        md: `@media (max-width: 740px)`,
        la: `@media (max-width: 800px)`,
        xl: `@media (max-width: 960px)`,
        onlyMedia480: `@media only screen and (max-width: 480px)`,
        onlyMedia800: `@media only screen and (max-width: 800px)`,
    },
} as const
