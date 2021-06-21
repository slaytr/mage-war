import React from "react"
import PropTypes from "prop-types"

const AuthContext = React.createContext("unauthorized")

//
// const Authorization = ({ children }) => {
//   return (
//     <AuthContext.Provider>
//       {children}
//     </AuthContext.Provider>
//   )
// }

const Authorization = ({ children }) => {
  return (
    <>
      <AuthContext.Consumer>
        {auth => <div>{auth}</div>}
      </AuthContext.Consumer>
      {children}
    </>
  )
}

Authorization.propTypes = {
  children: PropTypes.node.isRequired
}

export default Authorization