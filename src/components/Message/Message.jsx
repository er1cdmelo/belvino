import { Msg } from "./styles"

const Message = ({msg, color}) => {

  return (
    <Msg color={color}>
        <h3>{msg}</h3>
    </Msg>
  )
}

export default Message