import * as React from "react"
import PropTypes from "prop-types"
import colors from "tailwindcss/colors"

import InfoBar from "./infoBar"

import earthIconTransparent from "../../../images/elements/fullsize/earth-static-active-transparent.png"
import fireIconTransparent from "../../../images/elements/fullsize/fire-static-active-transparent.png"
import waterIconTransparent from "../../../images/elements/fullsize/water-static-active-transparent.png"
import windIconTransparent from "../../../images/elements/fullsize/wind-static-active-transparent.png"

const displayElements = {
  earth: {
    icon: earthIconTransparent,
    bg: colors.coolGray[800]
  },
  fire: {
    icon: fireIconTransparent,
    bg: colors.warmGray[800]
  },
  water: {
    icon: waterIconTransparent,
    bg: colors.blue[900]
  },
  wind: {
    icon: windIconTransparent,
    bg: colors.emerald[900]
  }
}

const IconDisplay = ({ level, icon, rarity, element, name}) => {
  return (
    <div style={{
      position: "relative",
      height: "75%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    }}>
      <img
        src={icon}
        alt={`${name} icon`}
        className=" rounded-md w-full h-full"
      />
      <InfoBar
        icon={displayElements[element].icon}
        iconBackground={displayElements[element].bg}
        level={level}
        rarity={rarity}
      />
    </div>)
}

IconDisplay.propTypes = {
  level: PropTypes.number,
  levelBg: PropTypes.number,
  icon: PropTypes.element,
  iconBorderColour: PropTypes.element,
  rarity: PropTypes.string,
  element: PropTypes.string,
  name: PropTypes.string
}

export default IconDisplay
