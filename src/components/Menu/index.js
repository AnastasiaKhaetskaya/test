import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const CustomLink = styled.span`
  color: ${({ isActive }) => (isActive ? '#0066ff' : '#000a1a')};
`

const activeStyle = {
  color: '#0066ff'
}

const Wrapper = styled.div`
  padding: 0 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 50px auto;
  gap: 0 15px;
  justify-content: end;

  place-items: center;
  text-transform: uppercase;

  background-color: #e6f0ff;
`

const NavBar = () => {
  return (
    <Wrapper>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/">
        Home
      </NavLink>

      <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/about">
        About
      </NavLink>

      <NavLink to="/products">
        {({ isActive }) => <CustomLink isActive={isActive}>Products</CustomLink>}
      </NavLink>

      <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'activeClassName' : undefined)}>
        Contacts
      </NavLink>
    </Wrapper>
  )
}

export default NavBar
