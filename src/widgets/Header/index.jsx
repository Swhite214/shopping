import { Link } from 'react-router-dom';
import './Header.css'
import Input from '../../shared/ui/Input';
import Icon from '../../shared/ui/Icon';
import Button from '../../shared/ui/Button';
import { User } from 'lucide-react';
const Header=()=>{
  return (<>
    <header className='header' >
      <h1>헤더</h1>
      <div className='header-container'>
        <section>
          <h1>로고</h1>
          <div className='flex ai-center'>
            <Link to={'/'}  className='header-logo'>ORANGE</Link>
            <div className='header-search'>
              <label className='sr-only'>검색</label>
              <Input placeholder='검색어를 입력하세요'/>
            </div>
          </div>
        </section>
        <nav className='header-nav'>
          <h1>메인메뉴</h1>
          <div>
            <ul className='flex ai-center'>
              <li className='header-nav-item'>
                <Link to={'/post'} >
                  <Icon name="home" />
                </Link>
              </li>
              <li className='header-nav-item'>
                <Link to={'/'} >
                  <Icon name="message" />
                </Link>
              </li>
              <li className='header-nav-item'>
                <Link to={'/'} >
                  <Icon name="explore" />
                </Link>
              </li>
              <li className='header-nav-item'>
                <Link to={'/'} >
                  <Icon name="heart" />
                </Link>
              </li>
              <li className='header-nav-item'>
                <Link to={'/auth'} >
                  <User />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </>)
}

export default Header;
