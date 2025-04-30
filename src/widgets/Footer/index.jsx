import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../app/assets/butterfly-logo.svg'
import {ArrowUp} from "lucide-react"
const Footer = () => {

  const scrolltotop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
      <>
          <header className='footer'>
              <h1>푸터</h1>
              <div className='footer-container'>
                <div className='logo-wrapper'>
                  <Link to={"/"}>
                      <img src={logo} alt="로고" className='logo' />
                  </Link>
                  <Link to="/" className='logo-text'>
                    4TunesRecords
                </Link>
                  </div>
                  <p className='text'>
                      <span>서울특별시 강남구 테헤란로 14길 6 남도빌딩</span>
                      <span> /team: 박찬우 김영진 이예준</span>
                  </p>
                  <p className='copy'>
                      <span className='text'>Copyrightⓒ{new Date().getFullYear()} Media</span>
                      <span className='com'>
                          <Link to={"/"}> 4TuneRecords</Link>
                      </span>
                      <span className='text'> All rights reserved.</span>
                  </p>
                      <button className='scroll-top-btn' onClick={scrolltotop}>
                          <ArrowUp size={30} color="#333" />
                      </button>
              </div>
          </header>
      </>)
}


export default Footer;