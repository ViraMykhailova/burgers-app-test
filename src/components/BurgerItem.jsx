import React, { useState } from "react";
import BurgerModal from "./BurgerModal";
import { useDispatch } from "react-redux";

import { addItem } from "../store/slices/cartSlice";

import { toast, Bounce } from "react-toastify";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import burger_img_1 from "../assets/burger-1.png";
import burger_img_2 from "../assets/burger-2.png";
import burger_img_3 from "../assets/burger-3.png";
import burger_img_4 from "../assets/burger-4.png";
import burger_img_5 from "../assets/burger-5.png";
import burger_img_6 from "../assets/burger-6.png";
import burger_img_7 from "../assets/burger-7.png";

export default function BurgerItem({ burger }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const addToCart = (event) => {
    event.stopPropagation();
    dispatch(addItem(burger));

    toast.success(`${burger.name} added!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  };

  function getBurgerImg() {
    const burgerImgs = [
      burger_img_1,
      burger_img_2,
      burger_img_3,
      burger_img_4,
      burger_img_5,
      burger_img_6,
      burger_img_7,
    ];

    const imageIndex = Math.floor(Math.random() * burgerImgs.length);

    return burgerImgs[imageIndex];
  }

  return (
    <>
      <Col xs={12} md={6} lg={4}>
        <Card
          style={{ cursor: "pointer", background: "#fcf2de" }}
          className="my-3"
          onClick={() => setShowModal(true)}
        >
          <Card.Img variant="top" src={getBurgerImg()}/>
          <Card.Body>
            <Card.Title>{burger.name}</Card.Title>
            <Card.Text style={{whiteSpace:"nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{burger.description}</Card.Text>
            <Card.Text>
              Cost:
              <span className="fw-bold"> {burger.burgerPrice} </span>
              {burger.currency}
            </Card.Text>
            <Button onClick={addToCart}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>

      <BurgerModal
        burger={burger}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}
