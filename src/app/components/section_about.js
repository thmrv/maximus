'use client'

export default function About() {

  return (
    <div className="section section-about">
      <div className="sectionfix">
        <video autoplay="false" no-controls width="100%" height="255" poster="../assets/images/video_placeholder.png" controls>

        </video>
        <div className="gallery wrapper">
          <img
            src="../assets/images/title_gallery.svg"
            alt="Галерея"
            className="gallery"
          />
        </div>
        <div class="gallery grid">
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