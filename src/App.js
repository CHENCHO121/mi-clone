import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./data/data.json";
import Navbar from "./component/Navbar";
import PreNavbar from "./component/PreNavbar";
import Slider from "./component/Slider";
import Offers from "./component/Offers";
import Heading from "./component/Heading";
import StarProduct from "./component/StarProduct";
import HotAccessoriesMenu from "./component/HotAccessoriesMenu";
import HotAccessories from "./component/HotAccessories";
import ProductReviews from "./component/ProductReviews";
import Videos from "./component/Videos";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import NavOptions from "./component/NavOptions";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PreNavbar />
        <Navbar />
        <NavOptions
          miPhones={data.miPhones}
          redmiPhones={data.redmiPhones}
          tv={data.tv}
          laptop={data.laptop}
          fitnessAndLifeStyle={data.fitnessAndLifeStyle}
          home={data.home}
          radio={data.audio}
          accessories={data.accessories}

        />

        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProducts={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes>
          <Route
            exact
            path="/music"
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          />
          <Route
            exact
            path="/smartDevice"
            element={
              <HotAccessories
                smartDevice={data.hotAccessories.smartDevice}
                smartDeviceCover={data.hotAccessoriesCover.smartDevice}
              />
            }
          />

          <Route
            exact
            path="/home"
            element={
              <HotAccessories
                home={data.hotAccessories.home}
                homeCover={data.hotAccessoriesCover.home}
              />
            }
          />

          <Route
            exact
            path="/lifeStyle"
            element={
              <HotAccessories
                lifeStyle={data.hotAccessories.lifeStyle}
                lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
              />
            }
          />

          <Route
            exact
            path="/mobileAccessories"
            element={
              <HotAccessories
                mobileAccessories={data.hotAccessories.mobileAccessories}
                mobileAccessoriesCover={
                  data.hotAccessoriesCover.mobileAccessories
                }
              />
            }
          />
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews productReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner.end} />
        <Footer footer={data.footer} />
      </BrowserRouter>
    </>
  );
};

export default App;
