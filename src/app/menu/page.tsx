'use client'
import React, { useEffect, useState } from 'react'
import { PageTitle } from '../../../components/PageTitle'
import { Box,Grid} from '@mui/material';
import { PizzCardType } from '../../../type';
import PizzaCard from '../../../components/PizzaCard';




const URL = "https://mohamed-zarzar.github.io/Pizza-Shop/api/pizza"


const Menu = () => {
    const [cards,setCards] = useState<PizzCardType[]>([]);
    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(data => setCards(data.data));
    },[])
    return (
        <Box className="container">   
            <PageTitle>our menu</PageTitle> 
            <Grid container sx={{alignItems:"center",m:"0 0 30px 0"}} >
                    {cards.map((card)=>(
                        <Grid xs={12} sm={6} md={4}  key={card.id}>
                            <PizzaCard {...card} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
}

export default Menu
