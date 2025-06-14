import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    "./assets/gallery/gallery-buly1.webp",
    "./assets/gallery/gallery-buly2.webp",
    "./assets/gallery/gallery-buly3.webp",
    "./assets/gallery/gallery-buly4.webp",
];

const titles = [
    "L'EAU SUPERFINE",
    "LA POMMADE CONCRETE",
    "L'EAU TRIPLE",
    "LA POMMADE VIRGINALE",
];

const prices = [
    "$44.00",
    "$40.00",
    "$150.00",
    "$45.00",
];

// ギャラリーアイテムのアニメーション用コンポーネント
const GalleryItem = ({ image, title, price, index }) => {
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
            className="flex flex-col gap-5 overflow-hidden"
            whileHover={{ scale: 1.05 }}
        >
            <motion.img 
                src={image} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div 
                className="flex justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-lg font-thin">{title}</h3>
                <h3 className="text-lg font-thin">~{price}</h3>
            </motion.div>
        </motion.div>
    );
};

function Gallery() {
    return (
        <motion.div 
            className="px-4 md:px-8 lg:px-20 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className="text-3xl text-center font mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                TRENDING NOW
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <GalleryItem
                        key={index}
                        image={image}
                        title={titles[index]}
                        price={prices[index]}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default Gallery;
