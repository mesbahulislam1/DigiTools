import React from "react";
import CartIcon from '../../../assets/cartImg.jpeg'
const Cart = ({ card, setCard }) => {
  const totalPrice = card.reduce((total, item) => total + item.price, 0);
  
  const deleteHandel =(events)=>{
      const filterDelete = card.filter((list)=> events.id !== list.id)
      setCard(filterDelete)
      
  }
  return (
    <div className="p-7 border border-black/18 rounded-2xl">
      <h2 className="text-2xl font-extrabold text-[#101727]">Your Cart</h2>

      {
        card.length === 0? <div>
          <img src={CartIcon} alt="" className="w-[200px] mx-auto"/>
          <h2 className="text-2xl text-center font-bold text-black/70">Your cart is empty</h2>
        </div>: <div>
          <div className=" space-y-2">
        {
          card.map((list, index)=> {
            return <div key={index} className=" bg-[#e0e0e0] p-5 flex items-center justify-between rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-full border border-black/10">
            <img src={list.icon} alt="" />
          </div>
          <div>
            <h2 className="text-[#101727] text-[20px] font-semibold">
              {list.name}
            </h2>
            <p className="text-[#627382]">${list.price}</p>
          </div>
        </div>
        <button onClick={()=> deleteHandel(list)} className="text-[#FF3980] font-bold">Remove</button>
      </div>
          })
        }
      </div>

      <div className="space-y-3 mt-4">
        <div className="flex items-center  justify-between">
          <h2 className="text-[#627382]">Total:</h2>
          <p className="text-2xl font-bold text-[#101727]">${totalPrice}</p>
        </div>
        <button className='bg-linear-to-l to-[#4F39F6] w-full from-[#9514FA] px-5 py-2.5 text-white cursor-pointer rounded-full'>Proceed to Checkout</button>
      </div>
        </div>
      }
      
    </div>
  );
};

export default Cart;
