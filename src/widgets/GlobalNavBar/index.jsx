import { Link } from 'react-router-dom';
import './GlobalNavBar.css'

const GlobalNavBar=()=>{return (<>
    <nav className="category-nav">
        <ul className="category-list">
            <li>
            <Link to="/">국내음반</Link>
            <ul className="subcategory-list">
                <li><Link to="/products">K-pop</Link></li>
                <li><Link to="/products">R&B</Link></li>
                <li><Link to="/products">Balad</Link></li>
            </ul>
            </li>
            <li>
            <Link to="/">해외음반</Link>
            <ul className="subcategory-list">
                <li><Link to="/">J-Pop</Link></li>
                <li><Link to="/">Pop</Link></li>
                <li><Link to="/">R&B</Link></li>
                <li><Link to="/">HipHop</Link></li>

            </ul>
            </li>
            <li>
            <Link to="/">Jazz</Link>
            <ul className="subcategory-list">
                <li><Link to="/">Fusion</Link></li>
                <li><Link to="/">Swing</Link></li>
                <li><Link to="/">Blues</Link></li>
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