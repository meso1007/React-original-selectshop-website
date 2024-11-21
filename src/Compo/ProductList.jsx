import React, { useState, useEffect } from 'react';
import ProductCard from '../Layout/ProductCard';
import ButtonCompo from '../Layout/ButtonCompo';

function ProductList({ title, href, products = [] }) { 
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null); // 選択された商品IDを保存

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 28); 
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        
    };

    const handleSelectProduct = (productId) => {
        setSelectedProductId(productId === selectedProductId ? null : productId);  
    };

    return (
        <>
            <div className={`min-h-screen transition-all duration-300`}>
                <div className='flex flex-row justify-between items-center p-9 mr-10 pt-11'>
                    <h2 className='brand_logo text-3xl px-10'>{title}</h2>
                    <ButtonCompo text="Shop Now" onClick={handleClick} color="blue" href={`${href}`}/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12 ">
                    {products.length > 0 ? ( 
                        products.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                isSelected={selectedProductId === product.id} 
                                onSelectProduct={() => handleSelectProduct(product.id)} 
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center">No products available.</div> 
                    )}
                </div>
            </div>
        </>
    );
}

export default ProductList;
