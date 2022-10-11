import { Btn } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/actions/addToCart";
import { message } from "../../../store/actions/message";


const AddButton = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(addToCart(product));
        dispatch(message('Added a product to cart', true))
      }}
    >
      <Btn>Add to cart</Btn>
    </div>
  );
};

export default AddButton;
