import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { aboutDescription, aboutTitle } from '../page.module.css'

const AboutPage = ({
  data: {
    wpPage: { aboutUsFields }
  }
}) => {
  return (
    <Layout pagetitle="About Us">
      <div>
        <div className={aboutTitle}>
          <h2>{aboutUsFields.goal}</h2>
        </div>
        <div>
          <div className={aboutDescription}>
            {aboutUsFields.goalDescription}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "about-us"}) {
    aboutUsFields {
      goal
      goalDescription
    }
  }
}
`

export default AboutPage
