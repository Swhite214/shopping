import React, { useCallback, useState } from "react";
import "./HomePage.css"
import Section1 from "../Section1/index.jsx"
import Section2 from "../Section2/index.jsx"

const HomePage=()=>{
  return (
  <>
  <section className="section1">
    <Section1 />
    </section>
  <section className="section2">
    <Section2 />
  </section>
  </>)
}
export default HomePage;