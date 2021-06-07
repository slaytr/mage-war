import * as React from "react"
import PropTypes from "prop-types"
import colors from "tailwindcss/colors"

const bgCardColorsByRarity = {
  common : {
    iconBg: colors.gray[400],
    levelBg: colors.gray[400]
  },
  rare : {
    iconBg: colors.blue[500],
    levelBg: colors.blue[700],
  },
  epic : {
    iconBg: colors.purple[500],
    levelBg: colors.purple[700]
  },
  legendary : {
    iconBg: colors.yellow[500],
    levelBg: colors.amber[600]
  },
  mythic : {
    iconBg: "#d53a9d",
    levelBg: colors.red[700]
  }
}

const InfoBar = ({ icon, iconBackground,  level, rarity }) => {

  const iconBackgroundColour = bgCardColorsByRarity[rarity].iconBg
  const levelBackgroundColour = bgCardColorsByRarity[rarity].levelBg

  return (
    <div style={{
      position: "absolute",
      width: "100%",
      height: "16px",
      background: "linear-gradient(to top, rgba(50, 50, 50, 0.8), rgba(50, 50, 50, 0))",
      bottom: 0,
      display: "flex",
      flexDirection: "row"
    }}>
      <div id="minicard__level" style={{
        fontSize: "12px",
        fontWeight: 500,
        fontFamily: "Open Sans, Roboto, sans-serif",
        padding: "0 4px 0 2px",
        background: levelBackgroundColour,
        borderRadius: "0 3px 0 0",
        borderWidth: 2,
        borderColor: levelBackgroundColour ,
        lineHeight: "14px"
      }}>{level}</div>
      <div id="minicard__element" style={{
        position: "absolute",
        right: "-8px",
        bottom: "-10px",
        width: "20px",
        height: "20px",
        background: iconBackground,
        borderRadius: "99px",
        borderColor: iconBackgroundColour,
        borderWidth: "2px",
        zIndex: 2
      }}>
        <img src={icon} alt=""/>
      </div>
    </div>
  )
}

InfoBar.propTypes = {
  icon: PropTypes.element,
  iconBackground: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
}

export default InfoBar