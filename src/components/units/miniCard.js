import * as React from "react"
import PropTypes from "prop-types"

import "../layout.css"
import colors from "tailwindcss/colors"

import QuantityBar from "./miniCardComponents/quantityBar"
import IconDisplay from "./miniCardComponents/iconDisplay"


const MiniCard = ({ name, rarity, level, quantity, icon, element, emptyCard = false }) => {
  const miniCardName = name || "default"
  const miniCardRarity = rarity || "common" // common, rare, epic, legendary, mythic
  const miniCardLevel = level || 1
  const miniCardQuantity = quantity || 0
  const miniCardIcon = icon || "default"
  const miniCardElement = element || "fire" // earth, wind, water, fire

  const bgCardColorsByRarity = {
    common : {
      bg: colors.gray[400],
    },
    rare : {
      bg: `linear-gradient(to left, ${colors.blue[500]}, ${colors.blue[700]})`,
    },
    epic : {
      bg: `linear-gradient(to left, ${colors.purple[600]}, ${colors.purple[700]}`,
    },
    legendary : {
      bg: `linear-gradient(to left, ${colors.yellow[500]}, ${colors.amber[600]}`,
    },
    mythic : {
      bg: `linear-gradient(to left, #d53a9d, ${colors.red[700]})`,
    }
  }

  const miniCardBg = bgCardColorsByRarity[rarity].bg

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
             background: miniCardBg,
             padding: "2px",
             margin: "6px"
           }}
      >
        <div style={{
          width: "100%",
          height: "100%",
          background: miniCardBg,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          flexDirection: `column`
        }}>
          <IconDisplay
            level={miniCardLevel}
            icon={miniCardIcon}
            rarity={miniCardRarity}
            element={miniCardElement}
            name={miniCardName}
          />
          <QuantityBar level={miniCardLevel} quantity={miniCardQuantity} rarity={miniCardRarity}/>
        </div>
      </div>
    </>
  )
}

MiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.element,
  element: PropTypes.string
}

export default MiniCard
