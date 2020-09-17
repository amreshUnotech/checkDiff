import { Button } from '@material-ui/core'
import React, { useState } from 'react'
// import jwt from 'jsonwebtoken'
import { callApi } from '../../utils/api'
// import { TextField } from '@material-ui/core'
// import { decideToken } from './_decide'
// import Button from '@material-ui/core/Button';
// import validator from 'validator'
import { getAuthToken } from '../../utils/auth'

export default function SignUpQRRegister(props) {
    //   const [value, setValue] = React.useState('')
    const [img, setImg] = useState('')
    //   const [token, setToken] = React.useState('')
    //   const type = React.useState(props.match.params.id)
    //   const body = type[0] === 'cymmetri' ? 'totpAuthentication' : 'googleAuthentication'
    //   const [saving, setSaving] = React.useState(false)
    //   const [errors, _setErrors] = React.useState({})


    const handleDeviceInfoApi = ()=>{
        // let count = 0;
        let fetchDeviceInfo = setInterval(()=>{
            callApi('/mfasrvc/pushAuthentication/checkDeviceResponse','post',{})
                    .then(res=>{
                      console.log(res)
                        //   if(res.data.deviceInfo){
                //         clearInterval(fetchDeviceInfo)
                //   }
                    })
                    // count++
                    
          },10000)
        //   console.log(count)
        //   if(count === 6) {
        //       clearInterval(fetchDeviceInfo)
        //   }
    }

    const getQRCode = async () => {
        const token = getAuthToken()
        console.log(token)
        // callApi(`/mfasrvc/${body}/generateQrCode`, 'POST', {}, token)
        //   .then(e => {
        //     if (e.success) setToken(e.data.totpSecretQrCode)
        //   })
        // callApi('/mfasrvc/pushAuthentication/generateQrCode','post',{})

        //         .then(res=>{
        //           setImg(res.data)
        //           handleDeviceInfoApi()
                
        //         })

        handleDeviceInfoApi()
      }

      React.useEffect(() => { getQRCode() }, [])

    //   const change = val => {
    //     setValue(val)
    //     console.log(val)
    //   }

    // const change = e => {setNewOtp({ ...newOtp, ...e })
    //   console.log(e.Otp)
    // }

    //   const setError = e => _setErrors({ ...errors, ...e })

    //   const checkOtp = () => setError({ Otp: validator.isNumeric(value) ? null : 'OTP is Invalid' })

    //   const isValid = value && !errors.Otp

    //   const checkTOTP = async () => {
    //     setSaving(true)
    //     const token = getAuthToken()
    //     const jwtPayload = jwt.decode(token)

    //     const flow = (jwtPayload.roles.length > 0 && jwtPayload.roles.indexOf('PRE_MFA') >= 0) ? "mfaFlow" : "loginFlow"

    //     return callApi(`/authsrvc/auth/${flow}`, 'POST', { otp: value }, token)
    //       .then(e => {
    //         setSaving(false)
    //         if (e.success) decideToken(props, e.data.token, e.data.refreshToken)
    //       })
    //       .catch(setSaving(false))
    //   }


    //   const onKeyD = (event) => {
    //     if (event.key === 'Enter' && isValid) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //       checkTOTP();
    //     }
    //   }

    return (
        <div style={{ textAlign: 'center', alignItems: 'center' }}>
            <h2 style={{ margin: '0px 0px 10px 0px', }}>Authorize your mobile app</h2>
            <p className="medium_text" style={{ marginBottom: '0px', textAlign: 'center' }}>
                Launch your authenticator application on your mobile,
           scan the below QR code to authorize your device</p>
            <div>
                <img
                    alt="qr code"
                    //   src={img} 
                    style={{
                        width: '240px',
                        height: '240px',
                    }} />
                {/* <p className="medium_text" style={{ marginBottom: '10px' }}>Enter the access code that displayed on your authenticator app.</p>
      <TextField className="text-field" id="bookmark" value={value} type="number"
        onChange={(e) => change(e.target.value)}
        onBlur={checkOtp}
        helperText={errors.Otp}
        error={errors.Otp}
        onKeyDown={(e) => onKeyD(e)}
        // min={0}
        // onChange={(e) => change(e.target.value)}
        variant="outlined" fullWidth placeholder="Enter Access Code" style={{ marginBottom: '20px' }}
         InputProps={{
          startAdornment: (
            <div>
              {/* <InputAdornment position="start">
                <img src={VerifyKey} />
              </InputAdornment>
              <Divider orientation="vertical" flexItem /> */}
                {/* </div>
          ),
        }}  */}
                {/* /> */}

                {/* <Button
        disabled={!isValid || saving }
        onClick={checkTOTP} variant="contained"
        style={{ float: 'right', borderRadius: '8px', }}
        color="primary"
        >{!saving ? 'Verify' : 'Verifying'}</Button> */}
                    <Button
                        style={{ margin: '8px', }}
                        variant="contained" color="primary" onClick={()=>handleDeviceInfoApi()}>Retry</Button>

                {true && <div> <p>Device Info</p>
                    <Button
                        style={{ margin: '8px', }}
                        variant="contained" color="primary">Register</Button>
                    <Button
                        style={{ margin: '8px', }}
                        variant="contained" color="primary">Cancel</Button>
                </div>}
            </div>
        </div>
    )
}