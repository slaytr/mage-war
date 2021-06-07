import * as React from "react"

import Layout from "../../components/layout"
import BillMiniCard from "../../components/units/billMiniCard"
import MatthewMiniCard from "../../components/units/matthewMiniCard"
import Seo from "../../components/seo"
import GabeMiniCard from "../../components/units/gabeMiniCard"
import JordanMiniCard from "../../components/units/jordanMiniCard"
import RareMiniCard from "../../components/units/rareMiniCard"
import LegendaryMiniCard from "../../components/units/legendaryMiniCard"
import CommonMiniCard from "../../components/units/commonMiniCard"
import EpicMiniCard from "../../components/units/epicMiniCard"

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
      <CommonMiniCard/>
      <RareMiniCard/>
      <EpicMiniCard/>
      <LegendaryMiniCard/>
    </div>
  </Layout>
)

export default UnitPage
