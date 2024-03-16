import { useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="cartCard">
      <img src={item.image} alt={item.title} />
      <h5>{item.title}</h5>
      <h5>$ {item.price}</h5>
      <button className="remove-btn" onClick={() => dispatch(remove(item.id))}>
        Remove from Cart
      </button>
    </div>
  );
}

export default CartItem;
