import { useEffect, useState } from "react"
import axios from "axios";

export default function Products() {
    // let items = []
    let [ products, setProducts ] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => { 
                setProducts(res.data); 
                // console.log(res.data)
                console.log(products);
            })

    }, [])
    return (
        <div className="productsWrapper">
            {products.map((product) => {
                return <div key={product.id} className="card">
                    <img src={product.image} />
                    <h6>{product.title}</h6>
                    <h5>{product.price}</h5>
                </div>
            })}

        </div>
    )
}