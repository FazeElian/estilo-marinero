// Header App
import { Header } from "../components/Header";

// Styles
import "../assets/css/views/HomeView.css";

// Images - Icons
    // Search Icon
    import SearchIcon from "../assets/img/icons/Search.png";

const HomeView = () => {
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
                        <input type="text" className="searcher" name="" id="" placeholder="Buscar Producto" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { HomeView };