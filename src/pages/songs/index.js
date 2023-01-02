import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from 'react'
import Layout from '../../components/layout'
import { songLink, songlinkList, songlinkImage, songlinkItem, songlinkText } from '../../page.module.css'

const SongsPage = ({ data: { allWpSong: { edges } } }) => {
  return (
    <Layout pageTitle="Songs of Wats Karaoke">
      <div className={songlinkList}>
        {edges.map((song) => {
          const songData = song.node.songMeta;
          const thumbnail = getImage(songData.picture.localFile)
          return (
            <div className={songlinkItem}>
              <Link className={songLink} key={song.node.id} to={song.node.slug}>
                <GatsbyImage
                  image={thumbnail}
                  alt=""
                  className={songlinkImage}
                  objectFit="scale-down"
                />
                <div className={songlinkText}>
                  {songData.title} - {songData.singer} [{songData.language}]
                </div>
              </Link> <br />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allWpSong {
    edges {
      node {
        songMeta {
          title
          singer
          language
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        slug
        id
      }
    }
  }
}
`

export default SongsPage