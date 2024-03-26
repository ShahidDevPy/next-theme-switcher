
import type { Config } from 'tailwindcss'
import {nextui, ThemeColors} from '@nextui-org/react'

interface ThemeColor extends ThemeColors {
    primary: {
        50: string
        100: string
        200: string
        300: string
        400: string
        DEFAULT: string
        foreground: string
    }
    background: string
    foreground: string
    focus: string

}

const themes: ThemeColor = {
    primary: {
        50: '#3B096C',
        100: '#520F83',
        200: '#7318A2',
        300: '#9823C2',
        400: '#c031e2',
        DEFAULT: '#DD62ED',
        foreground: '#ffffff'
    },
    background: '#2e5a9a',
    foreground: '#ffffff',
    focus: '#F182F6'

}

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    // this makes next-theme package to show default behavior , adding property as data-theme instead of class
    // darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '1.5rem',
                lg: '2rem'
            }
        },
        extend: {

            //We define our color variable here to be assigned a value on the stylesheet
/*
May be need to add below code to nextui colors
 */

            //its working to change between theme use theme-data property on parent tag
            // colors: {
            //     accent: {
            //         1: 'var(--accent1)',
            //         2: 'var(--accent2)',
            //         3: 'var(--accent3)',
            //         4: 'var(--accent4)'
            //     },
            //     baseOne: 'var(--baseOne)',
            //     baseTwo: 'var(--baseTwo)',
            //     baseThree: 'var(--baseThree)',
            //     baseFour: 'var(--baseFour)'
            // }
        }
    },
    plugins: [
        nextui({
            prefix:'next',
            themes: {
                light: {
                    layout: {}, // light theme layout tokens
                    colors: {
                        primary: {
                            50: '#3B096C',
                            100: '#520F83',
                            200: '#7318A2',
                            300: '#9823C2',
                            400: '#c031e2',
                            500: '#DD62ED',
                            600: '#F182F6',
                            700: '#FCADF9',
                            800: '#FDD5F9',
                            900: '#FEECFE',
                            DEFAULT:'grey',
                            foreground: '#ffffff'
                        },
                        background: '#2e5a9a',

                    }

                },
                dark: {
                    layout: {}, // dark theme layout tokens
                    colors: {
                        //syntax
                        // 'hsl(var(--name))'
                        /* if we uncomment css variable usage it will give error on console and will give unexpected behaviour*/
                        // background:'hsl(var(--baseOne))',

                        /* Setting direct values working fine*/
                        background:'red'
                    }
                },
                modern: {
                    extend: 'dark', // <- inherit default values from dark theme
                    colors: {
                        background: '#0D001A',
                        foreground: '#ffffff',
                        primary: {
                            50: '#3B096C',
                            100: '#520F83',
                            200: '#7318A2',
                            300: '#9823C2',
                            400: '#c031e2',
                            500: '#DD62ED',
                            600: '#F182F6',
                            700: '#FCADF9',
                            800: '#FDD5F9',
                            900: '#FEECFE',
                            DEFAULT: '#DD62ED',
                            foreground: '#ffffff'
                        },
                        focus: '#F182F6'
                    },
                    layout: {
                        disabledOpacity: '0.3',
                        radius: {
                            small: '1px',
                            medium: '2px',
                            large: '4px'
                        },
                        borderWidth: {
                            small: '1px',
                            medium: '2px',
                            large: '3px'
                        }
                    }
                }
            }
        })
    ]
}
export default config
