import { Container, Modal } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../../store/actions/hideModal";
import { addToCart } from "../../../../store/actions/addToCart";
import { removeCart } from "../../../../store/actions/removeCart";
import { useEffect } from "react";
import { message } from "../../../../store/actions/message";

const CartModal = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);

  return (
    <Container
      id="container"
      onClick={(e) => {
        if (e.target.id === "container") dispatch(hideModal);
      }}
    >
      <Modal>
        <AiFillCloseCircle
          onClick={() => {
            dispatch(hideModal);
          }}
        />
        {products.length ? (
          <ul>
            {products.map((p) => (
              <li>
                <div>
                  <img src={p.img} alt="wine" />
                </div>
                <div className="info">
                  <h3>{p.name}</h3>
                  <div className="quantity">
                    <button
                      onClick={() => {
                        dispatch(removeCart(p.id));
                        dispatch(
                          message("You removed a item from the cart", false)
                        );
                      }}
                    >
                      -
                    </button>
                    <div className="number">{p.quantity}</div>
                    <button
                      onClick={() => {
                        dispatch(addToCart(p));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <span>${p.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <h3 className="empty">Your cart is empty</h3>
        )}
        <span className="subtotal">
          Subtotal{" "}
          <h3>
            $
            {products
              .reduce((old, actual) => old + actual.price * actual.quantity, 0)
              .toFixed(2)
              .replace(".", ",")}
          </h3>
        </span>
      </Modal>
    </Container>
  );
};

export default CartModal;
