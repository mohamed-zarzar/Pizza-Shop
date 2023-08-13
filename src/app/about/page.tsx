import { Box, Button, Grid, Typography } from '@mui/material'
import { PageTitle } from '../../../components/PageTitle'
import { ABOUT_ARR } from '../../../images'
import Image,{ StaticImageData } from 'next/image'
import styles from "../main.module.css"
import Link from 'next/link'



type AboutCardType = {
    title:string,
    img:StaticImageData,
    des:string,
}

const cardArr : AboutCardType[] = [
    {
        title:"made with love",
        img:ABOUT_ARR[0],
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quae amet beatae magni numquam facere sit. Tempora vel laboriosam repudiandae!"
    },
    {
        title:"30 minutes delivery",
        img:ABOUT_ARR[1],
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quae amet beatae magni numquam facere sit. Tempora vel laboriosam repudiandae!"
    },
    {
        title:"share with freinds",
        img:ABOUT_ARR[2],
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quae amet beatae magni numquam facere sit. Tempora vel laboriosam repudiandae!"
    },
]

function AboutCard (props:AboutCardType) {
    return (
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:"5px",boxShadow:3,padding:"15px",margin:"5px"}}>
            <Image src={props.img} alt="" style={{width:"200px",height:"200px"}} />
            <Typography className={styles.black} sx={{fontSize:"16px",fontWeight:"600"}}>{props.title}</Typography>
            <p className={styles.gray} style={{fontSize:"10px",textAlign:"center",margin:"10px 0",lineHeight:"2",fontWeight:"100"}}>{props.des}</p>
            <Link href="/menu" style={{width:"100%",margin:"15px 0 5px 0"}}>
                <Button variant='contained' sx={{width:"100%"}}>
                    Our Menu
                </Button>
            </Link>
        </Box>
    )
}

const About = () => {
    return (
        <Box className="container" >
            <PageTitle>about us</PageTitle>
            <Grid container sx={{m:"0 0 30px 0"}} >
                    {cardArr.map((card,index)=>(
                        <Grid xs={12} sm={6} md={4}  key={index}>
                            <AboutCard {...card}/>
                        </Grid>
                    ))}
                    
            </Grid>
        </Box>
    )
}

export default About
