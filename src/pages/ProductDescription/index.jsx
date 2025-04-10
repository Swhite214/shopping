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
    const fetchProduct = async()=>{
      try {
        const response = await fetch(`http://localhost:8080/products/${id}`);

        if(!response.ok){
          throw new Error('서버 오류 발생');
        }        
        const data = await response.json();
        setProduct(data);
        setName(data.name);
        setDate(data.date);
        setCategory(data.category);
        setPrice(data.price);
      } catch (error) {
        console.error(error);
        navigate('/backet'); // 없으면 장바구니로
        
      }
    };
    fetchProduct();
  }, [id, navigate]);

  const handleDelete= async()=>{
    try {
      await fetch(`http://localhost:8080/products/${id}`,{
        method: "DELETE"
      });
      navigate('/backet');
    } catch (error) {
      console.error("삭제실패", error);
    }
  };

  const handleUpdate= async()=>{
    try {
      const updatedProduct = {
        name,
        date,
        category,
        price: Number(price)
      };

      const response = await fetch(`http://localhost:8080/products/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      });

      if(!response.ok) throw new Error("수정 실패");
      const data = await response.json();
      setProduct(data);
      setEditMode(false);
    } catch (error) {
      console.error("수정 실패", error)
    }
  }

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