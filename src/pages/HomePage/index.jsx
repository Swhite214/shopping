import React, { useCallback, useState } from "react";
import "./HomePage.css"
import Section1 from "../Section1/index.jsx"
import Section2 from "../Section2/index.jsx"
import Section3 from "../Section3/index.jsx"

const HomePage=()=>{
  return (
  <>
  <section className="section1">
    <Section1 />
    </section>
  <section className="section2">
    <Section2 />
  </section>
  <section className="section3">
    <Section3 />
  </section>
  </>)
}
export default HomePage;