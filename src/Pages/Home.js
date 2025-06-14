import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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

// スクロールアニメーション用のコンポーネント
const ScrollSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className={className}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.2
      }}
    >
      {children}
    </motion.div>
  );
};

// パララックス効果付きのセクション
const ParallaxSection = ({ children, className = "", speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function Home() {
  return (
    <>
      <Header />
      <ParallaxSection speed={0.2}>
        <Hero />
      </ParallaxSection>
      
      <ScrollSection className="py-20">
        <ProductList
          className="flex-grow"
          href="/new"
          title="Daily Curated Picks: Handpicked from the World's Top Brands and Boutiques"
          smTitle="Discover Fresh Picks"
          products={acne}
        />
      </ScrollSection>

      <ScrollSection className="py-20">
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
      </ScrollSection>

      <ParallaxSection speed={0.3}>
        <ScrollSection>
          <Gallery />
        </ScrollSection>
      </ParallaxSection>

      <ScrollSection className="py-20">
        <Services />
      </ScrollSection>

      <ScrollSection className="py-20">
        <Subscribe />
      </ScrollSection>

      <Footer />
    </>
  );
}

export default Home;
