'use client'

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useAppSelector } from '../rtk/hook';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

















const DialogOrder = () => {
    const router = useRouter();
    const IsOpen = useAppSelector(state => state.myPizza.buyingPizza.length)
    const handelGoHome = () => {
        router.push('/');
    }
    const handelGoCart = () => {
        router.push('/menu');
    }
    return (
    <div>
        <Dialog
        open={IsOpen === 0}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:"40px"}}
        >
        <Typography sx={{color:"#333",m:"50px auto 20px",fontWeight:"bold",fontSize:"18px",textTransform:"uppercase"}}>There is no cart to order</Typography>
        <Box sx={{display:"flex",p:"15px",m:"15px"}}>
            <Button sx={{m:"0 20px"}} variant='contained' onClick={handelGoHome}>Go To Home</Button>
            <Button sx={{m:"0 20px"}} variant='contained' onClick={handelGoCart}> Go To Carts</Button>
        </Box>
        
        </Dialog>
    </div>
    );
}

export default DialogOrder