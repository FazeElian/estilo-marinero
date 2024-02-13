// Header App
import { Header } from "../components/Header";

// Styles
import "../assets/css/views/HomeView.css"; // Home View
import "../assets/css/components/ProductCard.css"; // Product Card
import "../assets/css/components/ProductsList.css"; // Products List
import "../assets/css/components/ProductsCategoriesList.css"; // Products Categories List

// useState, useEffect hooks
import { useState, useEffect } from "react";

// Routes navigation
import { Link } from "react-router-dom";

// Products List
import homeProductsList from "../assets/js/HomeProductsList";

// Images - Icons
    // Search Icon
    import SearchIcon from "../assets/img/icons/Search.png";

    // Se All Button
    import { SeeAllButton } from "../components/SeeAllButton";

    // Products Categories
        // Example:
        import ProductCategorieExampleImage from "../assets/img/products/productImage1.jpg";

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

    // Products Categories
    const productsCategories = [
        {
            id: 1,
            name: "Categoría 1",
            link: "/categorie-1",
            imgSrc: ProductCategorieExampleImage,
            imgAlt: "Categoría 1",
        },
        {
            id: 2,
            name: "Categoría 2",
            link: "/categorie-2",
            imgSrc: ProductCategorieExampleImage,
            imgAlt: "Categoría 2",
        },
        {
            id: 3,
            name: "Categoría 3",
            link: "/categorie-3",
            imgSrc: ProductCategorieExampleImage,
            imgAlt: "Categoría 3",
        },
        {
            id: 4,
            name: "Categoría 4",
            link: "/categorie-4",
            imgSrc: ProductCategorieExampleImage,
            imgAlt: "Categoría 4",
        },
        {
            id: 5,
            name: "Categoría 5",
            link: "/categorie-5",
            imgSrc: ProductCategorieExampleImage,
            imgAlt: "Categoría 5",
        },
        {
            id: 6,
            name: "Categoría 6",
            link: "/categorie-6",
            imgSrc: ProductCategorieExampleImage,
            imgAlt: "Categoría 6",
        }
    ];

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

            <div className="content-page">
                <div className="cont-products-categories">
                    <div className="cont-title-categories-home">
                        Categorías de Productos
                    </div>
                    <div className="cont-list-products-categories">
                        {productsCategories.map (productsCategorie => ((
                            <div className="products-categorie" key={productsCategorie.id}>
                                <Link to={productsCategorie.link}>
                                    <div className="img-products-categorie">
                                        <img src={productsCategorie.imgSrc} alt={productsCategorie.imgAlt} />
                                    </div>
                                    <div className="content-products-categorie">
                                        <h2>{productsCategorie.name}</h2>
                                    </div>
                                </Link>
                            </div>
                        )))}                
                    </div>
                </div>
            </div>

            {/* See All Categories Button Component */}
            <SeeAllButton
                link="/categories/"
                text="Ver todas las Categorías" 
            />
        </>
    )
}

export { HomeView };