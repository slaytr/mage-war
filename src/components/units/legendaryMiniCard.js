import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import LegendaryMiniCardIcon from "../../images/units/bill.webp"

const LegendaryMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = LegendaryMiniCardIcon;

  return (
    <>
      <MiniCard
        name="legendary"
        rarity="legendary"
        level={11}
        quantity={0}
        icon={MiniCardIcon}
        element="water"
      />
    </>
  )
}

LegendaryMiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.string
}

export default LegendaryMiniCard
