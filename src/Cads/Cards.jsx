import React, { Component, useEffect } from "react";
import Card from "./CardUI";

import pexels from "../assets/images/pexels.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card
              imgsrc={pexels}
              title="Console"
              text="Lorem ipsum sit amet lorem ipsum sit amet Lorem ipsum sit amet lorem ipsum sit amet Lorem ipsum sit amet lorem ipsum sit amet"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={pexels}
              title="Playground"
              text="Lorem ipsum sit amet lorem ipsum sit amet Lorem ipsum sit amet lorem ipsum sit amet Lorem ipsum sit amet lorem ipsum sit amet"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={pexels}
              title="Adventure"
              text="Lorem ipsum sit amet lorem ipsum sit amet Lorem ipsum sit amet lorem ipsum sit amet Lorem ipsum sit amet lorem ipsum sit amet"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
