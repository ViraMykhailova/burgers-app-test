import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseAmount,
  decreaseAmount,
} from "../store/slices/cartSlice";

import BurgerModal from "./BurgerModal";

import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import burger_img_4 from "../assets/burger-4.png";
import trash from "../assets/trash.png";

export default function CartItem({ item }) {
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  return (
    <ListGroup.Item style={{ background: "#fcf2de" }}>
      <Row>
        <Col
          xs={6}
          className="d-flex justify-content-around align-items-center"
        >
          <Image src={burger_img_4} width={50} height={50} />
          <div onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
            {item.name}
          </div>
        </Col>
        <Col
          xs={6}
          className="d-flex justify-content-around align-items-center"
        >
          <Button
            size="sm"
            variant="outline-info"
            onClick={() => dispatch(decreaseAmount(item.id))}
          >
            -
          </Button>
          {item.count}
          <Button
            size="sm"
            variant="outline-info"
            onClick={() => dispatch(increaseAmount(item.id))}
          >
            +
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <Image src={trash} width={15} height={15} />
          </Button>
        </Col>
      </Row>
      <BurgerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        burger={item}
      />
    </ListGroup.Item>
  );
}
