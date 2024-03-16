import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  return (
    <div className="cartWrapper">
      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}
