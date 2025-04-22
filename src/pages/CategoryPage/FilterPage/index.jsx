import { useEffect, useState } from "react";
import Modal from '../../../shared/ui/Modal'
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./filterPage.css"
import { ShoppingCart, DollarSign} from 'lucide-react';
import { useCart } from '../../../context/CartContext.jsx';

const FilterPage = () => {
  const { search } = useLocation(); // 쿼리스트링 가져오기
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("")
  const [sortedProducts, setSortedProducts] = useState(products);
  const {addToCart} = useCart();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let sorted = [...products];
    if (sortOrder === "가격순") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "최신순") {
      sorted.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    }
    setSortedProducts(sorted);
  }, [sortOrder, products]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
 

  // 쿼리 파라미터 파싱
  const queryParams = new URLSearchParams(search);
  const keyword = queryParams.get("keyword");
  const genre = queryParams.get("genre");
  const artist = queryParams.get("artist");

  useEffect(() => {
    axios.get("http://localhost:8080/api/save")
      .then(res => {
        const filtered = res.data.filter(p => {
          const matchesKeyword =
            !keyword ||
            p.name.toLowerCase().includes(keyword.toLowerCase()) ||
            p.artist.toLowerCase().includes(keyword.toLowerCase());

          const matchesGenre =
            !genre || p.genre === decodeURIComponent(genre);

          const matchesArtist =
            !artist || 
            p.artist.includes(artist);

          return matchesKeyword && matchesGenre && matchesArtist;
        });
        setProducts(filtered);
      })
      .catch(error => {
        console.error("상품 목록 불러오기 실패:", error);
      });
  }, [keyword, genre, artist]);
  

  const handleAddToCart = (product) => {
    addToCart(product);
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
      navigate("/cart");
    }, 1500);
  };

  return (
    <>
      <div className="title">검색 결과</div>
      <div className="filter">
      <div className="result">전체({products.length})</div>
      <form action="">
        <select name="sort" className="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="가격순">가격순</option>
          <option value="최신순">최신순</option>
        </select>
      </form>
      </div>
      <div className="bigwrap">
        <div className="leftSection">
      <div className="popular">인기 가수</div>
      <div className="wrap1">
        <div className="floor1">
        <Link to={"/filter?artist=아이유"} className="small" >아이유 </Link>
        <Link to ={"/filter?artist=아이브"} className="small">아이브</Link>
        <Link to={"/filter?artist=asepa"} className="small">asepa</Link>
        </div>
        <div className="floor2">
        <Link to={"/filter?artist=데이식스"} className="small">Day6</Link>
        <Link to={"/filter?artist=지드래곤"} className="small">G-Dragon</Link>
        </div>
      </div>
    </div>
    <div className="rightSection">
      <div className="searchProduct">
        {sortedProducts.map(p => (
          <div key={p.productId} style={{ border: "1px solid #ccc", padding: "12px", width: "300px" }}>
            <img
              src={p.image?.url}
              alt={p.image?.orgName}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <h3>{p.name}</h3>
            <p><strong>가수:</strong> {p.artist}</p>
            <p><strong>발매일:</strong> {p.releaseDate}</p>
            <p><strong>설명:</strong> {p.description}</p>
            <p><strong>가격:</strong> {p.price} 원 &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            <strong>할인여부: </strong>{p.discount ? '할인중' : '정상가'}</p>
            <div className="buy">
              
              <button onClick={()=>handleAddToCart(p)} className="buy1" ><ShoppingCart size={30}  /></button>
              <Modal isOpen={isModalOpen} onClose={()=>setModalOpen(false)} title="알림">
                해당 상품이 성공적으로 장바구니에 담겼습니다!
              </Modal>
              <fieldset><Link to={"/"}><DollarSign size={30} className="buy2" /></Link> </fieldset>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </>
  );
};

export default FilterPage;