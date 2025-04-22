import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function ProductDescription() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/save') 
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('상품 목록 불러오기 실패:', error);
      });
  }, []);
  return (
    <>
       <div>
      {products.map(product => (
        <div key={product.productId} style={{ marginBottom: '2rem' }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>가격: {product.price}원</p>
          <p>할인여부: {product.discount ? '할인중' : '정상가'}</p>
          {product.image && (
            <img src={product.image.url} alt={product.image.orgName} width="200" />
          )}
        </div>
      ))}
    </div>
    </>
  );
}

export default ProductDescription;