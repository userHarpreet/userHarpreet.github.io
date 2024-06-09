import React from "react"

import { Container, Layout, SEO } from "../components/common"

const NotFoundPage = () => (
  <Layout>
    <Container>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>OOPS! You just hit a page that doesn&#39;t exist...</p>
    </Container>
  </Layout>
)

export default NotFoundPage
