import { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Store/cartSlice";
import { fetchProducts, STATUSES } from "../Store/productSlice";

export default function Products() {
  // let [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { data, status } = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      dispatch(fetchProducts());
    };
    getProducts();
  }, [dispatch]);

  if (status === STATUSES.FETCHING) return <h1>Fetching...</h1>;
  if (status === STATUSES.ERROR) return <h1>Error fetching data 😣</h1>;
  return (
    <div className="productsWrapper">
      {data.map((product) => {
        const alreadyAdded = cart
          .map((cartItem) => cartItem.id)
          .includes(product.id);
        return (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h6>{product.title}</h6>
            <h5>{product.price}</h5>
            {alreadyAdded ? (
              <button
                className="remove-btn"
                onClick={() => dispatch(remove(product.id))}
              >
                Remove from Cart
              </button>
            ) : (
              <button className="btn" onClick={() => dispatch(add(product))}>
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
