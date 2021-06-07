import * as React from "react"

import Layout from "../../components/layout"
import Card from "../../components/units/card"
import BillMiniCard from "../../components/units/billMiniCard"
import MatthewMiniCard from "../../components/units/matthewMiniCard"
import Seo from "../../components/seo"
import GabeMiniCard from "../../components/units/gabeMiniCard"
import JordanMiniCard from "../../components/units/jordanMiniCard"

const UnitPage = () => (
  <Layout view="units">
    <Seo title="Units"/>
    <div className="flex flex-row justify-between">
      <BillMiniCard />
      <MatthewMiniCard/>
      <GabeMiniCard />
      <JordanMiniCard/>
    </div>
    <div className="flex flex-row justify-between mt-2">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </Layout>
)

export default UnitPage
