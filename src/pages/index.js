import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage = ({data}) => {
  console.log(data)
  return(
    <Layout>
    
    </Layout>
  )
}

export const query = graphql`
query HomePageQuery {
  wpPage(slug: {eq: "home-page"}) {
    homeFields {
      title
      featuredSongs {
        ... on WpSong {
          id
          slug
          songMeta {
            title
            singer
            language
            picture {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
      fieldGroupName
    }
  }
}
`

export default IndexPage
