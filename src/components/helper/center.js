/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"

const FlexCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Center = ({ children }) => {
  return <FlexCenter>{children}</FlexCenter>
}

Center.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Center
