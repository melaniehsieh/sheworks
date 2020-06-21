import React from "react";
import img1 from "./sheworks_logo_wo_tag.png";
import img2 from "./6.png";
import img3 from "./7.png";
import img4 from "./8.png";
export const Home = () => (
  <div>
    <img src={img1}></img>
    <div id="container">
      <h1>what is sheworks?</h1>
      <p>
        sheworks is a web app that allows women to track their time spent on
        domestic labor.
      </p>
    </div>
    <br />

    <div id="container">
      <img src={img2}></img>
      <p>
        share how much time you spend on hard work with your loved ones, so they
        can help too.
      </p>
    </div>

    <div id="container">
      <img src={img4}></img>
      <p>
        celebrate your accomplishments with your family & friends because you
        deserve it!
      </p>
    </div>

    <div id="container">
      <img src={img3}></img>
      <p>
        empower yourself to appreciate your contributions, value your time, and
        do your best work.
      </p>
    </div>
  </div>
);
