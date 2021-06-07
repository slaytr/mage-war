import * as React from "react"
import PropTypes from "prop-types"
import colors from "tailwindcss/colors"

const QuantityBar = ({ level, quantity, rarity }) => {

  const maxQuantityPerLevel = {
    common : {
      1: 1,
      2: 2,
      3: 4,
      4: 10,
      5: 20,
      6: 50,
      7: 100,
      8: 200,
      9: 400,
      10: 800,
      11: 1000,
      12: 2000,
      13: 5000,
    },
    rare: {
      3: 1,
      4: 2,
      5: 4,
      6: 10,
      7: 20,
      8: 50,
      9: 100,
      10: 200,
      11: 400,
      12: 800,
      13: 1000,
    },
    epic: {
      6: 1,
      7: 2,
      8: 4,
      9: 10,
      10: 20,
      11: 50,
      12: 100,
      13: 200,
    },
    legendary: {
      9: 1,
      10: 2,
      11: 4,
      12: 10,
      13: 20,
    },
    mythic: {
      11: 2,
      12: 4,
      13: 6,
    }
  }

  const displayMaxQuantity = maxQuantityPerLevel[rarity][level]
  const displayPercentage = quantity ? (quantity/displayMaxQuantity) * 100 : 0

  return (
    <div id="minicard__quantity-bar" className="rounded-md" style={{
    position: "relative",
    width: "100%",
    height: "25%",
    background: colors.trueGray[700],
    padding: "3px"
  }}>
    <div className="rounded-md" style={{
      width: `${displayPercentage}%`,
      height: "100%",
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
      color: colors.trueGray[50],
      lineHeight: "26px",
      fontSize: "12px",
      fontFamily: "Open Sans, Roboto, sans-serif"
    }}>
      {quantity}/{displayMaxQuantity}
    </div>
  </div>
  )
}

QuantityBar.propTypes = {
  level: PropTypes.number,
  quantity: PropTypes.number,
  rarity: PropTypes.string,
}

export default QuantityBar
