import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'

const SongsPage = ({ data: { allWpSong: { edges } } }) => {
  return (
    <Layout pageTitle="Songs of Wats Karaoke">
      {edges.map((song) => {
        const songData = song.node.songMeta;
        return (
          <div>
            <Link key={song.node.id} to={song.node.slug}>{songData.title} - {songData.singer}</Link> <br />
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