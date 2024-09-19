import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import burger_logo from "../../assets/burger-logo.png";

export default function Header() {
  const cartItemCount = useSelector((state) => state.cart.cart.length);

  return (
    <Navbar fixed="top" style={{ background: "#a37415" }}>
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            <Image width="50" height="50" alt="logo" src={burger_logo} />
            <span style={{ color: "#fcf2de" }}> BonBurgers </span>
          </Navbar.Brand>
        </Link>
        <Col xs={2} md={1} style={{ cursor: "pointer" }}>
          <Link to="/cart">
            <Button variant="warning">
              Cart{" "}
              {cartItemCount ? (
                <Badge bg="success"> {cartItemCount} </Badge>
              ) : null}
            </Button>
          </Link>
        </Col>
      </Container>
    </Navbar>
  );
}
