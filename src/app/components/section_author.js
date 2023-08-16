'use client'

export default function Author() {

  return (
    <div className="section section-author">
      <div className="sectionfix">
        <div className="image-wrapper">
          <img
            src="../assets/images/PLANETAMAXIMUS_logo.png"
            alt="MAXIMUS"
            className="maximus_logo_small"
          />
        </div>
        <div className="author text-upper"><div className="inner">это размышления о неизбежности смерти и бесконечности жизни.
          <br></br><br></br>
          О том, как по-разному любят мужчины и женщины. О том, каким будет мир после тебя, и где будут жить твои мечты.</div>
        </div>
        <div className="author text-lower">
          <div className="image-wrapper author portrait">
            <img
              src="../assets/images/petrov_portrait_ratio.png"
              alt="MAXIMUS"
              className="maximus_logo_small"
            />
          </div>
          <div className="image-wrapper author portrait image">
            <img
              src="../assets/images/outline.png"
              className="border_decor"
            />
          </div>
          <div className="author bio">
            <div className="author bio quote">
              Это история, с которой лично я живу уже несколько лет и буду жить дальше, вне зависимости от успеха спектакля. Мне захотелось рассказать ее так, как будто мы со зрителями сидим у меня на кухне, только кухня эта где-то в безграничных просторах космоса, вселенной. Где-то, где нет привычного хода времени, привычных законов и земного притяжения.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}