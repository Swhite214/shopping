import React, { useEffect, useState } from "react";
import './Section1.css'
import imageList from "./imageList";
const Section1=()=>{

    const [leftPage, setLeftPage] = useState(0);
    const [rightPage, setRightPage] = useState(0);


    const imagesPerPage = 6; //왼쪽 이미지 한 페이지에 보여줄 이미지 수 설정
    const totalPages = Math.ceil(imageList.length / imagesPerPage); //전체 페이지 수

    // 다음페이지
    const handleNext=()=>{
        if(leftPage < totalPages -1){
            setLeftPage(leftPage+1);
            setRightPage(0);
        }
    };

    // 이전페이지
    const handlePrev=()=>{
        if (leftPage > 0) {
            setLeftPage(leftPage - 1);
            setRightPage(0);
        }
    };
    
    //slice를 통해서 현재 페이지에 표시될 6개의 이미지 추출
    const displayedImages = imageList.slice(leftPage * imagesPerPage, (leftPage+1) * imagesPerPage);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRightPage((prev)=>(prev+1) % displayedImages.length);
        }, 5000);

        return ()=> clearInterval(interval);
    },[displayedImages]);

    return(
    <>
    {/* 왼쪽 6개 이미지 슬라이드 영역 */}
    <section className="section1-container">
        <section className="slide-left">
        <div className="slide-btn">
            <button className="arrow-btn left" onClick={handlePrev} disabled={leftPage === 0}>◁</button>
        </div>
            <div className="slide-grid">
                {displayedImages.map((item, i)=>(
                    <div key={i} className="slide-item">
                        <img src={item.src} alt={item.desc} className="imgs" />
                        <p className="img-desc">{item.desc}</p>
                    </div>
                ))}
            </div>
            <button className="arrow-btn right" onClick={handleNext} disabled={leftPage === totalPages -1}>▷</button>
        </section>
        {/* 오른쪽 이미지 슬라이드 영역 */}
        <section className="slide-right"
        // style={{backgroundImage: `url(${displayedImages[rightImage].src})`}}
        >

            <section className="slide-preview">
                <div className="slide-wrapper" style={{
                    transform: `translateX(-${rightPage * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                }}>
                    {displayedImages.map((item, i)=>(
                        <img 
                            key={i}
                            src={item.src}
                            alt={item.alt}
                            className="right-image"
                        />
                    ))}
                </div>
            </section>
            
            {/* 스크롤 */}
            <div className="scroll">
                {displayedImages.map((item,index)=>(
                    <img 
                        key={index}
                        src={item.src}
                        alt={`${index}`}
                        className={`scroll-img ${index === rightPage ? 'active' : ''}`}
                        onClick={()=>setRightPage(index)}
                    />
                ))}
            </div>
        </section>
    </section>
    </>);
};

export default Section1;