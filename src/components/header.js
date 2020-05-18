import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

import Wrapper from "./wrapper"

const Header = styled.header`
  background: #20232a;
  margin: 0;
`
const Title = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 42px;
  line-height: 60px;

  span {
    color: #ff7e06;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default ({ siteTitle }) => (
  <Header>
    <Wrapper>
      <h1>
        <Title to="/">
          {siteTitle}
          <span>.</span>nl
        </Title>
      </h1>
    </Wrapper>
  </Header>
)
