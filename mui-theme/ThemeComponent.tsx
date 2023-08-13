'use client'

import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import { ReactNode } from "react"



const ThemeComponent = ({children} : {children:ReactNode}) => {
return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)
}

export default ThemeComponent