import React, { useEffect, useRef, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

function BucketPage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const idRef = useRef(0);

  // 초기 로딩
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(stored);
    idRef.current = stored.reduce((max, p) => Math.max(max, p.id), 0);
  }, []);

  const handleCreate = () => {
    const newProduct = {
      id: ++idRef.current,
      name,
      date,
      category,
      price: Number(price)
    };
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));

    // 초기화
    setName('');
    setDate('');
    setCategory('');
    setPrice('');
  };

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
  };


  return (
    <div>
      <h2>장바구니</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
        <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="날짜" />
        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="카테고리" />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="가격" />
        <button type="submit">추가</button>
      </form>

      {products.map((item) => (
        <div key={item.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <Link to={`/backet/products/${item.id}`}>
            <h3>{item.name}</h3>
          </Link>
          <p>{item.date} | {item.category}</p>
          <p>{item.price}원</p>
          <button onClick={() => handleDelete(item.id)}>삭제</button>
          
          
        </div>
      ))}
    </div>
  );
}

export default BucketPage;