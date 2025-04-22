import { useCart } from '../../context/CartContext.jsx';
import "./cartpage.css";
import React, { useState } from 'react';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));
  const [checked, setChecked] = useState(cartItems.map(() => true));

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
                      <img src={item.image?.url} alt={item.image?.orgName} />
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
                    <button onClick={() => removeFromCart(item)}>삭제</button>
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
  </div>
</div>
        </>
      )}
    </>
  );
};

export default CartPage;