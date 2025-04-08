import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('products')) || [];
    const found = stored.find((p) => p.id === Number(id));
    if (!found) return navigate('/backet'); // 없으면 장바구니로
    setProduct(found);
    setName(found.name);
    setDate(found.date);
    setCategory(found.category);
    setPrice(found.price);
  }, [id, navigate]);

  const handleDelete = () => {
    const stored = JSON.parse(localStorage.getItem('products')) || [];
    const updated = stored.filter((p) => p.id !== Number(id));
    localStorage.setItem('products', JSON.stringify(updated));
    navigate('/backet');
  };

  const handleUpdate = () => {
    const stored = JSON.parse(localStorage.getItem('products')) || [];
    const updated = stored.map((p) =>
      p.id === Number(id) ? { ...p, name, date, category, price: Number(price) } : p
    );
    localStorage.setItem('products', JSON.stringify(updated));
    setProduct({ ...product, name, date, category, price: Number(price) });
    setEditMode(false);
  };

  if (!product) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>제품 상세</h2>
      {editMode ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={date} onChange={(e) => setDate(e.target.value)} />
          <input value={category} onChange={(e) => setCategory(e.target.value)} />
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <button onClick={handleUpdate}>저장</button>
          <button onClick={() => setEditMode(false)}>취소</button>
        </>
      ) : (
        <>
          <h3>{product.name}</h3>
          <p>{product.date} | {product.category}</p>
          <p>{product.price}원</p>
          <button onClick={() => setEditMode(true)}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
      <br />
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}

export default ProductDescription;