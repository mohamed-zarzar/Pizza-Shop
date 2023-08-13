"use client"
import React, { ReactNode, useState } from 'react'
import { PageTitle } from '../../../components/PageTitle'
import { Box, Grid, SvgIconTypeMap } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    }));


    const AccordionSummary = styled((props: AccordionSummaryProps) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color:"white" }} />}
            {...props}
        />
        ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
        }));


        const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
            padding: theme.spacing(2),
            borderTop: '0px solid rgba(0, 0, 0, .125)',
            backgroundColor:"white",
            color:"#666",
            }));

//  card 

const Icon = ({icon}:{icon:string}) => {
    switch(icon) {
        case "PhoneIcon" :
            return <PhoneIcon sx={{color:"white",backgroundColor:"#e74c3c",p:"8px",width:"40px",height:"40px",borderRadius:"50%"}}/>;
        case "FmdGoodIcon" :
            return <FmdGoodIcon sx={{color:"white",backgroundColor:"#e74c3c",p:"8px",width:"40px",height:"40px",borderRadius:"50%"}}/>
        case "AccessTimeIcon" :
            return <AccessTimeIcon sx={{color:"white",backgroundColor:"#e74c3c",p:"8px",width:"40px",height:"40px",borderRadius:"50%"}}/>
        case "EmailIcon" :
            return <EmailIcon sx={{color:"white",backgroundColor:"#e74c3c",p:"8px",width:"40px",height:"40px",borderRadius:"50%"}}/>
    }
}

type CardType  ={
    icon :string,
    title:string,
    des : string,
}
const ALL_CARD : CardType[] =[   
    {
        icon: "PhoneIcon",
        title :"Phone Number",
        des : "+123-456-7980"
    },
    {
        icon: "FmdGoodIcon",
        title :"Our Address",
        des : "mumbai, india - 400104"
    },
    {
        icon: "AccessTimeIcon",
        title :"Opening Hours",
        des : "00:09 am to 00:10px"
    },
    {
        icon: "EmailIcon",
        title :"Email Address",
        des : "exampel@gmail.com"
    }
]

function Card ({icon,title,des}:CardType) {
    return (
        <Box sx={{m:"8px",display:"flex",flexDirection:"column",backgroundColor:"white",justifyContent:"center",alignItems:"center",p:"10px",height:"130px"}}>
            <Icon icon={icon}/>
            <Typography sx={{m:"10px 0",fontSize:"15px",color:"#333"}}>{title}</Typography>
            <Typography sx={{m:"0 0 5px 0",fontSize:"8px",color:"#666"}}>{des}</Typography>
        </Box>
    );
}



const Faq = () => {
    const theme = useTheme();
    const [activeAcc,setActiveAcc] = useState<number>(1);
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Box className="container">
                <PageTitle>faq</PageTitle> 
                <div style={{backgroundColor:"#f5f5f5",margin:"25px 0"}}>
                    <Accordion style={{backgroundColor:"transparent"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                    onClick={()=>{
                        if(activeAcc !== 1) setActiveAcc(1);
                        else setActiveAcc(0)
                    }} >
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                        sx={{backgroundColor:`${activeAcc === 1 ? theme.palette.primary.light : "#333"}`,color:"white",m:"10px 0 0 0"}}>
                        <Typography >how does it work?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{backgroundColor:"transparent"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')} onClick={()=>{
                        if(activeAcc !== 2) setActiveAcc(2);
                        else setActiveAcc(0)
                    }}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"
                        sx={{backgroundColor:`${activeAcc === 2 ? theme.palette.primary.light : "#333"}`,color:"white",m:"10px 0 0 0"}}>
                        <Typography>how long does it take for delivery?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{backgroundColor:"transparent"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')} onClick={()=>{
                        if(activeAcc !== 3) setActiveAcc(3);
                        else setActiveAcc(0)
                    }}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"
                        sx={{backgroundColor:`${activeAcc === 3 ? theme.palette.primary.light : "#333"}`,color:"white",m:"10px 0 0 0"}}>
                        <Typography>can I order for huge parties?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{backgroundColor:"transparent"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')} onClick={()=>{
                        if(activeAcc !== 4) setActiveAcc(4);
                        else setActiveAcc(0)
                    }}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header"
                        sx={{backgroundColor:`${activeAcc === 4 ? theme.palette.primary.light : "#333"}`,color:"white",m:"10px 0 0 0"}}>
                        <Typography>how much protein it contains?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.    Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{backgroundColor:"transparent"}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')} onClick={()=>{
                        if(activeAcc !== 5) setActiveAcc(5);
                        else setActiveAcc(0)
                    }}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header"
                        sx={{backgroundColor:`${activeAcc === 5? theme.palette.primary.light : "#333"}`,color:"white",m:"10px 0 0 0"}}>
                        <Typography>is it cooked with oil?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas. Quidem minima veniam accusantium maxime, doloremque iusto deleniti veritatis quos.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <Grid container sx={{m:"30px 0"}} >
                    {ALL_CARD.map((card,index)=>(
                        <Grid xs={12} sm={6} md={4} lg={3}  key={index}>
                            <Card {...card}/>
                        </Grid>
                    ))}
                    
            </Grid>
        </Box>
    )
}

export default Faq