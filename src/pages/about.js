import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pagetitle="About Us">
      <div>
        <div>
          <h2>CMS Development</h2>
        </div>
        <div>
          <p>
            This website is the product of an assignment for the class "CMS Development" of the 2nd year of the course "Graduaat Programmeren" at "Artesis Plantijn Hogeschool" in Antwerp for the school year of 2022-2023. 
            The assignment consists of creating a showroom of a product of choice using Headless Wordpress, GraphQL & Gatsby. Each 'product' has to have at least 7 attributes as well as a custom taxonomy.
          </p>
          <p>
            This website is a showroom of songs that I sing with friends during karaoke. My name is Bart Wats. I am the only person working on this website.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
