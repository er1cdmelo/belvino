import { CartBtn } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../store/actions/showModal";

const Cart = () => {
  const productsList = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  return (
    <CartBtn
      title={
        productsList.length
          ? `Você tem ${productsList.length} itens no seu carrinho`
          : "Seu carrinho está vazio"
      }
      onClick={() => {
        dispatch(showModal);
      }}
    >
      <AiOutlineShoppingCart />
      {productsList.length}
    </CartBtn>
  );
};

export default Cart;
