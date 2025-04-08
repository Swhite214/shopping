import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (<>
    <footer id="footer">
      <h1>푸터</h1>
      <div className='footer-container'>
        <p className='copy'>
          <span className='text'>Copyright  &copy; {new Date().getFullYear()}</span>
          <span className='com'>
            <Link to={"/"}>ORANGE</Link>
          </span>
          <span className="text">All rights reserved.</span>
        </p>
      </div>
    </footer>
  </>)
}

export default Footer;