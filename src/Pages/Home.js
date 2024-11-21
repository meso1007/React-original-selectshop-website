import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CursorEffect from "../Compo/CursorEffect";
import Hero from "../Compo/Hero";
import Header from "../Compo/Header";
import ProductList from "../Compo/ProductList";
import Content from "../Compo/Content";
import Gallery from "../Compo/Gallery";
import Services from "../Compo/Services";
import Subscribe from "../Compo/Subscribe";
import Footer from "../Compo/Footer";
import acne from "../Data/pro1";
import gentle from "..//Data/pro2";
import diesel from "../Data/pro3";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductList
        className="flex-grow"
        href="/new"
        title="Daily Curated Picks: Handpicked from the World's Top Brands and Boutiques"
        products={acne}
      />
      {/* <ProductList
        className="flex-grow"
        title="GENTLE MONSTER"
        products={gentle}
      />
      <ProductList className="flex-grow" title="Diesel" products={diesel} /> */}
      <Content
        href="/collections"
        imgRight={false}
        isButton={true}
        imageUrl="./assets/photos/model.jpeg"
        title="Go All Out"
        description={
          <>
            Party-season looks to crack the dress code? Look no further than
            <br />
            Versace and more
          </>
        }
      />
      <Gallery />
      <Services />
      <Subscribe />
      <Footer />{" "}
    </>
  );
}

export default Home;
