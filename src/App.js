import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Brands from "./Pages/Brands";
import Collections from "./Pages/Collections";
import Sale from "./Pages/Collections/Sale";
import Mens from "./Pages/Collections/Mens";
import Womens from "./Pages/Collections/Womens";
import Shoes from "./Pages/Collections/Shoes";
import Accessories from "./Pages/Collections/Accesaries";
import Fragrances from "./Pages/Collections/Fragrances";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import SignUp from "./Pages/Signup";
import ProfilePage from "./Pages/Profile";

// アニメーションのバリエーション
const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
    scale: 0.95
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  out: {
    opacity: 0,
    x: 20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

// ホームページ用の特別なアニメーション
const homeVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  out: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

// コレクションページ用の特別なアニメーション
const collectionVariants = {
  initial: {
    opacity: 0,
    rotateY: 90,
    scale: 0.95
  },
  in: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  out: {
    opacity: 0,
    rotateY: -90,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

// アニメーション付きのページコンポーネント
const AnimatedPage = ({ children, variants }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={variants}
    style={{ position: 'absolute', width: '100%' }}
  >
    {children}
  </motion.div>
);

// AppContentコンポーネントを作成し、Routerの中でのみuseLocationを使用
function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <AnimatedPage variants={homeVariants}>
            <Home />
          </AnimatedPage>
        } />
        <Route path="/new" element={
          <AnimatedPage variants={pageVariants}>
            <New />
          </AnimatedPage>
        } />
        <Route path="/brands" element={
          <AnimatedPage variants={pageVariants}>
            <Brands />
          </AnimatedPage>
        } />
        <Route path="/collections" element={
          <AnimatedPage variants={collectionVariants}>
            <Collections />
          </AnimatedPage>
        } />
        <Route path="/sale" element={
          <AnimatedPage variants={collectionVariants}>
            <Sale />
          </AnimatedPage>
        } />
        <Route path="/mens" element={
          <AnimatedPage variants={collectionVariants}>
            <Mens />
          </AnimatedPage>
        } />
        <Route path="/womens" element={
          <AnimatedPage variants={collectionVariants}>
            <Womens />
          </AnimatedPage>
        } />
        <Route path="/shoes" element={
          <AnimatedPage variants={collectionVariants}>
            <Shoes />
          </AnimatedPage>
        } />
        <Route path="/accessories" element={
          <AnimatedPage variants={collectionVariants}>
            <Accessories />
          </AnimatedPage>
        } />
        <Route path="/fragrances" element={
          <AnimatedPage variants={collectionVariants}>
            <Fragrances />
          </AnimatedPage>
        } />
        <Route path="/profile" element={
          <AnimatedPage variants={pageVariants}>
            <ProfilePage />
          </AnimatedPage>
        } />
        <Route path="/login" element={
          <AnimatedPage variants={pageVariants}>
            <Login />
          </AnimatedPage>
        } />
        <Route path="/signup" element={
          <AnimatedPage variants={pageVariants}>
            <SignUp />
          </AnimatedPage>
        } />
        <Route path="*" element={
          <AnimatedPage variants={pageVariants}>
            <NotFound />
          </AnimatedPage>
        } />
      </Routes>
    </AnimatePresence>
  );
}

// メインのAppコンポーネント
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
