import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { featuredSong, songInfo, songImage, songTitle, songLanguage, songLink } from './song.module.css'

const Song = ({ song, slug }) => {
    const thumbnail = getImage(song.songMeta.picture.localFile)
    return (
        <div className={featuredSong}>
            <Link to={slug} className={songLink}>
                <GatsbyImage
                    image={thumbnail}
                    className={songImage}
                    alt=""
                />
            </Link>
            <article className={songInfo}>
                <h3 className={songTitle}>{song.songMeta.title} - {song.songMeta.singer}</h3>
                <p className={songLanguage}>{song.songMeta.language}</p>
            </article>
        </div>
    )
}

export default Song;