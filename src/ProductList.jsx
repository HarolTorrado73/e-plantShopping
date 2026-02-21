import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores.", cost: "$18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity.", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to care for.", cost: "$17" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Healing properties.", cost: "$14" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=500", description: "Calming scent.", cost: "$20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=500", description: "Promotes relaxation.", cost: "$18" }
            ]
        }
    ];

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div onClick={onHomeClick} style={{cursor:'pointer'}}>
                    <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                </div>
                <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
                    <a href="#" onClick={() => setShowCart(false)} style={{color:'white', textDecoration:'none'}}>Plants</a>
                    <div onClick={() => setShowCart(true)} style={{cursor:'pointer', position:'relative'}}>
                        <h1 className='cart'>
                            <span className="cart_quantity_count">{totalItems}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="60" width="60"><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-width="2"></path></svg>
                        </h1>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2 className="plantname_heading">{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, pIdx) => (
                                    <div className="product-card" key={pIdx}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div>{plant.description}</div>
                                        <div className="product-price">{plant.cost}</div>
                                        <button 
                                            className={`product-button ${cartItems.some(i => i.name === plant.name) ? 'added-to-cart' : ''}`}
                                            disabled={cartItems.some(i => i.name === plant.name)}
                                            onClick={() => dispatch(addItem(plant))}
                                        >
                                            {cartItems.some(i => i.name === plant.name) ? 'Added' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;