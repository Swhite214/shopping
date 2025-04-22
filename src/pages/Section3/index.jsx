import { View } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  background: linear-gradient(125deg, #e2e2e7 0%, #d1d1d6 40%, #e5e5ea 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(164, 164, 178, 0.25), transparent 60%),
      radial-gradient(circle at 80% 50%, rgba(145, 145, 160, 0.25), transparent 60%);
    filter: blur(30px);
    z-index: 0;
    animation: gentleSmoke 25s infinite alternate;
    transform-origin: center center;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(228, 228, 233, 0.2) 50%,
      transparent 100%
    );
    z-index: 1;
  }

  @keyframes gentleSmoke {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 0.6;
    }
    25% {
      transform: translate(2%, 2%) scale(1.05);
      opacity: 0.8;
    }
    50% {
      transform: translate(-1%, 3%) scale(0.98);
      opacity: 0.6;
    }
    75% {
      transform: translate(-2%, -1%) scale(1.02);
      opacity: 0.8;
    }
    100% {
      transform: translate(1%, -2%) scale(1);
      opacity: 0.6;
    }
  }
`;

const Title = styled.h2`
  color: #1d1d1f;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px;
`;

const ChartGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0 40px;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

const ChartItem = styled.div`
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const AlbumImageWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ChartItem}:hover & {
    transform: scale(1.05);
  }
`;

const RankNumber = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #1c1c1e;
  backdrop-filter: blur(5px);
`;

const AlbumInfo = styled.div`
  color: #1d1d1f;
  padding: 0 10px;
  
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0;
    color: #1d1d1f;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  p {
    font-size: 13px;
    color: rgba(29, 29, 31, 0.7);
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .company {
    font-size: 12px;
    color: rgba(29, 29, 31, 0.5);
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  opacity: 0.6;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at center, 
        rgba(164, 164, 178, 0.15) 0%,
        rgba(145, 145, 160, 0.15) 25%,
        rgba(128, 128, 142, 0.15) 50%,
        transparent 70%);
    filter: blur(30px);
    animation: softPulse 12s infinite alternate;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 30% 40%, rgba(164, 164, 178, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(145, 145, 160, 0.2) 0%, transparent 50%);
    filter: blur(25px);
    animation: driftingSmoke 20s infinite alternate;
    transform-origin: center center;
  }

  @keyframes softPulse {
    0% {
      opacity: 0.4;
      transform: scale(0.98) translate(0, 0);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.02) translate(1%, 1%);
    }
    100% {
      opacity: 0.4;
      transform: scale(0.98) translate(-1%, -1%);
    }
  }

  @keyframes driftingSmoke {
    0% {
      transform: translate(-3%, -3%) rotate(0deg) scale(1);
      opacity: 0.4;
    }
    25% {
      transform: translate(2%, -1%) rotate(90deg) scale(1.1);
      opacity: 0.6;
    }
    50% {
      transform: translate(3%, 2%) rotate(180deg) scale(0.95);
      opacity: 0.4;
    }
    75% {
      transform: translate(-1%, 3%) rotate(270deg) scale(1.05);
      opacity: 0.6;
    }
    100% {
      transform: translate(-3%, -3%) rotate(360deg) scale(1);
      opacity: 0.4;
    }
  }
`;

const NoiseOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 3;
`;

const chartData = [
  {
    id: 1,
    artist: "SZA",
    title: "Snooze",
    company: "RCA Records",
    image: "//cdnimg.melon.co.kr/cm2/album/images/105/39/691/10539691_20221208152803_500.jpg?668891bd198c47c1f12f33ace0febbdb/melon/resize/282/quality/80/optimize",
    views: "1,491,182,224"
    
  },
  {
    id: 2,
    artist: "Fujii Kaze",
    title: "Shinunoga E-wa",
    company: "Republic Records",
    image: "//cdnimg.melon.co.kr/cm2/album/images/104/29/712/10429712_20200513143433_500.jpg?f9994edefe89256c8590826f6cba6126/melon/resize/282/quality/80/optimize",
    views: "673,291,295"
  },
  {
    id: 3,
    artist: "Charlie Puth",
    title: "I Don't Think That I Like Her",
    company: "Atlantic Records",
    image: "//cdnimg.melon.co.kr/cm2/album/images/108/44/485/10844485_20221006154824_500.jpg?b752b5ed8fad66b79e2705840630dd94/melon/resize/282/quality/80/optimize",
    views: "114,436,789"
  },
  {
    id: 4,
    artist: "G-DRAGON",
    title: "PO￦ER",
    company: "Galaxy Corporation",
    image: "//cdnimg.melon.co.kr/cm2/album/images/116/30/124/11630124_20241031100530_500.jpg?680e3a04f6944db156115bd564a69729/melon/resize/282/quality/80/optimize",
    views: "52,415,693"
  },
  {
    id: 5,
    artist: "다이핀치(大ピンチ)",
    title: "간바리야상(頑張り屋さん)",
    company: "No agency",
    image: "//cdnimg.melon.co.kr/cm2/album/images/117/14/991/11714991_20250213161657_500.jpg?f5b825307b6c71151e297952e16d5f2f/melon/resize/282/quality/80/optimize",
    views: "42,000"
  }
];

const RealTimeChart = () => {
  return (
    <ChartContainer>
      <GlowEffect />
      <NoiseOverlay />
      <Title>실시간 차트</Title>
      <ChartGrid>
        {chartData.map((item) => (
          <ChartItem key={item.id}>
            <AlbumImageWrapper>
              <AlbumImage src={item.image} alt={item.title} />
              <RankNumber>{item.id}</RankNumber>
            </AlbumImageWrapper>
            <AlbumInfo>
              <h3>{item.title}</h3>
              <p>{item.artist}</p>
              <p className="company">{item.company}</p>
              <p>{item.views} views</p>
            </AlbumInfo>
          </ChartItem>
        ))}
      </ChartGrid>
    </ChartContainer>
  );
};

export default RealTimeChart; 