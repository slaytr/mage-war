import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ComponentsPage = () => (
  <Layout>
    <Seo title="Components"/>
    <h1>Components Page</h1>
    <Link to="/components/unit">Unit</Link>
  </Layout>
)

export default ComponentsPage

