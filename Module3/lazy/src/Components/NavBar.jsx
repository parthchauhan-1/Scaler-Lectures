import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/testimonials'>Testimonials</Link>

        </div>
    )
}

export default NavBar
