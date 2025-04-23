import React from 'react'

const Monitor = ({result,display}) => {
  return (
   <section className="flex justify-end px-3 py-3 lg:h-[27%] md:h-[20%] sm:h-[11%] ">
    <div className="">
    <h1 className="overflow-x-auto lg:w-[100%] md:w-[100%] text-slate-400 font-bold">{display}</h1>
    <p className="text-2xl text-slate-400">{result}</p>
    </div>
   </section>
  )
}

export default Monitor