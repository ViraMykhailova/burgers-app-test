import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

export default function BurgerModal({ burger, ...props }) {
  return (
    <Modal {...props}>
      <Modal.Header
        closeButton
        style={{ background: "#a37415", color: "#fcf2de" }}
      >
        <Modal.Title>{burger?.restaurant}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#fcf2de" }}>
        <h4>{burger.name}</h4>
        <p>{burger.description}</p>
        <p>Ingridients:</p>
        <ListGroup>
          {burger?.ingredients.map((ingredient) => {
            return (
              <ListGroup.Item key={new Date()}>{ingredient}</ListGroup.Item>
            );
          })}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}
