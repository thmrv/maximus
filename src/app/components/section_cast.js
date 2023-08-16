'use client'

import Tickets from "./tickets"

 
export default function Cast() {
 
  return (
    <div className="section section-cast">
    <div className="cast upper text">
      <div className="cast upper suptitle">В киноэпизодах шоу</div>
      <div className="cast upper title">«Планета Максимус»</div>
    </div>
    <div className="cast casting-list">
    <div className="cast person wrapper">
        <div className="image-wrapper cast quad">
          <img
            src="../assets/images/petrov_quad_ratio.png"
            alt="Petrov"
            className="cast_portrait"
          />
        </div>
        <div className="cast person text">
          <div className="cast person suptitle">в главной роли</div>
          <div className="cast person title">АЛЕКСАНДР ПЕТРОВ</div>
        </div>
      </div>
      <div className="cast person wrapper">
        <div className="image-wrapper cast quad">
          <img
            src="../assets/images/channova_quad_ratio.png"
            alt="Chanova"
            className="cast_portrait"
          />
        </div>
        <div className="cast person text">
          <div className="cast person suptitle">сыграла молодая актриса</div>
          <div className="cast person title">ЕКАТЕРИНА ЧАННОВА</div>
        </div>
      </div>
      <div className="cast person wrapper">
        <div className="image-wrapper cast quad">
          <img
            src="../assets/images/oj_quad_ratio.png"
            alt="Ocean Jet"
            className="cast_portrait"
          />
        </div>
        <div className="cast person text">
          <div className="cast person suptitle">живой концерт в течение спектакля исполняет инди-группа</div>
          <div className="cast person title">OCEAN JET</div>
        </div>
      </div>
    </div>
    <Tickets></Tickets>
  </div>
  )
}