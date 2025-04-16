import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './bucketpage.css'

function BucketPage() {
  // 상품 정보 상태 관리
  const [product, setProduct] = useState({
    name: '',
    description: '',
    releaseDate: '',
    price: 0,
    genre: '',
    discount: false,
    artist: '',
    producer: '',
    originCountry: '',
    imageUrl: null,
    
  });

  // 이미지 미리보기 URL 상태 관리
  const [previewUrls, setPreviewUrls] = useState({
    main: null,        // 메인 이미지 미리보기 URL
  });

  // 이미지 업로드 상태 관리
  const [uploadStatus, setUploadStatus] = useState({
    image: {
      isLoading: false,
      error: null
    },
  });

  // 입력 필드 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Input change:', name, value); // 디버깅용 로그
    
    // 가격 입력 시 숫자만 허용
    if (name === 'price') {
      // 숫자만 허용하고, 음수는 허용하지 않음
      const numericValue = value.replace(/[^0-9]/g, '');
      setProduct(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setProduct(prev => ({
        ...prev,
        [name]: value
      }));
    }
    console.log(product); // 디버깅용 로그
  };

  // 상품 설명 변경 핸들러
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setProduct(prev => ({
      ...prev,
      description: value
    }));
    console.log(product); // 디버깅용 로그
  };

  // 메인 이미지 변경 핸들러
  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // 업로드 상태 설정
        setUploadStatus(prev => ({
          ...prev,
          image: { isLoading: true, error: null }
        }));

        // FormData 생성
        const formData = new FormData();
        formData.append('tempFile', file);

        // 이미지 업로드 API 호출
        const response = await axios.post('http://localhost:8080/api/images/temp', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(response.data)
        

        // S3Response 객체로 상태 업데이트
        setProduct(prev => ({
          ...prev,
          imageUrl: response.data
        }));
        console.log("!!!!",response.data)
        // 미리보기 URL 설정
        setPreviewUrls(prev => ({
          ...prev,
          main: URL.createObjectURL(file)
        }));

      } catch (error) {
        setUploadStatus(prev => ({
          ...prev,
          image: { isLoading: false, error: error.message }
        }));
        alert('이미지 업로드에 실패했습니다.');
      } finally {
        setUploadStatus(prev => ({
          ...prev,
          image: { isLoading: false, error: null }
        }));
      }
    }
  };


  // 메인 이미지 제거 핸들러
  const removeMainImage = async () => {
    try {
      if (product.imageUrl) {
        // 서버에서 이미지 삭제 요청
        await axios.delete(`http://localhost:8080/api/images/delete`, {
          data: { url: product.imageUrl.url }
        });
      }
      setProduct(prev => ({
        ...prev,
        imageUrl: null
      }));
      setPreviewUrls(prev => ({
        ...prev,
        main: null
      }));
    } catch (error) {
      console.error('이미지 삭제 중 오류 발생:', error);
      alert('이미지 삭제에 실패했습니다.');
    }
  };


  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    // 기본 폼 제출 동작 방지
    e.preventDefault();
    
    try {
      
      console.log(">>>",product)
      const response = await axios.post('http://localhost:8080/api/products', product, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // 5. 성공 처리
      if (response.status === 200) {
        // 5.1 성공 메시지 표시
        alert('상품이 성공적으로 등록되었습니다.');
        
        // 5.2 폼 데이터 초기화
        setProduct({
          name: '',
          description: '',
          releaseDate: '',
          price: 0,
          genre: '',
          discount: false,
          artist: '',
          producer: '',
          originCountry: '',
          imageUrl: null,
        });
        
        // 5.3 미리보기 URL 초기화
        setPreviewUrls({
          main: null
        });
      }
    } catch (error) {
      // 6. 에러 처리
      // 6.1 콘솔에 에러 로그 출력
      console.error('상품 등록 중 오류 발생:', error);
      // 6.2 사용자에게 에러 메시지 표시
      alert('상품 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="container">
      <h1>상품 등록</h1>
      <form onSubmit={handleSubmit}>
        {/* 상품명 입력 필드 */}
        <div className="form-group">
          <label htmlFor="name">상품명</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
            placeholder="상품명을 입력하세요"
          />
        </div>
        {/* 상품 설명 입력 필드 */}
        <div className="form-group">
          <label htmlFor="description">상품 설명</label>
          <div className="markdown-container">
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleDescriptionChange}
              className="markdown-editor"
              placeholder="상품에 대한 상세 설명을 입력하세요 (마크다운 형식 지원)"
              required
              rows={20}
              style={{ 
                width: '100%',
                minHeight: '400px',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '1.6',
                resize: 'vertical'
              }}
            />
            <div className="markdown-preview">
              <ReactMarkdown>{product.description}</ReactMarkdown>
            </div>
          </div>
        </div>
        {/* 날짜 */}
        <div className='form-group'>
          <label htmlFor="date">
            <div className='date-input-container'>
              <input type="text"
                      id='release_date'
                      name='releaseDate'
                      value={product.releaseDate}
                      onChange={handleInputChange}
                      placeholder='날짜'
                      required
              />
            </div>
          </label>
        </div>
        {/* 가격 입력 필드 */}
        <div className="form-group">
          <label htmlFor="price">가격</label>
          <div className="price-input-container">
            <input
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              placeholder="숫자만 입력하세요"
              required
            />
            <span className="price-unit">원</span>
          </div>
        </div>
          {/* 장르 */}
        <div className='form-group'>
          <label htmlFor="genre">
            <div className='genre-input-container'>
              <input type="text"
                      id='genre'
                      name='genre'
                      value={product.genre}
                      onChange={handleInputChange}
                      placeholder='장르'
                      required
              />
            </div>
          </label>
        </div>
         {/* 할인 */}
        <div className='form-group'>
          <label htmlFor="discount">
            <div className='discount-input-container'>
              <input type="checkbox"
                      id='discount'
                      name='discount'
                      value={product.discount}
                      onChange={handleInputChange}
                      placeholder='할인'
              />
            </div>
          </label>
        </div>     
              {/* 가수 */}
        <div className='form-group'>
          <label htmlFor="artist">
            <div className='artist-input-container'>
              <input type="text"
                      id='artist'
                      name='artist'
                      value={product.artist}
                      onChange={handleInputChange}
                      placeholder='가수'
                      required
              />
            </div>
          </label>
        </div>
        {/* 제작사 */}
        <div className='form-group'>
          <label htmlFor="producer">
            <div className='producer-input-container'>
              <input type="text"
                      id='producer'
                      name='producer'
                      value={product.producer}
                      onChange={handleInputChange}
                      placeholder='제작사'
                      required
              />
            </div>
          </label>
        </div>
        {/* 국적 */}
        <div className='form-group'>
          <label htmlFor="origin_country">
            <div className='origin_country-input-container'>
              <input type="text"
                      id='origin_country'
                      name='originCountry'
                      value={product.originCountry}
                      onChange={handleInputChange}
                      placeholder='국적'
                      required
              />
            </div>
          </label>
        </div>
        {/* 메인 이미지 업로드 필드 */}
        <div className="form-group">
          <label>메인 이미지</label>
          <div className="image-upload-container">
            <label 
              className="image-upload-label"
              style={{ backgroundImage: previewUrls.main ? `url(${previewUrls.main})` : 'none' }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleMainImageChange}
                className="image-upload-input"
                required
              />
              {/* 이미지 제거 버튼 */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeMainImage();
                }}
                className="remove-image-btn"
              >
                ×
              </button>
            </label>
          </div>
        </div>

        {/* 상품 등록 버튼 */}
        <button type="submit" className="submit-btn">
          상품 등록
        </button>
      </form>
    </div>
  );
}

export default BucketPage;