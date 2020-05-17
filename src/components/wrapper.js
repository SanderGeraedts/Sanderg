import PropTypes from "prop-types"
import React from "react"

import styled from "@emotion/styled"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 20px;
`

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ({ children }) => <Wrapper>{children}</Wrapper>
