import React, { useRef, useState } from 'react';
import "./section2.css"
import logo from "../../app/assets/react.svg"
import group1 from "../../app/assets/Group1.svg"
import group2 from "../../app/assets/Group2.svg"
import group3 from "../../app/assets/Group3.svg"
import write from "../../app/assets/write.png"



function Section2() {
  return(<>
    <table>
    <tbody>
      <tr className='basic'>
    <td className='img1'>
    <div className='abc'>봄날</div>
    <div className='bbb'>할인</div>
    <div className='ccc'>4월 1일 - 5월 31일</div>
    <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
    <a href='/'>이벤트 내용을 입력해주세요</a>
    <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
    <div className='ddd'><img src={logo} alt="" /> FortuneRecord</div>
    </td>
    <td className='img2'>
    <div className='bbb'>FortuneRecord</div>
    <div className='ccc'>이달의 할인 혜택을 만나보세요</div>
    <span ></span>
    <span><img className='ooo' src={group1} alt="" /></span>
    <span><img className='ooo' src={group2} alt="" /></span>
    <span><img className='ooo' src={group3} alt="" /></span>
    </td>
    <td className='img3'>
    <div className='eee'>리뷰 이벤트</div>
    <div><a href=""><img className='ppp'  src={write} alt="" /></a></div>
    <div id='hhh'>사이트에 리뷰를 남겨주세요</div>
    <div id='last'>리뷰를 정성껏 작성해준 분들을</div>
    <div id='last'>추첨하여 총 10분에게 소정의 선물을 보내드립니다</div>
    </td> 
    </tr>
    </tbody>
    </table>
  </>
  )
}

export default Section2
