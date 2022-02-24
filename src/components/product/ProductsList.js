import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import Product from '../../components/product/product';



const ProductsList = ({products}) => {

    const cartItems = useSelector((state) => state.cart.cartItems );

    function inCart(item) {
       return item._id === this        
      }
      
    
    return (
            <Grid container>
                
                
                {
                    
                    !products ? <div>Loading</div> :
                    products.map(product => (
                        <Grid key={product._id} item pb={2} pr={1} xs={12} md={3}>
                            {
                                cartItems.find(inCart, product._id) === undefined ? <Product product={product} inCart={0}/> : <Product product={product} inCart={1} />
                            }
                            
                        </Grid>
                    ))
                    
                }
            </Grid>            
            )
};

export default ProductsList;