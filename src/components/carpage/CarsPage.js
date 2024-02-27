import React from "react";
import { useParams } from "react-router-dom";
import Features from "../home/features";
import Vehicle from "../products/Vehicle";

function CarsPage() {
  const { model } = useParams();
  return (
    <div style={{ height: "100vh" }}>
      <Vehicle
        sectionId=" "
        title={model}
        description=""
        image={model}
        leftButton="Order"
        rightButton="Demo"
      />
      <Features
        heading1="Model Specs"
        info1='Range (est.):405 mi, Peak Power: 670 hp, Acceleration:3.1 s 0-60 mph,Wheels:19" or 21"" 
Cargo :28 cu ft, Weight:4,560 lbs,Top Speed:130 mph,Drag Coefficient:0.208 Cd,Powertrain:Dual Motor,Supercharging Max:250 kW,Warranty:Basic Vehicle - 4 years or 50,000 miles, whichever comes first,Battery & Drive Unit - 8 years or 150,000 miles, whichever comes first'
        img1="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global"
      heading2 ="Optimized Aerodynamics"
      info2 = "Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth."
      img2 = "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global"
      />
    </div>
  );
}

export default CarsPage;
