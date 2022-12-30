import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Song from "../components/song"
import { homepageTitle, homepageDescription, songs, section, featuredSection, homePage, homepageImage } from '../page.module.css'

const IndexPage = ({
  data: {
    wpPage: { homeFields }
  } }) => {
    const image = getImage(homeFields.picture.localFile)
  return (
    <Layout>
      <div className={homePage}>
        <section className={section}>
          <h1 className={homepageTitle}>{homeFields.title}</h1>
          <p className={homepageDescription}>Welcome to Wats Karaoke. Here you can find songs with embedded youtube videos and lyrics so you can sing at your own leisure.</p>
          <GatsbyImage image={image} className={homepageImage}/>
        </section>
        <section className={featuredSection}>
          <h2>Featured Songs</h2>
          <p>Here are some songs to get you started. Click the image to go to the song's page.</p>
          <article className={songs}>
            {homeFields.featuredSongs.map(song => {
              return <Song slug={`songs/${song.slug}`} key={song.id} song={song} />
            })}
          </article>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home-page"}) {
    homeFields {
      title
      fieldGroupName
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
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`

export default IndexPage
