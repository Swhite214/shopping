import { Link } from 'react-router-dom';
import './GlobalNavBar.css'
import { useCategory } from '../../shared/store/useCategory';

const GlobalNavBar=()=>{
   const  {categories}=useCategory();

    return (<>
    <nav className="category-nav">
        <ul className="category-list">
            {categories.map((category)=>
            <li key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
                <ul className="subcategory-list">
                    {category.subCategories.map((sub)=>
                    <li key={sub.id}>
                        <Link to={`/categories/${sub.id}`}>{sub.name}</Link>
                    </li>
                    )}                    
                </ul>
            </li>
            )}

            {/*
            <li>
            <Link to="/">국내음반</Link>
            <ul className="subcategory-list">
                <li><Link to="/">K-pop</Link></li>
                <li><Link to="/">R&B</Link></li>
                <li><Link to="/">Balad</Link></li>
            </ul>
            </li>
            <li>
            <Link to="/categories">해외음반</Link>
            <ul className="subcategory-list">
                <li><Link to="/categories">J-Pop</Link></li>
                <li><Link to="/categories">Pop</Link></li>
                <li><Link to="/categories">R&B</Link></li>
                <li><Link to="/categories">HipHop</Link></li>

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
            */}
        </ul>
    </nav>
</>)}

export default GlobalNavBar;