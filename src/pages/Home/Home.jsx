import Product from '../../components/Product/Product'
import prods from '../../data/products.json'
import { useState } from 'react'
import { Dashboard } from './styles'

const Home = () => {

  const [products, setProducts] = useState(prods.products)
  

  return (
    <Dashboard>
      {products.map((prod, index) => (
        <Product img={prod.img} name={prod.name} price={prod.price} ind={index} />
      ))}
    </Dashboard>
  )
}

export default Home