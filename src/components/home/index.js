import React from "react";
import Logo from "../../images/logo.jpg"

export default function Home() {
    return (
        <div>
      <div class="container">
        <div class="row">
          <h4 class="col-lg-12 font-weight-normal">About Me</h4>
        </div>
        <div class="bg-light opct opacity-80">
        <div class="row p-3">
          <div class="col-lg-3">
          <img src={Logo} alt ="profile" width="250" />          
          </div>
          <div class="col-lg-9 font-weight-normal">
            <p>Client-focused, bi-lingual professional with over 15 years of success delivering outstanding customer service in multiple areas such as retail, technical and medical customer service.  Excellent customer service skills concentrated on providing a professional, informed and customized experience for the client base.  Utilizing technically-sound decision making skills to ensure appropriate resolutions. Proven ability to lead and motivate a team to obtain a common project or goal.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
}