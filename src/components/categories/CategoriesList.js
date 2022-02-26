import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const CategoriesList = () => {

    const categories = useSelector(state => state.categories.items);
 
    return (
      <>
        <Grid container>
            <Grid container item pt={2} pb={2} pl={2} pr={2} xs={12} md={12}>
            <Grid container>
              {!categories ? <div>Loading</div> :
                categories.map(category => (
                  <Grid key={category._id} item pb={2} pr={1} xs={6} md={3}>
                       <a style={{textDecoration: "none"}} href={"/productslist/"+category.categoryName}><Card sx={{ maxWidth: 345 }} >
      <CardHeader avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          MGS
        </Avatar>
      }
      
      title={category.categoryName}
      
    />
    <CardMedia
      component="img"
      height="194"
      image={category.categoryImage}
      alt={category.categoryName}
      key= {category._id}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      
        <span>{category.categoryDesc}</span>
      </Typography>
    </CardContent>
    
  </Card></a>
                  </Grid>
              ))
              
              }
                
                
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}


export default CategoriesList;