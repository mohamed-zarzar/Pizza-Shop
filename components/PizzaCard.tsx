import React, { useState } from 'react'
import { PizzCardType } from '../type'
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { useAppDispatch } from '../rtk/hook'
import { buyingPizaa } from '../rtk/features/myPizzaSlice'




const PizzaCard = (card:PizzCardType) => {
    const dispatch = useAppDispatch();
    const [quantityNumber, setQuantityNumber] = useState<number>(1);
    const onChangenumber = (number:number) => {
        setQuantityNumber(number);
    }
    const handeClick = () => {
        dispatch(buyingPizaa( {
            ...card,
            quantity:quantityNumber,
        }));
    }
    return (
        <Box sx={{display:"flex",flexDirection:"column",position:"relative",backgroundColor:"white",padding:"10px",boxShadow:5,margin:"5px",justifyContent:"center",alignItems:"center",maxWidth:'270px'}}>
            <Box sx={{position:"absolute",top:"5px",left:"5px",padding:"5px",backgroundColor:"#333",color:"white",borderRadius:"5px"}}>${card.salary}/-</Box>
            <Image src={card.img} alt="piza img" style={{width:"250px", height:"200px",maxWidth:"100%"}} />
            <Typography sx={{color:"#333",m:"10px 0"}}>{card.title}</Typography>
            <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"row"}, justifyContent:'space-between'}}>
                <TextField
                color={`${quantityNumber === 0 ? "error" : "primary"}`}
                value={quantityNumber}
                sx={{width:{xs:"100%",sm:"35%"},m:{xs:"10px 0",sm:"0"}}}
                size='small'
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{ 
                    inputProps: {
                        min:1 , 
                        // max:count,
                    }
                }}
                onChange={(e)=>{onChangenumber(+e.target.value)}}
                />
                <Button variant='contained' size='small' sx={{width:{xs:"100%",sm:"60%"},fontSize:"12px"}}
                disabled={quantityNumber <= 0}
                onClick={handeClick}>
                    Add To Cart
                </Button>
            </Box>
        </Box>
    )
}

export default PizzaCard