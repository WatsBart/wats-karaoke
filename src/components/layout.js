/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { gatsbyLink, header, footer, logo, container, nav, navLinks, navLinkItem, navLinkText, siteTitle, content } from './layout.module.css'
import "./layout.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(url: {eq: "http://watskaraoke.local/wp-content/uploads/2022/12/logo.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  const image = getImage(data.file)
  console.log(children)

  return (
    <>
      <div className="container">
        <nav className={nav}>
          <header className={header}>
            <GatsbyImage 
              className={logo} image={image} 
              objectFit="fill"
            />
            <Link to="/" >
              <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
            </Link>
          </header>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/songs">
                Songs
              </Link>
            </li>
          </ul>
        </nav>
        <main className={content}>{children}</main>
        <footer className={footer}>
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a className={gatsbyLink} href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
