import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import RareMiniCardIcon from "../../images/units/bill.webp"

const RareMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = RareMiniCardIcon;

  return (
    <>
      <MiniCard
        name="rare"
        rarity="rare"
        level={11}
        quantity={0}
        icon={MiniCardIcon}
        element="water"
      />
    </>
  )
}

RareMiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.string
}

export default RareMiniCard
