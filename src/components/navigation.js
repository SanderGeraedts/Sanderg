import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

import aboutMe from "../images/about-me.svg"
import blog from "../images/blog.svg"
import contact from "../images/contact.svg"
import portfolio from "../images/portfolio.svg"

import aboutMeActive from "../images/about-me-active.svg"
import blogActive from "../images/blog-active.svg"
import contactActive from "../images/contact-active.svg"
import portfolioActive from "../images/portfolio-active.svg"

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
  color: white;

  &.active &#about {
  }
`

const Navigation = () => {
  const [aboutMeImg, setAboutMeImg] = useState(aboutMe)
  const [blogImg, setBlogImg] = useState(blog)
  const [portfolioImg, setPortfolioImg] = useState(portfolio)
  const [contactImg, setContactImg] = useState(contact)

  const setActiveImage = path => {
    if (window && window.location) {
      const active = window.location.pathname.includes(path)

      switch (path) {
        case "/about-me":
          setAboutMeImg(active ? aboutMeActive : aboutMe)
          break
        case "/posts":
          setBlogImg(active ? blogActive : blog)
          break
        case "/portfolio":
          setPortfolioImg(active ? portfolioActive : portfolio)
          break
        case "/contact":
          setContactImg(active ? contactActive : contact)
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
          <LinkButton
            to="/about-me"
            onMouseEnter={() => setAboutMeImg(aboutMeActive)}
            onMouseLeave={() => setActiveImage("/about-me")}
          >
            <img src={aboutMeImg} alt="Een icoon voor de Over mij pagina" />
            over mij
          </LinkButton>
        </li>
        <li>
          <LinkButton
            to="/posts"
            onMouseEnter={() => setBlogImg(blogActive)}
            onMouseLeave={() => setActiveImage("/posts")}
          >
            <img src={blogImg} alt="Een icoon voor de Blogposts pagina" />
            blog
          </LinkButton>
        </li>
        <li>
          <LinkButton
            to="/portfolio"
            onMouseEnter={() => setPortfolioImg(portfolioActive)}
            onMouseLeave={() => setActiveImage("/portfolio")}
          >
            <img src={portfolioImg} alt="Een icoon voor de portfolio pagina" />
            portfolio
          </LinkButton>
        </li>
        <li>
          <LinkButton
            to="/contact"
            onMouseEnter={() => setContactImg(contactActive)}
            onMouseLeave={() => setActiveImage("/contact")}
          >
            <img src={contactImg} alt="Een icoon voor de Contact pagina" />
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
