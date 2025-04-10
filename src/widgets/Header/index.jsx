import { Link } from 'react-router-dom';
import './Header.css';
import Input from '../../shared/ui/Input';
import { User, ShoppingCart, LogIn, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState('통합검색');
  const dropdownRef = useRef(null);

  const searchOptions = [
    '가수/아티스트',
    '수록곡명',
    '제작사/레이블',
    '음반명/상품명'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='header'>
      <div className='header-container'>
        <div className="header-logo-container">
          <img 
            src="/butterfly-logo.svg" 
            alt="Butterfly Logo" 
            className="header-butterfly-logo"
          />
          <Link to="/" className="header-logo">
            4TunesRecords
          </Link>
        </div>
        <section>
          <div className='flex ai-center'>
            <div className="player-controls">
              <div className="control-buttons">
                <button className="control-btn"><i className="fas fa-step-backward"></i></button>
                <button className="control-btn play-btn"><i className="fas fa-play"></i></button>
                <button className="control-btn"><i className="fas fa-step-forward"></i></button>
              </div>
            </div>
            <div className='header-search'>
              <div className="search-dropdown" ref={dropdownRef}>
                <button 
                  className="search-dropdown-button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  {selectedSearch}
                  <ChevronDown size={16} style={{ transform: isSearchOpen ? 'rotate(180deg)' : 'none' }} />
                </button>
                {isSearchOpen && (
                  <ul className="search-dropdown-menu">
                    {searchOptions.map((option) => (
                      <li key={option}>
                        <button
                          className={`search-dropdown-item ${selectedSearch === option ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedSearch(option);
                            setIsSearchOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <label className='sr-only'></label>
              <Input placeholder='검색어를 입력하세요' />
            </div>
            <div className="volume-control">
              <button className="control-btn"><i className="fas fa-volume-up"></i></button>
              <div className="volume-slider">
                <div className="volume-filled"></div>
              </div>
            </div>
            <div className="header-icons">
              <Link to="/login" className="header-icon">
                <LogIn size={20} />
              </Link>
              <Link to="/mypage" className="header-icon">
                <User size={20} />
              </Link>
              <Link to="/cart" className="header-icon">
                <ShoppingCart size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
