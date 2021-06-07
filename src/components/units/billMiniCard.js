import * as React from "react"
import PropTypes from "prop-types"

import MiniCard from "./miniCard"
import BillMiniCardIcon from "../../images/units/bill.webp"

const BillMiniCard = ({ name, rarity, level, quantity, icon }) => {

  const MiniCardIcon = BillMiniCardIcon;

  return (
    <>
      <MiniCard
        name="Bill"
        rarity="Mythic"
        level="1"
        quantity="50"
        icon={MiniCardIcon}
      />
    </>
  )
}

BillMiniCard.propTypes = {
  name: PropTypes.string,
  rarity: PropTypes.string,
  level: PropTypes.number,
  quantity: PropTypes.number,
  icon: PropTypes.string
}

export default BillMiniCard
