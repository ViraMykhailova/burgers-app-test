import React from "react";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Container from "react-bootstrap/Container";

import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      
      <Container style={{marginTop:"90px"}}>
        <Outlet />
      </Container>

      <ToastContainer />
    </>
  );
}
