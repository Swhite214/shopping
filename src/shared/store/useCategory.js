import { useEffect, useState } from "react";

const mockCategories = [
    {
        id: 1,
        name: "국내음반",
        subCategories: [
            { id: 11, name: "K-pop" },
            { id: 12, name: "R&B" },
            { id: 13, name: "Ballad" },
        ]
    },
    {
        id: 2,
        name: "해외음반",
        subCategories: [
            { id: 21, name: "J-pop" },
            { id: 22, name: "Pop" },
            { id: 23, name: "R&B" },
            { id: 24, name: "HipHop"},
        ]
    },
    {
        id: 3,
        name: "Jazz",
        subCategories: [
            { id: 31, name: "Fussion" },
            { id: 32, name: "Swing" },
            { id: 33, name: "Blues" }
        ]
    },
    {
        id: 4,
        name: "DVD/Blu-Ray",
        subCategories: [
            { id: 41, name: "Concert" },
            { id: 42, name: "Tour" },
            { id: 43, name: "World Tour" }
        ]
    },
    {
        id: 5,
        name: "MD",
        subCategories: [
            { id: 51, name: "한정판 앨범" },
            { id: 52, name: "한정판 굿즈" },
        ]
    },

];

export const useCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //서버에서 접근해서 가져와야는 데이터, 서버와 통신을 해야한다. 
    useEffect(()=>{
        const fetchCategories = async () => {
            try {
              // 실제 API 호출 대신 목업 데이터 사용
              setCategories(mockCategories);
              setLoading(false);
            } catch (err) {
              setError('카테고리를 불러오는데 실패했습니다.');
              setLoading(false);
            }
          };
      
          fetchCategories();
    },[])

    return {categories, loading, error}
}

