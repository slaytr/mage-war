import * as React from "react"
import PropTypes from "prop-types"

import "../layout.css"
import colors from "tailwindcss/colors"

const Card = ({ children }) => {

  return (
    <>
      <div className="text-gray-50 rounded-md"
           style={{
             width: "80px",
             height: "100px",
             display: `flex`,
             justifyContent: `center`,
             alignItems: `center`,
             flexDirection: `column`,
             background: "linear-gradient(to left, #743ad5, #d53a9d)",
             padding: "2px"
           }}
      >
        <div style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(to left, #743ad5, #d53a9d)",
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          flexDirection: `column`
        }}>
          <div style={{
            height: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: colors.violet[900],
            width: "100%"
          }}>
            <i className="fas fa-user" style={{
              fontSize: "60px",
              colors: colors.trueGray[700]
            }}/>
          </div>
          <div className="rounded-b-md" style={{
            position: "relative",
            width: "100%",
            height: "25%",
            background: colors.trueGray[700],
            padding: "3px"
          }}>
            <div className="rounded-md" style={{
              width: "66%",
              height: "100%",
              // background: "linear-gradient(to left, #00C853, #B2FF59)",
              background: "linear-gradient(to top, #04B9FB, #358BCA)",
              textAlign: "center"
            }}/>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              display: "flex",
              width: "74px",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              color: colors.trueGray[50],
              fontWeight: 500,
              fontFamily: "Open Sans, Roboto, sans-serif"
            }}>
              100/150
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card
