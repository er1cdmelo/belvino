import { Msg } from "./styles"

const Message = ({msg, color}) => {

  console.log(color)

  return (
    <Msg color={color}>
        <h3>{msg}</h3>
    </Msg>
  )
}

export default Message