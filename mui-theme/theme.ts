import {createTheme} from "@mui/material"


export const theme = createTheme({
    palette:{
        primary:{
            dark:"#c23f32",
            main:"#e74c3c",
            light:"#ff5342",
        }
    },
    breakpoints : {
        values : {
            xs : 0,
            sm :470,
            md:680,
            lg:960,
            xl:1200,
        }
    }
})