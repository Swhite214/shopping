import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../app/assets/butterfly-logo.svg"
import "./PostPage.css"
import { PackageOpen, ShoppingCart } from "lucide-react";
import {Link} from "react-router-dom"

const PostPage=()=>{
  const {user} = useContext(AuthContext)
  return (<>
    <div className="mypage-container">
        <aside className="mypage-sidebar">
          <h2 className="mypage-sidebar-h2">마이페이지 메뉴</h2>
          <ul className="mypage-sidebar-ul">
            <li className="mypage-sidebar-li">결제 내역</li>
            <li className="mypage-sidebar-li">My Review</li>
            <li className="mypage-sidebar-li">회원 관리 기능</li>
            <li className="mypage-sidebar-li">회원 탈퇴 기능</li>
          </ul>
        </aside>
        <main className="mypage-main">
          <div className="mypage-header">
            <img src={logo} alt="logo" className="mypage-logo" />
            <div className="mypage-user">
              <h2>{user?.nick || "닉네임"}</h2>
              <Link to={"/"}>회원정보관리</Link>
            </div>
          </div>
          <section className="mypage-body">
              <h4><PackageOpen size={25} style={{marginRight: "10px"}}/>쇼핑 정보</h4>
              <p>주문 처리 중: 1건 / 배송 중: 2건</p>
          </section>
          <section className="mypage-body">
          <h4><ShoppingCart size={20} style={{marginRight: "10px"}}/>장바구니</h4>
                    <ul>
                        <li>상품 A - 수량: 1</li>
                        <li>상품 B - 수량: 3</li>
                    </ul>
          </section>
        </main>

    </div>
  </>)
}

export default PostPage;