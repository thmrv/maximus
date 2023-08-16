'use client'

export default function About() {
  const play = (e) => {
      e.currentTarget.innerHTML = '<iframe width="100%" height="200" src="https://www.youtube.com/embed/QznTB3SRG8o" frameborder="0"></iframe>';
      e.currentTarget.style.background = 'none';
  }
  return (
    <div className="section section-about">
      <div className="sectionfix">
        <div onClick={(e) => {play(e)}} id="vidwrap"></div>
        <div className="gallery wrapper">
          <img
            src="../assets/images/title_gallery.svg"
            alt="Галерея"
            className="gallery"
          />
        </div>
        <div className="gallery grid">
          <div id="gallery_block_1" className="image-wrapper grid_block"><img src="../assets/images/gallery_1.png"></img></div>
          <div id="gallery_block_2" className="image-wrapper grid_block"><img src="../assets/images/gallery_2.png"></img></div>
          <div id="gallery_block_3" className="image-wrapper grid_block"><img src="../assets/images/gallery_3.png"></img></div>
          <div id="gallery_block_4" className="image-wrapper grid_block"><img src="../assets/images/gallery_4.png"></img></div>
          <div id="gallery_block_5" className="image-wrapper grid_block"><img src="../assets/images/gallery_5.png"></img></div>
          <div id="gallery_block_6" className="image-wrapper grid_block"><img src="../assets/images/gallery_6.png"></img></div>
        </div>
      </div>
    </div>
  )
}