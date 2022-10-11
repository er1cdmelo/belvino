import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home'
import CartModal from "./components/Navbar/Cart/CartModal/CartModal";
import Message from "./components/Message/Message";
import { connect } from "react-redux"
import { showModal } from "./store/actions/showModal"
import { hideModal } from "./store/actions/hideModal"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { addToCart } from "./store/actions/addToCart";
import { message } from "./store/actions/message"
import { removeCart } from "./store/actions/removeCart";

function App() {

  const cartModal = useSelector(state => state.modalReducer)
  const message = useSelector(state => state.messageReducer)

  const [messagesArray, addMessagesArray] = useState([])

  useEffect(() => {
    if(message.message && messagesArray) {
      let idArray = messagesArray.length
      addMessagesArray([...messagesArray, <Message msg={message.message} color={message.color} />])
      setTimeout(() => {
        addMessagesArray([...messagesArray.splice(idArray)]);
      }, 2000)
    }
  }, [message])

  return (
    <div className="App">
      <Navbar />
      <Home />
      {cartModal ? <CartModal /> : null}
      {messagesArray.length ? (messagesArray.map(m => m)) : null}
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal),
  hideModal: () => dispatch(hideModal),
  addToCart: () => dispatch(addToCart()),
  removeCart: () => dispatch(removeCart()),
  message: () => dispatch(message())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
