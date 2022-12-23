import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'

const SongPage = ({data: {wpSong: {songMeta: songData}}}) => {
    return(
        <Layout pageTitle="Song Template">
            <div>
                <h3>{songData.singer}</h3>
                <iframe width="999" height="562" src={songData.youtubeUrl} title={songData.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1>{songData.title}</h1>
                <div dangerouslySetInnerHTML={{__html: songData.description}} />
                <p>{songData.cover}</p>
                <p>{songData.language}</p>
                <p>{songData.associatedMedia}</p>
                <p>{songData.learnProgress}</p>
                <p>{songData.lyrics}</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    wpSong(id: {eq: $id}) {
      songMeta {
        associatedMedia
        cover
        description
        language
        learnProgress
        lyrics
        singer
        title
        youtubeUrl
      }
    }
  }
  
`

export default SongPage