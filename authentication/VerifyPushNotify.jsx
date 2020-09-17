import React, { useEffect } from "react";
import { callApi } from "../../utils/api";
import { connect } from 'react-redux';
import { logout } from "./authActions";
import TimerLoader from "./TimerLoader";


const VerifyPushNotify = (props) => {
  // send notification api call
  // start timer every 10 sec check devie response if 404 api call till 60 seconds only.
  // if response 200 then move to mfa flow call mfaflow api with prevToken {}
  // if 401 redirect to login clear token.

  const handleResponseApiCall = () => {
    let count = 0;
    const getResponse = setInterval(() => {
      if (count >= 6) {
        clearInterval(getResponse);
      }else{
        callApi("/authsrvc/pushAuthentication/checkDeviceResponse", "post")
        .then((res) => {
            console.log(res);
            if(res.status===200){
              callApi(`/authsrvc/auth/mfaFlow`, 'POST', {})
              .then(e => {
                if (e.success) {
                  props.history.push('/welcome')
                  clearInterval(getResponse)
                }
              })
            }
            //   clearInterval(getResponse) 
          }).catch(err=>{
            if(err.status === 404 && count>=6){
              props.history.replace('/auth/login')
              props.dispatch(logout())
              clearInterval(getResponse)
            }
          }); 
      }
      
      count++;
    }, 10000);
  };

  useEffect(() => {
    callApi("/mfasrvc/pushAuthentication/sendNotification", "post")
    .then((res) => {
      handleResponseApiCall();
    })
    .catch((err=>{
      handleResponseApiCall();
    }));
  }, []);

  return (
    <div>
      <TimerLoader size={100} />
    </div>
  );
};

export default connect()(VerifyPushNotify);
