import React from "react";

function BiosD() {
  return (
    <div className="bios">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="./assets/bioimages/david.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <h2>Hey, Im David </h2>
            <p>
            I became a professional photographer after spending years as a peer counselor for justice-involved veterans in the Austin area. 
            As an army veteran myself, my love for photography started while I was deployed in Afghanistan.
            The landscape and people around me were unlike anything I’d seen or experienced growing up in the Texas Hill Country. 
            Since then, photography has been my creative outlet and personal therapy, capturing the world through my own lens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiosD;