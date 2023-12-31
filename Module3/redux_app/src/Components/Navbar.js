import { Link } from "react-router-dom"
export default function Navbar() {

    return (
        <div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <span className="logo">Redux Store</span>
                <div>
                    <Link className="navLink" to="/">Home</Link>
                    <Link className="navLink" to="/cart">Cart</Link>
                    <span className="cartCount">Cart Items: 0</span>
                </div>
            </div>
        </div>
    )
}