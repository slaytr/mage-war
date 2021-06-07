import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import CommonMiniCardIcon from "../../images/units/bill.webp"

const CommonMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = CommonMiniCardIcon;

  return (
    <>
      <MiniCard
        name="common"
        rarity="common"
        level={11}
        quantity={0}
        icon={MiniCardIcon}
        element="water"
      />
    </>
  )
}

CommonMiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.string
}

export default CommonMiniCard
