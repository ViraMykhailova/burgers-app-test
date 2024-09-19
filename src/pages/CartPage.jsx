import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetCart } from "../store/slices/cartSlice";

import CartItem from "../components/CartItem";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function CartPage() {
  const { cart, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmOrder = () => {
    dispatch(resetCart());
    navigate("/");
  };

  return (
    <Row xs={1} md={2} className="mt-3 align-items-center flex-column text-center">
      {!cart.length ? (
        <>
          <span className="fw-bold"> No items selected...</span>
          <Button
            className="w-25 mt-2"
            onClick={() => {
              navigate("/");
            }}
          >
            Menu
          </Button>
        </>
      ) : (
        <>
          <Col xs={12} md={8} className="text-center">
            <ListGroup className="mb-2">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ListGroup>
          </Col>
          <Col xs={12} md={8} className="text-center fw-bold">
          Total: {total} $
          </Col>
          <Button onClick={confirmOrder} className="w-25 mt-2">Confirm</Button>
        </>
      )}
    </Row>
  );
}
