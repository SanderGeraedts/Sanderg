import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

import AboutMeImg from "../images/about-me.svg"
import BlogImg from "../images/blog.svg"
import ContactImg from "../images/contact.svg"
import PortfolioImg from "../images/portfolio.svg"

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
      width: 100%;
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
  color: #e5e5e5;
  text-align: center;
  transition: color 0.1s ease-in-out;

  &.active#about {
    color: #61dafb;

    svg {
      fill: #61dafb;
    }
  }

  &.active#blog {
    color: #a676d7;

    svg {
      fill: #a676d7;
    }
  }

  &.active#portfolio {
    color: #4fc08d;

    svg {
      fill: #4fc08d;
    }
  }

  &.active#contact {
    color: #dd0031;

    svg {
      fill: #dd0031;
    }
  }

  svg {
    margin: 0 auto;
    transition: all 0.1s ease-in-out;
    fill: #e5e5e5;
  }
`

const Navigation = () => {
  const [aboutMeClass, setAboutMeImg] = useState("")
  const [blogClass, setBlogImg] = useState("")
  const [portfolioClass, setPortfolioImg] = useState("")
  const [contactImg, setContactImg] = useState("")

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
          <LinkButton
            id="about"
            className={aboutMeClass}
            to="/about-me"
            onMouseEnter={() => setAboutMeImg("active")}
            onMouseLeave={() => setActiveImage("/about-me")}
          >
            <AboutMeImg alt="Een icoon voor de Over mij pagina" />
            over mij
          </LinkButton>
        </li>
        <li>
          <LinkButton
            id="blog"
            className={blogClass}
            to="/posts"
            onMouseEnter={() => setBlogImg("active")}
            onMouseLeave={() => setActiveImage("/posts")}
          >
            <BlogImg alt="Een icoon voor de Blogposts pagina" />
            blog
          </LinkButton>
        </li>
        <li>
          <LinkButton
            id="portfolio"
            className={portfolioClass}
            to="/portfolio"
            onMouseEnter={() => setPortfolioImg("active")}
            onMouseLeave={() => setActiveImage("/portfolio")}
          >
            <PortfolioImg alt="Een icoon voor de portfolio pagina" />
            portfolio
          </LinkButton>
        </li>
        <li>
          <LinkButton
            id="contact"
            className={contactImg}
            to="/contact"
            onMouseEnter={() => setContactImg("active")}
            onMouseLeave={() => setActiveImage("/contact")}
          >
            <ContactImg alt="Een icoon voor de Contact pagina" />
            contact
          </LinkButton>
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation
