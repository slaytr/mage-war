import * as React from "react"
import { Link } from "gatsby"

import Authorization from "../context/authContext"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
  return (
    <Authorization>
      <Layout>
        <Seo title="Page two"/>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </Authorization>
  )
}

export default SecondPage
