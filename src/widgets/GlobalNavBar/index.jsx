import { Link } from 'react-router-dom'
import './GlobalNavBar.css'

const GlobalNavBar=()=>{
    return (
    <>
    <nav className="category-nav">
        <ul className="category-list">
            <li>
            <Link to="/">국내음반</Link>
            <ul className="subcategory-list">
                <li><Link to="/filter?genre=K-pop">K-pop</Link></li>
                <li><Link to={`/filter?genre=${encodeURIComponent("록/메탈")}`}>록&메탈</Link></li>
                <li><Link to="/filter?genre=댄스">댄스</Link></li>
            </ul>
            </li>
            <li>
            <Link to="/">일본음반</Link>
            <ul className="subcategory-list">
                <li><Link to="/filter?genre=J-POP">J-Pop</Link></li>
                <li><Link to={`/filter?genre=${encodeURIComponent("Modern Rock")}`}>Modern Rock</Link></li>
                <li><Link to={`/filter?genre=${encodeURIComponent("R&B")}`}>R&B</Link></li>
                <li><Link to={`/filter?genre=${encodeURIComponent("Japaness Rock")}`}>Japanese Rock</Link></li>

            </ul>
            </li>
            <li>
            <Link to="/">미국음반</Link>
            <ul className="subcategory-list">
                <li><Link to="/filter?genre=Rock">Rock</Link></li>
                <li><Link to="/filter?genre=Country">Country</Link></li>
                <li><Link to="/filter?genre=Electronic">Electronic</Link></li>
                <li><Link to="/filter?genre=Jazz">Jazz</Link></li>
            </ul>
            </li>
            <li>
            <Link to="/">DVD/Blu-Ray</Link>
            <ul className="subcategory-list">
                <li><Link to="/">Concert</Link></li>
                <li><Link to="/">Tour</Link></li>
                <li><Link to="/">World Tour</Link></li>
            </ul>
            </li>
            <li>
            <Link to="/">MD</Link>
            <ul className="subcategory-list">
                <li><Link to="/">한정판 앨범</Link></li>
                <li><Link to="/">한정판 굿즈</Link></li>
            </ul>
            </li>
        </ul>
    </nav>
</>)}

export default GlobalNavBar;