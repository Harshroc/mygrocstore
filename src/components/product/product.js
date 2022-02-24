import * as React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { addToCart} from '../../redux-modules/shopping/shoppingActions';

const RecipeReviewCard = ({product, inCart}) => {
    
  const dispatcher = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            MGS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick = {()=> { dispatcher(addToCart(product)) }}>
            {
              inCart === 0 ? <AddShoppingCartIcon  color="success" sx={{ fontSize: 40 }} /> : <ShoppingCartCheckoutIcon  color="warning" sx={{ fontSize: 40 }} />
            }
            

          </IconButton>
        }
        title={ product ? product.productName : null}
        
      />
      <a href={"/product/"+product._id}>
      <CardMedia
        component="img"
        height="194"
        image={product ? product.productImage : null}
        alt={product ? product.productName : null}
        key= {product ? product._id : null}
        sx = {{width: "auto", marginLeft: "auto", marginRight:"auto" }}
      />
      </a>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <span style={{fontSize: "20px", fontWeight: "bold"}}>Price: {product ? product.productRsp : null}/-</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{fontSize: "20px", fontWeight: "bold"}}>MRP: <strike>{product ? product.productMrp : null}</strike></span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        
      </CardActions>
      
    </Card>
  );
}

export default RecipeReviewCard;
