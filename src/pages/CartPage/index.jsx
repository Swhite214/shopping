import axios from 'axios';
import { useCart } from '../../context/CartContext.jsx';
import "./cartpage.css";
import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [ cartItems, setCartItems ] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [checked, setChecked] = useState([]);
  const [showPaymentModal, setShowPaymentModal ] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8080/api/bucket',{withCredentials: true})
    .then((res)=>{
      setCartItems(res.data);
      setQuantities(res.data.map(item => item.quantity));
      setChecked(res.data.map(()=>true));
    })
    .catch((err) => {console.error("장바구니 불러오기 실패", err);});
  },[]);

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, value);
    setQuantities(newQuantities);
  };

  const handleCheckboxChange = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const total = cartItems.reduce((acc, item, idx) => {
    return checked[idx] ? acc + item.price * quantities[idx] : acc;
  }, 0);

  const handleRemove = (productId) => {
    axios.delete('http://localhost:8080/api/bucket',{
      params: {productId},
      withCredentials: true
    }).then(()=>{
      setCartItems(prev => prev.filter(item => item.productId !== productId));
    }).catch(err => console.error("삭제 실패", err))
  };

  return (
    <>
      <div className='title'>🛒 장바구니</div>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있어요!</p>
      ) : (
        <>
          <table className='cart-table'>
            <thead>
              <tr>
                <th>선택</th>
                <th>상품</th>
                <th>수량</th>
                <th>가격</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <input
                      type="checkbox"
                      checked={checked[idx]}
                      onChange={() => handleCheckboxChange(idx)}
                    />
                  </td>
                  <td>
                    <div className="item-content">
                    <img src={item.image?.url || item.imageUrl} alt={item.image?.orgName || 'product'} />
                      <div className="item-desc">
                      <div>{item.artist}</div>
                      <div >{item.name}</div>
                        <div className="gray">{item.releaseDate}</div>
                        <div className='bold'>{item.price}원</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={quantities[idx]}
                      min="1"
                      onChange={(e) => handleQuantityChange(idx, parseInt(e.target.value))}
                    />
                  </td>
                  <td className="red">{item.price * quantities[idx]} 원</td>
                  <td>
                    <button onClick={() => handleRemove(item.productId)}>삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-box-wrapper">
  <div className="total-box">
    <h3 style={{ marginBottom: '10px' }}>💳 결제 예정 금액</h3>
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      fontWeight: 'bold',
      fontSize: '1.2em',
      textAlign: 'center'
    }}>
      총 주문 금액<br />
      <span style={{ color: 'green', fontSize: '1.5em' }}>
        {total.toLocaleString()} 원
      </span>
    </div>
    <button onClick={() => window.history.back()} style={{
      marginTop: '10px',
      width: '100%',
      padding: '12px 0',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#4CAF50',
      backgroundColor: '#f3f3f3',
      border: '2px solid #4CAF50',
      borderRadius: '8px',
      cursor: 'pointer'
}}>
  🛒 쇼핑 계속하기
</button>
    <button onClick={() => setShowPaymentModal(true)} style={{
        marginTop: '20px',
        width: '100%',
        padding: '12px 0',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#4CAF50',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        결제하기
    </button>
    
    {showPaymentModal && (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          maxWidth: '300px'
        }}>
          <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
            {total.toLocaleString()}원이<br />성공적으로 결제되었습니다!
          </p>
          <button
            onClick={() => setShowPaymentModal(false)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '14px',
              backgroundColor: '#ccc',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            닫기
          </button>
        </div>
      </div>
    )}
  </div>
</div>
        </>
      )}
    </>
  );
};

export default CartPage;