import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import GabeMiniCardIcon from "../../images/units/gabe.webp"

const GabeMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = GabeMiniCardIcon;

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

GabeMiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.string
}

export default GabeMiniCard
