import { Container, createTheme, Grid } from '@mui/material'
import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import pic from "../images/fujifilm.jpg";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Rating from '@mui/material/Rating';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#6f42c1',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  
export default function Product() {
  return (
    <div>
        <h1>My Collections</h1>
        <Container sx={{marginY:5}}>
            <Grid container spacing={6}>
                <Grid item xs={6} md={3} >   
                   <Item>
                    <img className='img-1' src={pic} alt=''/>
                    <h2>Product-1</h2>    
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> <h3>Product description</h3>
                    </Item>
                </Grid>
                <Grid item xs={6} md={3}>
                
                    <Item>
                    <img className='img-1' src={pic} alt=''/>
                    <h2>Product-2</h2> 
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                         <h3>Product description</h3>
                    </Item>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Item>
                    <img className='img-1' src={pic} alt=''/>
                    <h2>Product-3</h2> 
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />  <h3>Product description</h3>
                    </Item>
                </Grid>
                <Grid item xs={6} md={3}>
                
                   <Item>
                    <img className='img-1' src={pic} alt=''/>
                    <h2>Product-4</h2> 
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> <h3>Product description</h3>
                   </Item>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
