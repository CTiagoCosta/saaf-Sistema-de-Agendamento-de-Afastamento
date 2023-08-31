import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            "50":  "#F7FAFC",
            "100": "#EDF2F7",
            "200": "#E2E8F0",
            "300": "#CBD5E0",
            "400": "#A0AEC0",
            "500": "#718096",
            "600": "#4A5568",
            "700": "#2D3748",
            "800": "#1A202C",
            "900": "#171923"   
        },
        green: {
            "50":  "#147178",
            "100": "#EDF2F7",
            "200": "#E2E8F0",
            "300": "#CBD5E0",
            "400": "#A0AEC0",
            "500": "#718096",
            "600": "#4A5568",
            "700": "#31d11e",
            "800": "#1A202C",
            "900": "#171923"   
        }
    },
    fonts: {
        heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
    },
    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.50'
            }
        }
    }
})