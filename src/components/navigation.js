import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

import aboutMe from "../images/about-me.svg"
import blog from "../images/blog.svg"
import contact from "../images/contact.svg"
import portfolio from "../images/portfolio.svg"

const Nav = styled.nav`
  background: #20232a;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100px;

  ul {
      display: flex;
      justify-content: space-evenly;
      margin: 0;
      padding: 0;
      list-style: none;
      height: 100%;

      li {
          width: 100%
          margin: 0;
          padding: 0;
      }
  }
`

const LinkButton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  font-family: "VT323", monospace;
  color: #E5E5E5;

  &.active#about {
    color: #61DAFB;
  }

  &.active#blog {
    color: #A676D7;
  }

  &.active#portfolio {
    color: #4FC08D;
  }

  &.active#contact {
    color: #DD0031;
  }
`

const Navigation = () => {
  const [aboutMeClass, setAboutMeImg] = useState("")
  const [blogClass, setBlogImg] = useState(blog)
  const [portfolioClass, setPortfolioImg] = useState(portfolio)
  const [contactImg, setContactImg] = useState(contact)

  const setActiveImage = path => {
    if (window && window.location) {
      const active = window.location.pathname.includes(path)

      switch (path) {
        case "/about-me":
          setAboutMeImg(active ? "active" : "")
          break
        case "/posts":
          setBlogImg(active ? "active" : "")
          break
        case "/portfolio":
          setPortfolioImg(active ? "active" : "")
          break
        case "/contact":
          setContactImg(active ? "active" : "")
          break
        default:
          break
      }
    }
  }

  useEffect(() => {
    setActiveImage("/about-me")
    setActiveImage("/posts")
    setActiveImage("/portfolio")
    setActiveImage("/contact")
  }, [])

  return (
    <Nav>
      <ul>
        <li>
          <LinkButton id="about" className={aboutMeClass}
            to="/about-me"
            onMouseEnter={() => setAboutMeImg("active")}
            onMouseLeave={() => setActiveImage("/about-me")}
          >
            <img src={aboutMe} alt="Een icoon voor de Over mij pagina" />
            over mij
          </LinkButton>
        </li>
        <li>
          <LinkButton id="blog" className={blogClass}
            to="/posts"
            onMouseEnter={() => setBlogImg("active")}
            onMouseLeave={() => setActiveImage("/posts")}
          >
            <img src={blog} alt="Een icoon voor de Blogposts pagina" />
            blog
          </LinkButton>
        </li>
        <li>
          <LinkButton id="portfolio" className={portfolioClass}
            to="/portfolio"
            onMouseEnter={() => setPortfolioImg("active")}
            onMouseLeave={() => setActiveImage("/portfolio")}
          >
            <img src={portfolio} alt="Een icoon voor de portfolio pagina" />
            portfolio
          </LinkButton>
        </li>
        <li>
          <LinkButton id="contact" className={contactImg}
            to="/contact"
            onMouseEnter={() => setContactImg("active")}
            onMouseLeave={() => setActiveImage("/contact")}
          >
            <img src={contact} alt="Een icoon voor de Contact pagina" />
            contact
          </LinkButton>
        </li>
      </ul>
    </Nav>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
