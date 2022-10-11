import Product from "../../components/Product/Product";
import prods from "../../data/products.json";
import { useState } from "react";
import { Dashboard } from "./styles";
import InfoModal from "../../components/Product/InfoProduct/InfoModal";

const Home = () => {
  const [products, setProducts] = useState(prods.products);
  const [modal, setModal] = useState(false);
  const [productShow, setProductShow] = useState({})

  const handleModal = (product) => {
    if(!modal) {setProductShow(product)}
    setModal(!modal);
  };

  return (
    <>
      <Dashboard>
        {products.map((prod, index) => (
          <Product
            img={prod.img}
            name={prod.name}
            price={prod.price}
            handleModal={handleModal}
            ind={index}
          />
        ))}
      </Dashboard>
      {modal ? <InfoModal product={productShow} handleModal={handleModal} /> : null}
    </>
  );
};

export default Home;
