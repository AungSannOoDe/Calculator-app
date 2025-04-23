import useCalculatorStore from '@/stores/useCalculatorStore'
import React from 'react'

const Keyboard = () => {
   const {sciKeys,basicKeys, handleClick}=useCalculatorStore();
  return (
    <section className=" sm:w-full   md:flex lg:flex gap-4 p-4  bg-slate-800 px-3 py-3 lg:h-[73%] md:h-[80%] sm:h-[90%]">
        <div className="grid grid-cols-3 gap-3 w-full ">
        {sciKeys.map((items,index)=><button key={index} className="px-2 py-3 sm:px-4 sm:py-3  text-white rounded-sm hover:bg-stone-400 transition-colors duration-100 " onClick={()=>handleClick(items)}>{items}</button>)}
        </div>
        <div className="w-[3px] bg-stone-400"></div>
     <div className="grid grid-cols-4 gap-2 sm:mt-5   mt-10  w-full">
     {basicKeys.map((items,index)=>(<button key={index} className={`px-2 py-3 sm:px-4 sm:py-4 md:px-1 md:py-1 text-stone-100 rounded-sm  transition-colors duration-100 ${items>="0" && items<="9" ? " hover:bg-stone-400": "bg-green-300 hover:bg-green-500"}` } onClick={()=>handleClick(items)}>{items==="/" ? "÷":items && items==="*" ? "x":items }</button>))}
     </div>
    </section>
  )
}

export default Keyboard