import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Song from "../components/song"
import { homepageTitle, homepageDescription, songs, section, featuredSection, homePage, homepageImage, form, formField, formSection } from '../page.module.css'

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
          <p className={homepageDescription}>{homeFields.description}</p>
          <GatsbyImage image={image} className={homepageImage} alt="" />
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
        <section className={formSection}>
          <fieldset className={formField}>
            <legend>Contact</legend>
            <form className={form} name="contact" method="POST" data-netlify="true">
              <label>Your first name:</label>
              <input type="text" name="firstName" required={true} />
              <label>Your last name:</label>
              <input type="text" name="lastName" required={true} />
              <label>Your e-mail:</label>
              <input type="email" name="email" required={true} />
              <label>Subject:</label>
              <input type="text" name="subject" required={true} />
              <label>Your message:</label>
              <textarea name="message" required={true}></textarea>
              <input type="hidden" name="form-name" value="contact" />
              <button type="submit">Send</button>
            </form>
          </fieldset>
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
      description
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
