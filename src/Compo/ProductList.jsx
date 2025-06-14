import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProductCard from '../Layout/ProductCard';
import ButtonCompo from '../Layout/ButtonCompo';

// 商品カードのアニメーション用コンポーネント
const AnimatedProductCard = ({ product, index, isSelected, onSelectProduct }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      style={{ opacity, scale, y }}
      className="relative"
    >
      <ProductCard
        product={product}
        isSelected={isSelected}
        onSelectProduct={onSelectProduct}
      />
    </motion.div>
  );
};

// タイトルセクションのアニメーション用コンポーネント
const AnimatedTitle = ({ title, smTitle, href }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-50, 0, 0, 50]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className='flex flex-row justify-between items-center p-9 mr-10 pt-11'
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <h2 className='hidden sm:block brand_logo text-3xl px-10'>{title}</h2>
      <h2 className='sm:hidden brand_logo text-3xl px-10'>{smTitle}</h2>
      <ButtonCompo text="Shop Now" color="blue" href={`${href}`}/>
    </motion.div>
  );
};

function ProductList({ title, smTitle, href, products = [] }) { 
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 28); 
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSelectProduct = (productId) => {
        setSelectedProductId(productId === selectedProductId ? null : productId);  
    };

    return (
        <motion.div 
            className={`min-h-screen transition-all duration-300`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <AnimatedTitle title={title} smTitle={smTitle} href={href} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12">
                <AnimatePresence>
                    {products.length > 0 ? ( 
                        products.map((product, index) => (
                            <AnimatedProductCard 
                                key={product.id} 
                                product={product}
                                index={index}
                                isSelected={selectedProductId === product.id} 
                                onSelectProduct={() => handleSelectProduct(product.id)} 
                            />
                        ))
                    ) : (
                        <motion.div 
                            className="col-span-full text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            No products available.
                        </motion.div> 
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default ProductList;
