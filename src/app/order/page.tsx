"use client"
import { orderDetails,orderType } from '../../../type';
import  { useState } from 'react';
import { PageTitle } from '../../../components/PageTitle';
import { Box, Button, FormControl, InputLabel, MenuItem, Select,  TextField, Tooltip, Typography } from '@mui/material';
import { useAppSelector,useAppDispatch } from '../../../rtk/hook';
import { addNewOrder,changeOpen } from '../../../rtk/features/orderSlice';
import { clearPizza } from '../../../rtk/features/myPizzaSlice';
import DialogOrder from '../../../components/DialogOrder';
import { useRouter } from 'next/navigation';



const carts : {n:number,t:string}[] =[
    {
        n:1,
        t:"($e/- x 2)"
    },
    {
        n:2,
        t:"($e/- x 3)"
    },
    {
        n:3,
        t:"($e/- x 4)"
    },
    {
        n:4,
        t:"($e/- x 2)"
    }
]

function Card ({n,t}:{n:number,t:string}) {
    return (
        <Box sx={{display:"flex",p:"5px 4px",backgroundColor:"white",boxShadow:5,borderRadius:"5px",width:"180px",height:"30px",m:"10px",justifyContent:"center",alignItems:"center",maxWidth:"100%"}}>
                        <Typography 
                        sx={{fontSize:"16px"}}
                        margin="5px"
                        color="#333">pizza-{n} </Typography> 
                        <Typography margin="5px" 
                        color="primary"
                        sx={{fontSize:"16px"}}
                        >{t}</Typography>
                    </Box>
    )
}

const Order= () => {
    const [isHoverButtonOrder,setIsHoverButtonOrder] =  useState<boolean>(false);
    const [toolTipOpen,setToolTipOpen] =useState<boolean>(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const date = new Date ();
    const myAllPizza = useAppSelector(state => state.myPizza.buyingPizza);
    const [information,setInformation] = useState<orderDetails>({
        name:"",
        phone: 0,
        paymentWay:"",
        address:"",
    });
    const [wayOfPay, setWayOfPay] = useState('');
    const handelChange = (name:string,value:any) => {
        if(name === "paymentWay") {
        setWayOfPay(value);
        }
        setInformation({...information,[name]:value});
    }
    const addOrder = () => {
        router.push('/');
        let totalPrice : number = 0;
        let yourOrders : string = "";
        for (let i = 0 ; i< myAllPizza.length; i++) {
            if(i !== 0) yourOrders += ", ";
            yourOrders += myAllPizza[i].title;
            totalPrice += myAllPizza[i].salary;
        }
        const order :orderType = {
            ...information,
            time : `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
            yourOrders,
            totalPrice,
            paymentStatus: "pending",
        }
        dispatch(addNewOrder(order));
        dispatch(changeOpen());
        setTimeout(()=>{
            dispatch(clearPizza());
        },1000);
    }
    return (
        <Box className="container">
            <DialogOrder/>
            <PageTitle>order now</PageTitle>
            <Box sx={{m:"30px 0",backgroundColor:"white",boxShadow:5,display:"flex",flexDirection:"column",p:"20px",borderRadius:"5px"}}>
                <Box sx={{backgroundColor:"#f5f5f5",p:"15px",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",boxShadow:1,borderRadius:"5px"}}>
                    {carts.map((cart)=>(
                        <Card {...cart} key={cart.n}/>
                    ))}
                </Box>
                <Box sx={{display:"flex",flexDirection:{xs:"row",sm:"column"},m:"10px 0"}}>
                    <TextField id="outlined-basic" label="your name" variant="outlined" size='small' sx={{width:{xs:"50%",sm:"100%"},m:{xs:"10px 5px 10px 0",sm:"10px 0"}}} 
                    onChange={(e)=>{handelChange("name",e.target.value)}}/>
                    <TextField
                    sx={{width:{xs:"50%",sm:"100%"},m:"10px 0"}}
                    size='small'
                    id="outlined-number"
                    label="your number"
                    type="number"
                    InputProps={{ 
                        inputProps: {
                            min:1 ,     
                        }
                    }}
                    onChange={(e)=>{handelChange("phone",e.target.value)}}
                    />
                </Box>
                <Box sx={{display:"flex",flexDirection:{xs:"row",sm:"column"}}}>
                    <FormControl sx={{width:{xs:"50%",sm:"100%"},m:{xs:"10px 5px 10px 0",sm:"10px 0"}}} size='small'>
                        <InputLabel id="demo-simple-select-label">pay</InputLabel>
                        <Select
                        sx={{maxHeight:"100%"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={wayOfPay}
                        label="pay"
                        onChange={(e)=>{handelChange("paymentWay",e.target.value)}}
                        >
                            <MenuItem value={"cash on felivery"}>cash on felivery</MenuItem>
                            <MenuItem value={"credit card"}>credit card</MenuItem>
                            <MenuItem value={"paytm"}>paytm</MenuItem>                            <MenuItem value={"paypal"}>paypal</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="outlined-basic" label="address" variant="outlined" size='small' sx={{width:{xs:"50%",sm:"100%"},m:{xs:"10px 0 10px 0",sm:"10px 0"}}}  onChange={(e)=>{handelChange("address",e.target.value)}}/>
                </Box>
                <Box onMouseOver={()=>{
                    setIsHoverButtonOrder(!isHoverButtonOrder);
                }}
                onMouseOut ={()=>{
                    setIsHoverButtonOrder(!isHoverButtonOrder);
                }}>
                <Tooltip title="There is an empty filed" placement="bottom" arrow open={!isHoverButtonOrder && (information.name === '' || information.address === '' || information.paymentWay === '' || information.phone === 0)}
                    >
                    <Button 
                    disabled={information.name === '' || information.address === '' || information.paymentWay === '' || information.phone === 0} variant='contained' size='small' sx={{width:"100%",m:"10px 0"}} onClick={addOrder}>
                        Order Now
                    </Button>
                </Tooltip>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Order;