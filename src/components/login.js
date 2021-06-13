import * as React from "react"
import PropTypes from "prop-types"

import LoginBackground from "../images/login/login-bg.png"
import "./login.css"
import SpookyChest from "./animations/spookyChest"
import { connect } from "react-redux"

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

const LoginPage = () => {

  const handleLogInWithFacebookCallback = (response) => {
    console.log(response)
  }

  return (
    <>
      <div id="login-page-wrapper"
           style={{ background: `url(${LoginBackground}), #203D52` }}
      >
        <section id="login-title-area">
          <div id="login-title-area__content">
            <div className="login-divider"/>
            <div id="login-title">
              <span className="login-title__text-large font-bold mb-2">MAGIX</span>
              <span className="login-title__text-small">Magix is a browser-based mobile game</span>
              <span className="login-title__text-small">created by a retard for retards</span>
            </div>
            <div className="login-divider-reverse"/>
          </div>
        </section>
        <section id="login-content-area">
          <SpookyChest/>
        </section>
        <section id="login-bottom-area">
          <div className="login-divider"/>
          <div id="login-bottom-area__button-container">
            <FacebookLogin
              appId="235184844713468"
              fields="name,email,picture"
              onClick={()=>{console.log("clicked")}}
              callback={handleLogInWithFacebookCallback}
              autoLoad
              render={(renderProps) => (
                <div id="facebook-login-button" onClick={renderProps.onClick}>
                  <i className="fab fa-facebook-f p-4 text-gray-50"/>
                  <div className="pr-4 text-gray-50">Log in with Facebook</div>
                </div>
              )}
            />
            <div id="google-login-button">
              <i className="fab fa-google p-4 text-gray-50"/>
              <div className="pr-4 text-gray-50">Log in with Google</div>
            </div>
          </div>
          <div className="login-divider-reverse"/>
          {/*<ConnectedCounter/>*/}
        </section>
      </div>
    </>
  )
}

export default LoginPage
