import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

function MyLoader() {
  return (
    <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
     <Loader active size='massive' inline='centered' />
    </div>
  );
}

export default MyLoader;