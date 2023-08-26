'use client'

import Tickets from "./tickets"


export default function Dates() {

  return (
    <div className="section section-dates">
      <div className="sectionfix">
        <div className="dates section_outer">
          <div className="dates_outer">
            <div className="dates_wrapper">
              <div className="datemonth">12 октября</div>
              <div className="venue_wrapper">
                <img className="marker_ico" src="../assets/images/ico_1.png"></img>
                <div className="city_venue">г. Москва<br></br>Crocus City Hall</div>
              </div>
            </div>
            <div className="dates_wrapper">
              <div className="datemonth">16 октября</div>
              <div className="venue_wrapper">
                <img className="marker_ico" src="../assets/images/ico_1.png"></img>
                <div className="city_venue">г.Санкт-Петербург<br></br>КБЗ «Октрябрьский»</div>
              </div>
            </div>
          </div>
          <div className="dates text upper wrapper">
            <div className="dates suptitle">Состоится показ драматического шоу Саши Петрова</div>
            <div className="dates title">«ПЛАНЕТА МАКСИМУС»</div>
            <div className="dates subtitle">Это его <span className="subtitle bolder">вторая авторская работа,</span> где он выступает как единственный актер на сцене и сценарист.</div>
          </div>
          <div className="dates text lower wrapper">
            <div className="dates lower title">драматическое шоу петрова</div>
            <div className="dates lower subtitle">- это  новый тип высказывания в сценическом жанре. Это синтез четырех видов искусств:</div>
            <div className="dates lower list">
              <div className="dates list item">
                <div className="bullet"></div>
                <div className="item">театра</div>
              </div>
              <div className="dates list item">
                <div className="bullet"></div>
                <div className="item">кино</div>
              </div>
              <div className="dates list item">
                <div className="bullet"></div>
                <div className="item">музыки</div>
              </div>
              <div className="dates list item">
                <div className="bullet"></div>
                <div className="item">поэзии</div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-wrapper">
          <img src="../assets/images/section_03-fore.png" className="dates image"></img>
        </div>
      </div>
    </div>
  )
}