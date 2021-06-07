import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import JordanMiniCardIcon from "../../images/units/jordan.webp"

const JordanMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = JordanMiniCardIcon;

  return (
    <>
      <MiniCard
        name="Blayze"
        rarity="Mythic"
        level="1"
        quantity="50"
        icon={MiniCardIcon}
      />
    </>
  )
}

JordanMiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.string
}

export default JordanMiniCard
