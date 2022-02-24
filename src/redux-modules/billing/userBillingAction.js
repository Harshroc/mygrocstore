import { CAPTURE_USER_DETAILS } from "./userBillingType" 

export const captureUserDetails = (data) => (dispatch) => {
    dispatch({ type: CAPTURE_USER_DETAILS,
    payload:  data
    })
}