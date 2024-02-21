import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../App';
import './style/CartComp.css'

// Functional component for displaying individual items in the cart
const CartComp = ({ item, index }) => {
    // Accessing data from context
    const [data, setData] = useContext(myContext);
    // State to manage cart status
    const [CartStatus, SetCartStatus] = useState(true)

    // Function to add item to cart
    const CartAdd = () => {
        SetCartStatus(false)
    }

    // Function to remove item from cart
    const CartRemove = (id) => {
        setData(preData => preData.filter(item => item.id !== id))
    }

    // Function to handle increasing quantity
    const HandleIncrease = (id, quantity) => {
        setData(pval => {
            return pval.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: (item.quantity + 1 || quantity + 1) }
                }
                return item
            })
        })
    }

    // Function to handle decreasing quantity
    const HandleDecrease = (id, quantity) => {
        setData(pval => {
            return pval.map((item) => {
                if (item.id === id && (item.quantity || quantity) > 1) {
                    return { ...item, quantity: (item.quantity - 1 || quantity - 1) }
                }
                return item
            })
        })

    }

    return (
        <>  
            {/* Card component to display item details */}
            <div key={index} style={{ margin: "2em 0em" }}>
                <div class="card p-5 mb-5 " id='card-w'>
                    <div class="row g-0">
                        {/* Left side for displaying images */}
                        <div class="col-md-4">
                            <div>
                                {/* Carousel for multiple images */}
                                <div id={`carouselExample${index}`} className="carousel slide">
                                    <div className="carousel-inner">
                                        {/* Mapping through item images */}
                                        {item.images.map((image, i) => (
                                            <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                                <img src={image} className="d-block w-100" alt={`Slide ${i}`} />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Carousel control buttons */}
                                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Right side for displaying item details */}
                        <div class="col-md-8">
                            <div class="card-body">
                                {/* Title and price */}
                                <div class="d-flex justify-content-between">
                                    <h4 className="card-title w-50">{item.title}</h4>
                                    <h4 className="card-title">${item.price}</h4>
                                </div>
                                {/* Description, brand, and stock */}
                                <div class="w-50">
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><b>Brand:</b> {item.brand}</p>
                                    <p className="card-text" style={{ color: "red" }}><span className='stock'> In Stock: {item.stock}</span></p>
                                </div>
                                {/* Rating and quantity control */}
                                <div class="d-flex justify-content-between ">
                                    <p className="card-text"> <b>Rating: {item.rating}</b></p>
                                    <div class="d-flex align-items-center">
                                        <button class="mx-2 quantity-btn p-2"><i class="fa-solid fa-plus" onClick={() => HandleIncrease(item.id, item.quantity || 1)}></i></button>
                                        <h6 class="mx-2">{item.quantity}</h6>
                                        <button class="mx-2 quantity-btn p-2"><i class="fa-solid fa-minus" onClick={() => HandleDecrease(item.id, item.quantity || 1)}></i></button>
                                    </div>
                                </div>
                                {/* Star rating */}
                                <div className="text-warning mb-2 small">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                {/* Last updated time */}
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                {/* Button to remove item from cart */}
                                <div class="d-flex justify-content-end" id="btn-div">
                                    <button class="btn btn-danger" id="btn" onClick={() => CartRemove(item.id)} >Remove from Cart</button>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartComp;
