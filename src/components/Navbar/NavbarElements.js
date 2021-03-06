import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 50px;
  display: list-item;
  justify-content: center;
  font-weight: 500;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 3rem;
  display: flex;
  align-items: center;
  text-decoration: seashell;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    position: static;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: scale(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
