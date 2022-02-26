import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { captureUserDetails } from '../../redux-modules/billing/userBillingAction';


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  stepperWrapper : {
      width: "100%",
      paddingTop: "25px"
  }
}));

function getSteps() {
  return [
    "Delivery Address",
    "Delivery Schedule",
    "Contact Number",
    "Payment",
  ];
}



const AddressInfo = () => {
const {control} = useFormContext();
 return  (<>
 <Controller 
 control={control} 
 name="addressType"
 render={({field})=> (
 <TextField
 required
   id="addressType"
   label="Address Type"
   variant="outlined"
   placeholder="Enter Address Type (Ex. Work, Home, etc)"
   fullWidth
   margin="normal"
   {...field}
 />

 )} />


<Controller 
 control={control} 
 name="address"
 render={({field})=> (
<TextField
    id="address"
    label="Address"    
    multiline
    fullWidth
    rows={4}          
    required
    placeholder="Enter your Address"
    {...field}
   />

 )} />
 
 <Controller 
 control={control} 
 name="addressCity"
 render={({field})=> (
<TextField
   id="addressCity"
   label="City"
   variant="outlined"
   placeholder="Enter Your City"
   fullWidth
   margin="normal"   
   required
   {...field}
 />

 )} />

<Controller 
 control={control} 
 name="addressPincode"
 render={({field})=> (
<TextField
   id="addressPincode"
   label="Pincode"
   variant="outlined"
   placeholder="Enter Your Area Pincode"
   fullWidth
   margin="normal"
   required
   type="number"
   {...field}
 />

 )} />
 
 
</>)
}

const DeliveryInfo = () => {
    const {control} = useFormContext();
    return (<>
    <span style={{fontWeight: "bolder"}}>Select Delivery Time</span>
    <Controller 
 control={control} 
 name="deliveryTime"
 render={({field})=> (
<TextField
        id="deliveryTime"
        variant="outlined"
        placeholder="Select Delivery TIme"
        fullWidth
        margin="normal"
        type="datetime-local"
        inputProps={{
          min: `${new Date().toISOString().substr(0, 16)}`
        }}
        required
        {...field}
      />  

 )} />
    
    </>
    )}

const ContactInfo = () => {
    const {control} = useFormContext();
    return (<>
    <Controller 
 control={control} 
 name="phoneNo"
 render={({field})=> (
<TextField
      id="phoneNo"
      label="Phone Number"
      variant="outlined"
      placeholder="Enter Phone Number"
      fullWidth
      inputProps={{
        pattern: "\\d*"
      }}
      margin="normal"
      type="number"
      required
      onInput={(e) => { e.target.value = e.target.value.slice(0, 10);  } }
      {...field}
    />
          
    

 )} />
    
  </>)
}

const PaymentInfo = () => {
    const {control} = useFormContext();
   return  (<>
   <div style={{paddingBottom:"10px"}}>
    <div style={{fontWeight: "bolder", paddingBottom: "10px"}}>Payment Type</div>
    <Controller 
 control={control} 
 name="payment"
 render={({field})=> (
  <TextField
  id="payment"
  label="Payment Method"
  variant="outlined"
  fullWidth
  margin="normal"
  required
  InputProps={{
    readOnly: true,
  }}
  {...field}
/>

 )} />
 </div>     
    </>)
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressInfo />;
    case 1:
      return <DeliveryInfo />;
    case 2:
      return <ContactInfo />;
    case 3:
      return <PaymentInfo />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  
  const classes = useStyles();
  const steps = getSteps();
  const userDetails = useSelector((state) => { if(state.billing) {
    return state.billing.userdetails
  }} );
  const dispatcher = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  

  const methods = useForm({
      defaultValues: {
        addressType: userDetails ? userDetails.addressType : "",
        address: userDetails ? userDetails.address : "",
        addressCity:userDetails ? userDetails.addressCity : "",
        addressPincode: userDetails ? userDetails.addressPincode : "",
        deliveryTime: userDetails ? userDetails.deliveryTime : "",
        phoneNo:userDetails ? userDetails.phoneNo : "",
        payment:"Cash On Delivery",
      }
  });

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNext = (data) => {
    if(data.phoneNo < 0 ||  data.phoneNo.length < 10)
    {
      alert("Please enter correct contact number");
      return false;
    }

      if(activeStep === steps.length - 1){
        setActiveStep(activeStep + 1);
        dispatcher(captureUserDetails(data));
      }
      else {
        setActiveStep(activeStep + 1);
      }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  return (
    <div className={classes.stepperWrapper}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography pt={3} variant="h4" align="center">
          Details Processed. Please proceed and click "Order Now"
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleReset}
          >Enter Details Again</Button>
        </Typography>

        
        
      ) : (
        <>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>{getStepContent(activeStep)}
            <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          
          
            
            <Button
            className={classes.button}
            variant="contained"
            color="primary"
            // onClick={handleNext}
            type="submit">{activeStep === steps.length - 1 ?  "Finish" : "Next" }
            </Button>
            
        </form>
        </FormProvider>
          
          
        </>
      )}
    </div>
  );
};

export default LinaerStepper;