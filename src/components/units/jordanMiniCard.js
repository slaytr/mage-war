import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import JordanMiniCardIcon from "../../images/units/jordan.webp"

const JordanMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = JordanMiniCardIcon;

  return (
    <>
      <MiniCard
        name="Jordan"
        rarity="mythic"
        level={13}
        quantity={4}
        icon={MiniCardIcon}
        element="earth"
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
