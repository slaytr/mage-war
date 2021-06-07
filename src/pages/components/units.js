import * as React from "react"

import Layout from "../../components/layout"
import Card from "../../components/card"
import Seo from "../../components/seo"

const UnitPage = () => (
  <Layout view="units">
    <Seo title="Units"/>
    <div className="flex flex-row justify-between">
      <Card />
      <Card/>
      <Card/>
      <Card/>
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
