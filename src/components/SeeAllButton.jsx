// Routes Navigation
import { Link } from "react-router-dom"

// Styles for this component
import "../assets/css/components/SeeAllButton.css";

// Images - Icons
    // See All Arrow Icon
    import SeeAllArrowIcon from "../assets/img/icons/Arrow-To-Right-Button.png";

const SeeAllButton = (props) => {
    return(
        <div className="cont-btn-see-all">
            <Link to={props.link}>
                <button>
                    <h2>{props.text}</h2>
                    <img src={SeeAllArrowIcon} alt="Ver todos icono flecha" />
                </button>
            </Link>
        </div>
    )
}

export { SeeAllButton };