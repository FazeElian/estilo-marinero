import { Link } from "react-router-dom";

import { useState } from "react";

// Styles for this component
import "../assets/css/components/Header.css";

// Images - Icons
    // Logo
    import Logo from "../assets/img/Logo.png";

    // Mail Icon
    import MailIcon from "../assets/img/icons/Mail.png";

    // Menu Icon
    import MenuIcon from "../assets/img/icons/Menu.png";

    // Home Icon
    import HomeIcon from "../assets/img/icons/Home.png";

    // Products Icon
    import ProductsIcon from "../assets/img/icons/Products.png";

    // Categories Icon
    import CategoriesIcon from "../assets/img/icons/Categories.png";

    // Contact Us Icon
    import ContactUsIcon from "../assets/img/icons/ContactUs.png";

const Header = () => {
    const [navMenu, setNavMenu] = useState(false);

    const handleNavMenu = () => {
        setNavMenu(!navMenu);
    }

    return(
        <>
            <header className="header">
                <section className="header-content">
                    <div className="nav-logo">
                        <Link><img src={Logo} alt="Estilo Marinero Logo" /></Link>
                        <button 
                            className="btn-nav-menu"
                            onClick={handleNavMenu}
                        >
                            <img src={MenuIcon} alt="Icono Menú" />
                        </button>
                    </div>
                    <nav className="nav-menu">
                        <li className="item-nav-menu"><Link to="/">Inicio</Link></li>
                        <li className="item-nav-menu"><Link to="/products">Productos</Link></li>
                        <li className="item-nav-menu"><Link to="/categories">Categorías</Link></li>
                        <li className="item-nav-menu"><Link to="/contact-us">Contáctanos</Link></li>
                    </nav>
                    <nav className="nav-chat-us">
                        <img src={MailIcon} alt="Icono Mail" />
                        <div className="chat-us">
                            <b>Escríbenos: </b>
                            <h2>ventas@estilo-marinero.com.co</h2>
                        </div>
                    </nav>
                    <nav className={ `nav-menu-mobile ${navMenu ? "active" : ""}` }>
                        <li className="item-nav-menu-mobile"><Link to="/"><img src={HomeIcon} alt="Icono Inicio" /><h2>Inicio</h2></Link></li>
                        <li className="item-nav-menu-mobile"><Link to="/products"><img src={ProductsIcon} alt="Icono Productos" /><h2>Productos</h2></Link></li>
                        <li className="item-nav-menu-mobile"><Link to="/categories"><img src={CategoriesIcon} alt="Icono Categorías" /><h2>Categorías</h2></Link></li>
                        <li className="item-nav-menu-mobile"><Link to="/contact-us"><img src={ContactUsIcon} alt="Icono Contáctanos" /><h2>Contáctanos</h2></Link></li>
                    </nav>
                </section>
            </header>
        </>
    )
}

export { Header };