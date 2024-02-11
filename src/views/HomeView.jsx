// Header App
import { Header } from "../components/Header";

// Styles
import "../assets/css/views/HomeView.css"; // Home View
import "../assets/css/components/ProductCard.css"; // Product Card
import "../assets/css/components/ProductsList.css"; // Products List

// useState, useEffect hooks
import { useState, useEffect } from "react";

// Routes navigation
import { Link } from "react-router-dom";

// Products List
import homeProductsList from "../assets/js/HomeProductsList";

// Images - Icons
    // Search Icon
    import SearchIcon from "../assets/img/icons/Search.png";
import { SeeAllButton } from "../components/SeeAllButton";

const HomeView = () => {
    const [ searchProduct, setSearchProduct ] = useState("");
    const [ products, setProducts ] = useState([]);

    // Función para traer datos de Arreglos JSON    
    const showData = async () => {
        setProducts(homeProductsList);
    }

    // Función para eliminar acentos de una cadena
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    // Método de filtrado
    const searchResult = !searchProduct
        ? products
        : products.filter(
            (dataProduct) =>
            removeAccents(dataProduct.name?.toLowerCase()).includes(removeAccents(searchProduct.toLowerCase())) ||
            removeAccents(dataProduct.category?.toLowerCase()).includes(removeAccents(searchProduct.toLowerCase()))
        );

    // Función de búsqueda
    const productsSearcher = (e) => {
        setSearchProduct(e.target.value);
    };

    useEffect ( () => {
        showData()
    }, [])

    return(
        <>
            <Header />

            <div className="content-page">
                <div className="cont-searcher-filter">
                    <div className="cont-order-by">
                        <h2>Ordenar Por:</h2>
                        <select name="" id="" className="order-by">
                            <option value="">Orden por defecto</option>
                            <option value="">Orden Alfabético (A-Z)</option>
                            <option value="">3</option>
                        </select>
                    </div>


                    <div className="cont-searcher">
                        <button className="btn-searcher">
                            <img src={SearchIcon} alt="Icono Búsqueda" />
                        </button>
                        <input 
                            type="text" 
                            className="searcher" 
                            name="" 
                            id="" 
                            placeholder="Buscar Producto"
                            value={searchProduct}
                            onChange={productsSearcher}
                        />
                    </div>
                </div>
            </div>

            <div className="cont-products-list">
                {searchResult.map(product =>(
                    <div className="cont-product-card" key={product.id}>
                        <div className="cont-img-prod-card">
                            <Link to="/"><img src={product.imgSrc} alt={product.imgAlt} /></Link>
                        </div>

                        <div className="cont-content-prod-card">
                            <h2><Link to="/">{product.name}</Link></h2>
                            <h3><Link to="/categories/1"><b>Categoría:</b></Link> {product.category}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* See All Products Button Component */}
            <SeeAllButton
                link="/products/"
                text="Ver todos los productos" 
            />
        </>
    )
}

export { HomeView };