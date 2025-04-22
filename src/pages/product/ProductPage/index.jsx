import ProductBox from '@entities/product/ProductBox';
import './ProductPage.css'
import { useState } from 'react';
import { useCategory } from '../../../shared/store/useCategory';
import { Link, useParams } from 'react-router-dom';
const ProductPage = () => {
    //이미지url 
    //product_name
    //날짜
    //kind(LP,CD)
    //판매가격
    //포인트

    //js 객체로 준비
    //변수만듭니다.
    const init = [
        {
            url: '//cdnimg.melon.co.kr/cm2/album/images/104/31/598/10431598_20200518123330_500.jpg?f9994edefe89256c8590826f6cba6126/melon/resize/282/quality/80/optimize',
            name: 'fujii Kaze [정규] HELP EVER HURT NEVER',
            createdAt: '2020-05-20',
            kind: 'CD',
            price: 78000,
            point: 780
        },
        {
            url: '//cdnimg.melon.co.kr/cm2/album/images/117/14/991/11714991_20250213161657_500.jpg?f5b825307b6c71151e297952e16d5f2f/melon/resize/282/quality/80/optimize',
            name: '大ピンチ(다이핀치) Single 頑張り屋さん(간바리야상)',
            createdAt: '2025-02-14',
            kind: 'CD',
            price: 16000,
            point: 160
        },
        {
            url: '//cdnimg.melon.co.kr/cm2/album/images/108/94/633/10894633_20220321105815_500.jpg?ccf2f638240d8243332f555983644ddd/melon/resize/282/quality/80/optimize',
            name: 'Fujii Kaze [정규] LOVE ALL SERVE ALL',
            createdAt: '2022.03.23',
            kind: 'CD',
            price: 68000,
            point: 780
        },
        {
            url: '//cdnimg.melon.co.kr/cm2/album/images/103/27/667/10327667_500.jpg?6378075ae0ba0b935d97a95977b6c559/melon/resize/282/quality/80/optimize',
            name: '[정규] Traveler OFFICIAL HIGE DANDISM',
            createdAt: '2019.09.11',
            kind: 'CD',
            price: 80000,
            point: 800
        },
    ]
    const [products, setProducts] = useState(init);
    const { categories } = useCategory();
    let params = useParams();//url주소에서 path:"/categories/:categoyId" 설계되었기에 
    const categoryId = params.categoryId ? parseInt(params.categoryId, 10) : null;
    const currentCategory = categoryId !== null
        ? categories.find(category => category.id === categoryId) || null
        : null;

    return (<section>
        <h1>음원 상품 리스트</h1>
        <div className='products-wrap'>
            <section className='curr-category'>
                {currentCategory && currentCategory.subCategories && (<>
                    <p className='main-categories'>{currentCategory.name}</p>
                    <ul className='sub-categories'>
                        {currentCategory.subCategories.map(subCategory => (
                            <li key={subCategory.id}>{subCategory.name}</li>
                        ))}
                    </ul>
                    </>
                )}
            </section>
            <section>
                <ul>
                    {products.map((p, index) => (
                        <li key={index}>
                            <ProductBox
                                url={p.url}
                                name={p.name}
                                createdAt={p.createdAt}
                                kind={p.kind}
                                price={p.price}
                                point={p.point}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </div>

    </section>)
}

export default ProductPage;