import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import back from "../g8.svg"

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
margin-left: 2rem;
margin-right: 2rem;
`;

const Link = styled.div`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "80vh" : 0)};
  width: 90vw;
  background: #0B0312;
  text-align: center;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo><img src={back} width={42} height={42} ></img></Logo>
        <Menu>
          <Item>

            <NavLink to='/'>
              Home
            </NavLink>
          </Item>
          <Item>
          
            <NavLink to='/about'>
              About
            </NavLink>
          </Item>

          <Item>
            <NavLink to='/blog'>
              Blog
            </NavLink>
          </Item>

          <Item>
            <NavLink to='/projects'>
              Projects
            </NavLink>
          </Item>

          <Item>
            <NavLink to='/wiki'>
              Wiki
            </NavLink>
          </Item>
          

          <Item>
            <NavLink to='/download' >
              Download
            </NavLink>
          </Item>

        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
        <Item>
            <NavLink to='/' onClick={() => toggleNav(!toggle)}>
              Home
            </NavLink>
          </Item>
          <Item>
          
            <NavLink to='/about' onClick={() => toggleNav(!toggle)}>
              About
            </NavLink>
          </Item>

          <Item>
            <NavLink to='/blog' onClick={() => toggleNav(!toggle)}>
              Blog
            </NavLink>
          </Item>

          <Item>
            <NavLink to='/projects' onClick={() => toggleNav(!toggle)}>
              Projects
            </NavLink>
          </Item>
          <Item>
            <NavLink to='/wiki' onClick={() => toggleNav(!toggle)}>
              Wiki
            </NavLink>
          </Item>
          <Item>
            <NavLink to='/download' onClick={() => toggleNav(!toggle)}>
              Download
            </NavLink>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
