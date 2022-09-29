import { Card } from "./styles";
import AddButton from "./AddCart/AddButton";

const Product = ({ img, name, price, ind }) => {

  const productObj = {
    img: img,
    name: name,
    price: price,
    id: ind
  }

  return (
    <Card key={ind}>
      <img src={img} alt="wine" />
      <h3>
        {name.length > 40 ? name.substr(0, 40)+'...' : name}
      </h3>
      <span>${String(price.toFixed(2)).replace('.', ',')}</span>
      <AddButton product={productObj} />
    </Card>
  );
};

export default Product;
