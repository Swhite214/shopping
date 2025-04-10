import { Outlet } from "react-router-dom"
import Footer from "@widgets/Footer"
import Header from "@widgets/Header"
import "./DefaultLayout.css"
import { Link } from "react-router-dom"

const DefaultLayout=()=>{
  return (<>
    <div className="app-container">
      <Header />
      <nav className="category-nav">
        <ul className="category-list">
          <li>
            <Link to="/">국내음반</Link>
            <ul className="subcategory-list">
              <li><Link to="/">K-pop</Link></li>
              <li><Link to="/">R&B</Link></li>
              <li><Link to="/">HipHop</Link></li>
              <li><Link to="/">Balad</Link></li>
              <li><Link to="/">Idol</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">해외음반</Link>
            <ul className="subcategory-list">
              <li><Link to="/">J-Pop</Link></li>
              <li><Link to="/">Pop</Link></li>
              <li><Link to="/">R&B</Link></li>
              <li><Link to="/">HipHop</Link></li>
              <li><Link to="/">Balad</Link></li>
              <li><Link to="/">Rock</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">Jazz</Link>
            <ul className="subcategory-list">
              <li><Link to="/">Smooth Jazz</Link></li>
              <li><Link to="/">Bebop</Link></li>
              <li><Link to="/">Fusion</Link></li>
              <li><Link to="/">Swing</Link></li>
              <li><Link to="/">Blues</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">DVD/Blu-Ray</Link>
            <ul className="subcategory-list">
              <li><Link to="/">Live</Link></li>
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
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>)
}
export default DefaultLayout;