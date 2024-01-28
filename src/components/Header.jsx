import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <h1>Header</h1>
            <ul>
                <Link to="/">Inicio</Link><br />
                <Link to="/products">Productos</Link><br />
                <Link to="/categories">Categorías</Link><br />
                <Link to="/contact-us">Contáctanos</Link><br />
            </ul>
        </div>
    )
}

export { Header };