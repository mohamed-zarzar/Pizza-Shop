"use client"


import Image, { StaticImageData } from 'next/image'
import { Box, Typography } from '@mui/material'
import styles from "./page.module.css"
import { useState } from 'react';
import { HOME_PIZZA_ARR } from '../../images';

type pizzaArrType = {
  title:string,
  img:StaticImageData,
}
const pizzaArr : pizzaArrType[] = [
  {
    title :"Homemade Pepperoni Pizza",
    img:HOME_PIZZA_ARR[0],
  },
  {
    title :"Pizza With Mushrooms",
    img:HOME_PIZZA_ARR[1],
  },
  {
    title :"Mascarpone And Mushrooms",
    img:HOME_PIZZA_ARR[2],
  },
]



export default function Home() {
  const  [curPizzaType, setcurPizzaType] = useState<number>(0);
  const [animate,setAnimate]= useState<boolean>(false);
    const handelClick = (type : "+" | "-") => {
      if(type === "+") {
        if(curPizzaType === 2) {
        setcurPizzaType(0);

      } else {
        setcurPizzaType(curPizzaType + 1);
      }
    }else {
      if(curPizzaType === 0) {
        setcurPizzaType(2);
        
      } else {
        setcurPizzaType(curPizzaType - 1);
      }
    }
    setAnimate(!animate);
  }
  return (
    <main>
      <Box className={styles.bg} sx={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"space-evenly"},flexDirection:{xs:"column",md:"row"}}}>
        <Image className={animate ? styles.animatePositionLeftToRight :styles.animatePositionLeftToRightRep} src={pizzaArr[curPizzaType].img} alt="" style={{width:"300px",height:"300px"}}/>
        <Box className={animate ? styles.animatePositionRightToLeft :styles.animatePositionRightToLeftRep } sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Typography sx={{color:"white",fontSize:"25px",fontWeight:"bold"}}>{pizzaArr[curPizzaType].title}</Typography>
          <Box  sx={{margin:"10px auto"}}>
            <button onClick={()=>{handelClick("-")}} className={styles.buttonChangeCurPizza}>{`<`}</button>
            <button onClick={()=>{handelClick("+")}} className={styles.buttonChangeCurPizza}>{`>`}</button>
          </Box>
        </Box>
      </Box> 
    </main>
  )
}
