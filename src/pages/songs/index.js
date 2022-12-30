import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { songLink, songLinkList } from '../../page.module.css'

const SongsPage = ({ data: { allWpSong: { edges } } }) => {
  return (
    <Layout pageTitle="Songs of Wats Karaoke">
      {edges.map((song) => {
        const songData = song.node.songMeta;
        return (
          <div className={songLinkList}>
            <Link className={songLink} key={song.node.id} to={song.node.slug}>{songData.title} - {songData.singer}</Link> <br />
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allWpSong {
    edges {
      node {
        id
        songMeta {
          title
          singer
          }
        slug
      }
    }
  }
}  
`

export default SongsPage