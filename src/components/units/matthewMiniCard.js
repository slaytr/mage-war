import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import MatthewMiniCardIcon from "../../images/units/matthew.webp"

const MatthewMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = MatthewMiniCardIcon;

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

MatthewMiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.string
}

export default MatthewMiniCard
