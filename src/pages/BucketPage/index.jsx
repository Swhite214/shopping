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
  useEffect(()=>{
    const fetchProducts = async ()=>{
      try {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProducts(data);
        
      } catch (error) {
        console.error("서버에서 상품 불러오기 실패", error);
      }
    };
    fetchProducts();
  }, []);

  const handleCreate = async () => {
    const newProduct = {
      name,
      date,
      category,
      price: Number(price)
    };

    try {
      const response = await fetch("http://localhost:8080/products",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) throw new Error("상품 등록 실패");
      const updatedProduct = await response.json();
      setProducts([...products, updatedProduct]);
    } catch (error) {
      console.error(error);
    }

    // 초기화
    setName('');
    setDate('');
    setCategory('');
    setPrice('');
  };

  const handleDelete= async (id)=>{
    try {
      await fetch(`http://localhost:8080/products/${id}`,{
        method: "DELETE",
      });

      setProducts(products.filter(p => p.id !== id));
      
    } catch (error) {
      
    }
  }


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