import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import '../../components/globalstyle.css'
import { embeddedVideo, descriptionBox, songPage, videoColumn, lyricsColumn, associatedMedia, learnProgress, progressBar, genres } from '../../page.module.css'

const SongPage = ({ data: { wpSong } }) => {
  const songData = wpSong.songMeta
  return (
    <Layout pageTitle="Song Template">
      <div className={songPage}>
        <div className={videoColumn}>
          <iframe className={embeddedVideo} src={songData.youtubeUrl} title={songData.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h1>{songData.title} - {songData.singer} {songData.cover === null ? "[Original]" : "[Cover]"}</h1>
          <fieldset className={descriptionBox}>
            <legend>Description</legend>
            <div className={genres}>
              <div>Genres:</div>
              {wpSong.genres.nodes.map((genre) => <div>{genre.name}</div>)}
              <br />
            </div>
            <div dangerouslySetInnerHTML={{ __html: songData.description }} />
          </fieldset>
          {
            <div className={associatedMedia}>
              From:<br />
              {songData.associatedMedia === null ? <p>N/A</p> : <p>{songData.associatedMedia}</p>}
            </div>
          }
          <fieldset className={learnProgress}>
            <legend>
              Learn progress
            </legend>
            <div>
              {songData.learnProgress}
            </div>
            <div className={progressBar}>
              {songData.learnProgress === "New" && <div><div /></div>}
              {songData.learnProgress === "Tried Once" && <div><div /><div /></div>}
              {songData.learnProgress === "Learning" && <div><div /><div /><div /></div>}
              {songData.learnProgress === "Learned" && <div><div /><div /><div /><div /></div>}
              {songData.learnProgress === "Fully Known" && <div><div /><div /><div /><div /><div /></div>}
            </div>
          </fieldset>
        </div>
        <div className={lyricsColumn}>
          {songData.lyrics}
        </div>
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
    genres {
      nodes {
        name
      }
    }
  }
}
`

export default SongPage