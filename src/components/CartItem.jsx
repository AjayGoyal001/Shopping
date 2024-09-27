import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {remove} from '../redux/slice/CartSlice';

function CartItem({item, itemIndex}) {
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(item.id));
        toast.error("Item remove from Cart");
    }

    return(
        <div>

            <div className="flex mt-4 gap-10">

                <div>
                    <img src={item.image} alt="cartImage" className="h-[180px] w-full"/>
                </div>

                <div>
                    <h1 className="text-gray-700 font-semibold text-lg text-left w-[300px]">{item.title}</h1>
                    <h1 className="w-[300px] text-slate-600 font-normal text-[15px] text-left mt-4">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
                    <div className="flex justify-between mt-4">
                        <p className="text-green-600 font-semibold">${item.price}</p>
                        <div
                         className="bg-red-300 text-red-800 rounded-full p-2"
                         onClick={removeFromCart}>
                            <MdDelete className="text-xs" />    
                        </div>
                    </div> 
                </div>

            </div>

        </div>
    );
}

export default CartItem;