import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Autocomplete from '@mui/material/Autocomplete';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { makeStyles } from '@mui/styles';
import { useSelector} from 'react-redux';
import {
  Link
} from 'react-router-dom';

const useStyles = makeStyles(() => ({
     topnavbarright : {
       padding: '0 10px,'
     },
     topsearch : {
       width: '100% !important',
     },
     toplogo:{
       minWidth: '180px',
     },
     topsearchbar:{
      width: '100%',
     },
     links : {
       textDecoration: "none",
       color: "white"
     },
     links1 : {
      textDecoration: "none",
      color: "black"
    } 
}));



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));


export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const cartCount = useSelector((state) => state.cart.cartItems.length);

  const products = useSelector((state) => state.products.items);

  const [drawerstate, setDrawerState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({ ...drawerstate, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'About Us', 'Shop By Category', 'Products', 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} /> */}
            {index === 0 && <a className={classes.links1} href="/">

{/* <ListItemIcon>
  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon> */}
<ListItemText primary={text} />

  </a>}

  {index === 1 && <a className={classes.links1} href="/about">

{/* <ListItemIcon>
  {index % 2 === 2 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon> */}
<ListItemText primary={text} />

  </a>}

  {index === 2 && <a className={classes.links1} href="/categorieslist">

{/* <ListItemIcon>
  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon> */}
<ListItemText primary={text} />

  </a>}

  {index === 3 && <a className={classes.links1} href="/productslist">

{/* <ListItemIcon>
  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon> */}
<ListItemText primary={text} />

  </a>}

  {index === 4 && <a className={classes.links1} href="contact">

{/* <ListItemIcon>
  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon> */}
<ListItemText primary={text} />

  </a>}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Privacy Policy', 'Terms & Conditions'].map((text, index) => (
          <ListItem button key={text}>
           {index === 0 && <a className={classes.links1} href="/privacypolicy">

{/* <ListItemIcon>
  {index % 2 === 2 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon> */}
<ListItemText primary={text} />

  </a>}

      {index === 1 && <a className={classes.links1} href="/termsandconditions">

{/* <ListItemIcon>
  {index % 2 === 2 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon> */}
<ListItemText primary={text} />

  </a>}
          </ListItem>
        ))}
      </List>
    </Box>
  );




  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (

    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        
        <Link className={classes.links1} to="/myorders"><MenuItem onClick={handleMenuClose}>My Orders</MenuItem></Link>
        <Link className={classes.links1} to="/changepassword"><MenuItem onClick={handleMenuClose}>Change Password</MenuItem></Link>
        <Link className={classes.links1} to="/logout"><MenuItem onClick={handleMenuClose}>Logout</MenuItem></Link>
      </Menu> 
      
    
    
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    
      
    
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      

      
      
      
      
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonIcon />
        </IconButton>
        <span>My Account</span>
      </MenuItem> */}
      <Link className={classes.links1} to="/myorders">
      <MenuItem>

        <IconButton
          size="large"
          color="inherit"
        >
         
            <BorderColorIcon />
         
        </IconButton>
        <span >My Orders</span>
      </MenuItem>
      </Link>
      <Link className={classes.links1} to="/changepassword">
      <MenuItem>

        <IconButton
          size="large"
          color="inherit"
        >
         
            <PersonIcon />
         
        </IconButton>
        <span >Change Password</span>
      </MenuItem>
      </Link>
      <Link className={classes.links1} to="/logout">
      <MenuItem>

        <IconButton
          size="large"
          color="inherit"
        >
         
            <ExitToAppIcon />
         
        </IconButton>
        <span >Logout</span>
      </MenuItem>
      </Link>
    </Menu>
    
  );


  
  let anchor = "right";
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }} 
            onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
            

            
          
          </IconButton>
          {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Drawer
            anchor={anchor}
            open={drawerstate[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
          <Typography className={classes.toplogo}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MYGROCSTORE
          </Typography>
          <Search className={classes.topsearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Autocomplete
            open={open}
            onOpen={() => {
              if (inputValue) {
                setOpen(true);
              }
            }}
            onClose={() => setOpen(false)}
            inputValue={inputValue}
      onInputChange={(e, value, reason) => {
        setInputValue(value);

        if (!value) {
          setOpen(false);
        }
      }}
      id="combo-box"
      options={products}
      getOptionLabel={(option) => option.productName+" - Rs. "+option.productRsp+" - "+option.productDesc }
      style={{ width: '100%', maxHeight: '15rem' }}
      ListboxProps={{ style: { maxHeight: 200, overflow: 'auto' } }}
      onChange={(event, newValue) => {
          // window.location.href = "/products/"+newValue._id      
          window.open("/products/"+newValue._id , '_blank');
      }}
         
      renderInput={(params) => {
        
        const {InputLabelProps,InputProps,...rest} = params;
        return <StyledInputBase  {...params.InputProps} {...rest}  />}
      }
      
        
    />
            {/* <StyledInputBase className={classes.topsearchbar} placeholder="Search…" inputProps={{ 'aria-label': 'search' }} /> */}
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
              size="small"
              aria-label=""
              color="inherit"
            >
              <Badge color="error">
                <FavoriteIcon />
                
              </Badge>
              &nbsp;
              <span className={classes.topnavbarright} >Wishlist</span>
            </IconButton>
            &nbsp;
            <Link className={classes.links} to="/orders">
            <IconButton
              size="small"
              aria-label=""
              color="inherit"
            >
              <Badge color="error" badgeContent={cartCount}>
                <LocalMallIcon />
                
              </Badge>
              &nbsp;
              <span className={classes.topnavbarright} >Cart</span>
            </IconButton>
            </Link>
            &nbsp;&nbsp;
            {
              userInfo ?  <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
              &nbsp;
              <span className={classes.topnavbarright} >Account</span>
            </IconButton> : <Link className={classes.links} to="/signin"><IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <LoginOutlinedIcon />
              &nbsp;
              <span style={{paddingRight: '10px'}} className={classes.topnavbarright} >SignIn</span>
            </IconButton></Link>
            }
           
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          
          <IconButton
              size="small"
              aria-label=""
              color="inherit"
            >
              <Badge color="error" badgeContent={cartCount}>
                <LocalMallIcon />
              </Badge>
              
            </IconButton>
            &nbsp;&nbsp; 
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
              
            </IconButton>
            &nbsp;&nbsp;
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
