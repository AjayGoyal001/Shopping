import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {

    const {cart} = useSelector((state) => state);
    console.log(cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc, curr) => acc+curr.price,0 ) );
    }, [cart])

    return(
        <div>
            {
                cart.length > 0 ?
                (<div className="flex item-center justify-center max-w-5xl mx-auto gap-20">

                    <div className="max-w-4xl flex flex-col gap-16">
                        {
                            cart.map((item, index) => {
                                return <CartItem key={item.id} item={item} itemIndex={index}/>
                            })
                        }
                    </div>

                    <div className="flex flex-col mt-12 justify-between bg-slate-300 pl-4 pr-4 pt-2 pb-3">
                        <div>
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p>
                                <span>Total Items: {cart.length}</span>
                            </p>
                        </div>

                        <div>
                            <p>Total Amount: {totalAmount}</p>
                            <button>CheckOut Now</button>
                        </div>
                    </div>

                </div>) :

                (<div>
                    <p>Cart Empty</p>
                    <NavLink to="/">
                       <button>
                           Shop Now
                       </button>
                    </NavLink>
                </div>)

            }  
        </div>
    );
}

export default Cart;    