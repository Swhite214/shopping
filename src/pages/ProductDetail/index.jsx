import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productDetail.css"
import { ShoppingCart,DollarSign } from "lucide-react";
import Modal from "../../shared/ui/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('intro');
  const handleAddToCart = (product) => {
    axios.post('http://localhost:8080/api/bucket', {
      productId: product.productId,
      quantity: 1, // 기본 수량 1로 설정
    }, {
      withCredentials: true,
    })
    .then(() => {
      setModalOpen(true);
      setTimeout(()=>{
        navigate("/cart");
      },2000);
    })
    .catch(err => {
      console.error("장바구니 추가 실패", err);
      alert("로그인이 필요합니다!");
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [productId]);

  if (!product) return <p>로딩 중...</p>;

  return (
    <>
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "50px" }}>
      <div style={{ display: "flex", gap: "120px", alignItems: "flex-start" }}>
        <img
          src={product.image?.url || product.imageUrl} alt={product.image?.orgName || 'product'}
          
          style={{ width: "500px", height: "auto", objectFit: "cover", 
            borderRadius: "12px", boxShadow: "0 4px 12px rbga(0,0,0,0.1)"
          }}
        />
        <div>
        <div className="pdheader">
          <div>{product.name}</div>
          <p><strong>가수:</strong> {product.artist}</p>
        </div>
        <div className="pdbody">  
          <p><strong>발매일:</strong> {product.releaseDate}</p>
          <p><strong>판매가:</strong> {product.price.toLocaleString()} 원</p>
          <p><strong>배송비:</strong> 3,000원<br /><span style={{ fontSize: "0.9em", color: "gray" }}>*3만원 이상 구매 시 배송비 무료</span></p>
          <div className="buy">
              
              <button onClick={()=>handleAddToCart(product)} className="buy1" ><ShoppingCart size={30}  /></button>
              <Modal isOpen={isModalOpen} onClose={()=>setModalOpen(false)} title="알림">
                해당 상품이 성공적으로 장바구니에 담겼습니다!
              </Modal>
              <fieldset><Link to={"/"}><DollarSign size={30} className="buy2" /></Link> </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div style={{ display: "flex", justifyContent: "center", borderBottom: "2px solid #ddd", gap: "300px" }}>
        {['intro', 'info', 'review'].map(tab => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              background: "none",
              border: "none",
              padding: "15px 25px",
              fontSize: "1.1rem",
              fontWeight: selectedTab === tab ? "bold" : "normal",
              borderBottom: selectedTab === tab ? "3px solid black" : "none",
              cursor: "pointer"
            }}
          >
            {{
              intro: "음반 소개",
              info: "상품 정보",
              review: "리뷰"
            }[tab]}
          </button>
        ))}
      </div>

      {/* 콘텐츠 영역 */}
      <div style={{ maxWidth: "800px", margin: "40px auto 60px", fontSize: "1rem", lineHeight: "1.8", whiteSpace: "pre-line" }}>
        {selectedTab === 'intro' && (
          <div style={{ wordBreak: 'keep-all', textAlign: 'justify' }}>
            {product.description || '소개 내용이 없습니다.'}
          </div>
        )}
        {selectedTab === 'info' && (
          <div>
            <p><strong>상품명:</strong> {product.name}</p>
            <p><strong>발매일:</strong> {product.releaseDate}</p>
            <p><strong>장르:</strong> {product.genre}</p>
            <p><strong>가수:</strong> {product.artist}</p>
            <p><strong>프로듀서:</strong> {product.producer}</p>
            <p><strong>원산지:</strong> {product.originCountry}</p>
          </div>
        )}
        {selectedTab === 'review' && (
          <div>리뷰가 없습니다!</div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;