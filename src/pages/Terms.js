import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
})); 

function Terms() {
    const classes = useStyles();
    return(
        <Grid container >
        <Grid container direction="column" className={classes.homecontainer}>
          <Grid item>
            <Navbar />
          </Grid>
          <Container maxWidth="mg">
            <h1 style={{textAlign: "center"}}>Terms & Condition</h1><br/>
            <p style={{margin: "1% 10%"}}>
            
            <h2>Personal Information</h2>
            As part of the registration process on the Site, IRCPL may collect the following personally identifiable information about you: Name including first and last name, alternate email address, mobile phone number and contact details, Postal code, Demographic profile (like your age, gender, occupation, education, address etc.) and information about the pages on the site you visit/access, the links you click on the site, the number of times you access the page and any such browsing information.<br/><hr/>
            
            <h2>Eligibility</h2>
            Services of the Site would be available to only select geographies in India. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including un-discharged insolvents etc. are not eligible to use the Site. If you are a minor i.e. under the age of 18 years but at least 13 years of age you may use the Site only under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Use. If your age is below 18 years your parents or legal guardians can transact on behalf of you if they are registered users. You are prohibited from purchasing any material which is for adult consumption and the sale of which to minors is prohibited.<br/><hr/>
            
            <h2>License & Site access</h2>
            IRCPL grants you a limited sub-license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of IRCPL. This license does not include any resale or commercial use of this site or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of this site or its contents; any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools. This site or any portion of this site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of IRCPL. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of the Site or of IRCPL and its affiliates without express written consent. You may not use any meta tags or any other "hidden text" utilizing the Site’s or IRCPL’s name or SGSPL’s name or trademarks without the express written consent of IRCPL. Any unauthorized use terminates the permission or license granted by IRCPL.<br/><hr/>
            
            <h2>Account & Registration</h2> 
            ObligationsAll shoppers have to register and login for placing orders on the Site. You have to keep your account and registration details current and correct for communications related to your purchases from the site. By agreeing to the terms and conditions, the shopper agrees to receive promotional communication and newsletters upon registration. The customer can opt out either by unsubscribing in "My Account" or by contacting the customer service.<br/><hr/>
            
            <h2>Pricing</h2>
            All the products listed on the Site will be sold at MRP unless otherwise specified. The prices mentioned at the time of ordering will be the prices charged on the date of the delivery. Although prices of most of the products do not fluctuate on a daily basis but some of the commodities and fresh food prices do change on a daily basis. In case the prices are higher or lower on the date of delivery not additional charges will be collected or refunded as the case may be at the time of the delivery of the order.<br/><hr/>
            
            <h2>Cancellation by Site / Customer</h2>
            You as a customer can cancel your order anytime up to the cut-off time of the slot for which you have placed an order by calling our customer service. In such a case we will refund any payments already made by you for the order. If we suspect any fraudulent transaction by any customer or any transaction which defies the terms & conditions of using the website, we at our sole discretion could cancel such orders. We will maintain a negative list of all fraudulent transactions and customers and would deny access to them or cancel any orders placed by them.<br/><hr/>
            
            <h2>Return & Refunds</h2>
            We have a "no questions asked return and refund policy" which entitles all our members to return the product at the time of delivery if due to some reason they are not satisfied with the quality or freshness of the product. We will take the returned product back with us and issue a credit note for the value of the return products which will be credited to your account on the Site. This can be used to pay your subsequent shopping bills.
            </p>
            </Container>
            <Grid item container>
            <Footer />
          </Grid>
        </Grid>
        </Grid>
    )
}
export default Terms;