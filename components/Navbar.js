import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch , faShoppingCart , faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";


const Navbar = (props)=>{
    return (<nav>
        <span className="nav-logo"></span>
        <div className="nav-section">
            <div className="nav-search">
                <input type="text" placeholder="Search for your favourite items ..."/>
                <i><FontAwesomeIcon icon={faSearch}/></i>
                <ul className="nav-search-results">
                    <li>
                        <i>
                            <FontAwesomeIcon icon={faMobileAlt}/>
                        </i>
                        Realme Narzo 7A
                    </li>
                    <li>
                        <i>
                            <FontAwesomeIcon icon={faMobileAlt}/>
                        </i>
                        Realme Narzo 7A
                    </li>
                    <li>
                        <i>
                            <FontAwesomeIcon icon={faMobileAlt}/>
                        </i>
                        Realme Narzo 7A
                    </li>
                    <li>
                        <i>
                            <FontAwesomeIcon icon={faMobileAlt}/>
                        </i>
                        Realme Narzo 7A
                    </li>
                </ul>
            </div>
            <span className="icon-with-label">
                <i><FontAwesomeIcon icon={faShoppingCart}/></i>
                Cart
            </span>
            <span className="label-box">More</span>
            <i className="only-icon">
                <FontAwesomeIcon icon={faUserCircle}/>
            </i>
        </div>
    </nav>);
}

export default Navbar;