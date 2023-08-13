import { Typography } from '@mui/material'
import  { ReactNode } from 'react'

export const PageTitle = ({children} : {children:ReactNode}) => {
return (
    <Typography sx={{margin:"30px auto",textAlign:"center",fontSize:"30px",color:"#333",textTransform:"uppercase",fontWeight:"bold"}}>{children}</Typography>
)
}
