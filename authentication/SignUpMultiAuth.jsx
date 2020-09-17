import React from 'react'
import { Link } from 'react-router-dom';
import LogoNoSpace from '../../assets/img/icons/logo-nospace.svg'


export default function SignUpAuth() {
  return (
    <div>
      <h3 className="mb-2">Setup multifactor authentication</h3>
      <p className="font-small mb-0">Your company requires multifactor authentication to add an additional layer of security when signinng into your account</p>
      <br/>
        <Link to='/auth/signup/auth/cymmetri' style={{ textDecoration: 'none' }}>
          <div className="card mb-4">
          <a href="javascript:void(0);" className="p-4 authication-card">
            <img src={LogoNoSpace} alt="logo" className="mr-3"/>
            <p className="mb-0">Cymmetri Authenticator <br/>
              <span>Enter single-use code from mobile app</span></p>
            </a>
        </div>
        </Link>
      <br />
    </div>
  )
}