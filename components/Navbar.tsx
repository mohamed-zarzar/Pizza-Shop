"use client"

import { AppBar, Badge, Box, Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StoreIcon from '@mui/icons-material/Store';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../rtk/hook';
import React from 'react';
import { PizzCardType } from '../type';
import Image from 'next/image'
import { deletPizza } from '../rtk/features/myPizzaSlice';
import { useRouter } from 'next/navigation';
import { changeOpen } from '../rtk/features/orderSlice';
import { orderType } from '../type';


function OrderCart (order:orderType) {
    return (
        <Box sx={{display:"flex",flexDirection:"column",p:"20px",boxShadow:3,m:"50px 10p",}} style={{width:"200px"}}>
            <ul>
                <li style={{margin:"10px 5px"}}><Typography sx={{color:"#666"}}>placed on : </Typography><Typography sx={{fontSize:"14px",m:"0 0 0 5px"}}>{order.time}</Typography></li>
                <li style={{margin:"10px 5px"}}><Typography sx={{color:"#666"}}>name : </Typography><Typography sx={{fontSize:"14px",m:"0 0 0 5px"}}>{order.name}</Typography></li>
                <li style={{margin:"10px 5px"}}><Typography sx={{color:"#666"}}>address : </Typography><Typography sx={{fontSize:"14px",m:"0 0 0 5px"}}>{order.address}</Typography></li>
                <li style={{margin:"10px 5px"}}><Typography sx={{color:"#666"}}>payment method : </Typography><Typography sx={{fontSize:"14px",m:"0 0 0 5px"}}>{order.paymentWay}</Typography></li>
                <li style={{margin:"10px 5px"}}><Typography sx={{color:"#666",wordWrap:"break-word",maxWidth:"100%"}}>your order : </Typography><Typography sx={{fontSize:"14px",m:"0 0 0 5px"}}>{order.yourOrders}</Typography></li>
                <li style={{margin:"10px 5px"}}><Typography sx={{color:"#666"}}>total price : </Typography><Typography sx={{display:"flex",fontSize:"14px",m:"0 0 0 5px"}}>{order.totalPrice}<p style={{color:"green"}}>$</p></Typography></li>
                <li style={{margin:"10px 5px"}}><Typography sx={{color:"#666"}}>payment status : </Typography><Typography color="primary" sx={{fontSize:"14px",m:"0 0 0 5px"}}>{order.paymentStatus}</Typography></li>
            </ul>
        </Box>
    );
}




const Navbar = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isOrderDrawerOpen = useAppSelector(state => state.orders.isOpen);
    const myAllPizza = useAppSelector ( state => state.myPizza.buyingPizza);
    const myAllOrder = useAppSelector ( state => state.orders.orderList);
    const [openDrawerNavbar,setOpenDrawerNavbar] =useState<boolean>(false);
    const [openDrawerOrder,setOpenDrawerOrder] =useState<boolean>(false);
    const handelClickNav = (path:string) => {
        router.push(path);
        setOpenDrawerNavbar(false);
    };
    // to go to page order
    const handleClickOrderNow = () => {
        router.push('/order');
        setOpenDrawerOrder(false);
    }
    //to delet item
    const handelDelete = (id:number) => {
        dispatch(deletPizza(id));
    }
    // pizza card
    interface PizzaCardBuying extends PizzCardType {
        quantity : number,
    }
    // nav bar list 
    const NAV_LIST: string[] = [
        "","about","order","menu","faq"
    ];
    // for large size
    function LiListLg ({children}:{children:string}) {
        return (
            <li style={{margin:"0 10px"}} >
                    <Link href={`/${children}`} className='linkRoute'>{children ? `${children}` : "home"}</Link>
            </li>
        );
    }
    // for small size
    function LiListSm ({children}:{children:string}) {
        return (
            <ListItemButton onClick={()=>handelClickNav(`/${children}`)} >
            <ListItemIcon>
                <ListItemText>
                    {children ? `${children}` : "home"}
                </ListItemText>
            </ListItemIcon>
        </ListItemButton>
        );
    }
    // item in mt buying list
    const CardOrder = (card:PizzaCardBuying) => {
        return (
            <Box sx={{position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"white",boxShadow:3,borderRadius:"5px",
            p:"15px",m:"10px"}}>
                <button 
                onClick={()=>handelDelete(card.id)}
                style={{outline:"none",border:"none",backgroundColor:"transparent",color:"red",position:"absolute",top:"10px",right:"10px",fontSize:"8px",cursor:"pointer"}} >X</button>
                <Image src={card.img} alt="" style={{width:"50px",height:"50px"}}></Image>
                <Box sx={{m:"0 0 0 10px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                    <Typography sx={{fontWeight:"bold"}}>{card.title}</Typography>
                    <Typography sx={{fontSize:"14px"}}>Quantity : {card.quantity}</Typography>
                </Box>
            </Box>
        );
    }
    return (
        <AppBar position="static" sx={{backgroundColor:"white"}}>
            <Toolbar>
                <Box className="container" sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                    <Link href="/" className='linkRoute'><Typography sx={{color:"#666",fontSize:"22px"}}>Pizza</Typography></Link>
                    <Box sx={{display:{xs:"none",md:"block"}}}>
                        <ul style={{color:"#333",display:"flex",margin:"0 30px"}}>
                            {NAV_LIST.map((li,index)=>(<LiListLg key={index}>{li}</LiListLg>))}
                        </ul>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <IconButton sx={{color:"#666",m:"0 4px",display:{xs:"flex",md:"none",p:"0"},justifyContent:"center",alignItems:"center"}} onClick={()=>setOpenDrawerNavbar(!openDrawerNavbar)}>
                            <MenuIcon />
                        </IconButton>
                        {/* <PersonIcon sx={{color:"#666",m:"0 4px"}}/> */}
                        <IconButton sx={{color:"#666",m:"0 4px",display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>dispatch(changeOpen())}>
                            <Badge badgeContent={myAllOrder.length} color='primary'>
                                <StoreIcon sx={{color:"#666",m:"0 4px"}}/>
                            </Badge>
                        </IconButton>
                        <IconButton sx={{color:"#666",m:"0 4px",display:"flex",p:"0",justifyContent:"center",alignItems:"center"}} onClick={()=>setOpenDrawerOrder(!openDrawerOrder)}>
                            <Badge badgeContent={myAllPizza.length} color='primary'>
                                <LocalGroceryStoreIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    {/* navbar in small size  */}
                    <React.Fragment>
                        <Drawer open={openDrawerNavbar}
                        onClose={()=>setOpenDrawerNavbar(false)}>
                            <List sx={{paddingTop:"15px"}}>
                                    {NAV_LIST.map((link,index)=>(<LiListSm key={index}>{link}</LiListSm>))}
                            </List>
                        </Drawer>
                    </React.Fragment>
                    {/* drawer for order */}
                    <React.Fragment  >
                        <Drawer 
                        sx={{backgroundColor:"#f5f5f5"}}
                        open={openDrawerOrder}
                        onClose={()=>setOpenDrawerOrder(false)}
                        anchor='right'>
                            {myAllPizza.map((pizza)=>(
                                <CardOrder {...pizza} key={pizza.id}/>
                            ))}
                            <Button variant='contained'sx={{m:"15px"}}
                            onClick={handleClickOrderNow}>Order Now</Button>
                        </Drawer>
                    </React.Fragment>
                    {/* orders drawer */}
                    <React.Fragment  >
                        <Drawer 
                        sx={{backgroundColor:"#f5f5f5"}}
                        open={isOrderDrawerOpen}
                        onClose={()=>dispatch(changeOpen())}
                        anchor='right'>
                            <Box sx={{display:"flex",flexDirection:"column",p:"15px"}}>
                                {myAllOrder.map((order,index)=>(
                                    <OrderCart key={index} {...order}/>
                                ))}
                            </Box>
                        </Drawer>
                    </React.Fragment>
                </Box>
            </Toolbar>
        </AppBar>
    )
}



export default Navbar
