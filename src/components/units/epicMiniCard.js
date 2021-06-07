import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import EpicMiniCardIcon from "../../images/units/bill.webp"

const EpicMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = EpicMiniCardIcon;

  return (
    <>
      <MiniCard
        name="epic"
        rarity="epic"
        level={11}
        quantity={0}
        icon={MiniCardIcon}
        element="water"
      />
    </>
  )
}

EpicMiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.string
}

export default EpicMiniCard
