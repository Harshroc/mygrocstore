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

function Privacy() {
    const classes = useStyles();

    return(
        <Grid container >
        <Grid container direction="column" className={classes.homecontainer}>
          <Grid item>
            <Navbar />
          </Grid>
          <Container maxWidth="mg">
            <h1 style={{textAlign: "center"}}>Privacy & Policy</h1><br/>
            <p style={{margin: "1% 10%"}}>
            <h2>Personal Information</h2>
            MyGrocStore is a trademark of MyGrocStore Private Limited (“Company”), a company incorporated under the Companies Act, 2013 with its registered and corporate office. The domain name mygrocstore.com is owned by the Company.<br/>

            If you are a California resident, the information below also applies to you. Certain terms used in this section have the meanings given to them in the California Consumer Privacy Act of 2018 (“CCPA”).<br/><br/>

            <h2>Snap</h2>
            Customer are advised to read and understand our Privacy Policy carefully, as by accessing the website/app you agree to be bound by the terms and conditions of the Privacy Policy and consent to the collection, storage and use of information relating to you as provided herein.<br/>

            If you do not agree with the terms and conditions of our Privacy Policy, including in relation to the manner of collection or use of your information, please do not use or access the website/app.<br/>

            Our Privacy Policy is incorporated into the Terms and Conditions of Use of the website/app, and is subject to change from time to time without notice. It is strongly recommended that you periodically review our Privacy Policy as posted on the App/Web.<br/><br/>

            <h2>Other Information</h2>
            We may automatically track certain information about you based upon your behavior on the website. We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address, and other information associated with your interaction with the website. We may also share your Mobile IP/Device IP with third party(ies) and to the best of our knowledge, be-life and representations given to us by these third party(ies) this information is not stored.<br/><br/>

            <h2>Links</h2>
            We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address<br/>

            Identifiers (e.g. name, mailing address, email address, phone number, credit/debit card number)
            Characteristics of protected classifications (e.g. gender, age)
            Commercial information (e.g. products or services purchased, purchase history)
            Internet or other electronic network activity (e.g. browse or search history)
            Geo location data (e.g. latitude or longitude)
            Audio, electronic, visual, or similar information (e.g. recording of Guest service calls)
            Inferences drawn from any of the above (e.g. preferences or characteristics)<br/><br/>

            <h2>Third Party Advertisers</h2>
            To protect against the loss, misuse and alteration of the information under its control, the Company has in place appropriate physical, electronic and managerial procedures. For example, the Company servers are accessible only to authorized personnel and your information is shared with employees and authorized personnel on a need to know basis to complete the transaction and to provide the services requested by you. Although the Company endeavour to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using the website, you agree that the Company will have no liability for disclosure of your information due to errors in transmission and/or unauthorized acts of third parties.<br/><br/>

            <h2>Security</h2>
            Please note that the Company will not ask you to share any sensitive data or information via email or telephone. If you receive any such request by email or telephone, please do not respond/divulge any sensitive data or information and forward the information relating to the same to info@mygrocstore.com for necessary action.<br/>

            Performing services, including maintaining or servicing accounts, providing customer service, processing or fulfilling orders and transactions, verifying customer information, processing payments, providing advertising or marketing services, providing analytics services, or providing similar services;
            Auditing related to a current interaction with you and concurrent transactions, including, but not limited to, counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance;
            Short-term, transient use, including, but not limited to, the contextual customization of ads shown as part of the same interaction;
            Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity;
            Debugging to identify and repair errors that impair existing intended functionality;
            Undertaking internal research for technological development and demonstration; and
            Undertaking activities to verify or maintain the quality or safety of a service or device that is owned, manufactured, manufactured for, or controlled by us, and to improve, upgrade, or enhance the service or device that is owned, manufactured, manufactured for, or controlled by us.
            </p>
            </Container>
            <Grid item container>
            <Footer />
          </Grid>
        </Grid>
        </Grid>
    )
}
export default Privacy;