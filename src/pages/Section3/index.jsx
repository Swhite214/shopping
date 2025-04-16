import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  background: linear-gradient(180deg, #2D1B4E 0%, #1A0B2E 100%);
  position: relative;
  overflow: hidden;
`;

const WaveBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/wave-bg.png');
  opacity: 0.3;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 24px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`;

const ChartGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 40px;
  position: relative;
  z-index: 1;
`;

const ChartItem = styled.div`
  width: 200px;
  text-align: center;
`;

const AlbumImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const AlbumInfo = styled.div`
  color: white;
  
  h3 {
    font-size: 14px;
    margin: 5px 0;
  }
  
  p {
    font-size: 12px;
    color: #ccc;
  }
`;

const RankNumber = styled.div`
  color: #FF0000;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const chartData = [
  {
    id: 1,
    artist: "르세라핌 (LE SSERAFIM)",
    title: "미니 5집 [HOT]",
    company: "SOURCE MUSIC",
    image: "/album1.jpg"
  },
  {
    id: 2,
    artist: "제니 (JENNIE)",
    title: "THE 1ST STUDIO ALBUM [RUBY]",
    company: "COLUMBIA RECORDS",
    image: "/album2.jpg"
  },
  {
    id: 3,
    artist: "트와이스 (TWICE)",
    title: "FANCY YOU (7TH 미니앨범)",
    company: "JYP엔터테인먼트",
    image: "/album3.jpg"
  },
  {
    id: 4,
    artist: "방탄소년단 (BTS)",
    title: "7 MOMENTS",
    company: "HYBE",
    image: "/album4.jpg"
  },
  {
    id: 5,
    artist: "르세라핌 (LE SSERAFIM)",
    title: "[HOT] [WEVERSE ALBUMS VER.]",
    company: "SOURCE MUSIC",
    image: "/album5.jpg"
  }
];

const RealTimeChart = () => {
  return (
    <ChartContainer>
      <WaveBackground />
      <Title>실시간 차트</Title>
      <ChartGrid>
        {chartData.map((item) => (
          <ChartItem key={item.id}>
            <RankNumber>{item.id}</RankNumber>
            <AlbumImage src={item.image} alt={item.title} />
            <AlbumInfo>
              <h3>{item.title}</h3>
              <p>{item.artist}</p>
              <p>{item.company}</p>
            </AlbumInfo>
          </ChartItem>
        ))}
      </ChartGrid>
    </ChartContainer>
  );
};

export default RealTimeChart; 