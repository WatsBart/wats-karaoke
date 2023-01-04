import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from 'react'
import Layout from '../../components/layout'
import { songLink, songlinkList, songlinkImage, songlinkItem, songlinkText, inputLabel, inputField, genreSelector, sorters } from '../../page.module.css'

const SongsPage = ({ data: { allWpSong: { edges } } }) => {
  const [query, setQuery] = React.useState("")
  const [songs, setSongs] = React.useState(edges)
  const allGenres = [];
  edges.forEach(song => {
    song.node.genres.nodes.forEach(genre => {
      if (!allGenres.includes(genre.name)) allGenres.push(genre.name)
    });
  });

  const filterByGenre = (genre) => {
    if (genre === "All") {
      setSongs(edges)
    } else {
      setSongs(edges.filter((song) => song.node.genres.nodes.filter((node) => node.name.toUpperCase() === genre.toUpperCase()).length > 0))
    }
  }

  return (
    <Layout pageTitle="Songs of Wats Karaoke">
      <div className={sorters}>
        <div>
          <label className={inputLabel}>Search songs by title</label><br />
          <input className={inputField} type="text" value={query} onChange={(event) => { setQuery(event.target.value) }} />
        </div>
        <div>
          <label className={inputLabel}>Search songs by genre</label><br />
          <select className={genreSelector} onChange={(event) => filterByGenre(event.target.value)}>
            <option value="" disabled selected>Select a genre</option>
            <option value="All">All</option>
            {allGenres.map((genre) => <option>{genre.toUpperCase()}</option>)}
          </select>
        </div>
      </div>
      <div className={songlinkList}>
        {songs.filter((song) => song.node.songMeta.title.toUpperCase().includes(query.toUpperCase())).map((song) => {
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
        <div />
        <div />
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
        genres {
          nodes {
            name
          }
        }
      }
    }
  }
}
`

export default SongsPage