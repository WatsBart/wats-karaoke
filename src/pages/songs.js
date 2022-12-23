import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const SongsPage = ({data: {allWpSong: {edges}}}) => {
    return(
        <Layout pageTitle="Songs of Wats Karaoke">
            {edges.map((song) => {
                const songData = song.node.songMeta;
                return <p key={song.node.id}>{songData.title} - {songData.singer}</p>
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
        }
      }
    }
  }  
`

export default SongsPage