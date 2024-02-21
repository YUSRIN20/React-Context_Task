import React, { useContext } from 'react';
import CartComp from './CartComp'; // Importing the CartComp component
import { myContext } from '../App'; // Importing the context from the App component

// Component for conditional rendering based on cart data
const ConditionalRendering = () => {
    // Accessing data from context
    const [data, setData] = useContext(myContext);
    
    // Rendering CartComp for each item in the cart data
    return (
        <div>
            {/* Mapping through each item in the data */}
            {data.map((item, index) => {
                return (
                    <>
                        {/* Rendering CartComp component for each item */}
                        <CartComp item= {item} index={index}/>
                    </>
                )
            })}
        </div>
    );
};

export default ConditionalRendering; // Exporting the ConditionalRendering component
