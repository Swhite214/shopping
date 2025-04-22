import './ProductBox.css'
const ProductBox = ({url,name,createAt,kind,price,point}) => {
    return (
        <div className="product-box">
            <h1>음원상품wrap</h1>
            <div className='wrap'>
                <div className='product-box-img'>
                    <img src={url} alt='이미지' />
                </div>
                <div className='product-box-info'>
                    <div className="name_tag">
                        {name}
                    </div>
                    <div>
                        <span>{createAt}</span>
                        <span>{kind}</span>
                    </div>
                    <div>
                        <span>{price}</span>
                        <span>{point}</span>
                    </div>
                    
                </div>
            </div>
        </div>)
}

export default ProductBox;