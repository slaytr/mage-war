import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Card from "../../components/card"
import Seo from "../../components/seo"

const UnitPage = () => (
  <Layout>
    <Seo title="Unit" />
    <h1 className="text-gray-50">UNITS</h1>
      <div className="flex flex-row justify-between">
        <Card/>
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
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UnitPage
