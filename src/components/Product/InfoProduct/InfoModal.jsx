import { Container, Modal } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/actions/addToCart";
import { message } from "../../../store/actions/message";

const InfoModal = ({ product, handleModal }) => {
  const dispatch = useDispatch();

  return (
    <Container
      id="container"
      onClick={(e) => {
        if (e.target.id === "container") handleModal();
      }}
    >
      <Modal>
        <AiFillCloseCircle onClick={() => handleModal()} />
        <div className="row">
          <div className="img-container">
            <img src={product.img} alt="wine" />
          </div>
          <div className="column">
            <h2 className="name">{product.name}</h2>
            <div className="price">
              $ <h1>{String(product.price.toFixed(2)).replace(".", ",")}</h1>
            </div>
            <button
              className="addButton"
              onClick={() => {
                dispatch(addToCart(product));
                dispatch(message("Added a product to cart", true));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default InfoModal;
