import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src=" https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={991456}
            title="Fire TV Stick streaming media player with Alexa built in, includes Alexa Voice Remote, HD, easy set-up, released 2019"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61WzGTJKl%2BL._AC_SL1000_.jpg"
            rating={5}
          />

          <Product
            id={991457}
            title="Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor - Fastest Gaming Mouse Switch - Chroma RGB Lighting - 8 Programmable Buttons - Rubberized Side Grips - Classic Black"
            price={69.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81A11OxpgXL._AC_SL1500_.jpg"
            rating={5}
          />
          {/* Product */}
          {/*<Product />*/}
        </div>
        <div className="home__row">
          <Product
            id={991458}
            title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI"
            price={1499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={991459}
            title="SteelSeries Apex Pro Mechanical Gaming Keyboard – Adjustable Actuation Switches – World’s Fastest Mechanical Keyboard – OLED Smart Display – RGB Backlit"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81yOuAUQAiL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={991460}
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
            price={299}
            image="https://images-na.ssl-images-amazon.com/images/I/51sAtKgDkDL._AC_.jpg"
            rating={4}
          />
          {/*<Product />
            <Product />*/}
        </div>
        <div className="home__row">
          <Product
            id={991461}
            title="SteelSeries QcK Gaming Surface - Large Stitched Edge Cloth - Extra Durable - Optimized For Gaming Sensors - Maximum Control"
            price={13.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71GOQo5MmhL._AC_SL1500_.jpg"
            rating={5}
          />
          {/*<Product />
            <Product />*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
