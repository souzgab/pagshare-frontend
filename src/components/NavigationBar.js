import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import styled from "styled-components";

import logoSvg from "../assets/SVG/lblLogo.svg";
import profile from "../assets/SVG/gg_profile.svg"

const Styles = styled.div`
  .navbar {
    background-color: #202020;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }

  .btn-primary {
    background: rgba(28, 220, 110, 0.9);
    border-radius: 5px;   
  }
  .btn-secondary {
    background: #424242;
    border-radius: 5px;
    border-style : none;;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Nav.Link>
        <Link to="/">
          <img
            src={logoSvg}
            width="221"
            height="51"
            alt="React Bootstrap logo"
          />
        </Link>
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">
              <Button className = 'btn-primary' sm='lg' variant="success"><img
                  src={profile}
                  width="20"
                  height="20"
                  alt="React Bootstrap logo"
                 /> Acessar sua conta</Button>{' '}
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/cadastro">
                <Button className = 'btn-secondary'  sm='lg' variant="secondary">Criar conta</Button></Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
